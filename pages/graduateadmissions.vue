<template>
  <main>
    <section>
      <h1>{{ t('graduateadmissions.header') }}</h1>
    </section>
    <section>
      <div class="button-container">
        <a href="https://payhip.com/b/DSZmq" target="_blank" rel="noopener noreferrer" class="button-link">
          {{ t('graduateadmissions.subheader') }}
        </a>
      </div>
    </section>
    <section>
      <p>{{ t('graduateadmissions.text') }}</p>
    </section>
    <section>
      <h3>{{ t('graduateadmissions.services.header') }}</h3>
      <ul>
        <li v-for="(bullet, index) in bullets" :key="index">
          {{ bullet?.body?.static }}
        </li>
      </ul>
    </section>
    <section>
      <h3>{{ t('graduateadmissions.approach.header') }}</h3>
      <p v-html="t('graduateadmissions.approach.text')"></p>
      <p>{{ t('graduateadmissions.video.text') }}</p>
      <div v-html="t('graduateadmissions.video.video')"></div>
    </section>
    <section>
      <h3>{{ t('graduateadmissions.steps.header') }}</h3>
      <ol>
        <li v-for="(number, index) in steps" :key="index">
          {{ number?.body?.static }}
        </li>
      </ol>
    </section>
    <section>
      <div class="graduateadmissions">
        <div class="admission">
          <p>{{ t('graduateadmissions.quote1.text') }}</p>
          <p style="font-weight: bold;">{{ t('graduateadmissions.quote1.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ t('graduateadmissions.quote2.text') }}</p>
          <p style="font-weight: bold;">{{ t('graduateadmissions.quote2.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ t('graduateadmissions.quote3.text') }}</p>
          <p style="font-weight: bold;">{{ t('graduateadmissions.quote3.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ t('graduateadmissions.quote4.text') }}</p>
          <p style="font-weight: bold;">{{ t('graduateadmissions.quote4.author') }}</p>
        </div>
        <div class="admission">
          <p>{{ t('graduateadmissions.quote5.text') }}</p>
          <p style="font-weight: bold;">{{ t('graduateadmissions.quote5.author') }}</p>
        </div>
      </div>
    </section>
    <CTAButton />
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t, messages, locale } = useI18n();
const bullets = messages.value[locale.value].graduateadmissions.services.bullets;
const steps = messages.value[locale.value].graduateadmissions.steps.steps;
const affiliations = await queryContent('/affiliations').findOne()
</script>


<style scoped>
.graduateadmissions {
  margin-top: 50px;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: repeat(5, auto);
  gap: 0 20px;
}

@media screen and (max-width: 1500px) {
  .graduateadmissions {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, auto);
  }
}

@media screen and (max-width: 900px) {
  .graduateadmissions {
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

.button-container {
  display: flex;
  /* Enables flexbox */
  justify-content: center;
  /* Centers the button horizontally */
  margin-bottom: 10px;
  /* Optional: Add spacing below the button */
}

.button-link {
  display: inline-block;
  /* Allows padding and margin to work properly */
  padding: 10px 20px;
  /* Add padding for a button-like feel */
  background-color: #002147;
  /* Button background color */
  color: white;
  /* Text color */
  text-decoration: none;
  /* Remove underline */
  border: none;
  /* Remove border */
  border-radius: 5px;
  /* Rounded corners */
  font-size: 32px;
  /* Adjust font size */
  text-align: center;
  /* Center the text */
  cursor: pointer;
  /* Show pointer on hover */
  transition: background-color 0.3s ease;
  align-items: center;
  /* Vertical alignment */
  justify-content: center;
  /* Horizontal alignment */
}

.button-link:hover {
  background-color: #0056b3;
  /* Darker shade on hover */
}
</style>
