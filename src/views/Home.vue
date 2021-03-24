<template>
  <div class="home">
    <div>
      <img class="image-container" src="../assets/Education-Wallpapers-HD.jpg">
    </div>
    <div class="form-container">
      <h1>Revisor de Tesis</h1>
      <img alt="Vue logo" src="../assets/kuayolo.jpeg" style="width: 30%">
      <Login v-if="isLoggingIn"></Login>
      <Signup v-if="!isLoggingIn"></Signup>
      <div v-if="isLoggingIn">
        <p>¿No tienes una cuenta aún?</p>
        <h4 v-on:click="handleIsLoggingIn">Registrate</h4>
      </div>
      <div v-if="!isLoggingIn">
        <span>¿Ya creaste un usuario?</span>
        <h4 v-on:click="handleIsLoggingIn">Inicia sesión</h4>
      </div>
      <div class="footer-color">
        &nbsp;
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script>

import Login from "../components/Login";
import Signup from "../components/Signup";
export default {
  name: 'Home',
  components: {
    Signup,
    Login
  },
  data(){
    return {
      isLoggingIn: true
    }
  },
  methods: {
    handleIsLoggingIn(){
      this.isLoggingIn = !this.isLoggingIn
    }
  }
}
</script>

<style scoped>
  h4 {
    color: #eb5e0b;
  }
  h4:hover {
    cursor: pointer;
  }

  .home {
    display: grid;
    grid-template-columns: 65% 35%;
    width: 100%;
    height: 100px;
  }
  .image-container {
    max-width: 100%;
    height: 100%
  }

  .form-container {
    align-self: center;
  }

  .footer-color {
    width: 100%;
    background-color: #5eaaa8;
  }
</style>
