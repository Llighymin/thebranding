
'use client';

import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">개인정보처리방침</h1>
          <p className="text-gray-600">최종 업데이트: 2024년 1월 1일</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제1조 (개인정보의 처리목적)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>당사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <div className="ml-4 space-y-1">
                <p>① 회원가입 및 관리: 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지 목적</p>
                <p>② 체험단 서비스 제공: 체험단 모집 정보 제공, 체험단 선정 및 매칭, 제품 배송, 리뷰 관리</p>
                <p>③ 마케팅 및 광고에의 활용: 신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공</p>
                <p>④ 고객 문의 처리: 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제2조 (개인정보의 처리 및 보유기간)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
              <p>② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
              <div className="ml-4 space-y-1">
                <p>- 회원가입 및 관리: 회원 탈퇴 시까지 (단, 관계법령 위반에 따른 수사·조사 등이 진행중인 경우에는 해당 수사·조사 종료 시까지)</p>
                <p>- 체험단 서비스 제공: 서비스 제공 완료 후 3년</p>
                <p>- 전자상거래에서의 계약·청약철회 등에 관한 기록: 5년</p>
                <p>- 전자상거래에서의 대금결제 및 재화 등의 공급에 관한 기록: 5년</p>
                <p>- 전자상거래에서의 소비자 불만 또는 분쟁처리에 관한 기록: 3년</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제3조 (처리하는 개인정보의 항목)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 다음의 개인정보 항목을 처리하고 있습니다.</p>
              <div className="ml-4 space-y-3">
                <div>
                  <p className="font-medium">필수항목:</p>
                  <p>- 이름, 이메일주소, 휴대전화번호, 생년월일, 성별</p>
                  <p>- 체험단 참여 시: 주소, 관심분야</p>
                </div>
                <div>
                  <p className="font-medium">선택항목:</p>
                  <p>- 프로필 사진, 자기소개</p>
                </div>
                <div>
                  <p className="font-medium">자동 수집 항목:</p>
                  <p>- IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제4조 (개인정보의 제3자 제공)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
              <p>② 당사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다.</p>
              <div className="ml-4 space-y-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">제공받는자: 체험단 모집 기업</p>
                  <p>제공받는자의 이용목적: 체험단 선정, 제품 배송, 체험 진행</p>
                  <p>제공하는 개인정보 항목: 이름, 휴대전화번호, 주소</p>
                  <p>제공받는자의 보유·이용기간: 체험 완료 후 1년</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제5조 (개인정보처리의 위탁)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.</p>
              <div className="ml-4 space-y-2">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">위탁받는 자: AWS (Amazon Web Services)</p>
                  <p>위탁하는 업무의 내용: 클라우드 서버 운영 및 데이터 보관</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">위탁받는 자: 배송업체</p>
                  <p>위탁하는 업무의 내용: 체험 제품 배송 서비스</p>
                </div>
              </div>
              <p>② 당사는 위탁계약 체결 시 개인정보보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제6조 (정보주체의 권리·의무 및 행사방법)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 정보주체는 당사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
              <div className="ml-4 space-y-1">
                <p>- 개인정보 처리현황 통지요구</p>
                <p>- 개인정보 열람요구</p>
                <p>- 개인정보 정정·삭제요구</p>
                <p>- 개인정보 처리정지요구</p>
              </div>
              <p>② 제1항에 따른 권리 행사는 개인정보보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 당사는 이에 대해 지체없이 조치하겠습니다.</p>
              <p>③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 당사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제7조 (개인정보의 안전성 확보조치)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>당사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.</p>
              <div className="ml-4 space-y-1">
                <p>① 개인정보 취급 직원의 최소화 및 교육: 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.</p>
                <p>② 해킹 등에 대비한 기술적 대책: 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.</p>
                <p>③ 개인정보의 암호화: 이용자의 개인정보는 비밀번호는 암호화되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.</p>
                <p>④ 접속기록의 보관 및 위변조 방지: 개인정보처리시스템에 접속한 기록을 최소 1년 이상 보관, 관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능을 사용하고 있습니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제8조 (개인정보보호책임자)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 당사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.</p>
              <div className="ml-4 bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">개인정보보호책임자</p>
                <p>성명: 홍길동</p>
                <p>직책: 개인정보보호팀장</p>
                <p>연락처: privacy@company.com</p>
                <p>전화번호: 02-1234-5678</p>
              </div>
              <p>② 정보주체께서는 당사의 서비스를 이용하시면서 발생한 모든 개인정보보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보보호책임자 및 담당부서로 문의하실 수 있습니다.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제9조 (권익침해 구제방법)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>정보주체는 아래의 기관에 대해 개인정보 침해신고를 할 수 있습니다. 아래의 기관은 당사와는 별개의 기관으로서, 당사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.</p>
              <div className="ml-4 space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">개인정보보호위원회</p>
                  <p>소관업무: 개인정보보호법 위반신고</p>
                  <p>홈페이지: privacy.go.kr</p>
                  <p>전화번호: (국번없이) 182</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">개인정보분쟁조정위원회</p>
                  <p>소관업무: 개인정보 분쟁조정신청</p>
                  <p>홈페이지: www.kopico.go.kr</p>
                  <p>전화번호: (국번없이) 1833-6972</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">대검찰청 사이버범죄수사단</p>
                  <p>소관업무: 개인정보보호법 위반 신고</p>
                  <p>홈페이지: www.spo.go.kr</p>
                  <p>전화번호: 02-3480-3573</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제10조 (개인정보처리방침 변경)</h2>
            <div className="text-gray-700 leading-relaxed space-y-2">
              <p>① 이 개인정보처리방침은 2024년 1월 1일부터 적용됩니다.</p>
              <p>② 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/terms"
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center whitespace-nowrap"
            >
              이용약관 보기
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
