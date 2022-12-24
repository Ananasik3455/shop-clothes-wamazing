<template>
  <div class="container">
    <v-header></v-header>
    <div class="container__header">
      <div class="slider__text">
        <h1 class="slider__text-header">Новые поступления в этом сезоне</h1>
        <p class="slider__text-info">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
        <div class="slider__text-button">
          <button class="button__arrow"><img src="../assets/arrow.png" alt=""></button>
          <button class="button__primary">Открыть магазин</button>
        </div>
      </div>
      <div class="slider__image">

      </div>
    </div>
    <v-footer></v-footer>
  </div> 
</template>

<script>
import VHeader from '@/components/VHeader'
import VFooter from '@/components/VFooter'

export default {
  components: {
    VHeader,
    VFooter
  }
}
</script>

<style>
  .container__header {
    display: flex;
    flex-direction: row;
    min-height: 70vh;
  }

  .slider__text {
    flex: 1;
    padding: 186px 0 0 245px;
  }

  .slider__text h1 {
    font-weight: 500;
    font-size: 55px;
    line-height: 110%;
    letter-spacing: 0.02em;
    
    color: #000000;
  }

  .slider__text p {
    padding: 45px 0 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    text-align: right;
    letter-spacing: 0.02em;
    
    color: #000000;
  }

  .slider__text-info {
    max-width: 70%;
  }

  .slider__text-button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 52px 0 0;
  }

  .button__arrow {
    width: 67px;
    height: 68px;
    gap: 10px;
    border: none;
    background: rgba(110, 156, 159, 0.1);
  }

  .button__arrow:hover {
    background: rgba(89, 127, 129, 0.1);
  }

  .button__primary {
    padding: 22px 50px;
    gap: 10px;
    width: 243px;
    height: 68px;
    border: none;
    background: #6E9C9F;

    font-weight: 400;
    font-size: 17px;
    line-height: 138.9%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
  }

  .button__primary:hover {
    background: #509498;
  }

  .slider__image {
    flex: 1;
    background: #F1EADC;
  }
</style>