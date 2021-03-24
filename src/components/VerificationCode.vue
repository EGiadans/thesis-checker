<template>
    <div class="codigo">
        <h2>Código de verificación</h2>
        <hr class="hr-custom">
        <label >
            Introduce el código que enviamos al correo electrónico proporcionado:
            <input v-model="verificationCode" placeholder="#####" />
        </label><br><br>
        <button type="button" v-on:click="handleCode">Validar</button>
        <h4>{{errorMessage}}</h4>
        <div>
            <img class="image-footer" src="../assets/Education-Wallpapers-HD.jpg" alt="banner">
        </div>
    </div>
</template>

<script>
    export default {
        name: "VerificationCode",
        data() {
            return {
                verificationCode: '',
                errorMessage: ''
            }
        },
        methods: {
            handleCode() {
                if (this.verificationCode !== '12345') {
                    this.errorMessage = 'El código introducido no es correcto'
                } else {
                    this.$router.push('new-password')
                }
            }
        }
    }
</script>

<style scoped>

</style>
