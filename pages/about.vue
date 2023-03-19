<template>
  <main>
    <section>
      <h1>{{ $t('about.header') }}</h1>
    </section>
    <section>
      <p>{{ $t('about.text') }}</p>
    </section>
    <section>
      <h2>{{ $t('about.team.header') }}</h2>
      <div class="team-grid">
        <template v-for="member in team.list">
          <div class="member" :key="member.alt">
            <img :src="require(`~/assets/images/team/${member.image}`)" :alt="member.alt" />
            <p>{{ $t(`about.team.members.${member.key}`) }}</p>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<i18n lang="yaml">
en: 
  about: 
    header: We are a team of educators, writers, consultants, and researchers.
    text: Oxford English Services has its roots at the University of Oxford, where two graduate students realized the need for technical, academic, and professional English language services across Asia. After working with clients on a freelance basis for a number of years, they gathered a group of talented graduates from top universities in the UK and America, ready to help with your written work, product copy, presentations, and interview preparation.
    team: 
      header: Our team
      members: 
        henry: Henry Weikel has extensive experience in academic, technical, and creative communication. After studying at Berkeley, he completed his Masters in English Literature at Oxford and then worked as a product manager and copywriter for multiple start-ups in London. He now manages Oxford English Services, where he works on projects involving global communication, research, and university admissions. As an admissions consultant, he has helped dozens of students secure undergraduate and graduate offers from schools like Oxford, Cambridge, and Harvard. As a writer and speaking coach, his long term clients include a Korean government agency; multiple start-ups; and leading academics at universities like SNU, KAIST, and Korea University.  
        daniel: Daniel Ortiz is a researcher, writer, and teacher. He has worked with a wide range of students on academic English from a highschool to a graduate student level, and has overseen the publication of journals in subjects as diverse as creative fiction and American politics. After completing degrees at the University of Chicago and the University of Oxford, where he was a fully-funded Clarendon Scholar, he is now pursuing a PhD in Switzerland.
        sungwon: Sungwon Han is a research student working on neuroscience and psychiatry. He studied chemistry in South Korea and then pharmacology and psychiatry at the University of Oxford, where he met Henry and Daniel. He has published research articles in journals including the Journal of Neuroscience under the supervision of Dr Tommas Ellender. His research interests include dynamic networks among several sub-regions in the brain such as the cortex, basal ganglia, and thalamus, aiming to contribute to better treatments of psychiatric conditions like OCD. 
        alasdair: Having worked with students from top English public schools such as Eton, Alasdair Dow is an experienced tutor of both History and English Literature at GCSE and A-Level. A graduate of the Universities of London (first-class) and Oxford (MSt, Merit), Alasdair also welcomes applicants to UK schools and universities who seek guidance throughout the admissions process. 
        ian: Ian Erickson is a Dean’s Merit Scholar at the Harvard Graduate School of Design where he is pursuing a Masters of Architecture. He is the founding editor of Disc. Journal, a yearly book-length publication exploring technology and media. He has extensive experience writing and editing scholarly work published in Princeton, Yale, and Cambridge journals and contributing to the Seoul and Venice Biennales of Architecture. He has advised many successful applicants to top graduate programs in architecture, design, and related fields. He currently lives in San Francisco.
        pusic: Michael Pusic has experience in high-level communications roles across a variety of sectors. After completing his degree in Economics and Comparative Literature at Columbia University, he went on to the University of Oxford, where he was a fully-funded Clarendon Scholar. He now specializes in international development, with experience at McKinsey & Company and the US International Development Finance Corporation. At OES, Michael helps students applying to top law schools and consulting firms in the US.
kr: 
  about: 
    header: 저희는 교육자, 작가, 컨설턴트 및 연구원으로 구성된 팀입니다.
    text: 저희 옥스퍼드 잉글리시 서비스(Oxford English Services; OES)는 영국 옥스퍼드대학을 졸업한 2명의 학생들로부터 출범하였습니다. 이 설립자 2명은 학술적 및 전문적인 영어 첨삭/지도/조언을 필요로 하는 외국인들이 많은 것을 보고 본 서비스를 구상하기 시작하였습니다. 저희 OES가 그 동안 비영어권 고객들에게 지원해온 서비스는 영국/미국/캐나다 지역 대학의 입시(입학원서, 자기소개서, 연구계획서, 커버레터, 면접), 대학원 학위논문(영어 문법/어법 첨삭), 국제 연구과제 수주(연구계획서, 프리젠테이션), 박사후 연구원의 북미/유럽 지역 채용 지원(연구계획서, 자기소개서, 커버레터, 면접, 프리젠테이션) 등이 있습니다. 고객들의 문의를 단순한 차원에서 번역하는 데 그치지 않고, 전문적인 수준의 첨삭, 문맥/논지 전개 논의, 제출서류에 기반한 프리젠테이션 컨설팅 등 다면적이고 전문적인 수준으로 지원해드립니다. 실제 성공/합격 사례로는 영국 옥스퍼드대학 박사과정 합격자, 영국 케임브리지대학 박사후연구원 채용 합격자 등 다수가 있습니다.
    team:
      header: 구성원 소개
      members: 
        henry: Henry Weikel 씨는 디자인, 기술, 공학, 교육 분야의 고객들에 대하여 작문 및 웹 컨텐츠를 담당한 경력이 있습니다. 많은 아시아인 학생들에게 학술 영어를 지도한 경력 외에도, Henry 씨는 머신러닝 관련 공공정책을 다루는 기업 전략 보고서를 작성한 경험도 있습니다. 그는 미국 UC 버클리 대학 학사학위(영문학)와 영국 옥스퍼드대학 석사학위(영문학)를 취득하였으며, 현재 영국 런던에서 거주하며 옥스퍼드 영어 서비스 (OES) 를 관리하고 있습니다.
        daniel: Daniel Ortiz 씨는 연구자, 작가, 편집자, 교사, 그리고 번역가로서 활동하고 있습니다. 그는 고등학교부터 대학원 학위과정에 이르는 학생들을 대상으로 학술 영어를 가르친 적이 있습니다. 이 밖에도 소설, 픽션, 미국정치 등 다양한 범위의 학술지 출간 감독을 맡은 경력이 있습니다. 그는 미국 University of Chicago 에서 학사학위와 영국 옥스퍼드대학에서 석사학위를 취득하였습니다. 옥스퍼드대학에서는 매년마다 대학 전체에서 극소수만 선발되는 클라렌던 장학생 (Clarendon Scholar) 으로서 수학하였습니다 (2019/2020 학년도 옥스퍼드대학 석사과정 MSt in English 전공). 
        ian: Ian Erickson 씨는 미국 하버드대학 디자인 대학원에서 Dean’s Merit Scholar 로서 건축학 석사과정을 수학하고 있습니다. 그는 Disc. Journal이라는 공학 및 미디어 분야 학술지의 founding editor이며, 프린스턴대학, 예일대학, 케임브리지대학의 건축 분야 학술지에서 게재 및 편집 경력이 모두 있습니다. 2019 년 서울 도시 건축 비엔날레의 ‘The Open Workshop’이라는 작품, 그리고 2021 년 베네치아 건축 비엔날레의 터키관 업무에도 참여한 바 있습니다. 아울러 그는 많은 학생들을 대상으로 건축, 디자인, 유관 분야의 세계 명문대 입시 컨설팅을 지도한 바 있습니다. 
        pusic: Michael Pusic 씨는 다양한 분야의 고급 커뮤니케이터로서 활약한 경험이 있습니다. 그는 유명 컨설팅 회사인 맥킨지 (McKinsey & Company), 그리고 조 바이든(Joe Biden) 제 59 대 미국 대통령 선거 (2020 년) 캠프에서 활동했습니다. 그의 최근 저술 범위는 미국-중국 외교 정책, 기업 내 양성 평등, 경제 개발 등 정치/사회/경제 분야에 걸쳐 있습니다. 그는 미국 컬럼비아대학(뉴욕) 학사학위(경제 및 비교문학 전공)와 영국 옥스퍼드대학 석사학위(영문학)를 수학하였습니다. 옥스퍼드대학에서는 매년마다 학교 전체에서 극소수만 선발하는 클라렌던 장학생 (Clarendon Scholar) 으로서 선발되는 명예를 누렸습니다 (2019/2020 학년도 옥스퍼드대학 석사과정 MSt English and American Studies 전공). 그는 현재 미국 워싱턴 DC에서 매니지먼트 컨설턴트로서도 일하고 있습니다.
        alasdair: 이튼 컬리지 등 여러 곳의 영국의 명문 사립학교에서 재직한 Alasdair Dow 씨는 영국 GCSE와 A-Level의 역사 및 영문학 과목을 전문적으로 가르친 경험이 있고, 런던대학(학사학위, First Class)과 옥스퍼드대학(석사학위, Merit)에서 우수한 성적으로 학위를 취득하였습니다. 자기소개서, 연구계획서, 면접, 입시전략 등 영어권 국가의 대학 학부 및 대학원 입시를 효율적으로 지도해줄 것입니다.
        sungwon: 한성원은 뇌과학과 정신의학 분야에서 연구생으로 활동하고 있습니다. 그는 대한민국에서 화학을 공부한 뒤, 옥스포드 대학교에서 약리학과 정신의학을 전공하면서 Henry와 Daniel을 만났습니다. 그는 Dr. Tommas Ellender의 지도 아래 Journal of Neuroscience 등 다양한 학술지에 논문을 발표하였습니다. 그의 연구 관심사는 대뇌 피질, 기저핵 및 샘상부 등 뇌의 여러 하위 영역 간의 동적 네트워크를 포함하며, 이를 통해 강박증과 같은 정신질환의 치료 개선에 기여하고자 합니다.
</i18n>

<script>
  export default {
    async asyncData({ $content }) {
      const team = await $content('team').fetch()

      return { 
        team
      }
    }
  }
</script>

<style scoped>
.team-grid {
  display: flex; 
  flex-wrap: wrap; 
  justify-content: left; 
  --gap-width: 30px; 
  gap: var(--gap-width); 
}

.member {
  width: 100%; 
}

@media screen and (min-width: 600px) {
  .member {
    width: calc((100% - 1 * var(--gap-width)) / 2); 
  }
}

@media screen and (min-width: 900px) {
  .member {
    width: calc((100% - 2 * var(--gap-width)) / 3); 
  }
}

@media screen and (min-width: 1200px) {
  .member {
    width: calc((100% - 3 * var(--gap-width)) / 4); 
  }
}

@media screen and (min-width: 1500px) {
  .member {
    width: calc((100% - 4 * var(--gap-width)) / 5); 
  }
} 

.member img {
  max-width: 100%; 
}
</style>
