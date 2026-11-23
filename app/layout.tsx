import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SupabaseProvider from '@/components/SupabaseProvider';

export const metadata = {
  title: 'Free Fire Esports Tournament',
  description: 'ISTE Free Fire tournament platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-900 text-gray-100 font-sans min-h-screen flex flex-col">
        <SupabaseProvider>
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </SupabaseProvider>
      </body>
    </html>
  );
}
