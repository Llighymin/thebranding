
'use client';

const steps = [
  {
    step: "01",
    title: "체험단 선택",
    description: "관심있는 제품의 체험단을 선택하고 신청서를 작성해요",
    icon: "ri-search-line"
  },
  {
    step: "02", 
    title: "선정 및 제품 수령",
    description: "체험단으로 선정되면 무료로 제품을 받아볼 수 있어요",
    icon: "ri-gift-line"
  },
  {
    step: "03",
    title: "체험 및 리뷰 작성",
    description: "제품을 직접 사용해보고 솔직한 리뷰를 작성해주세요",
    icon: "ri-edit-line"
  },
  {
    step: "04",
    title: "보상 지급",
    description: "리뷰 작성 완료 후 추가 보상을 받을 수 있어요",
    icon: "ri-coin-line"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            이용방법
          </h2>
          <p className="text-xl text-gray-600">
            간단한 4단계로 체험단에 참여하고 보상을 받으세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${step.icon} text-2xl text-white`}></i>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {step.step}
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
