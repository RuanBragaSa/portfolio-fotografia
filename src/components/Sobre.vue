<template>
  <v-container style="padding-top: 80px; min-height: 100vh;">
    <v-row>
      <v-col cols="12" md="5" class="d-flex justify-center mb-8 mb-md-0">
        <v-img
          src="https://images.unsplash.com/photo-1549981832-2ba2ee913334?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          alt="Roberta"
          aspect-ratio="1"
          class="rounded-xl elevation-2"
          style="max-width: 600px; border: 1px solid rgba(255,255,255,0.05); height: 700px;"
        >
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col>
        <h2 class="mb-8">Sobre Mim</h2>

        <p class="mb-4">
          Sou <span class="owner-name">Roberta</span>, fotógrafa profissional baseada em Portugal, apaixonada por capturar a essência única de cada momento. 
          Com mais de uma década de experiência, transformo histórias em imagens atemporais.
        </p>

        <p class="mb-4">
          Minha abordagem combina técnica refinada com sensibilidade artística, criando fotografias que transcendem o comum.
          Especializo-me em casamentos, retratos e eventos corporativos, sempre buscando a perfeição em cada detalhe.
        </p>

        <p class="mb-8">
          Acredito que cada cliente merece uma experiência única e personalizada. 
          Por isso, dedico tempo para compreender sua visão e criar imagens que contam sua história de forma autêntica e elegante.
        </p>
        <v-sheet
          color="rgba(255,255,255,0.05)"
          rounded="xl"
          class="d-flex align-center px-4 py-3 mb-8"
        >
          <v-icon class="mr-2" color="grey-lighten-2">mdi-map-marker</v-icon>
          <span><b>Portugal</b> - Disponível para projetos em todo o país</span>
        </v-sheet>
        <v-row>
          <v-col cols="12" sm="4" class="text-center">
            <v-sheet color="rgba(255,255,255,0.05)" rounded="xl" class="py-6">
              <v-icon size="30" class="mb-2">mdi-camera</v-icon>
              <div class="text-h6 font-weight-bold">500+</div>
              <div class="text-caption">Sessões Realizadas</div>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="4" class="text-center">
            <v-sheet color="rgba(255,255,255,0.05)" rounded="xl" class="py-6">
              <v-icon size="30" class="mb-2">mdi-timer</v-icon>
              <div class="text-h6 font-weight-bold">10+</div>
              <div class="text-caption">Anos de Experiência</div>
            </v-sheet>
          </v-col>

          <v-col cols="12" sm="4" class="text-center">
            <v-sheet color="rgba(255,255,255,0.05)" rounded="xl" class="py-6">
              <v-icon size="30" class="mb-2">mdi-heart</v-icon>
              <div class="text-h6 font-weight-bold">200+</div>
              <div class="text-caption">Casais Felizes</div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

  h2{
    font-family: 'Playfair Display';
    font-size: 48px !important;
    letter-spacing: 1px;
    color: rgb(var(--v-theme-silver));
  }

  p{
    font-family: "Inter", sans-serif !important;
    font-weight: light;
    list-style: none;
    font-size: 16px !important; 
    color: rgb(var(--v-theme-silver));
  }

  .owner-name{
    font-family: "Inter", sans-serif !important;
    font-weight: bolder;
    list-style: none;
    font-size: 16px !important; 
    color: rgb(var(--v-theme-silver));
  }

  .v-sheet{
    background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-color: #222;
    font-family: "Inter", sans-serif !important;
    font-weight: light;
    list-style: none;
    font-size: 16px !important; 
    color: rgb(var(--v-theme-silver));
  }


</style>