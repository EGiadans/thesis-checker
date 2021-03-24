<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/validate-email">¿Olvidaste tu contraseña?</router-link>
  </div>
  <router-view/>
</template>

<style>
@font-face {
  font-family: "Quicksand";
  src: local("Quicksand"), url(./fonts/Quicksand-VariableFont_wght.ttf) format("truetype");
}

#app {
  font-family: Quicksand, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #5eaaa8;
}

  h1, h2, h3 {
    color: #5eaaa8
  }
  h4, h5, h6 {
    color: #a3d2ca
  }

  body {
    margin: 0;
  }

  button {
    padding: 2px 10px;
    font-family: Quicksand,serif;
    font-size: 16px;
    color: #f8f1f1;
    background-color: #eb5e0b;
    border: 1px solid #eb5e0b;
    border-radius: 5px;
    margin-top: 10px;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 2px 2px 2px darkgray;
  }

  input {
    font-family: Quicksand,serif;
    font-size: 14px;
    border-radius: 3px;
    border: 2px solid #a3d2ca;
    padding: 2px 0;
    transition: ease-in-out, width .35s ease-in-out;
    width: 150px;
  }

  input:focus {
    width: 200px;
     border-color: #a3d2ca;
  }

  .image-footer {
    display: flex;
    position: fixed;
    width: 100%;
    height: 300px;
    bottom: 0;
  }
  .hr-custom {
    margin: 30px 0;
    color: #a3d2ca;
    border-width: 5px;
  }
</style>
