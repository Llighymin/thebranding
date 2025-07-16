
'use client';

import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">이용약관</h1>
          <p className="text-gray-600">최종 업데이트: 2024년 1월 1일</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제1조 (목적)</h2>
            <p className="text-gray-700 leading-relaxed">
              이 약관은 체험단 플랫폼 서비스(이하 "서비스")를 이용함에 있어 당사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제2조 (정의)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① "서비스"란 당사가 제공하는 체험단 매칭 플랫폼을 의미합니다.</p>
              <p>② "회원"이란 당사의 약관에 동의하고 개인정보를 제공하여 회원등록을 한 자를 의미합니다.</p>
              <p>③ "체험단"이란 기업이 제공하는 제품을 체험하고 리뷰를 작성하는 회원을 의미합니다.</p>
              <p>④ "기업회원"이란 제품 체험단을 모집하는 기업 또는 개인사업자를 의미합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제3조 (약관의 효력 및 변경)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 이 약관은 당사 웹사이트에 게시함으로써 효력이 발생합니다.</p>
              <p>② 당사는 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력이 발생합니다.</p>
              <p>③ 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제4조 (회원가입)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 이용자는 당사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
              <p>② 당사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</p>
              <p className="ml-4">- 가입신청자가 이전에 회원자격을 상실한 적이 있는 경우</p>
              <p className="ml-4">- 실명이 아니거나 타인의 명의를 이용한 경우</p>
              <p className="ml-4">- 허위의 정보를 기재하거나, 당사가 제시하는 내용을 기재하지 않은 경우</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제5조 (회원의 의무)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 회원은 다음 행위를 하여서는 안 됩니다.</p>
              <p className="ml-4">- 신청 또는 변경 시 허위 내용의 등록</p>
              <p className="ml-4">- 타인의 정보 도용</p>
              <p className="ml-4">- 당사가 게시한 정보의 변경</p>
              <p className="ml-4">- 당사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</p>
              <p className="ml-4">- 당사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</p>
              <p className="ml-4">- 당사와 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제6조 (서비스의 제공 및 변경)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 회원에게 아래와 같은 서비스를 제공합니다.</p>
              <p className="ml-4">- 체험단 모집 정보 제공</p>
              <p className="ml-4">- 체험단 신청 및 매칭 서비스</p>
              <p className="ml-4">- 리뷰 작성 및 관리 서비스</p>
              <p className="ml-4">- 기타 당사가 정하는 서비스</p>
              <p>② 당사는 서비스를 일정범위로 분할하여 각 범위별로 이용가능시간을 별도로 지정할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제7조 (서비스의 중단)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
              <p>② 당사는 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때에는 서비스의 전부 또는 일부를 제한하거나 정지할 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제8조 (계약해지 및 이용제한)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 온라인을 통해 당사에 해지신청을 하여야 합니다.</p>
              <p>② 당사는 회원이 다음 각 호의 사유에 해당하는 경우, 사전통지 없이 이용계약을 해지하거나 또는 기간을 정하여 서비스 이용을 중단할 수 있습니다.</p>
              <p className="ml-4">- 가입 신청 시에 허위 내용을 등록한 경우</p>
              <p className="ml-4">- 다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</p>
              <p className="ml-4">- 서비스를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제9조 (손해배상 등)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 당사가 고의 또는 중과실로 인한 손해를 제외하고는 이에 대하여 책임을 부담하지 아니합니다.</p>
              <p>② 당사는 회원으로부터 개인정보를 수집할 때 개인정보보호법 등 관련 법령상의 개인정보보호 규정을 준수합니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제10조 (분쟁해결)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 회원이 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</p>
              <p>② 당사와 회원간에 발생한 전자상거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/privacy"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center whitespace-nowrap"
            >
              개인정보처리방침 보기
            </Link>
            <Link 
              href="/"
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors text-center whitespace-nowrap"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
