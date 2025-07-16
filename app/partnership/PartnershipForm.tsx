'use client';

import { useState } from 'react';

export default function PartnershipForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    category: '',
    productDescription: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/submit-form', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('제휴 문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          category: '',
          productDescription: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        setSubmitStatus('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch {
      setSubmitStatus('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            제휴 문의하기
          </h2>
          <p className="text-xl text-gray-600">
            브랜드 정보를 알려주시면 맞춤형 제안을 드리겠습니다
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form id="partnership-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  회사명 *
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="회사명을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  담당자명 *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="담당자명을 입력해주세요"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="이메일을 입력해주세요"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="연락처를 입력해주세요"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  제품 카테고리 *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">카테고리를 선택해주세요</option>
                  <option value="electronics">전자제품</option>
                  <option value="beauty">뷰티/화장품</option>
                  <option value="fashion">패션/의류</option>
                  <option value="food">식품</option>
                  <option value="health">건강/의료</option>
                  <option value="home">홈/리빙</option>
                  <option value="other">기타</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  예상 예산
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">예산을 선택해주세요</option>
                  <option value="under-100">100만원 미만</option>
                  <option value="100-300">100만원 - 300만원</option>
                  <option value="300-500">300만원 - 500만원</option>
                  <option value="500-1000">500만원 - 1,000만원</option>
                  <option value="over-1000">1,000만원 이상</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                제품 설명 *
              </label>
              <textarea
                name="productDescription"
                value={formData.productDescription}
                onChange={handleInputChange}
                required
                maxLength={500}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                placeholder="제품에 대해 자세히 설명해주세요 (최대 500자)"
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.productDescription.length}/500자
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                기타 요청사항
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                maxLength={500}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                placeholder="추가로 전달하고 싶은 내용이 있다면 작성해주세요 (최대 500자)"
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.message.length}/500자
              </div>
            </div>

            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus.includes('성공') 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '문의 접수 중...' : '제휴 문의 접수'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}