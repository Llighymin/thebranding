
'use client';

const stats = [
  {
    number: "50,000+",
    label: "완료된 리뷰",
    icon: "ri-star-line"
  },
  {
    number: "10,000+",
    label: "활성 사용자",
    icon: "ri-user-line"
  },
  {
    number: "500+",
    label: "파트너 브랜드",
    icon: "ri-building-line"
  },
  {
    number: "95%",
    label: "만족도",
    icon: "ri-thumb-up-line"
  }
];

export default function Stats() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            신뢰할 수 있는 플랫폼
          </h2>
          <p className="text-xl text-blue-100">
            수많은 사용자들이 선택한 체험단 플랫폼입니다
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
