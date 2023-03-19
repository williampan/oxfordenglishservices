<template>
  <main>
    <section>
      <h1>{{ $t('services.header') }}</h1>
      <div class="services">
        <div class="service">
          <h3>{{ $t('services.copywriting.header') }}</h3>
          <p>{{ $t('services.copywriting.text') }}</p>
        </div>
        <div class="service">
          <h3>{{ $t('services.consulting.header') }}</h3>
          <p>{{ $t('services.consulting.text') }}</p>
        </div>
        <div class="service">
          <h3>{{ $t('services.editing.header') }}</h3>
          <p>{{ $t('services.editing.text') }}</p>
        </div>
        <div class="service">
          <h3>{{ $t('services.admissions.header') }}</h3>
          <p>{{ $t('services.admissions.text') }}</p>
        </div>
      </div>
    </section>
    <section>
      <h2>{{ $t('services.affiliations.header') }}</h2>
      <div class="affiliations-grid">
        <template v-for="affiliation in affiliations.list">
          <div class="affiliation-container" :key="affiliation.filename">
            <img :src="require(`~/assets/images/affiliations/${affiliation.filename}`)" :alt="affiliation.alt" />
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<i18n lang="yaml">
en: 
  services: 
    header: We help with copywriting, research, editing, and university admissions.
    copywriting: 
      header: Copywriting
      text: We are experts at crafting engaging business copy for websites, apps, products, press releases, and advertisements. Our consultants can assist you through the whole copywriting process, from determining the right tone for your international target audience to publishing content localized for regional markets.
    consulting: 
      header: Global research & consulting
      text: We work with businesses in a variety of sectors to identify and reach their international market. Our process involves establishing relationships with international counterparts, conducting focus groups and promotional campaigns, and delivering in-depth regional market research.
    editing: 
      header: Editing
      text: Our consultants are writers in a wide range of fields, with experience editing both academic and business documents. We will work with you to help express your ideas clearly in natural and native sounding English. Particular specialities include client bids, technical or research documents, journal articles, and academic essays.
    admissions: 
      header: University admissions
      text: We have all graduated from top universities in the UK and the US and are very familiar with undergraduate and graduate admissions processes. We can read and edit your essays, guide you through the application cycle, and provide you with insider tips about elite schools in the English-speaking world. See some of our successes below.
    affiliations: 
      header: Our clients attend...
kr: 
  services: 
    header: 서비스 종류
    copywriting: 
      header: 카피라이팅
      text: 저희 OES는 기업의 홈페이지, 소셜미디어(SNS), 스마트폰 어플리케이션, 상품, 보도자료, 광고 등에 관한 영문 카피라이팅을 전문적으로 지도해드립니다. 저희 OES의 컨설턴트들이 카피라이팅 과정을 통하여 외국 고객 타게팅 전략, 현지화/지역에 알맞은 문안 조정 등을 지원드릴 것입니다.
    consulting: 
      header: 면접 및 프리젠테이션
      text: 저희 OES는 모의 영어 면접 서비스를 제공합니다. 목적과 설득대상에 따른 컨텐츠 작성, 발음 및 어감 조정, 발표자의 장단점을 고려한 질의응답 준비 등을 전문적으로 지원드립니다. Pitch Contest(짧은 시간의 발표), 비즈니스 프리젠테이션, 학부/대학원 입시 면접, 박사후연구원(외국 대학) 및 취업(외국 기업) 면접 등이 해당합니다.
    editing: 
      header: 교정 및 첨삭
      text: 저희 OES 컨설턴트들은 학술 분야와 비즈니스 분야의 매우 다양한 주제에서 작가 혹은 편집자로서 활동해왔으며, 영어 문법 및 문맥에 관한 지도 수준은 그 어느 곳과도 비교해서 뒤지지 않는 최고 수준임을 자부합니다. 저희 OES는 고객 여러분의 글을 논리적이고 체계적으로 다듬도록 도와드리고, 문맥에 맞게 세련되거나 적합한 표현을 지도해드릴 것입니다. 학위논문 및 학술지 논문 제출, 비즈니스 및 법률 작문, 대학 및 대학원 입시 원서, 박사후 연구원 채용 준비, 기업 채용 준비 등 다양한 분야의 영어 작문을 첨삭해드립니다.
    admissions: 
      header: 학부/대학원 입시
      text: 저희 OES의 컨설턴트들은 미국과 영국의 명문대학에서 학부 및 대학원 학위과정을 졸업하였습니다. 또한 지금까지도 많은 고객들의 학부 및 대학원 입시를 지원드리고 성공사례를 축적해왔습니다. 저희 OES는 귀하의 입시원서, 자기소개서, 연구계획서, 커버레터, 이력서, 면접 등을 매우 구체적이고 전문적으로 지원드릴 것입니다. 고객 여러분의 잠재력과 능력을 심사위원들이 명확하게 이해할 수 있도록 큰 힘이 되어드리겠습니다.
    affiliations: 
      header: OES 서비스 이용 고객들의 소속, 입학, 취업 기관 목록
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
.services {
    margin-top: 50px; 
    display: grid; 
    grid-template-rows: 100%; 
    grid-template-columns: repeat(4, auto); 
    gap: 0 20px;  
}

@media screen and (max-width: 1500px) {
    .services {
        grid-template-rows: repeat(2, auto); 
        grid-template-columns: repeat(2, auto); 
    }
}

@media screen and (max-width: 900px) {
    .services { 
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