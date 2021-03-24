<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Recupera tu contraseña</h2>
    <hr class="hr-custom">
    <form>
      <label >
        Introduce tu correo electrónico:
        <input v-model="userEmail" placeholder="nombre@prueba.com" />
      </label><br><br>
      <button type="button" v-on:click="showEmail">Reestablecer contraseña</button>
    </form>
    <h4>{{finalMessage}}</h4>
    <div>
      <img class="image-footer" src="../assets/Education-Wallpapers-HD.jpg" alt="banner">
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailValidation',
  props: {
    msg: String
  },
  data() {
    return {
      userEmail: '',
      finalMessage: ''
    }
  },
  methods: {
    showEmail() {
      console.log(this.userEmail);
      this.validateEmail();
    },

    validateEmail(){
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(this.userEmail).toLowerCase()) || !this.userEmail) return this.finalMessage = 'El correo introducido no es valido';
      this.$router.push('verification-code');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
