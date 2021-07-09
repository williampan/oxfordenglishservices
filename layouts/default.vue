<template>
  <div class="container">
      <Header /> 
      <main>
        <Nuxt />
      </main>
      <Footer />
    </div>
</template>

<style>
@font-face {
    font-family: 'Big Caslon'; 
    src: url('~/assets/fonts/BigCaslon.woff') format('woff'); 
}

@font-face {
    font-family: 'Neuzeit Office'; 
    font-weight: 400; 
    src: url('~/assets/fonts/NeuzeitOfficeRegular.woff') format('woff'); 
}

@font-face {
    font-family: 'Neuzeit Office'; 
    font-weight: 700; 
    src: url('~/assets/fonts/NeuzeitOfficeBold.woff') format('woff'); 
}

:root { 
    --margin-sides: 50px; 
    --caslon: 'Big Caslon', serif; 
    --primary: rgb(0, 44, 94); 
    --font-size: 20px; 
    --header-font-size: 4rem; 
    --h2-font-size: 3rem; 
}

@media screen and (max-width: 900px) {
    :root {
        --margin-sides: 20px; 
        --font-size: 18px; 
        --header-font-size: 3rem; 
        --h2-font-size: 2rem; 
    }
}

@media screen and (max-width: 600px) {
    :root {
        --header-font-size: 2rem; 
    }
}

body { 
    margin: 0; 
    padding: 0; 
    font-size: var(--font-size); 
    line-height: 1.4; 
    font-family: 'Neuzeit Office', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

main > section {
    padding: 0 var(--margin-sides); 
    margin: 60px 0; 
}

h1 { 
    color: black;
    margin: 20px auto; 
    font-family: var(--caslon); 
    font-weight: normal; 
    font-size: var(--header-font-size); 
    line-height: 1.1; 
    max-width: 1000px; 
    text-align: center; 
}

h2 {
    font-family: var(--caslon); 
    font-weight: normal; 
    font-size: var(--h2-font-size); 
    text-align: center; 
}

h3 {
    font-size: var(--font-size); 
    font-weight: bold; 
}

p {
    max-width: 700px; 
}
</style>
