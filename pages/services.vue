<template>
  <main>
    <section>
      <h1>We help with copywriting, research, editing, and university admissions.</h1>
      <div class="services">
        <div class="service">
          <h3>Copywriting</h3>
          <p>We are experts at crafting engaging business copy for websites, apps, products, press releases, and advertisements. Our consultants can assist you through the whole copywriting process, from determining the right tone for your international target audience to publishing content localized for regional markets.</p>
        </div>
        <div class="service">
          <h3>Global research & consulting</h3>
          <p>We work with businesses in a variety of sectors to identify and reach their international market. Our process involves establishing relationships with international counterparts, conducting focus groups and promotional campaigns, and delivering in-depth regional market research. Read more about our past projects.</p>
        </div>
        <div class="service">
          <h3>Editing</h3>
          <p>Our consultants are writers in a wide range of fields, with experience editing both academic and business documents. We will work with you to help express your ideas clearly in natural and native sounding English. Particular specialities include client bids, technical or research documents, journal articles, and academic essays.</p>
        </div>
        <div class="service">
          <h3>University admissions</h3>
          <p>We have all graduated from top universities in the UK and the US, and are very familiar with undergraduate and graduate admissions processes. We can read and edit your essays, guide you through the application cycle, and provide you with insider tips about elite schools in the English-speaking world. See some of our successes below.</p>
        </div>
      </div>
    </section>
    <section>
      <h2>Our clients attend...</h2>
      <div class="affiliations-grid">
        <template v-for="affiliation in affiliations.list">
          <div class="affiliation-container" :key="affiliation.filename">
            <img :src="require(`~/assets/images/affiliations/${affiliation.filename}`)" :alt="affiliation.alt" />
          </div>
        </template>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const affiliations = await $content('affiliations').fetch()

      return { 
        affiliations
      }
    }
  }
</script>


<style scoped>
.services {
    margin-top: 50px; 
    display: grid; 
    grid-template-rows: 100%; 
    grid-template-columns: repeat(4, auto); 
    gap: 0 20px;  
}

@media screen and (max-width: 1500px) {
    .services {
        grid-template-rows: repeat(2, auto); 
        grid-template-columns: repeat(2, auto); 
    }
}

@media screen and (max-width: 900px) {
    .services { 
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