<template>
  <v-container     fluid
    fill-height

    style="min-height: 100vh;" class="py-16 text-center" id="portfolio">
    <h1 class="text-h3 font-weight-bold mb-2">Portfólio</h1>
    <p class="text-subtitle-1 mb-10">
      Uma seleção cuidadosa dos meus trabalhos mais marcantes, onde cada imagem conta uma história única
    </p>

    <v-row justify="center" align="center" class="mb-12" dense>
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
            cover
            class="rounded-lg"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>

    <p class="text-body-1 mb-4">
      Interessado em ver mais do meu trabalho?
    </p>

    <v-btn color="primary" rounded>
      Ver mais
    </v-btn>
  </v-container>
</template>

<script setup>
  const images = [

  ]
</script>

<style scoped>
#portfolio {
  background-color: #121212;
  color: #d1d1d1;
}

.portfolio-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
}
</style>