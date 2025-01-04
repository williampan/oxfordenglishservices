<template>
  <main>
    <section>
      <h1>{{ t('about.header') }}</h1>
    </section>
    <section>
      <p>{{ t('about.text') }}</p>
    </section>
    <section>
      <div class="content-container">
        <img :src="`/images/team/henry.jpg`" class="responsive-image" />
        <h2>{{ t('about.henry.header') }}</h2>
        <p><b>Specialties:</b> {{ t('about.henry.specialties') }}</p>
        <p v-html="t('about.henry.text')"></p>
      </div>
      <br />
      <br />
      <div class="team-grid">
        <template v-for="member in team.list" :key="member.key">
          <div class="member">
            <img :src="`/images/team/${member.image}`" :alt="member.alt" />
            <h3>{{ `${member.alt}` }}</h3>
            <p> <b>Specialties:</b> {{ `${member.specialities}` }}</p>
            <p>{{ `${member.bio}` }}</p>
          </div>
        </template>
      </div>
    </section>
    <CTAButton />
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const { data: team } = await useAsyncData('team', () => queryContent('team').findOne()
);

</script>

<style scoped>
.content-container {
  overflow: hidden;
  /* Ensures the container wraps around floated elements */
}

.responsive-image {
  float: left;
  height: auto;
  margin: 0 30px 30px 0;
  --gap-width: 30px;
}

.text-container {
  overflow: hidden;
  /* Ensures proper alignment of text next to the image */
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

.responsive-image  {
  width: 100%;
}

@media screen and (min-width: 600px) {
  .member {
    width: calc((100% - 1 * var(--gap-width)) / 2);
  }

  .responsive-image {
    width: calc((100% - 1 * var(--gap-width)) / 1.5);
  }
}

@media screen and (min-width: 900px) {
  .member {
    width: calc((100% - 2 * var(--gap-width)) / 3);
  }
  .responsive-image {
    width: calc((100% - 1 * var(--gap-width)) / 2);
  }
}

@media screen and (min-width: 1200px) {
  .member {
    width: calc((100% - 3 * var(--gap-width)) / 4);
  }
  .responsive-image {
    width: calc((100% - 1 * var(--gap-width)) / 3);
  }
}

@media screen and (min-width: 1500px) {
  .member {
    width: calc((100% - 4 * var(--gap-width)) / 5);
  }
  .responsive-image {
    width: calc((100% - 1 * var(--gap-width)) / 3);
  }
}

.member img {
  max-width: 100%;
}

.responsive-image img {
  max-width: 100%;
}
</style>
