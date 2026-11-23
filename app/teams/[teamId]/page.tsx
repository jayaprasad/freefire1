import React from 'react';

export default function TeamDetailPage({ params }: { params: { teamId: string } }) {
  const { teamId } = params;
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-black to-indigo-900 p-8">
      <div className="w-full max-w-4xl rounded-lg bg-white/10 p-6 backdrop-blur-lg shadow-xl text-white">
        <h1 className="mb-4 text-4xl font-bold">Team {teamId}</h1>
        <p>Placeholder for team details and player roster.</p>
      </div>
    </div>
  );
}
