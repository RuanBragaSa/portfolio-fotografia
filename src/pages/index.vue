<template>
  <v-layout>
    <v-app-bar id="app-bar" :color="appBarColor" :elevation="0" style="position: fixed;" >
      <v-app-bar-title class="title" style="color: rgb(var(--v-theme-silver));"><b>Roberta</b></v-app-bar-title>

      <template v-slot:append>
        <a href="#sobre">Sobre</a>
        <a href="#portfolio">Portfólio</a>
        <a href="#contato">Contato</a>
      </template>
    </v-app-bar>

    <v-main>
      <div style="height: 100vh; background-color: red;">
        <section id="sobre">
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
      <div style="height: 100vh; background-color: green;">
        <section id="contato">
          <h2>Contato</h2>
          <p>Conteúdo da seção Contato...</p>
        </section>
      </div>
    </v-main>


  </v-layout>
</template>

<script setup>

const appBarColor = ref("transparent")

onMounted(() => {
  window.addEventListener("scroll", () => {
    appBarColor.value = window.scrollY === 0 ? "transparent" : "rgb(var(--v-theme-charcoal))"
  })
})
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
</style>