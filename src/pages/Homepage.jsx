import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-blue-500 py-4 shadow-md">
        <h1 className="text-center text-2xl font-bold text-white">🎯 Welcome to Roulette Fun!</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl px-6 mt-10">
        {/* Service Description */}
        <section className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-blue-600">Spin the Wheel, Win Prizes!</h2>
          <p className="text-gray-600 mt-2">
            Join daily roulette events and compete with friends for exciting rewards. 
          </p>
        </section>

        {/* Roulette List */}
        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-700">Active Roulettes</h3>

          {/* Example of Roulette Card */}
          <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center hover:shadow-lg transition-shadow">
            <div>
              <h4 className="text-xl font-bold text-blue-500">Daily Spin - 20:00</h4>
              <p className="text-gray-600">Join before: <span className="font-medium">19:50</span></p>
              <p className="text-gray-600">Participants: <span className="font-medium">120</span></p>
            </div>
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Join Now
            </button>
          </div>

          {/* Another Roulette Card Example */}
          <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center hover:shadow-lg transition-shadow">
            <div>
              <h4 className="text-xl font-bold text-blue-500">Special Event - 22:00</h4>
              <p className="text-gray-600">Join before: <span className="font-medium">21:50</span></p>
              <p className="text-gray-600">Participants: <span className="font-medium">85</span></p>
            </div>
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Join Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-200 py-4 text-center">
        <p className="text-gray-600 text-sm">© 2025 Roulette Fun. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
