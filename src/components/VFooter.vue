<template>
  <div class="footer">
    <div class="footer__info">
      <div class="header__logo">
        <img src="../assets/logo.png" alt="" class="header__logo-image">
        <h1 class="header__logo-name">Womazing</h1>
      </div>
    </div>
    <div class="footer__links">
      <router-link class="header__links-link" to="/">Главная</router-link>
      <div class="links__shop">
        <router-link class="header__links-link" to="/shop">Магазин</router-link>
        <div class="links">
          <router-link class="header__links-link" to="/shop">Пальто</router-link>
          <router-link class="header__links-link" to="/shop">Свитшот</router-link>
          <router-link class="header__links-link" to="/shop">Кардиганы</router-link>
          <router-link class="header__links-link" to="/shop">Толстовки</router-link>
        </div>
      </div>
      <router-link class="header__links-link" to="/aboutbrand">О бренде</router-link>
      <router-link class="header__links-link" to="/contact">Контакты</router-link>
    </div>
    <div class="footer__contact">
      <div class="footer-text">
        <p class="phone-text">+7(495) 823-54-12</p>
        <p class="email-text">hello@womazing.com</p>
      </div>
      <div class="footer__contact-images">
        <img src="../assets/instagram.png" alt="" class="footer-image">
        <img src="../assets/facebook.png" alt="" class="footer-image">
        <img src="../assets/twitter.png" alt="" class="footer-image">
      </div>
      <div class="footer__contact-images">
        <img src="../assets/visa-mastercard.png" alt="" class="footer-image">
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .footer {
    display: flex;
    flex-direction: row;
    padding: 101px 245px;
    background: #F1EADC;
  }

  .header__logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
  }

  .header__logo h1{
    padding-left: 15px;

    font-weight: 500;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.1em;
  }

  .footer__links {
    display: flex;
    flex-direction: row;
    flex: 4;
    padding-left:  131px;
  }
  
  .links {
    padding-top: 39px;
    display: flex;
    flex-direction: column;
  }

  .links .header__links-link:not(:last-child) {
    margin-bottom: 10px;
  }

  .header__links-link {
    padding-right: 45px;

    font-weight: 400;
    font-size: 15px;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-decoration: none;

    color:  #000;
  }

  .footer__contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex:  2;
  }

  .footer__contact .header__cart {
    padding-right: 0;
    padding-left: auto;
  }

  .header__contact-phone {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 2;
  }

  .header__contact-phone p {
    padding-left:  15px;
  }

  .footer-text {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .footer-text p:last-child {
    margin-top: 7px;
  }

  .footer__contact-images {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 30px;
  }

  .footer__contact-images .footer-image {
    margin-left:  12px;
  }
</style>