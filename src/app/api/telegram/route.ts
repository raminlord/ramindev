// app/api/telegram/route.ts
import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendTelegramMessage(message: string) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });

    return await response.json();
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, data } = body;

    let message = '';

    if (type === 'contact') {
      // از فرم تماس اصلی
      message = `
🚀 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
🏢 <b>Company:</b> ${data.company || 'Not provided'}
💰 <b>Budget:</b> ${data.budget}
📝 <b>Message:</b> ${data.message}

⏰ <i>Received at: ${new Date().toLocaleString()}</i>
      `;
    } else if (type === 'project') {
      // از فرم شروع پروژه
      message = `
🎯 <b>New Project Inquiry!</b>

👤 <b>Name:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
🏢 <b>Company:</b> ${data.company || 'Not provided'}
📋 <b>Project Type:</b> ${data.projectType}
💰 <b>Budget:</b> ${data.budget}
⏳ <b>Timeline:</b> ${data.timeline}
📄 <b>Description:</b> ${data.description}

⏰ <i>Received at: ${new Date().toLocaleString()}</i>
      `;
    }

    const telegramResponse = await sendTelegramMessage(message);

    if (telegramResponse?.ok) {
      return NextResponse.json({ success: true, message: 'Notification sent to Telegram' });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to send notification' }, { status: 500 });
    }

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}