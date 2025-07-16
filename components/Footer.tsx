
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400" style={{ fontFamily: "Pacifico, serif" }}>brandingReview</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              믿을 수 있는 제품 체험단 플랫폼으로 브랜드와 소비자를 연결합니다. 
              솔직한 리뷰를 통해 더 나은 제품 선택을 도와드립니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-facebook-fill text-lg"></i>
                </div>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-twitter-fill text-lg"></i>
                </div>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-instagram-fill text-lg"></i>
                </div>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-youtube-fill text-lg"></i>
                </div>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li><Link href="/campaigns" className="text-gray-400 hover:text-white transition-colors cursor-pointer">체험단 참여</Link></li>
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors cursor-pointer">이용방법</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors cursor-pointer">요금제</Link></li>
              <li><Link href="/brands" className="text-gray-400 hover:text-white transition-colors cursor-pointer">브랜드 파트너</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">고객지원</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors cursor-pointer">자주 묻는 질문</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">문의하기</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors cursor-pointer">이용약관</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">개인정보처리방침</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 brandingReview. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">이용약관</Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">개인정보처리방침</Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">사이트맵</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
