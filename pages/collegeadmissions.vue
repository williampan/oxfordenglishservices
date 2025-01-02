<template>
  <main>
    <section>
      <h1>{{ t('collegeadmissions.header') }}</h1>
      <p v-html="t('collegeadmissions.approach.text')"></p>
    </section>
    <section>
      <h3>{{ t('collegeadmissions.services.header') }}</h3>
      <ul>
        <li v-for="(bullet, index) in serviceBullets" :key="index">
          {{ bullet?.body?.static }}
        </li>
      </ul>
      <p>{{ t('collegeadmissions.services.text') }}</p>
    </section>
    <section>
      <h3>{{ t('collegeadmissions.testimonials') }}</h3>
      <div class="collegeadmissions">
        <div class="admission">
          <p>{{ t('collegeadmissions.quote1.text') }}</p>
          <p style="font-weight: bold;">{{ t('collegeadmissions.quote1.author') }}</p><br />
        </div>
        <div class="admission">
          <p>{{ t('collegeadmissions.quote2.text') }}</p>
          <p style="font-weight: bold;">{{ t('collegeadmissions.quote2.author') }}</p>
        </div>
      </div>
    </section>
    <section>
      <h3>{{ t('collegeadmissions.rate.header') }}</h3>
      <p v-html="t('collegeadmissions.rate.text1')"></p>
      <li v-for="(bullet, index) in rateBullets" :key="index">
        {{ bullet?.body?.static }}
      </li>
      <p>{{ t('collegeadmissions.rate.text2') }}</p>
    </section>
    <CTAButton />
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t, messages, locale } = useI18n();
const serviceBullets = messages?.value[locale?.value]?.collegeadmissions?.services?.bullets;
const rateBullets = messages?.value[locale?.value]?.collegeadmissions?.rate?.bullets;
</script>


<style scoped>
.collegeadmissions {
  margin-top: 50px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: repeat(5, auto);
  gap: 0 20px;
}

@media screen and (max-width: 1500px) {
  .collegeadmissions {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
  }
}

@media screen and (max-width: 900px) {
  .collegeadmissions {
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
