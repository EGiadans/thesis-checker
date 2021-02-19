<template>
  <div class="home">
    <h1>Revisor de Tesis</h1>
    <img alt="Vue logo" src="../assets/logo.png" style="width: 100px">
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
    color: #42b983;
  }
  h4:hover {
    cursor: pointer;
  }
</style>
