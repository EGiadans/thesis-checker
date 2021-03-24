<template>
    <div class="cambio-pwd">
        <h2>Cambio de contraseña</h2>
        <hr class="hr-custom">
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
        <h4>{{finalMessage}}</h4>
        <div>
            <img class="image-footer" src="../assets/Education-Wallpapers-HD.jpg" alt="banner">
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangePassword",
        data() {
            return {
                password: '',
                newPassword: '',
                finalMessage: ''
            }
        },
        methods: {
            saveNewPassword () {
                if (!this.password || !this.newPassword) return this.finalMessage = 'Ingresa los campos requeridos';
                if (this.newPassword !== this.password) return this.finalMessage = 'Las contraseñas no coinciden';
                window.alert('Exito al cambiar tu contraseña');
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>
