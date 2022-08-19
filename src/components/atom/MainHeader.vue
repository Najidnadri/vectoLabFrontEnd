<template>
    <div class="header">
        <div class="logo"><p @click="goToHome()">VectoLabs</p></div>
        <nav class="navigation" v-if="nav">
            <a href="#">Human Resources</a>
            <a href="#">Information Technology</a>
            <a href="#">Account</a>
        </nav>
        <div class="menu-button right" v-if="!nav">
            <p>Menu</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        let nav = ref(false);

        return { nav }
    },
    methods: {
        goToHome: function() {
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
.header {
    display: grid;
    grid-template-columns: 80% 20%;
    padding: 1em 2em;
    box-sizing: border-box;
    background-color: rgba(91, 89, 89, 0.2);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 100;
    width: 100%;
    color: aliceblue;
    position: absolute;
}

.menu-button {

    text-align: right;
}

.logo {
    font-weight: 600;
}

p {
    margin: 0;
}

</style>