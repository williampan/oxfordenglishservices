<template>
  <main>
    <section>
      <h1>We are a team of educators, writers, consultants, and researchers.</h1>
    </section>
    <section>
      <p>Oxford English Services has its roots at the University of Oxford, where two graduate students realized the need for technical, academic, and professional English language services across Asia. After working with clients on a freelance basis for a number of years, they gathered a group of talented graduates from top universities in the UK and America, ready to help with your written work, product copy, presentations, and interview preparation.</p>
    </section>
    <section>
      <h2>Our team</h2>
      <div class="team-grid">
        <template v-for="member in team.list">
          <div class="member" :key="member.alt">
            <img :src="require(`~/assets/images/team/${member.image}`)" :alt="member.alt" />
            <p>{{ member.bio }}</p>
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const team = await $content('team').fetch()

      return { 
        team
      }
    }
  }
</script>

<style scoped>
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
