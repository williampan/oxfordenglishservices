<template>
  <main>
    <section class="intro-container">
      <div class="intro-text">
        <h1>{{ t('home.header') }}</h1>
        <br>
        <CTAButton />
      </div>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
</script>

<style scoped>
.intro-container {
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 1), 50%, rgba(255, 255, 255, 0)), url("/images/high-street.jpg");
  background-size: cover;
  background-position: top;
  height: 85vh;
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
