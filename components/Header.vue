<template>
  <header>
    <nav>
      <NuxtLink id="home-link" to="/">Oxford English Services</NuxtLink>
      <div id="small-links">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <a href="mailto:contact.oxford.english@gmail.com">Email</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
    /* background-color: rgb(0, 33, 71); */ 
    background-color: white; 
    padding: 50px var(--margin-sides) 10px; 
    border-top: 10px solid var(--primary); 
}

header nav { 
    display: flex; 
    align-items: baseline; 
    padding-bottom: 20px; 
    border-bottom: 1px solid black; 
}

header nav a { 
    color: black; 
    text-decoration: none; 
    vertical-align: bottom; 
}

header nav a#home-link { 
    flex: 1; 
    font-family: var(--caslon); 
    font-size: 1.6em; 
}

header nav div#small-links { 
    flex: 1; 
    text-align: right; 
}

#small-links a + a { 
    padding-left: 20px; 
}


@media screen and (max-width: 600px) {
  header nav {
    flex-direction: column; 
    text-align: center; 
    justify-content: center; 
    align-items: center; 
  }

  header nav div#small-links {
    text-align: center; 
  }
}
</style>