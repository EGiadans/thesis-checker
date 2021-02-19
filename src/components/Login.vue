<template>
    <div>
        <h2>Iniciar sesión</h2>
        <form>
            <label>
                Correo electrónico: <input type="email" v-model="email">
            </label>
            <br>
            <label>
                Contraseña: <input type="password" v-model="password">
            </label>
            <br>
            <button v-on:click="handleLogin">Ingresar</button>
        </form>

        <h3>{{failedLoginMessage}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
                failedLoginMessage: ''
            }
        },
        methods: {
            handleLogin() {
                if (!this.email || !this.password) return this.failedLoginMessage = 'Introduce los datos requeridos, por favor';
                if (this.email !== 'gabriel@gmail.com') return this.failedLoginMessage = 'El usuario no existe. Favor de registrarse'
                this.$router.push('about');
            }
        }
    }
</script>

<style scoped>

</style>
