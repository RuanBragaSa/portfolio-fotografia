<template>
  <v-layout>
    <v-app-bar id="app-bar" :color="appBarColor" :elevation="0" style="position: fixed;" >
      <v-app-bar-title class="title" style="color: rgb(var(--v-theme-silver)); font-size: x-large; font-weight: normal;" @click="onClick(0)"><b>Roberta</b></v-app-bar-title>

      <v-btn v-for="button in buttons" class="custom-button" variant="text"  @click="onClick(button.href)">{{ button.name }}</v-btn>
    </v-app-bar>

    <v-main>
      <div>
        <section id="home">
         <Home @to-portfolio="onClick('#portfolio')" @to-contato="onClick('#contato')" @to-servicos="onClick('#servicos')"/>
        </section>
      </div>
      
      <div>
        <section id="portfolio">
          <Portfolio @portfolio-to-servicos="onClick('#servicos')"/>
        </section>
      </div>

      <div style="height: 100vh; background-color: pink;">
        <section id="servicos">
          <h2>Sobre</h2>
          <p>Conteúdo da seção Sobre...</p>
        </section>
      </div>

      <div style="height: 100vh; background-color: green;">
        <section id="sobre">
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
import Home from '@/components/Home.vue'
import Portfolio from '@/components/Portfolio.vue'
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
      href: 0,
      name: "Home"
    },
    {
      href: "#portfolio",
      name: "Portfólio"
    },
    {
      href: "#servicos",
      name: "Serviços"
    },
    {
      href: "#sobre",
      name: "Sobre"
    },
    {
      href: "#contato",
      name: "Contanto"
    },
  ]

  const scrollConfig = {
        duration: 300,
        easing: "easeInOutCubic"
      }

  function onClick(querySelector) {
  if (querySelector === 0 || querySelector === "#home") {
    goTo(0, { ...scrollConfig, offset: 0 });
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
    cursor: default;
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
    font-size: medium;
    text-transform: none !important;
  }
</style>