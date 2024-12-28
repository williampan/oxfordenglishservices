<template>
  <main>
    <section>
      <p>{{ t('passionprojects.services.text') }}</p>
      <h3>{{ t('passionprojects.services.header') }}</h3>
      <ul>
        <li v-for="(bullet, index) in serviceBullets" :key="index">
          {{ bullet.body.static }}
        </li>
      </ul>
    </section>
    <section>
      <p>{{ t('passionprojects.examples.text') }}</p>
      <li v-for="(bullet, index) in exampleBullets" :key="index">
        {{ bullet.body.static }}
      </li>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t, messages, locale } = useI18n();
const serviceBullets = messages.value[locale.value].passionprojects.services.bullets;
const exampleBullets = messages.value[locale.value].passionprojects.examples.bullets;
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
