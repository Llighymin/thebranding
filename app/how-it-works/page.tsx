
'use client';

import Header from "@/components/Header";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "체험단 선택",
      description: "관심있는 제품의 체험단을 선택하고 신청서를 작성해요",
      icon: "ri-search-line",
      details: [
        "다양한 브랜드의 체험단 모집 확인",
        "참여 조건 및 미션 내용 확인",
        "간단한 신청서 작성 및 제출",
        "선호하는 체험 분야 선택"
      ]
    },
    {
      step: "02", 
      title: "선정 및 제품 수령",
      description: "체험단으로 선정되면 무료로 제품을 받아볼 수 있어요",
      icon: "ri-gift-line",
      details: [
        "체험단 선정 결과 알림 수신",
        "배송지 정보 입력 및 확인",
        "무료 제품 배송 (2-3일 소요)",
        "제품 수령 확인 및 체험 시작"
      ]
    },
    {
      step: "03",
      title: "체험 및 리뷰 작성",
      description: "제품을 직접 사용해보고 솔직한 리뷰를 작성해주세요",
      icon: "ri-edit-line",
      details: [
        "제품 체험 기간 준수 (보통 7-14일)",
        "솔직하고 자세한 리뷰 작성",
        "사진 및 영상 리뷰 제출",
        "SNS 공유 및 해시태그 사용"
      ]
    },
    {
      step: "04",
      title: "보상 지급",
      description: "리뷰 작성 완료 후 추가 보상을 받을 수 있어요",
      icon: "ri-coin-line",
      details: [
        "리뷰 품질 검토 및 승인",
        "포인트 또는 현금 보상 지급",
        "추가 체험단 우선 선정 혜택",
        "VIP 멤버십 등급 상승 기회"
      ]
    }
  ];

  const benefits = [
    {
      icon: "ri-gift-2-line",
      title: "무료 제품 체험",
      description: "최신 제품을 무료로 체험하고 그대로 가져가세요"
    },
    {
      icon: "ri-money-dollar-circle-line",
      title: "추가 보상 제공",
      description: "리뷰 작성 후 포인트나 현금 보상을 받을 수 있어요"
    },
    {
      icon: "ri-star-line",
      title: "브랜드 파트너십",
      description: "우수 리뷰어는 브랜드와 지속적인 협업 기회 제공"
    },
    {
      icon: "ri-community-line",
      title: "커뮤니티 활동",
      description: "다른 체험단원들과 정보 공유 및 네트워킹"
    }
  ];

  const faqs = [
    {
      question: "체험단 신청은 무료인가요?",
      answer: "네, 체험단 신청과 참여는 완전히 무료입니다. 선정되면 제품도 무료로 제공됩니다."
    },
    {
      question: "체험 제품은 반납해야 하나요?",
      answer: "아니요, 체험 완료 후 제품은 그대로 가져가실 수 있습니다. 단, 리뷰 작성은 필수입니다."
    },
    {
      question: "한 번에 여러 체험단에 참여할 수 있나요?",
      answer: "네, 동시에 여러 체험단에 신청하고 참여하실 수 있습니다."
    },
    {
      question: "체험단 선정 기준은 무엇인가요?",
      answer: "신청서 내용, 이전 리뷰 품질, SNS 활동도 등을 종합적으로 평가하여 선정합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            이용방법 안내
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            4단계 간단한 과정으로 무료 제품 체험과 보상을 받아보세요
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4">
              <p className="text-lg font-medium">지금까지 <span className="text-yellow-300 font-bold">25,847명</span>이 참여했어요!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              상세 이용 과정
            </h2>
            <p className="text-xl text-gray-600">
              각 단계별 자세한 안내를 확인해보세요
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <i className={`${step.icon} text-2xl text-white`}></i>
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-600 font-bold text-sm mb-1">STEP {step.step}</div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
                    <img 
                      src={`https://readdy.ai/api/search-image?query=modern%20minimalist%20illustration%20showing%20$%7Bstep.title.toLowerCase%28%29%7D%20process%2C%20clean%20design%20with%20soft%20blue%20and%20purple%20gradient%20background%2C%20professional%20style%2C%20simple%20geometric%20shapes&width=600&height=400&seq=step${index}&orientation=landscape`}
                      alt={step.title}
                      className="w-full h-80 object-cover object-top rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              체험단 참여 혜택
            </h2>
            <p className="text-xl text-gray-600">
              체험단 참여로 얻을 수 있는 다양한 혜택들
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${benefit.icon} text-2xl text-blue-600`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-xl text-gray-600">
              체험단 참여 전 궁금한 점들을 확인해보세요
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Q</span>
                  </div>
                  {faq.question}
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">A</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            지금 바로 체험단에 참여해보세요!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            무료 제품 체험과 보상의 기회를 놓치지 마세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/campaigns"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
            >
              체험단 둘러보기
            </a>
            <a
              href="/"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-colors border-2 border-white/20 whitespace-nowrap cursor-pointer inline-flex items-center justify-center"
            >
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
