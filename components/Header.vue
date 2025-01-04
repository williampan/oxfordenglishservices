<template>
  <header>
    <nav id="small-links">
      <NuxtLink id="home-link" :to="localePath('/')">Oxford English Services</NuxtLink>
      <div class="links-container">
        <NuxtLink :to="localePath('/about')">{{ t('nav.about') }}</NuxtLink>
        <NuxtLink :to="localePath('/collegeadmissions')">{{ t('nav.collegeadmissions') }}</NuxtLink>
        <NuxtLink :to="localePath('/passionprojects')">{{ t('nav.passionprojects') }}</NuxtLink>
        <NuxtLink :to="localePath('/graduateadmissions')">{{ t('nav.graduateadmissions') }}</NuxtLink>
        <a href="mailto:contact.oxford.english@gmail.com">{{ t('nav.email') }}</a>
        <!-- <NuxtLink :to="switchLocalePath('kr')" v-if="locale === 'en'">한국어</NuxtLink>
        <NuxtLink :to="switchLocalePath('en')" v-if="locale === 'kr'">EN</NuxtLink> -->
      </div>
    </nav>
  </header>
</template>

<script setup>
const { t, locale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
</script>

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
  white-space: nowrap
}

/* header nav div#small-links {
  flex: 1;
  text-align: right;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
} */

header nav div.links-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the links */
  gap: 1rem; /* Add gap between individual links */
}


/* #small-links a {
  white-space: nowrap;
} */

@media screen and (max-width: 800px) {
  header nav {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  header nav div.links-container {
    text-align: center;
  }
}
</style>