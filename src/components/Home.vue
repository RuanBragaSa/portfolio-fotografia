<template>
  <v-container
    fluid
    fill-height
    class="home-section"
    style="min-height: 100vh;"
  >
    <v-row 
      align="center"
      justify="center"
      class="text-center"
    >
      <v-col cols="12" md="8">
        <h1 class="display-2 font-weight-bold">Roberta</h1>
        <h3 class="subtitle-1 mt-4 mb-6">Fotógrafa Profissional</h3>
        <p class="body-1 mb-6">
          Capturando momentos únicos com elegância e sofisticação em Portugal
        </p>
        <v-row justify="center" class="mt-15 mb-15" dense>
          <v-btn 
            color="white"
            class="me-4"
            elevation="6"
            prepend-icon="mdi-camera"
            size="large"
            @click="$emit('to-portfolio')"
          >
            Ver Portfólio</v-btn>
          <v-btn
            size="large"
            variant="outlined"
            @click="$emit('to-contato')"
          >
          Entrar em Contato</v-btn>
        </v-row>

        <v-row justify="center" class="mb-15" dense>
          <v-btn icon="mdi-instagram" class="mr-2"></v-btn>
          <v-btn icon="mdi-facebook" class="ml-2"></v-btn>
        </v-row>

        <p class="scroll-down-descubra-meu-trabalho">Descubra meu trabalho</p>
        <v-icon>mdi-arrow-down</v-icon>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { defineEmits } from 'vue';

  // const emit = defineEmits(['clicando'])

  // function clicar () {
  //   emit ('cli')
  // }
</script>

<style scoped>
.home-section {
  background-color: #121212;
  color: rgb(var(--v-theme-silver));
  min-height: 80vh;
}

h1 {
  font-family: 'Playfair Display';
  font-size: 100px;
  letter-spacing: 4px;

}

h3 {
  font-family: "Inter", sans-serif !important;
  font-weight: 400;
  font-size: 25px;
  text-transform: none !important;
}

p {
  font-family: "Inter", sans-serif !important;
  font-weight: 300;
  font-size: 20px;
  text-transform: none !important;
}

.v-btn {
  font-family: "Inter", sans-serif !important;
  font-weight: 300;
  text-transform: none !important;
}

.scroll-down-descubra-meu-trabalho{
  font-family: "Inter", sans-serif !important;
  font-weight: 300;
  font-size: 15px;
}

</style>