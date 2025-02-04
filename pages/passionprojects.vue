<template>
  <main>
    <section>
      <h1>{{ t('passionprojects.header') }}</h1>
      <p v-html="t('passionprojects.services.text')"></p>
    </section >
    <section>
      <div>
        <h3>{{ t('passionprojects.examples.text') }}</h3>
        <li v-for="(bullet, index) in exampleBullets" :key="index">
          {{ bullet?.b?.s }}
        </li>
      </div>
    <div style="display: flex; align-items: center; justify-content: center;">
      <img :src="`/images/passionprocess.jpg`" style="width: 30vw;"/>
    </div>
    </section>
    <CTAButton/>
    <section>
      <h2>{{ t('collegeadmissions.testimonials') }}</h2>
      <div class="passionprojects">
        <div class="admission">
          <p>{{ t('passionprojects.quote1.text') }}</p>
          <p style="font-weight: bold;">{{ t('passionprojects.quote1.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ t('passionprojects.quote2.text') }}</p>
          <p style="font-weight: bold;">{{ t('passionprojects.quote2.author') }}</p>
        </div>
      </div>
    </section>
    <CTAButton />
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t, messages, locale } = useI18n();
const exampleBullets = messages.value[locale.value].passionprojects.examples.bullets;
const images = messages.value[locale.value].passionprojects.examples.images;
</script>


<style scoped>
.passionprojects {
  margin-top: 50px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: repeat(5, auto);
  gap: 0 20px;
}

@media screen and (max-width: 1500px) {
  .passionprojects {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
  }
}

@media screen and (max-width: 900px) {
  .passionprojects {
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

.image-container img {
  width: 100%;
  height: auto;
}

.image-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px; /* Adjust as needed */
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  color: white;
  display: flex;
  align-items: center; /* Centers text vertically */
  justify-content: center; /* Centers text horizontally */
  text-align: center;
  opacity: 0; /* Initially hidden */
  transition: opacity 0.3s ease-in-out;
}
</style>
