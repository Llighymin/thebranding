'use client';

export default function PartnershipProcess() {
  const steps = [
    {
      number: '01',
      title: '제휴 문의',
      description: '제휴 문의 양식을 작성하여 브랜드 정보와 제품을 소개해주세요.',
      icon: 'ri-mail-send-line'
    },
    {
      number: '02',
      title: '상담 및 기획',
      description: '전담 매니저가 브랜드에 맞는 최적의 체험단 전략을 제안합니다.',
      icon: 'ri-discuss-line'
    },
    {
      number: '03',
      title: '캠페인 론칭',
      description: '체험단 모집을 시작하고 적합한 체험자들을 선별합니다.',
      icon: 'ri-rocket-2-line'
    },
    {
      number: '04',
      title: '성과 분석',
      description: '체험단 활동 결과를 분석하여 상세한 리포트를 제공합니다.',
      icon: 'ri-bar-chart-box-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제휴 진행 과정
          </h2>
          <p className="text-xl text-gray-600">
            간단한 4단계로 제휴를 시작하세요
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-700 transition-colors">
                  {step.number}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <i className={`${step.icon} text-xl text-blue-600`}></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}