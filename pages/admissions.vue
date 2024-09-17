<template>
  <main>
    <section>
      <h1>{{ $t('admissions.header') }}</h1>
    </section>
    <section>
      <p>{{ $t('admissions.text') }}</p>
    </section>
    <section>
      <h3>{{ $t('admissions.services.header') }}</h3>
      <ul>
        <li v-for="(bullet, index) in $t('admissions.services.bullets')" :key="index">
          {{ bullet }}
        </li>
      </ul>
    </section>
    <section>
      <h3>{{ $t('admissions.approach.header') }}</h3>
      <p v-html="$t('admissions.approach.text')"></p>
      <p>{{ $t('admissions.video.text') }}</p>
      <div v-html="$t('admissions.video.video')"></div>
    </section>
    <section>
      <h3>{{ $t('admissions.steps.header') }}</h3>
      <ol>
        <li v-for="(number, index) in $t('admissions.steps.steps')" :key="index">
          {{ number }}
        </li>
      </ol>
    </section>
    <section>
      <div class="admissions">
        <div class="admission">
          <p>{{ $t('admissions.quote1.text') }}</p>
          <p style="font-weight: bold;">{{ $t('admissions.quote1.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ $t('admissions.quote2.text') }}</p>
          <p style="font-weight: bold;">{{ $t('admissions.quote2.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ $t('admissions.quote3.text') }}</p>
          <p style="font-weight: bold;">{{ $t('admissions.quote3.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ $t('admissions.quote4.text') }}</p>
          <p style="font-weight: bold;">{{ $t('admissions.quote4.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ $t('admissions.quote5.text') }}</p>
          <p style="font-weight: bold;">{{ $t('admissions.quote5.author') }}</p>
        </div>
      </div>
    </section>
    <section>
      <h3>{{ $t('admissions.contact.header') }}</h3>
      <p v-html="$t('admissions.contact.text')"></p>
    </section>
  </main>
</template>

<i18n lang="yaml">
kr: 
  admissions: 
    header: OES는 세계 일류 대학의 석사 과정과 박사 과정 입학을 전문으로 합니다.
    text: 세계적 명문 대학에서 박사 과정을 이수하는 저희 교사진은 그 경험을 바탕으로 통찰한 지원 과정과 전략의 개인적 노하우를 제공해 드릴 수 있습니다. 저희는 하버드, 옥스퍼드, 케임브리지, UIUC, 워싱턴 대학교, 조지타운, 콜로라도 대학교 볼더, 텍사스 대학교 오스틴, UW 매디슨, 인디애나 대학교 등, 수십 명의 지원자들이 박사와 석사 과정의 전액 장학금 제의를 받을 수 있도록 도왔습니다.
    services:
      header: "OES는 다음과 같은 입학 서비스를 제공합니다."
      bullets:
        - 지원 전략 및 프로그램 사전 조사
        - 이력서 및 경력 기술서(CV)
        - 학업 계획서(SOP)
        - 자기소개서(PS)
        - 온라인 원서 단답형 질문 및 에세이 검토(Common App, UCAS, UC System)
        - 면접 준비 (질문지 및 모의 면접)
        - 이메일 작성
    approach:
      header: OES 진행 방식
      text: SOP, CV, 연구 제안서 등과 같은 짧은 분량의 작문은 Google Meet와 Google Docs를 통해 실시간으로 함께 서류를 다듬으며, 각 지원자에게 적합한 전략을 논의하고 자신의 의미와 의도를 가장 잘 표현할 수 있는 방법을 찾습니다. 이 과정은 지원 전략, 브레인스토밍, 퇴고를 하나로 통합한 능률적인 수업입니다. 교사진에 대한 자세한 정보는 <a href='/services' target='_blank'>여기서 확인할 수 있습니다.</a>
    video:
      text: "OES의 입시 지원 절차를 이해하고 준비 과정을 배울 수 있는, 전 수강생이자 현 하버드 교육 대학원생의 유튜브 영상을 참고하시기 바랍니다."
      video: <iframe width="560" height="315" src="https://www.youtube.com/embed/bXMYaIppGb8?si=2EJ5Iph53cM4XT3z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    steps:
      header: "단계별 수업 절차 안내"
      steps:
        - 첫 수업에서는 일반적으로 지원 전략을 논의하고, CV나 교수님에게 전할 이메일 등의 예비 서류를 검토하고 수정합니다. (~1시간)
        - 보편적으로 첫 수업 이후 학생은 스스로 학업 계획서(SOP)와 자기소개서(PS) 초안을 작성해 봅니다.
        - 두 번째 수업에서는 주로 초안 수정을 중점적으로 다루며, 모든 대학에서 경쟁력 높은 양식이 되도록 학업 계획서를 변형합니다. 여기에는 본문과 진로 목표 문단이 해당되며, 개별 대학에 특화된 내용은 제외됩니다. (~90분)
        - 이후 추가적 수업은 각 대학의 ‘맞춤형’ 학업 계획서나 문서를 완성하는 데 몰입합니다. 이 단계에서는 더욱 효율적 진행을 위해 ‘오프라인’ 식 (영상 통화 대신 Google Docs 단독 사용) 작업이 시작됩니다. 특히 원서 마감이 임박한 경우, 추가 수업은 일주일 전 사전 요청을 부탁드리고 있습니다.
        - 지원 과정이 진행된 후, 모의 인터뷰나 지도 교수님에게 전할 중요한 메일 작성을 위한 추가적 수업 또한 제공해 드립니다.
    quote1:
      text: “OES Henry Weikel 선생님께는 수준이 다른 고급 영작법을 배울 수 있습니다. 해외대학원 학업계획서 첨삭 서비스를 받으며, 간결하고 적확한 영어를 구사하도록 지도받았습니다. 학점도 낮고, 학술지 출판 경력도 없는 제가 원하던 해외대학원에 장학금을 받고 합격할 수 있었던 이유는 헨리 선생님의 전문적인 도움 덕분입니다. 썸머 캠프를 통해, 어린 나이부터 영작 실력을 탄탄히 쌓아 나간다면, 여러분들은 10년 뒤 훨씬 큰 수확을 거둘 수 있으리라 믿어 의심치 않습니다!”
      author: 솔미는 2023년 장학금을 받고 캐나다의 여러 대학에서 석사 과정에 합격했습니다.
    quote2:
      text: “유학 준비 중 가장 큰 도움이 업체는 바로 OES 입니다. OES는 단순한 문장 구조 수정, 오타 확인이 아니라 제가 표현하고 싶은 바를 가장 세련된 영어 표현으로 바꿔주세요. 심지어 아주 빠른 속도로요! 뿐만 아니라, 원한다면 미국 문화에 맞는 스토리 라인 등등 다각도로 의견을 받을 수 있기 때문에 OES와 함께라면 완성도 높은 입시 원서를 만들 수 있습니다. 심지어 대학원 입시 프로세스를 직접 겪은 Henry가 도와주니 그의 조언과 의견은 매우 신뢰할 수 있겠죠? ㅎㅎ 참고로 저는 이 서비스를 통해 UC Berkeley에 합격하고, MIT Media Lab, Artcenter에 면접 기회를 얻을 수 있었습니다. 다른 분들에게도 적극적으로 추천드립니다!! Henry 화이팅 :)“
      author: 규연은 2024년에 캘리포니아 대학교 버클리에서 디자인 석사 과정에 합격했습니다.
    quote3:
      text: “저는 Henry Weikel님께 SOP와 PS 첨삭을 부탁드렸습니다. 이는 제가 유학을 준비하는 동안 가장 잘 한 선택 중 하나라고 생각할 정도로 만족스러웠습니다. 선생님께서는 제 서류의 내용을 정확하게 파악하려고 노력하십니다. 때문에 지원자가 의도하지 않은 방향으로 글이 수정되는일이 없고, 기존 문장 보다 더 정확하고 효과적으로 전달할 수 있는 표현들을 제시해주십니다. 교정을 넘어, 해당 문장이 문맥과 어울리는지 또는 어떤 정보를 추가/삭제 해야할지 등 더 매력적인 지원자가 될 수 있도록 함께 고민해주신다는 느낌도 받았습니다. 더불어 피드백은 1회성이 아닌, 지원 기간 동안 지속적으로 받을 수 있었고 정말 신속하기도 했습니다. 사실 지원 과정 중에는 무엇하나 확신하기가 쉽지 않은데 SOP와 PS만큼은 헨리님 피드백을 거치면 더 좋아질 것이라는 믿음이 있었기 때문에 큰 스트레스 없이 준비해나갈 수 있었습니다.”
      author: 소영 씨는 2023년에 전액 장학금을 받고 UW 매디슨의 석사 과정에 합격했습니다. OES는 지원 전략, 자기소개서, 이 력서 작성에 도움을 주었습니다. 그녀는 UC 볼더와 인디애나 대학교에도 합격했습니다.
    quote4:
      text: “한국에서 흔히 알려진 다른 첨삭 업체들도 겪어봤지만 OES는 단순한 단어나 문법 교정을 넘어서 서 글을 논리적이고 체계적으로 다듬을 수 있게 도와준 유일한 첨삭 업체였습니다. 그리고 대학원 수준의 공부를 한 컨설턴트이기 때문에 리서치에 대한 이해가 탁월했습니다. 처음에는 줌을 통해 실시간으로 첨삭을 받기 때문에 제가 원하는 글의 방향, 저의 관심분야와 연구주제를 헨리에게 전 달하기 편했습니다. 지원했던 석사 프로그램 4곳에 모두 합격하고, 장학금을 받을 수 있었던 데에 는 OES가 도움을 준 최상의 SOP가 큰 역할을 했다고 생각합니다. 추후 박사과정을 준비할 때도 OES에게 첨삭을 받을 계획입니다.“
      author: 2023년 OES는 민영이 지원한 4개의 석사 프로그램에 모두 합격할 수 있도록 장학금을 지원했습니다.
    quote5:
      text: “옥스퍼드 잉글리시 서비스를 통해 제가 전달하고자 하는 바를 글로써 더욱 명확하고 명쾌하게 풀어갈 수 있었어요. 줌을 통해 실시간으로 소통하며 첨삭했기 때문에 더욱 효과적이었던 것 같아요. 글의 레벨을 한 단계 업그레이드하고 싶으신 분들께 강력히 추천합니다.”
      author: 수정 씨는 2022년 하버드 교육대학원 박사 과정에 합격했습니다. OES는 지원 전략, 자기소개서, 이력서 작성에 도움 을 주었습니다. 또한 UCLA, 미네소타 대학교, 펜실베니아 주립대, UIUC에도 합격했습니다.	
    contact:
      header: 지금 바로 시작하세요!
      text: <a href="mailto:contact.oxford.english@gmail.com">contact.oxford.english@gmail.com</a> 으로 문의 주시기 바랍니다. 높은 수요로 인해 원서 마감일에 가까울수록 가격과 응답 시간이 달라질 수 있습니다. 빠른 문의를 추천 드립니다.
en: 
  admissions: 
    header: OES specializes in PhD and Master's degree admissions at top universities
    text: Our tutors study at the world’s top PhD programs, allowing them to share personal insight into the application process and strategy. We have helped dozens of applications receive fully funded offers from PhD and MA/MS programs at Harvard, Oxford, Cambridge, UIUC, the University of Washington, Georgetown, Colorado University Boulder, UT Austin, UW Madison, and the University of Indiana.
    services:
      header: "We offer the following admissions services:"
      bullets:
        - Application strategy and program research
        - Resume and CV
        - Statement of Purpose (SOP)
        - Personal Statement (PS)
        - Supplementary and Short Answer Questions (Common App, UCAS, UC System)
        - Interview preparation (question lists and practice sessions)
        - Email writing
    approach:
      header: Our Approach
      text: For shorter pieces of writing such as SOPs, CVs, and Research Proposals, we prefer to edit the document with you live over Google Meet and Google Docs so that we can discuss your strategy and find the best way to express your meaning. Our sessions integrate application strategy, brainstorming, and editing into one productive meeting. You can find more information about our tutors <a href='/services' target='_blank'>here</a>.
    video:
      text: To understand our application support process and learn how to prepare, check out this YouTube video from one of our former students, now at the Harvard Graduate School of Education
      video: <iframe width="560" height="315" src="https://www.youtube.com/embed/bXMYaIppGb8?si=2EJ5Iph53cM4XT3z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    steps:
      header: "Here is a step by step guide to our process:"
      steps:
      - In the first meeting, we typically discuss application strategy and review and edit any preliminary documents, such as your CV and emails expressing interest to professors. (~1 hour)
      - Following the first meeting, students normally go write a rough draft of their Statement of Purpose and Personal Statement on their own.
      - In our second session, we focus primarily on editing your rough draft to transform it into a strong template for all of your SOPs. This will include all of the main body paragraphs and your career goals, but nothing specific to individual schools. (~90min)
      - Moving forward, any additional sessions will be devoted to finishing “tailored” versions of your SOP or other documents. At this point, we can also start working “offline” (using only Google Docs rather than a video call) to make the process more efficient. Please allow one week’s notice when requesting any additional edits, particularly closer to application deadlines.
      - Once you advance in the application process, we offer additional sessions to practice for interviews or prepare important emails to supervisors.
    quote1:
      text: “Mr. Henry Weikel at OES teaches advanced English writing at a different level. I was able to get my academic plan for graduate school abroad critiqued, and I was taught how to write concise and precise English. With a low GPA and no journal publications, I was able to get a scholarship to my desired graduate school abroad because of Henry's professional help. If you take advantage of the Summer Camp to build your writing skills from a young age, you will reap a much bigger harvest in 10 years!”
      author: Ariel was accepted with full funding at multiple master's programs in Canada.
    quote2:
      text: “Oxford English Services helped me to be clearer and more articulate about what I wanted to convey in my writing, and I think it was even more effective because we interacted and revised in real time through Zoom. I highly recommend it to anyone who wants to take their writing to the next level.”
      author: Soojung was accepted into the Harvard Graduate School of Education's PhD program in 2022. OES helped her with her application strategy, personal statement, and resume. She was also accepted to UCLA, University of Minnesota, Penn State, and UIUC.	
    quote3:
      text: “I hired Henry Weikel to edit my SOP and PS, which I consider to be one of the best decisions I made during my study abroad preparation. He really tries to get to the heart of what I'm trying to say in my documents, so I don't end up writing in a way that I didn't intend, and he comes up with phrases that are more accurate and effective than the original sentences. Beyond proofreading, I also felt like he was thinking about whether the sentence made sense in context or what information I should add or delete to make me a more compelling applicant. In addition, the feedback was not a one-time thing, but a continuous process throughout the application period, and it was very prompt. It's hard to be sure of anything during the application process, but I knew that my SOPs and PS would be better with Henry's feedback, so I was able to prepare without much stress.”
      author: Soyoung was accepted to UW Madison's master's program in 2023 on a full scholarship. OES helped her with her application strategy, personal statement, and resume. She was also accepted to UC Boulder and Indiana University.
    quote4:
      text: “I've tried other commonly known editing companies in Korea, but OES was the only one that went beyond just correcting words and grammar to help me refine my writing to make it logical and organized. He also has an excellent understanding of research as he has studied at the graduate level. I was able to communicate to Henry the direction I wanted my writing to go in, my interests and research topics, as I was able to do so in real-time via Zoom. I believe that the best SOPs that OES helped me with were a big part of the reason I was accepted into all four master's programs I applied to and received scholarships. I plan to use OES for my future PhD studies as well.”
      author: In 2023, OES helped Minyoung get into all four master's programs she applied to with scholarships.
    quote5:
      text: “OES helped me the most while preparing to study abroad. OES doesn't just correct sentence structure or check for typos. They also change your expressions into the most sophisticated English. And they do it very quickly! Not only that, but if you want, you can get opinions from various angles, such as what storyline fits American culture, so with OES, you can submit a high-quality application. And since Henry, who has personally experienced the graduate school admissions process, will help you, his advice and opinions are very trustworthy. For reference, I was accepted to UC Berkeley and had an interview opportunity at MIT Media Lab and Artcenter through this service. I highly recommend it to others!! :)”
      author: Gyuyeon was accepted to UC Berkeley for a Master's in Design in 2024.
    contact:
      header: Get Started Today
      text: Email us at <a href="mailto:contact.oxford.english@gmail.com">contact.oxford.english@gmail.com</a> to get started! Due to significant demand, our prices and response times will change based on how soon application deadlines are. Getting started early is the best approach!
</i18n>

<script>
  export default {
    async asyncData({ $content }) {
      const affiliations = await $content('affiliations').fetch()

      return { 
        affiliations
      }
    }
  }
</script>


<style scoped>
.admissions {
    margin-top: 50px; 
    display: grid; 
    grid-template-rows: 100%; 
    grid-template-columns: repeat(4, auto); 
    gap: 0 20px;  
}

@media screen and (max-width: 1500px) {
    .admissions {
        grid-template-rows: repeat(2, auto); 
        grid-template-columns: repeat(2, auto); 
    }
}

@media screen and (max-width: 900px) {
    .admissions { 
        grid-template-rows: repeat(4, auto); 
        grid-template-columns: auto; 
    }
}

.affiliations-grid {
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
  align-items: center; 
  gap: 30px 0; 
}

.affiliation-container {
  width: 25%;
  text-align: center;  
}

.affiliation-container img {
  max-width: 75%; 
}

@media screen and (max-width: 1500px) {
  .affiliation-container { 
    width: 33.3333%; 
  }
}

@media screen and (max-width: 900px) {
  .affiliation-container { 
    width: 50%; 
  }
}

@media screen and (max-width: 600px) {
  .affiliation-container { 
    width: 100%; 
  }
}

</style>
