
'use client';

import Link from 'next/link';

const campaigns = [
  {
    id: 1,
    title: "삼성 갤럭시 버즈 프로 체험단",
    brand: "Samsung",
    category: "전자제품",
    participants: 50,
    maxParticipants: 100,
    reward: "제품 무료 제공 + 5만원",
    deadline: "2024-02-15",
    image: "https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20Buds%20Pro%20wireless%20earbuds%20in%20elegant%20white%20color%20on%20clean%20minimalist%20background%2C%20professional%20product%20photography%20with%20soft%20lighting%20and%20subtle%20shadows%2C%20high-end%20tech%20product%20presentation%20style%20perfect%20for%20review%20campaigns&width=300&height=200&seq=campaign-1&orientation=landscape",
    status: "모집중"
  },
  {
    id: 2,
    title: "다이슨 에어랩 헤어스타일러 체험단",
    brand: "Dyson",
    category: "뷰티",
    participants: 25,
    maxParticipants: 30,
    reward: "제품 무료 제공",
    deadline: "2024-02-20",
    image: "https://readdy.ai/api/search-image?query=Dyson%20Airwrap%20hair%20styler%20in%20rose%20gold%20color%20with%20various%20attachment%20heads%20displayed%20elegantly%20on%20white%20marble%20surface%2C%20luxury%20beauty%20product%20photography%20with%20professional%20lighting%20and%20sophisticated%20composition%20for%20premium%20review%20platform&width=300&height=200&seq=campaign-2&orientation=landscape",
    status: "모집중"
  },
  {
    id: 3,
    title: "아이폰 15 프로 케이스 체험단",
    brand: "Apple",
    category: "액세서리",
    participants: 80,
    maxParticipants: 200,
    reward: "케이스 무료 제공 + 2만원",
    deadline: "2024-02-25",
    image: "https://readdy.ai/api/search-image?query=Premium%20iPhone%2015%20Pro%20cases%20in%20various%20colors%20including%20clear%20transparent%20black%20and%20brown%20leather%20cases%20arranged%20beautifully%20on%20white%20surface%2C%20professional%20product%20photography%20for%20tech%20accessory%20review%20campaign%20with%20clean%20modern%20aesthetics&width=300&height=200&seq=campaign-3&orientation=landscape",
    status: "모집중"
  },
  {
    id: 4,
    title: "나이키 에어맥스 운동화 체험단",
    brand: "Nike",
    category: "스포츠",
    participants: 45,
    maxParticipants: 60,
    reward: "운동화 무료 제공",
    deadline: "2024-03-01",
    image: "https://readdy.ai/api/search-image?query=Nike%20Air%20Max%20sneakers%20in%20fresh%20white%20and%20blue%20colorway%20displayed%20on%20clean%20white%20background%2C%20professional%20athletic%20footwear%20photography%20with%20dynamic%20shadows%20and%20modern%20presentation%20style%20perfect%20for%20sports%20product%20review%20campaigns&width=300&height=200&seq=campaign-4&orientation=landscape",
    status: "모집중"
  },
  {
    id: 5,
    title: "LG 울트라PC 노트북 체험단",
    brand: "LG",
    category: "전자제품",
    participants: 15,
    maxParticipants: 20,
    reward: "노트북 무료 제공 + 10만원",
    deadline: "2024-03-05",
    image: "https://readdy.ai/api/search-image?query=LG%20UltraPC%20laptop%20in%20sleek%20silver%20design%20opened%20on%20modern%20white%20desk%20setup%2C%20professional%20tech%20product%20photography%20with%20clean%20minimalist%20background%20and%20professional%20lighting%20perfect%20for%20electronics%20review%20campaign%20marketing&width=300&height=200&seq=campaign-5&orientation=landscape",
    status: "모집중"
  },
  {
    id: 6,
    title: "롯데 제로 음료 체험단",
    brand: "Lotte",
    category: "식품",
    participants: 150,
    maxParticipants: 300,
    reward: "제품 1박스 + 1만원",
    deadline: "2024-03-10",
    image: "https://readdy.ai/api/search-image?query=Lotte%20Zero%20sugar-free%20beverages%20in%20various%20flavors%20arranged%20beautifully%20on%20clean%20white%20surface%2C%20professional%20food%20and%20beverage%20photography%20with%20bright%20lighting%20and%20fresh%20presentation%20style%20perfect%20for%20food%20review%20campaigns&width=300&height=200&seq=campaign-6&orientation=landscape",
    status: "모집중"
  }
];

export default function FeaturedCampaigns() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            인기 체험단 모집
          </h2>
          <p className="text-xl text-gray-600">
            지금 참여 가능한 인기 체험단을 확인해보세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img 
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {campaign.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                    {campaign.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{campaign.title}</h3>
                  <p className="text-blue-600 font-medium">{campaign.brand}</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">참여자</span>
                    <span className="font-medium">{campaign.participants}/{campaign.maxParticipants}명</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(campaign.participants / campaign.maxParticipants) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">보상</span>
                    <span className="font-medium text-green-600">{campaign.reward}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">마감일</span>
                    <span className="font-medium">{campaign.deadline}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/campaigns/${campaign.id}`}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block whitespace-nowrap cursor-pointer"
                >
                  지금 참여하기
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/campaigns"
            className="bg-gray-100 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
          >
            모든 체험단 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
