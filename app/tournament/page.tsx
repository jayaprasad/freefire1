import React from 'react';

export default function TournamentPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-indigo-900 p-8">
      <div className="w-full max-w-4xl rounded-lg bg-white/10 p-6 backdrop-blur-lg shadow-xl">
        <h1 className="mb-4 text-4xl font-bold text-white">Tournament Overview</h1>
        <p className="text-lg text-gray-200">
          Welcome to the Free Fire Esports Tournament platform. Here you will find details about upcoming
          tournaments, schedules, and how to register.
        </p>
        {/* Add more components as per design spec */}
      </div>
    </div>
  );
}
