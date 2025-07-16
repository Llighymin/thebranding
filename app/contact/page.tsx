
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '일반문의',
    message: '',
    agreePrivacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const categories = [
    '일반문의',
    '체험단 관련',
    '리뷰 작성',
    '제품/배송',
    '계정/로그인',
    '제휴문의',
    '기타'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreePrivacy) {
      alert('개인정보 처리방침에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '일반문의',
        message: '',
        agreePrivacy: false
      });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">문의하기</h1>
          <p className="text-xl text-green-100">궁금한 점이 있으시면 언제든 연락주세요</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">연락처 정보</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-xl text-blue-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">전화문의</h4>
                    <p className="text-gray-600 mt-1">1588-0000</p>
                    <p className="text-sm text-gray-500 mt-1">
                      평일 09:00 - 18:00<br />
                      토요일 10:00 - 14:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-xl text-green-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">이메일</h4>
                    <p className="text-gray-600 mt-1">support@brandingReview.co.kr</p>
                    <p className="text-sm text-gray-500 mt-1">
                      24시간 접수 가능<br />
                      2시간 내 답변
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-chat-3-line text-xl text-purple-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">카카오톡</h4>
                    <p className="text-gray-600 mt-1">@brandingReview</p>
                    <p className="text-sm text-gray-500 mt-1">
                      평일 09:00 - 18:00<br />
                      실시간 채팅 상담
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-xl text-red-600"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">주소</h4>
                    <p className="text-gray-600 mt-1">
                      서울특별시 강남구<br />
                      테헤란로 123, 10층
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-4">빠른 답변을 위한 팁</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-green-500"></i>
                    </div>
                    <span className="ml-2">문의 카테고리를 정확히 선택해주세요</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-green-500"></i>
                    </div>
                    <span className="ml-2">구체적인 상황을 자세히 설명해주세요</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-4 h-4 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <i className="ri-check-line text-green-500"></i>
                    </div>
                    <span className="ml-2">연락 가능한 시간을 함께 알려주세요</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">문의 양식</h2>
              
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-check-circle-line text-green-500"></i>
                    </div>
                    <p className="ml-2 text-green-700">문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.</p>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">문의 유형 *</label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none pr-8"
                      >
                        {categories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                        <i className="ri-arrow-down-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">제목 *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="문의 제목을 입력해주세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">문의 내용 *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="문의하실 내용을 자세히 작성해주세요 (최대 500자)"
                  />
                  <div className="mt-2 text-right text-sm text-gray-500">
                    {formData.message.length}/500자
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreePrivacy"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agreePrivacy" className="ml-3 text-sm text-gray-700">
                    개인정보 수집 및 이용에 동의합니다. *
                    <span className="text-blue-600 hover:underline cursor-pointer ml-1">
                      [자세히보기]
                    </span>
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 flex items-center justify-center">
                          <i className="ri-loader-4-line animate-spin"></i>
                        </div>
                        문의 접수 중...
                      </>
                    ) : (
                      <>
                        <div className="w-5 h-5 mr-2 flex items-center justify-center">
                          <i className="ri-send-plane-line"></i>
                        </div>
                        문의하기
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
