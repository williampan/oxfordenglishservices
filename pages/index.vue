<template>
  <main>
    <section class="intro-container">
      <div class="intro-text">
        <h1>{{ $t('home.header') }}</h1>
        <p>{{ $t('home.subhead') }}</p>
      </div>
    </section>
  </main>
</template>

<i18n lang="yaml">
en: 
  home: 
    header: We help students, researchers, and businesses communicate more effectively with an international audience.
    subhead: Our expertise covers specialized curriculum design, presentation coaching, advanced copywriting and editing, and university admissions counseling for international applicants.
kr: 
  home: 
    header: 저희 옥스퍼드 잉글리시 서비스(OES)는 세계 각국의 연구팀, 기관, 기업, 인재 대상으로 전문적인 컨설팅 서비스를 제공합니다.
    subhead: 저희는 비즈니스 글쓰기 및 편집, 프레젠테이션 코칭, 아시아 기업들을 위한 시장 조사, 그리고 국제 지원자를 위한 대학 입시 상담과 같은 분야에 대한 전문성을 가지고 있습니다.
</i18n>

<style scoped>
.intro-container { 
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), 30%, rgba(255, 255, 255, 0)), url("~assets/images/high-street.jpg"); 
  background-size: cover; 
  background-position: center; 
  height: 1200px; 
  display: flex;
}

.intro-text { 
    max-width: 1000px; 
    margin: 0 auto; 
    text-align: center; 
}

.intro-text p { 
  margin: 0 auto; 
}

img.hero-image { 
    max-width: 100%; 
}
</style>
