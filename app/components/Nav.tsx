'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [
  { name: 'Leaderboards', href: '/' },
  { name: 'Non-profits', href: '/non-profits' },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden'); // clean up just in case
    };
  }, [mobileOpen]);


  return (
    <nav className="bg-white border-b border-gray-200 relative z-50">
      <div className="flex items-center justify-between px-6 py-4 md:py-0">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_v31.png"
            alt="The Great Outdoors Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold">The Great Outdoors</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-sm transition border-b-2 py-6',
                pathname === link.href
                  ? 'border-blue-300 text-black'
                  : 'border-transparent text-gray-600 hover:text-black hover:border-gray-300'
              )}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="https://discord.com/channels/345621611770282004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black"
          >
            <Image
              src="/Discord-Symbol-Black.svg"
              alt="Discord"
              width={18}
              height={18}
            />
            Discord
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMobileOpen(true)} className="md:hidden cursor-pointer">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Off-canvas mobile menu */}
      <div
        className={clsx(
          'fixed top-0 right-0 w-100 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50',
          mobileOpen ? 'translate-x-0' : 'translate-x-full',
          'h-screen flex flex-col justify-between' // ⬅️ here!
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-white">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col justify-between h-full p-4">
          {/* Top nav links */}
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  'text-md py-2 border-b',
                  pathname === link.href
                    ? 'text-black border-blue-300'
                    : 'text-gray-600 border-transparent hover:text-black hover:border-gray-300'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom Discord link */}
          <Link
            href="https://discord.com/channels/345621611770282004"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-6 flex items-center gap-2 text-md text-gray-600 hover:text-black"
          >
            <Image
              src="/Discord-Symbol-Black.svg"
              alt="Discord"
              width={18}
              height={18}
            />
            Discord
          </Link>
        </div>

      </div>

      {/* Optional: backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </nav>
  );
}
