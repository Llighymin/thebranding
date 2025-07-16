
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthDate: '',
    gender: '',
    interests: [] as string[],
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interestOptions = [
    '뷰티/화장품', '패션/의류', '식품/음료', '생활용품', '전자제품', 
    '건강/운동', '육아/베이비', '반려동물', '도서/문구', '여행/레저'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      alert('필수 약관에 동의해주세요.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('회원가입이 완료되었습니다!');
    }, 2000);
  };

  const handleSocialSignup = (provider: string) => {
    alert(`${provider} 간편가입 기능은 준비 중입니다.`);
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-bold text-indigo-600" style={{fontFamily: '"Pacifico", serif'}}>
              logo
            </span>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            회원가입
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            체험단과 함께 새로운 제품을 만나보세요
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* 이름 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                이름 *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-user-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="실명을 입력해주세요"
                />
              </div>
            </div>

            {/* 이메일 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                이메일 *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="이메일 주소를 입력하세요"
                />
              </div>
            </div>

            {/* 비밀번호 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                비밀번호 *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="8자 이상 입력하세요"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  <i className={`${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} text-gray-400 w-5 h-5 flex items-center justify-center`}></i>
                </button>
              </div>
            </div>

            {/* 비밀번호 확인 */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                비밀번호 확인 *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="비밀번호를 다시 입력하세요"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  <i className={`${showConfirmPassword ? 'ri-eye-line' : 'ri-eye-off-line'} text-gray-400 w-5 h-5 flex items-center justify-center`}></i>
                </button>
              </div>
            </div>

            {/* 휴대폰 번호 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                휴대폰 번호 *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-phone-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="010-1234-5678"
                />
              </div>
            </div>

            {/* 생년월일 */}
            <div>
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                생년월일 *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-calendar-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  required
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
              </div>
            </div>

            {/* 성별 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                성별 *
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${formData.gender === 'male' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'}`}>
                    {formData.gender === 'male' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  남성
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${formData.gender === 'female' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'}`}>
                    {formData.gender === 'female' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  여성
                </label>
              </div>
            </div>

            {/* 관심분야 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                관심분야 (최대 3개)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestToggle(interest)}
                    disabled={!formData.interests.includes(interest) && formData.interests.length >= 3}
                    className={`px-3 py-2 text-xs rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${formData.interests.includes(interest) ? 'bg-indigo-100 border-indigo-300 text-indigo-700' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'} ${!formData.interests.includes(interest) && formData.interests.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 약관 동의 */}
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="agreeTerms"
                name="agreeTerms"
                type="checkbox"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                <span className="text-red-500">*</span> 이용약관에 동의합니다
                <Link href="/terms" className="text-indigo-600 hover:text-indigo-500 ml-1">
                  (보기)
                </Link>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="agreePrivacy"
                name="agreePrivacy"
                type="checkbox"
                checked={formData.agreePrivacy}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="agreePrivacy" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                <span className="text-red-500">*</span> 개인정보처리방침에 동의합니다
                <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500 ml-1">
                  (보기)
                </Link>
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="agreeMarketing"
                name="agreeMarketing"
                type="checkbox"
                checked={formData.agreeMarketing}
                onChange={handleInputChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="agreeMarketing" className="ml-2 block text-sm text-gray-900 cursor-pointer">
                마케팅 정보 수신에 동의합니다 (선택)
              </label>
            </div>
          </div>

          {/* 회원가입 버튼 */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  회원가입 중...
                </div>
              ) : (
                '회원가입'
              )}
            </button>
          </div>

          {/* 구분선 */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>

          {/* 소셜 회원가입 */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleSocialSignup('구글')}
              className="w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-google-fill text-red-500 mr-3 w-5 h-5 flex items-center justify-center"></i>
              구글로 간편가입
            </button>
            <button
              type="button"
              onClick={() => handleSocialSignup('카카오')}
              className="w-full flex justify-center items-center px-4 py-3 border border-yellow-300 rounded-lg shadow-sm text-sm font-medium text-gray-900 bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-kakao-talk-fill mr-3 w-5 h-5 flex items-center justify-center"></i>
              카카오로 간편가입
            </button>
          </div>

          {/* 로그인 링크 */}
          <div className="text-center">
            <span className="text-sm text-gray-600">
              이미 계정이 있으신가요?{' '}
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer">
                로그인하기
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
