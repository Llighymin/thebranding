
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32 min-h-screen flex items-center"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20marketing%20workspace%20with%20laptops%20tablets%20and%20smartphones%20on%20a%20clean%20white%20desk%2C%20soft%20natural%20lighting%2C%20minimalist%20product%20review%20setup%20with%20various%20consumer%20products%20displayed%20elegantly%2C%20professional%20photography%20style%20with%20shallow%20depth%20of%20field%2C%20bright%20and%20clean%20atmosphere%20perfect%20for%20product%20testing%20and%20reviews&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  믿을 수 있는<br />
                  <span className="text-blue-600">제품 체험단</span><br />
                  플랫폼
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  실제 사용자들의 솔직한 리뷰를 통해 더 나은 제품 선택을 하세요. 
                  브랜드와 소비자를 연결하는 신뢰할 수 있는 체험단 서비스입니다.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/campaigns" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer">
                  체험단 참여하기
                </Link>
                <Link href="/how-it-works" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center whitespace-nowrap cursor-pointer">
                  이용방법 보기
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10,000+</div>
                  <div className="text-gray-600 text-sm">활성 사용자</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600 text-sm">파트너 브랜드</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50,000+</div>
                  <div className="text-gray-600 text-sm">완료된 리뷰</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20product%20review%20setup%20showcasing%20various%20consumer%20electronics%20smartphones%20headphones%20tablets%20and%20gadgets%20arranged%20aesthetically%20on%20a%20modern%20white%20surface%2C%20clean%20studio%20lighting%2C%20high-end%20product%20photography%20style%20with%20soft%20shadows%20and%20elegant%20composition%2C%20perfect%20for%20review%20platform%20marketing&width=600&height=800&seq=hero-product-1&orientation=portrait"
                alt="제품 체험 이미지"
                className="w-full h-auto rounded-2xl shadow-2xl object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
