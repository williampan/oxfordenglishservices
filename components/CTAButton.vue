<template>
    <div class="button-container">
      <div>
        <a
          rel="noopener noreferrer"
          class="button-link"
          @click.prevent="trackConversion"
          aria-label="Schedule your free consultation now"
        >
          Schedule your free consultation now
        </a>
      </div>
    </div>
  </template>
  

  <script>
  export default {
    methods: {
      trackConversion() {
        // Check if gtag is available
        if (typeof gtag !== "undefined") {
          gtag('event', 'conversion', {
            send_to: 'AW-11564504470/Qos2CM3NoooaEJarsYor',
          });
        } else {
          console.warn('gtag is not defined. Ensure the Google Ads script is loaded.');
        }
        window.open('https://calendar.app.google/awjShkYw3VYwf73Q6', '_blank');
      },
    },
  };
  </script>
  

<style scoped>
.button-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #002147;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-items: center;
    justify-content: center;
    width: auto;
    max-width: 1000px;
    font-size: clamp(16px, 4vw, 30px);
}

.button-link:hover {
    background-color: #0056b3;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>