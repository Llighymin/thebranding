'use client';

export default function PartnershipBenefits() {
  const benefits = [
    {
      icon: 'ri-target-line',
      title: '타겟 마케팅',
      description: '정확한 타겟 고객층에게 제품을 노출하여 효과적인 마케팅이 가능합니다.',
      image: 'https://readdy.ai/api/search-image?query=Digital%20marketing%20targeting%20concept%20with%20arrows%20pointing%20to%20specific%20customer%20segments%2C%20clean%20business%20illustration%2C%20modern%20marketing%20analytics%20dashboard&width=400&height=300&seq=targeting_benefit&orientation=landscape'
    },
    {
      icon: 'ri-star-line',
      title: '진정한 리뷰',
      description: '실제 사용자들의 솔직한 후기를 통해 브랜드 신뢰도를 향상시킵니다.',
      image: 'https://readdy.ai/api/search-image?query=Authentic%20customer%20reviews%20and%20ratings%20display%20on%20smartphone%20screen%2C%20five%20star%20rating%20system%2C%20positive%20feedback%20concept%2C%20clean%20modern%20interface&width=400&height=300&seq=review_benefit&orientation=landscape'
    },
    {
      icon: 'ri-rocket-line',
      title: '브랜드 성장',
      description: '체계적인 체험단 운영으로 브랜드 인지도와 판매량을 동시에 증대시킵니다.',
      image: 'https://readdy.ai/api/search-image?query=Business%20growth%20chart%20with%20upward%20trending%20arrow%2C%20brand%20development%20concept%2C%20professional%20analytics%20visualization%2C%20clean%20corporate%20style&width=400&height=300&seq=growth_benefit&orientation=landscape'
    },
    {
      icon: 'ri-shield-check-line',
      title: '투명한 운영',
      description: '모든 체험단 활동이 투명하게 관리되어 안전하고 신뢰할 수 있습니다.',
      image: 'https://readdy.ai/api/search-image?query=Transparency%20and%20security%20shield%20concept%20with%20checkmark%2C%20trust%20and%20safety%20in%20business%20operations%2C%20clean%20professional%20design&width=400&height=300&seq=trust_benefit&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제휴의 장점
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            brandingReview와 함께하면 이런 혜택을 누리실 수 있습니다
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${benefit.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}