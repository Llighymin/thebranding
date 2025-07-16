
'use client';

import { useState } from 'react';
import Link from 'next/link';

const campaignData = {
  1: {
    id: 1,
    title: "삼성 갤럭시 버즈 프로 체험단",
    brand: "Samsung",
    category: "전자제품",
    participants: 50,
    maxParticipants: 100,
    reward: "제품 무료 제공 + 5만원",
    deadline: "2024-02-15",
    image: "https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Buds%20Pro%20wireless%20earbuds%20in%20elegant%20white%20color%20on%20clean%20minimalist%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%20and%20subtle%20shadows%2C%20high-end%20tech%20product%20presentation%20style%20perfect%20for%20review%20campaigns&width=800&height=400&seq=detail-1&orientation=landscape",
    status: "모집중",
    description: "최신 삼성 갤럭시 버즈 프로를 무료로 체험하고 솔직한 리뷰를 작성해주세요. 액티브 노이즈 캔슬링과 공간음향 기술이 적용된 프리미엄 무선 이어폰입니다.",
    requirements: [
      "만 18세 이상",
      "SNS 팔로워 1,000명 이상 또는 블로그 운영자",
      "체험 후 2주 내 리뷰 작성 필수",
      "최소 5장 이상의 사진 포함"
    ],
    mission: [
      "제품 언박싱 및 첫인상 리뷰",
      "일주일간 실제 사용 후기",
      "타 브랜드 제품과의 비교 리뷰",
      "SNS 및 블로그에 후기 게시"
    ],
    schedule: "2024-02-01 ~ 2024-02-15 모집, 2024-02-20 발송, 2024-03-05 리뷰 마감"
  },
  2: {
    id: 2,
    title: "다이슨 에어랩 헤어스타일러 체험단",
    brand: "Dyson",
    category: "뷰티",
    participants: 25,
    maxParticipants: 30,
    reward: "제품 무료 제공",
    deadline: "2024-02-20",
    image: "https://readdy.ai/api/search-image?query=Dyson%20Airwrap%20hair%20styler%20in%20rose%20gold%20color%20with%20various%20attachment%20heads%20displayed%20elegantly%20on%20white%20marble%20surface%2C%20luxury%20beauty%20product%20photography%20with%20professional%20lighting%20and%20sophisticated%20composition%20for%20premium%20review%20platform&width=800&height=400&seq=detail-2&orientation=landscape",
    status: "모집중",
    description: "다이슨의 혁신적인 에어랩 헤어스타일러로 다양한 헤어스타일링을 체험해보세요. 열 손상 없이 건강한 스타일링이 가능한 프리미엄 제품입니다.",
    requirements: [
      "만 20세 이상 여성",
      "뷰티 관련 SNS 운영자",
      "헤어스타일링에 관심이 많은 분",
      "체험 후 3주 내 리뷰 작성 필수"
    ],
    mission: [
      "제품 언박싱 및 구성품 소개",
      "다양한 어태치먼트 사용 후기",
      "Before & After 스타일링 사진",
      "뷰티 플랫폼에 상세 리뷰 게시"
    ],
    schedule: "2024-02-05 ~ 2024-02-20 모집, 2024-02-25 발송, 2024-03-15 리뷰 마감"
  },
  3: {
    id: 3,
    title: "아이폰 15 프로 케이스 체험단",
    brand: "Apple",
    category: "액세서리",
    participants: 80,
    maxParticipants: 200,
    reward: "케이스 무료 제공 + 2만원",
    deadline: "2024-02-25",
    image: "https://readdy.ai/api/search-image?query=Premium%20iPhone%2015%20Pro%20cases%20in%20various%20colors%20including%20clear%20transparent%20black%20and%20brown%20leather%20cases%20arranged%20beautifully%20on%20white%20surface%2C%20professional%20product%20photography%20for%20tech%20accessory%20review%20campaign%20with%20clean%20modern%20aesthetics&width=800&height=400&seq=detail-3&orientation=landscape",
    status: "모집중",
    description: "아이폰 15 프로 전용 프리미엄 케이스를 체험하고 리뷰해주세요. 다양한 소재와 색상의 케이스 중 원하는 것을 선택할 수 있습니다.",
    requirements: [
      "아이폰 15 프로 보유자",
      "테크 리뷰 경험자 우대",
      "SNS 활동이 활발한 분",
      "체험 후 10일 내 리뷰 작성"
    ],
    mission: [
      "케이스 착용 전후 비교",
      "일상 사용 중 보호 성능 테스트",
      "디자인 및 실용성 평가",
      "온라인 쇼핑몰에 후기 작성"
    ],
    schedule: "2024-02-10 ~ 2024-02-25 모집, 2024-03-01 발송, 2024-03-15 리뷰 마감"
  },
  4: {
    id: 4,
    title: "나이키 에어맥스 운동화 체험단",
    brand: "Nike",
    category: "스포츠",
    participants: 45,
    maxParticipants: 60,
    reward: "운동화 무료 제공",
    deadline: "2024-03-01",
    image: "https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20sneakers%20in%20fresh%20white%20and%20blue%20colorway%20displayed%20on%20clean%20white%20background%2C%20professional%20athletic%20footwear%20photography%20with%20dynamic%20shadows%20and%20modern%20presentation%20style%20perfect%20for%20sports%20product%20review%20campaigns&width=800&height=400&seq=detail-4&orientation=landscape",
    status: "모집중",
    description: "나이키의 대표 모델 에어맥스 운동화를 체험하고 운동 성능을 리뷰해주세요. 편안함과 스타일을 동시에 만족하는 프리미엄 운동화입니다.",
    requirements: [
      "만 18세 이상",
      "주 3회 이상 운동하는 분",
      "스포츠 관련 SNS 운영자 우대",
      "체험 후 2주 내 리뷰 작성"
    ],
    mission: [
      "운동화 착용 후 런닝 테스트",
      "일상 착용 편안함 평가",
      "다양한 운동 시 성능 테스트",
      "스포츠 커뮤니티에 후기 게시"
    ],
    schedule: "2024-02-15 ~ 2024-03-01 모집, 2024-03-05 발송, 2024-03-20 리뷰 마감"
  },
  5: {
    id: 5,
    title: "LG 울트라PC 노트북 체험단",
    brand: "LG",
    category: "전자제품",
    participants: 15,
    maxParticipants: 20,
    reward: "노트북 무료 제공 + 10만원",
    deadline: "2024-03-05",
    image: "https://readdy.ai/api/search-image?query=LG%20UltraPC%20laptop%20in%20sleek%20silver%20design%20opened%20on%20modern%20white%20desk%20setup%2C%20professional%20tech%20product%20photography%20with%20clean%20minimalist%20background%20and%20professional%20lighting%20perfect%20for%20electronics%20review%20campaign%20marketing&width=800&height=400&seq=detail-5&orientation=landscape",
    status: "모집중",
    description: "LG 울트라PC 노트북으로 업무 효율성을 체험해보세요. 가벼운 무게와 뛰어난 성능으로 모바일 워킹에 최적화된 프리미엄 노트북입니다.",
    requirements: [
      "IT 전문가 또는 관련 업무 종사자",
      "테크 리뷰 블로그 운영자",
      "노트북 사용 경험이 풍부한 분",
      "체험 후 1개월 내 상세 리뷰 작성"
    ],
    mission: [
      "언박싱 및 첫인상 리뷰",
      "업무용 소프트웨어 성능 테스트",
      "배터리 지속시간 측정",
      "IT 커뮤니티에 전문 리뷰 게시"
    ],
    schedule: "2024-02-20 ~ 2024-03-05 모집, 2024-03-10 발송, 2024-04-10 리뷰 마감"
  },
  6: {
    id: 6,
    title: "롯데 제로 음료 체험단",
    brand: "Lotte",
    category: "식품",
    participants: 150,
    maxParticipants: 300,
    reward: "제품 1박스 + 1만원",
    deadline: "2024-03-10",
    image: "https://readdy.ai/api/search-image?query=Lotte%20Zero%20sugar-free%20beverages%20in%20various%20flavors%20arranged%20beautifully%20on%20clean%20white%20surface%2C%20professional%20food%20and%20beverage%20photography%20with%20bright%20lighting%20and%20fresh%20presentation%20style%20perfect%20for%20food%20review%20campaigns&width=800&height=400&seq=detail-6&orientation=landscape",
    status: "모집중",
    description: "롯데 제로 음료의 다양한 맛을 체험하고 건강한 음료 생활을 시작해보세요. 설탕 제로, 칼로리 제로로 건강하게 즐길 수 있는 프리미엄 음료입니다.",
    requirements: [
      "만 19세 이상",
      "음료 리뷰에 관심이 있는 분",
      "SNS 활동이 활발한 분",
      "체험 후 1주 내 리뷰 작성"
    ],
    mission: [
      "다양한 맛 음료 시음 후기",
      "기존 음료와의 맛 비교",
      "일상 생활 속 음용 후기",
      "식품 리뷰 플랫폼에 후기 게시"
    ],
    schedule: "2024-02-25 ~ 2024-03-10 모집, 2024-03-15 발송, 2024-03-25 리뷰 마감"
  }
};

interface CampaignDetailProps {
  campaignId: string;
}

export default function CampaignDetail({ campaignId }: CampaignDetailProps) {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const campaign = campaignData[campaignId as unknown as keyof typeof campaignData];

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">캠페인을 찾을 수 없습니다</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-700">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  const progressPercent = (campaign.participants / campaign.maxParticipants) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-64 object-cover object-top"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium">
                {campaign.status}
              </span>
            </div>
            <div className="absolute top-6 right-6">
              <span className="bg-white/90 text-gray-800 px-3 py-2 rounded-lg font-medium">
                {campaign.category}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{campaign.title}</h1>
              <div className="flex items-center gap-4 text-lg">
                <span className="text-blue-600 font-semibold">{campaign.brand}</span>
                <span className="text-gray-600">마감일: {campaign.deadline}</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">참여 현황</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>현재 참여자</span>
                      <span className="font-medium">{campaign.participants}/{campaign.maxParticipants}명</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-blue-600 h-3 rounded-full transition-all"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">보상 혜택</h3>
                  <p className="text-green-600 font-semibold text-lg">{campaign.reward}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">일정</h3>
                  <p className="text-gray-700">{campaign.schedule}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">캠페인 소개</h3>
                <p className="text-gray-700 leading-relaxed">{campaign.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">참여 조건</h3>
                <ul className="space-y-2">
                  {campaign.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">미션 내용</h3>
                <ul className="space-y-2">
                  {campaign.mission.map((mission, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 pt-8 border-t">
              <button
                onClick={() => setShowApplyModal(true)}
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                지금 신청하기
              </button>
              <Link
                href="/"
                className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer"
              >
                목록으로
              </Link>
            </div>
          </div>
        </div>
      </div>

      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">체험단 신청</h3>
            <p className="text-gray-700 mb-6">
              {campaign.title} 체험단에 신청하시겠습니까?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowApplyModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
              >
                취소
              </button>
              <button
                onClick={() => {
                  setShowApplyModal(false);
                  alert('신청이 완료되었습니다!');
                }}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                신청하기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
