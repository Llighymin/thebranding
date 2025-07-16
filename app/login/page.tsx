
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 간단한 유효성 검사
    if (!formData.email || !formData.password) {
      alert('이메일과 비밀번호를 모두 입력해주세요.');
      setIsLoading(false);
      return;
    }

    // 실제 로그인 로직이 들어갈 부분
    setTimeout(() => {
      alert('로그인이 완료되었습니다.');
      setIsLoading(false);
      // 메인 페이지로 이동
      window.location.href = '/';
    }, 1500);
  };

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        {/* 로고 섹션 */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-indigo-600" style={{fontFamily: '"Pacifico", serif'}}>
              logo
            </h1>
          </Link>
          <p className="mt-2 text-gray-600">체험단 플랫폼에 오신 것을 환영합니다</p>
        </div>

        {/* 로그인 폼 */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center">로그인</h2>
            <p className="text-gray-600 text-center mt-2">계정에 로그인하여 체험단에 참여하세요</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이메일 입력 */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                이메일 주소
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-mail-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="이메일을 입력하세요"
                  required
                />
              </div>
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="ri-lock-line text-gray-400 w-5 h-5 flex items-center justify-center"></i>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  placeholder="비밀번호를 입력하세요"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                >
                  <i className={`${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} text-gray-400 w-5 h-5 flex items-center justify-center hover:text-gray-600`}></i>
                </button>
              </div>
            </div>

            {/* 로그인 옵션 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700 cursor-pointer">
                  로그인 상태 유지
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-indigo-600 hover:text-indigo-500">
                비밀번호 찾기
              </Link>
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  로그인 중...
                </div>
              ) : (
                '로그인'
              )}
            </button>
          </form>

          {/* 소셜 로그인 */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">또는</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
              >
                <i className="ri-google-fill text-red-500 w-5 h-5 flex items-center justify-center mr-2"></i>
                Google
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap"
              >
                <i className="ri-kakao-talk-fill text-yellow-500 w-5 h-5 flex items-center justify-center mr-2"></i>
                카카오
              </button>
            </div>
          </div>

          {/* 회원가입 링크 */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              아직 계정이 없으신가요?{' '}
              <Link href="/signup" className="text-indigo-600 hover:text-indigo-500 font-medium">
                회원가입
              </Link>
            </p>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            로그인함으로써{' '}
            <Link href="/terms" className="text-indigo-600 hover:text-indigo-500">
              이용약관
            </Link>
            {' '}및{' '}
            <Link href="/privacy" className="text-indigo-600 hover:text-indigo-500">
              개인정보처리방침
            </Link>
            에 동의합니다.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
