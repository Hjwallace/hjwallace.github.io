<script setup lang="ts">
import ProfessionalPicture from './assets/picture2.jpg'


</script>

<template>

  <div class="appContainer">

    <div class="photoSection">

      <h1 class="photoText">Hello, I'm <span style="color: #447AC6;">Hunter</span>!</h1>
      <img :src="ProfessionalPicture" alt="">

    </div>

    <div class="mainSection">

      <div class="mainSectionText">
        <div>

          <h1>And I love what I do!</h1>
        
          <h3>I'm a proud Cardinal and Development Team Lead at the Digital Corps. With a background in Vue and C#, I love creating new web experiences for all!</h3>
        </div>
          
        <a href="mailto:hunterjwallace@gmail.com"><button class="contactButton"> If you need me, reach out!</button></a>
      
      </div>

    </div>


  </div>
  
  

</template>

<style scoped>


  .appContainer{
    display: flex;
    min-height: 100vh;
    flex-direction: row;
    background-color: #C69944;
    /* background-color: #FCF7E9; */
    color: #FFFFFF;
    overflow: hidden;
  }

  .photoSection{
    display: flex;
    flex: 40%;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 5%;
    align-items: center;
  }

  .photoText {
    font-size: 3rem;
    text-align: center;
  }

  .mainSection{
    display: flex;
    flex: 60%;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
  }

  .contactButton{
    height: auto;
    width: auto;
    padding: 1rem;
    margin-top: .5rem;
    
    border: .25rem solid #000000;
    box-shadow: .5rem .5rem 0rem #000000;
    font-size: clamp(.9rem, 2vw, 1.5rem);
  }

  .mainSectionText{

    font-size: clamp(.8rem, 2vw, 1.75rem);
    padding: 1rem;

    h3{
      line-height: 3rem;
      width: 75%;
      margin-bottom: 5%;
    }
    
  }

  img{
    width: 80%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    border: .25rem solid #000000;
    box-shadow: 1rem 1rem 0rem #000000 ;

  }

  @media (max-width: 480px) {
  .appContainer {
    flex-direction: column;
    text-align: center;
  }

  .mainSection{
    justify-content: start;
  }

  .photoSection{
    justify-content: start;
  }

  img{
    width: 50% !important;
  }

  h3{
    line-height: 1.5rem !important;
    width: 100% !important;
  }
}

</style>
