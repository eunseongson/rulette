import React from "react";

const JoinAndSharePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-teal-500 py-4 shadow-md">
        <h1 className="text-center text-2xl font-bold text-white">🎯 룰렛 참가하기</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-2xl px-6 mt-10">
        {/* 룰렛 정보 */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-teal-600">오늘의 룰렛</h2>
          <p className="text-gray-600 mt-2">참여 마감: <span className="font-medium">19:50</span></p>
          <p className="text-gray-600">시작 시간: <span className="font-medium">20:00</span></p>
          <p className="text-gray-600 mt-2">남은 시간: <span className="font-bold text-red-500">00:12:30</span></p>
        </section>

        {/* 참가 입력 폼 */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-teal-600">참가자 정보 입력</h2>
          <form className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">이름</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500"
                placeholder="이름을 입력하세요"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">휴대폰 번호</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-teal-500"
                placeholder="휴대폰 번호를 입력하세요"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition"
            >
              참가하기
            </button>
          </form>
        </section>

        {/* URL 공유 */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-teal-600">친구 초대하기</h2>
          <p className="text-gray-600 mt-2">아래의 URL을 친구들에게 공유하세요!</p>
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              readOnly
              className="flex-grow border border-gray-300 rounded-lg p-2 text-gray-700"
              value="https://roulette-service.com/roulette/abcd1234"
            />
            <button
              className="bg-teal-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-teal-600 transition"
              onClick={() => navigator.clipboard.writeText("https://roulette-service.com/roulette/abcd1234")}
            >
              복사하기
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">* 공유된 URL을 통해 친구도 참가할 수 있습니다.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-200 py-4 text-center">
        <p className="text-gray-600 text-sm">© 2025 룰렛 서비스. 모두의 행운을 응원합니다!</p>
      </footer>
    </div>
  );
};

export default JoinAndSharePage;
