<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Recupera tu contraseña</h2>
    <hr>
    <form>
      <label >
        Introduce tu correo electrónico:
        <input v-model="userEmail" placeholder="nombre@prueba.com" />
      </label><br><br>
      <button type="button" v-on:click="showEmail">Reestablecer contraseña</button>
    </form>
  </div>

  <div class="codigo">
    <h2>Código de verificación</h2>
    <hr>
    <label >
      Introduce el código que enviamos al correo electrónico proporcionado:
      <input v-model="verificationCode" placeholder="#####" />
    </label><br><br>
    <button type="button" v-on:click="showEmail">Validar</button>
  </div>

  <div class="cambio-pwd">
    <h2>Cambio de contraseña</h2>
    <hr>
    <label>
      Introduce la nueva contraseña:
      <input v-model="password" placeholder="Tu contraseña..." type="password" />
    </label>
    <br>
    <label>
      Vuelve a ingresarla:
      <input v-model="newPassword" placeholder="Una vez mas..." type="password" />
    </label><br><br>
    <button type="button" v-on:click="saveNewPassword">Guardar</button>
    <h1>{{finalMessage}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      verificationCode: '',
      userEmail: '',
      password: '',
      newPassword: '',
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
      console.log(re.test(String(this.userEmail).toLowerCase()));
    },

    saveNewPassword () {
      this.finalMessage = this.newPassword === this.password ? 'Éxito al cambiar tu contraseña' : 'Las contraseñas no coinciden, imbécil';
    }
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
