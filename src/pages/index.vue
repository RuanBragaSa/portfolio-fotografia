<template>
  <v-layout>
    <v-app-bar id="app-bar" :color="appBarColor" :elevation="0" style="position: fixed;" >
      <v-app-bar-title class="title" style="color: rgb(var(--v-theme-silver));" @click="onClick(0)"><b>Roberta</b></v-app-bar-title>

      <v-btn v-for="button in buttons" class="custom-button" variant="text" :href="button.href" @click="onClick(button.href)">{{ button.name }}</v-btn>
      <!-- <v-btn class="custom-button" variant="text" href="#home">Home</v-btn>
      <v-btn class="custom-button" variant="text" href="#portfolio">Portfólio</v-btn>
      <v-btn class="custom-button" variant="text" href="#sobre">Sobre</v-btn>
      <v-btn class="custom-button" variant="text" href="#servicos">Serviços</v-btn>
      <v-btn class="custom-button" variant="text" href="#contato">Contato</v-btn> -->
        
    </v-app-bar>

    <v-main>
      <!-- <div style="height: 100vh; background-color: red;">
        <a href="#portfolio">
          Descubra meu trabalho
        </a>
      </div> -->

      <div style="height: 100vh; background-color: red;">
        <section id="home">
          <h2>Sobre</h2>
          <p>Conteúdo da seção Sobre...</p>
        </section>
      </div>
      
      <div style="height: 100vh; background-color: blue;">
        <section id="portfolio">
          <h2>Portfólio</h2>
          <p>Conteúdo da seção Portfólio...</p>
        </section>
      </div>

      <div style="height: 100vh; background-color: pink;">
        <section id="sobre">
          <h2>Sobre</h2>
          <p>Conteúdo da seção Sobre...</p>
        </section>
      </div>

      <div style="height: 100vh; background-color: green;">
        <section id="servicos">
          <h2>Sobre</h2>
          <p>Conteúdo da seção Sobre...</p>
        </section>
      </div>


      <div style="height: 100vh; background-color: purple;">
        <section id="contato">
          <h2>Contato</h2>
          <p>Conteúdo da seção Contato...</p>
        </section>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import { useGoTo } from 'vuetify'

const goTo = useGoTo()
const appBarColor = ref("transparent")

onMounted(() => {
  window.addEventListener("scroll", () => {
    appBarColor.value = window.scrollY === 0 ? "transparent" : "rgb(var(--v-theme-charcoal))"
  })
})

  const options = computed(() => ({
    container: '#goto-container-example',
    duration: duration.value,
    easing: easing.value,
    offset: offset.value,
  }))

  const buttons = [
    {
      href: "#home",
      name: "Home"
    },
    {
      href: "#portfolio",
      name: "Portfólio"
    },
    {
      href: "#sobre",
      name: "Sobre"
    },
    {
      href: "#servicos",
      name: "Serviços"
    },
    {
      href: "#contato",
      name: "Contanto"
    },
  ]

  const scrollConfig = {
        duration: 200,
        easing: "easeInOutCubic"
      }

  function onClick(querySelector) {
    if (querySelector === "#home") {
      goTo(0, scrollConfig)
      return
    }
      goTo(querySelector, scrollConfig)
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

  .title {
    font-family: 'Playfair Display', serif;
  }

  .text {
    font-family: "Inter", sans-serif;
  }

  #app-bar {
    transition: all 0.3s 10ms;
    transition-timing-function: ease;
    background-repeat: no-repeat;
  }

  .custom-button {
    font-family: "Inter", sans-serif !important;
    font-weight: lighter !important;
    text-transform: none !important;
  }
</style>