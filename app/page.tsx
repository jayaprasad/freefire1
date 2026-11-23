import Image from 'next/image';

export default function Home() {
  return (
    <section className="mt-20 h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl md:text-7xl font-extrabold neon-purple mb-4">
        ISTE Free Fire Tournament
      </h1>
      <p className="text-xl neon-orange mb-6">
        P.E.S. College of Engineering, Mandya • December 5
      </p>

      <div className="glass p-6 rounded-lg shadow-lg max-w-md">
        <p className="text-lg neon-red">Countdown to tournament:</p>
        <div id="countdown" className="text-3xl font-mono mt-2 neon-red">03:12:45</div>
      </div>
    </section>
  );
}

// Simple countdown script – in a real app replace with Supabase time source
if (typeof window !== 'undefined') {
  const target = new Date();
  target.setDate(target.getDate() + 5);
  const update = () => {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    if (diff <= 0) {
      document.getElementById('countdown')!.textContent = '00:00:00';
      return;
    }
    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    document.getElementById('countdown')!.textContent = `${h}:${m}:${s}`;
  };
  setInterval(update, 1000);
  update();
}
