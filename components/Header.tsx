
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '체험단', href: '/campaigns' },
    { name: '이용방법', href: '/how-it-works' },
    { name: '제휴문의', href: '/partnership' },
    { name: '고객센터', href: '/faq' }
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: "Pacifico, serif" }}>brandingReview</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">홈</Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">{item.name}</Link>
            ))}
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">로그인</Link>
          </nav>

          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-menu-line text-xl"></i>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">홈</Link>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">{item.name}</Link>
              ))}
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer inline-block w-fit">로그인</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
