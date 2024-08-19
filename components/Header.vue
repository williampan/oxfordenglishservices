<template>
  <header>
    <nav>
      <NuxtLink id="home-link" :to="localePath('/')">Oxford English Services</NuxtLink>
      <div id="small-links">
        <NuxtLink :to="localePath('/about')">{{ $t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/services')">{{ $t('nav.services') }}</NuxtLink>
        <NuxtLink :to="localePath('/admissions')">{{ $t('nav.admissions') }}</NuxtLink>
        <a href="mailto:contact.oxford.english@gmail.com">{{ $t('nav.email') }}</a>
        <NuxtLink :to="switchLocalePath('kr')" v-if="$i18n.locale === 'en'">한국어</NuxtLink>
        <NuxtLink :to="switchLocalePath('en')" v-if="$i18n.locale === 'kr'">EN</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<i18n lang="yaml">
en: 
  nav: 
    about: About
    services: Services
    admissions: Admissions
    email: Email
kr: 
  nav: 
    about: 소개
    services: 서비스 종류
    admissions: 입학
    email: 이메일
</i18n>

<style scoped>
header {
    /* background-color: rgb(0, 33, 71); */ 
    background-color: white; 
    padding: 50px var(--margin-sides) 10px; 
    border-top: 10px solid var(--primary); 
}

header nav { 
    display: flex; 
    align-items: baseline; 
    padding-bottom: 20px; 
    border-bottom: 1px solid black; 
}

header nav a { 
    color: black; 
    text-decoration: none; 
    vertical-align: bottom; 
}

header nav a#home-link { 
    flex: 1; 
    font-family: var(--caslon); 
    font-size: 1.6em; 
}

header nav div#small-links { 
    flex: 1; 
    text-align: right; 
}

#small-links a + a { 
    padding-left: 20px; 
}


@media screen and (max-width: 600px) {
  header nav {
    flex-direction: column; 
    text-align: center; 
    justify-content: center; 
    align-items: center; 
  }

  header nav div#small-links {
    text-align: center; 
  }
}
</style>