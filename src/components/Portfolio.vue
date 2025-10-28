<template>
  <v-container id="portfolio" class="text-center d-flex flex-column justify-center align-center"
  style="padding-top: 80px; min-height: 100vh;">
    <h1 class="title" style="color: rgb(var(--v-theme-silver));">Portfólio</h1>
    <p class="mb-5">
      Uma seleção cuidadosa dos meus trabalhos mais marcantes, onde cada imagem conta uma história única
    </p>

    <v-row
      justify="center"
      align="center"
      class="mb-12 flex-nowrap"
      style="column-gap: 24px;">
      <v-col
        v-for="(image, index) in images"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        class="d-flex justify-center"
      >
        <v-card
          elevation="4"
          class="portfolio-card"
          max-width="280"
        >
          <v-img
            :src="image"
            height="350"
            width="200"
            cover
            class="rounded-lg"
            alt="foto do portfólio"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>

    <div @click="$emit('portfolio-to-servicos')" style="cursor: pointer;">
      <p class="text-body-1 mb-15">
        Interessado em ver mais do meu trabalho?
      </p>
    </div>

  </v-container>
</template>

<script setup>
const images = ref([

  'https://plus.unsplash.com/premium_photo-1757423357777-eedac57abcbb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',

  'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',

  'https://images.unsplash.com/photo-1761522001036-dc4a66722464?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',

  'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
])
</script>

<style scoped>

.portfolio-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
}

h1{
  font-family: 'Playfair Display';
  font-size: 80px;
  letter-spacing: 5px;
  color: rgb(var(--v-theme-silver));
}

p{
  font-family: "Inter", sans-serif !important;
  font-weight: 300;
  font-size: 20px;
  color: rgb(var(--v-theme-silver));
}
</style>
