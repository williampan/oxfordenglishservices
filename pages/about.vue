<template>
  <main>
    <section>
      <h1>{{ t('about.header') }}</h1>
    </section>
    <section>
      <p>{{ t('about.text') }}</p>
    </section>
    <section>
        <h2>{{ t('about.henry.header') }}</h2>
        <div class="image-container">
        <img :src="`/images/team/henry.jpg`" class="responsive-image" />
      </div>
        <p> <b>Specialties:</b> {{ t('about.henry.specialties')}}</p>
        <p v-html="t('about.henry.text')"></p>
        <h2>{{ t('about.team.header') }}</h2>
        <div class="team-grid">
          <template v-for="member in team.list" :key="member.key">
            <div class="member">
              <img :src="`/images/team/${member.image}`" :alt="member.alt" />
              <h3>{{ `${member.alt}`}}</h3>
              <p> <b>Specialties:</b> {{ `${member.specialities}`}}</p>
              <p>{{ `${member.bio}` }}</p>
            </div>
          </template>
        </div>
    </section>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const { data: team } = await useAsyncData('team', () => queryContent('team').findOne()
);

</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.responsive-image {
  max-height: 50vh; /* Limit height to 50% of viewport height */
  width: auto; /* Maintain aspect ratio */
}

.team-grid {
  display: flex; 
  flex-wrap: wrap; 
  justify-content: left; 
  --gap-width: 30px; 
  gap: var(--gap-width); 
}

.member {
  width: 100%; 
}

@media screen and (min-width: 600px) {
  .member {
    width: calc((100% - 1 * var(--gap-width)) / 2); 
  }
}

@media screen and (min-width: 900px) {
  .member {
    width: calc((100% - 2 * var(--gap-width)) / 3); 
  }
}

@media screen and (min-width: 1200px) {
  .member {
    width: calc((100% - 3 * var(--gap-width)) / 4); 
  }
}

@media screen and (min-width: 1500px) {
  .member {
    width: calc((100% - 4 * var(--gap-width)) / 5); 
  }
} 

.member img {
  max-width: 100%; 
}
</style>
