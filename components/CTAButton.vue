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
    /* Allows padding and margin to work properly */
    padding: 10px 20px;
    /* Add padding for a button-like feel */
    background-color: #002147;
    /* Button background color */
    color: white;
    /* Text color */
    text-decoration: none;
    /* Remove underline */
    border: none;
    /* Remove border */
    border-radius: 5px;
    /* Rounded corners */
    font-size: 32px;
    /* Adjust font size */
    text-align: center;
    /* Center the text */
    cursor: pointer;
    /* Show pointer on hover */
    transition: background-color 0.3s ease;
    align-items: center; /* Vertical alignment */
    justify-content: center; /* Horizontal alignment */
}

.button-link:hover {
    background-color: #0056b3;
    /* Darker shade on hover */
}

.button-container {
  display: flex; /* Enables flexbox */
  justify-content: center; /* Centers the button horizontally */
  margin-bottom: 10px; /* Optional: Add spacing below the button */
}

</style>