
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqData = [
  {
    category: '일반',
    questions: [
      {
        question: 'brandingReview는 어떤 서비스인가요?',
        answer: 'brandingReview는 브랜드와 리뷰어를 연결하는 체험단 플랫폼입니다. 무료로 제품을 체험하고 솔직한 리뷰를 작성할 수 있으며, 브랜드는 효과적인 마케팅을 진행할 수 있습니다.'
      },
      {
        question: '회원가입은 무료인가요?',
        answer: '네, 회원가입은 완전 무료입니다. 추가 비용 없이 다양한 체험단에 참여하실 수 있습니다.'
      },
      {
        question: '어떤 연령대가 참여할 수 있나요?',
        answer: '만 18세 이상이면 누구나 참여 가능합니다. 다양한 연령대와 관심사를 가진 분들을 환영합니다.'
      }
    ]
  },
  {
    category: '체험단 참여',
    questions: [
      {
        question: '체험단 신청은 어떻게 하나요?',
        answer: '원하는 체험단을 선택한 후 "신청하기" 버튼을 클릭하여 신청서를 작성하시면 됩니다. 선정 결과는 이메일로 안내드립니다.'
      },
      {
        question: '체험단 선정 기준은 무엇인가요?',
        answer: '프로필 완성도, 이전 리뷰 품질, 소셜미디어 활동도, 해당 제품과의 연관성 등을 종합적으로 고려하여 선정합니다.'
      },
      {
        question: '한 번에 여러 체험단에 신청할 수 있나요?',
        answer: '네, 여러 체험단에 동시 신청이 가능합니다. 단, 선정 시 성실한 참여를 위해 적정 수준의 체험단 참여를 권장합니다.'
      },
      {
        question: '체험단 선정 후 참여를 취소할 수 있나요?',
        answer: '부득이한 사정으로 참여가 어려운 경우, 선정 확정 후 24시간 이내에 고객센터로 연락 주시면 취소 가능합니다.'
      }
    ]
  },
  {
    category: '리뷰 작성',
    questions: [
      {
        question: '리뷰는 언제까지 작성해야 하나요?',
        answer: '제품 수령 후 2주 이내에 리뷰를 작성해주셔야 합니다. 기한이 지날 경우 향후 체험단 참여에 제한이 있을 수 있습니다.'
      },
      {
        question: '리뷰 작성 시 주의사항이 있나요?',
        answer: '솔직하고 상세한 후기 작성을 권장하며, 허위 내용이나 과도한 홍보성 표현은 피해주세요. 제품 사용 경험을 바탕으로 한 진솔한 리뷰를 작성해주시면 됩니다.'
      },
      {
        question: '부정적인 리뷰도 작성할 수 있나요?',
        answer: '네, 솔직한 의견 표현이 중요합니다. 다만 객관적이고 건설적인 피드백으로 작성해주시면 감사하겠습니다.'
      }
    ]
  },
  {
    category: '제품 및 배송',
    questions: [
      {
        question: '제품은 언제 받을 수 있나요?',
        answer: '체험단 선정 확정 후 보통 3-7일 이내에 제품을 발송해드립니다. 배송 관련 정보는 문자 또는 이메일로 안내드립니다.'
      },
      {
        question: '제품을 반납해야 하나요?',
        answer: '대부분의 제품은 체험 후 그대로 보관하실 수 있습니다. 일부 고가 제품의 경우 반납이 필요할 수 있으며, 이는 각 체험단 공지에서 명시됩니다.'
      },
      {
        question: '제품에 불량이 있으면 어떻게 하나요?',
        answer: '제품 불량이나 배송 중 파손 시 즉시 고객센터로 연락주세요. 교환 또는 환불 처리해드리겠습니다.'
      }
    ]
  },
  {
    category: '기업 제휴',
    questions: [
      {
        question: '브랜드 제휴는 어떻게 진행하나요?',
        answer: '"제휴문의" 페이지에서 신청서를 작성해주시면 담당자가 연락드려 상세한 제휴 방안을 안내해드립니다.'
      },
      {
        question: '제휴 비용은 어떻게 되나요?',
        answer: '브랜드 규모, 제품 종류, 체험단 규모에 따라 맞춤형 견적을 제공해드립니다. 자세한 내용은 제휴 상담을 통해 안내드립니다.'
      },
      {
        question: '소상공인도 제휴할 수 있나요?',
        answer: '네, 기업 규모와 관계없이 제휴 가능합니다. 소상공인을 위한 특별 프로그램도 운영하고 있습니다.'
      }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('일반');
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [...new Set(faqData.map(item => item.category))];
  
  const filteredQuestions = faqData
    .find(category => category.category === activeCategory)
    ?.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">자주 묻는 질문</h1>
          <p className="text-xl text-blue-100">궁금한 점을 빠르게 해결해보세요</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="질문을 검색해보세요..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
              <i className="ri-search-line text-gray-400"></i>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">카테고리</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenQuestion(null);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap $'{'}
                      activeCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    ${'}'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">{activeCategory} 관련 질문</h2>
                <p className="text-gray-600 mt-2">{filteredQuestions.length}개의 질문</p>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredQuestions.map((item, index) => (
                  <div key={index} className="p-6">
                    <button
                      onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                      className="w-full text-left flex items-center justify-between cursor-pointer group"
                    >
                      <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.question}
                      </h3>
                      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4">
                        <i className={`ri-add-line text-xl transition-transform $'{'}
                          openQuestion === index ? 'rotate-45' : ''
                        ${'}'}`}></i>
                      </div>
                    </button>
                    
                    {openQuestion === index && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredQuestions.length === 0 && (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <i className="ri-search-line text-4xl text-gray-300"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">검색 결과가 없습니다</h3>
                  <p className="text-gray-500">다른 검색어로 시도해보세요</p>
                </div>
              )}
            </div>

            <div className="mt-8 bg-blue-50 rounded-lg p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <i className="ri-customer-service-2-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">원하는 답변을 찾지 못하셨나요?</h3>
              <p className="text-gray-600 mb-4">직접 문의해주시면 빠르게 도움드리겠습니다</p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                <div className="w-5 h-5 mr-2 flex items-center justify-center">
                  <i className="ri-mail-line"></i>
                </div>
                문의하기
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
