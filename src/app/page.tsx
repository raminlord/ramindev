export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          موفقیت از اینجا شروع می‌شود
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          این اولین قدم موفق تو در ساخت پورتفولیوی بین‌المللی است
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            شروع کنیم
          </button>
          <button className="border border-white hover:bg-white hover:text-purple-900 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            بیشتر بدانید
          </button>
        </div>
      </div>
    </div>
  );
}