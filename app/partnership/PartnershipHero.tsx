'use client';

export default function PartnershipHero() {
  return (
    <section 
      className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20business%20partnership%20handshake%20between%20professionals%20in%20a%20bright%20office%20environment%20with%20clean%20minimal%20background%2C%20corporate%20collaboration%20concept%2C%20professional%20lighting%2C%20contemporary%20style&width=1200&height=600&seq=partnership_hero&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          브랜드와 함께
          <br />
          성장하세요
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          brandingReview와 제휴하여 더 많은 고객에게 여러분의 제품을 소개하고
          <br />
          진정한 리뷰를 통해 브랜드 신뢰도를 높이세요
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            제휴 문의하기
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap">
            성공 사례 보기
          </button>
        </div>
      </div>
    </section>
  );
}