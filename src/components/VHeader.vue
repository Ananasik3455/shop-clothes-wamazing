<template>
  <div class="header">
    <div class="header__logo">
      <img src="../assets/logo.png" alt="" class="header__logo-image">
      <h1 class="header__logo-name">Womazing</h1>
    </div>
    <div class="header__links">
      <router-link class="header__links-link" to="/">Главная</router-link>
      <router-link class="header__links-link" to="/shop">Магазин</router-link>
      <router-link class="header__links-link" to="/aboutbrand">О бренде</router-link>
      <router-link class="header__links-link" to="/contact">Контакты</router-link>
    </div>
    <div class="header__contact">
      <div class="header__contact-phone">
        <img src="../assets/phone.png" alt="" class="phone-image">
        <p class="phone-text">+7(495) 823-54-12</p>
      </div>
      <img src="../assets/cart.png" alt="" class="header__cart">
    </div>
  </div>
</template>

<script>

</script>

<style>
  .header {
    position: absolute;
    left: 0;
    right: 0;
    width: 1600px;
    display: inline-flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding:  51px 245px 0;
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

  .header__links {
    flex: 4;
    padding-left:  131px;
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

  .header__contact {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex:  2;
  }

  .header__contact .header__cart {
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
</style>