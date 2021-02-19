<template>
    <div>
        <h2>Registrarse</h2>
        <form>
            <label>
                Nombre completo: <input type="text" v-model="name">
            </label>
            <br>
            <label>
                Correo electrónico: <input type="email" v-model="email">
            </label>
            <br>
            <label>
                Contraseña: <input type="password" v-model="password">
            </label>
            <br>
            <label>
                Carrera:
                <select>
                    <option>IMT</option>
                    <option>ITC</option>
                    <option>LMC</option>
                </select>
            </label>
            <br>
            <label>
                Grado:
                <select>
                    <option>4º</option>
                    <option>5º</option>
                    <option>6º</option>
                </select>
            </label>
            <br>

            <label>
                Grupo:
                <select>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
            </label>
            <br>
            <button v-on:click="handleLogin">Ingresar</button>
        </form>

        <h3>{{failedLoginMessage}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Signup"
    }
</script>

<style scoped>

</style>
