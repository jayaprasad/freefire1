import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Tournament', href: '/tournament' },
  { name: 'Rules', href: '/rules' },
  { name: 'Event Flow', href: '/event-flow' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Teams', href: '/teams' },
  { name: 'Lobbies', href: '/lobbies' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Results', href: '/results' },
  { name: 'Announcements', href: '/announcements' },
  { name: 'Admin', href: '/admin' },
];

export default function Navbar() {
  return (
    <nav className="glass fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
      <div className="text-2xl font-bold neon-red">Free Fire Esports</div>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:neon-orange">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
