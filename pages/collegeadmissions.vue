<template>
  <main>
    <section>
      <h1>{{ t('collegeadmissions.header') }}</h1>
      <p v-html="t('collegeadmissions.approach.text')"></p>
    </section>
    <section>
      <div class="collegeadmissions">
        <div class="admission">
          <h2>{{ t('collegeadmissions.leftcol.header') }}</h2>
          <h3>{{ t('collegeadmissions.leftcol.subheader') }}</h3>
          <p v-html="t('collegeadmissions.leftcol.text')"></p>
          <ul>
            <li v-for="(bullet, index) in leftColBullets" :key="index">
              {{ bullet?.b?.s }}
            </li>
          </ul>
          <img :src="`/images/highschoolprocess.jpg`"/>
        </div>
        <div class="admission">
          <h2>{{ t('collegeadmissions.rightcol.header') }}</h2>
          <h3>{{ t('collegeadmissions.rightcol.subheader') }}</h3>
          <p v-html="t('collegeadmissions.rightcol.text')"></p>
          <ul>
            <li v-for="(bullet, index) in rightColBullets" :key="index">
              {{ bullet?.b?.s }}
            </li>
          </ul>
          <img :src="`/images/applyingprocess.jpg`"/>
        </div>
      </div>
    </section>
    <CTAButton />
    <section>
      <h2>{{ t('collegeadmissions.testimonials') }}</h2>
      <div class="collegeadmissions">
        <div class="admission">
          <p>{{ t('collegeadmissions.quote1.text') }}</p>
          <p style="font-weight: bold;">{{ t('collegeadmissions.quote1.author') }}</p><br />
        </div>
        <div class="admission">
          <p>{{ t('collegeadmissions.quote2.text') }}</p>
          <p style="font-weight: bold;">{{ t('collegeadmissions.quote2.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ t('collegeadmissions.quote3.text') }}</p>
          <p style="font-weight: bold;">{{ t('collegeadmissions.quote3.author') }}</p>
        </div>
      </div>
    </section>
    <section>
      <h2>{{ t('collegeadmissions.rate.header') }}</h2>
      <p v-html="t('collegeadmissions.rate.text')"></p>
    </section>
    <CTAButton />
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t, messages, locale } = useI18n();
const serviceBullets = messages.value[locale.value].collegeadmissions.services.bullets;
const leftColBullets = messages.value[locale.value].collegeadmissions.leftcol.bullets;
const rightColBullets = messages.value[locale.value].collegeadmissions.rightcol.bullets;
</script>


<style scoped>
.collegeadmissions {
  margin-top: 50px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: repeat(5, auto);
  gap: 0 20px;
}

.admission img {
  max-width: 60%; /* Prevent the image from exceeding the column's width */
  height: auto;    /* Maintain the aspect ratio */
  display: block;  /* Prevent unnecessary whitespace below the image */
  margin: 0 auto;  /* Center the image if needed */
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
