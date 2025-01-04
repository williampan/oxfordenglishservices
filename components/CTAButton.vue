<template>
    <div  class="button-container" >
    <div>
        <a href="https://calendly.com/henryweikel/oes-free-consultation" target="_blank" rel="noopener noreferrer" class="button-link">
            Schedule your free consultation now
        </a>
    </div>
</div>
</template>

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