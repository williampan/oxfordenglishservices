<template>
  <footer>
    <div class="address">
      <div class="button-container">
        <CTAButton />
      </div>
      Oxford English Services<br />
      Ealing, London, United Kingdom<br />
      +44 7926 140861<br />
      KakaoTalk: henryweikel<br />
      Email: <a href="mailto:contact.oxford.english@gmail.com">contact.oxford.english@gmail.com</a><br />
    </div>
  </footer>
</template>

<style scoped>
.button-container {
  display: flex; /* Enables flexbox */
  justify-content: center; /* Centers the button horizontally */
  margin-bottom: 10px; /* Optional: Add spacing below the button */
}
footer {
  border-top: 1px solid black;
  padding-top: 50px;
  margin: var(--margin-sides);
}
</style>
