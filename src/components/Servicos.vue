<template>
  <v-container style="padding-top: 80px; min-height: 100vh;">
    <div class="text-center d-flex flex-column justify-center align-center">
      <h1 class="mb-6" style="color: rgb(var(--v-theme-silver));">Serviços</h1>
      <p class="mb-8">Ofereço uma gama completa de serviços fotográficos, cada um personalizado para atender às suas necessidades específicas</p>
    </div>
    <v-row>
      <v-col cols="6">
        <v-card class="rounded-lg">
          <v-card-title class="mb-6"> 
            <v-btn icon="mdi-heart-outline" class="mr-2" disabled></v-btn>
            Casamentos
          </v-card-title>
          
          <v-card-text class="mb-3">
            Captura completa do seu dia especial, desde os preparativos até a festa.
            Documentação elegante e discreta dos momentos mais importantes.
          </v-card-text>

          <v-card-subtitle class="mb-2">INCLUI:</v-card-subtitle>

          <ul class="text-start text-body-2 mb-4">
            <li v-for="item in itemsCasamento" :key="item">
              <v-icon size="18" color="grey-lighten-2" class="mr-2">mdi-star-outline</v-icon>
              {{ item }}
            </li>
          </ul>

          <v-divider class="mb-3"></v-divider>

          <v-card-actions>
            <strong>A partir de €1.200</strong>
            <v-btn variant="tonal" append-icon="mdi-arrow-right">Consultar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="rounded-lg">
          <v-card-title class="mb-6"> 
            <v-btn icon="mdi-account-outline" class="mr-2" disabled></v-btn>
            Retratos
          </v-card-title>
          
          <v-card-text class="mb-3">
            Sessões personalizadas para retratos individuais, familiares ou corporativos.
            Foco na personalidade e essência de cada pessoa.
          </v-card-text>
  
          <v-card-subtitle class="mb-2">INCLUI:</v-card-subtitle>
  
          <ul class="text-start text-body-2 mb-4">
            <li v-for="item in itemsRetratos" :key="item">
              <v-icon size="18" color="grey-lighten-2" class="mr-2">mdi-star-outline</v-icon>
              {{ item }}
            </li>
          </ul>
  
          <v-divider class="mb-3"></v-divider>
  
          <v-card-actions>
            <strong>A partir de €300</strong>
            <v-btn variant="tonal" append-icon="mdi-arrow-right">Consultar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card class="rounded-lg">
          <v-card-title class="mb-6"> 
            <v-btn icon="mdi-baby-face-outline" class="mr-2" disabled></v-btn>
            Newborn & Família
          </v-card-title>
          
          <v-card-text class="mb-3">
            Sessões delicadas e acolhedoras para recém-nascidos e famílias.
            Registo natural dos primeiros momentos e das conexões familiares.
          </v-card-text>

          <v-card-subtitle class="mb-2">INCLUI:</v-card-subtitle>

          <ul class="text-start text-body-2 mb-4">
            <li v-for="item in itemsNewborn" :key="item">
              <v-icon size="18" color="grey-lighten-2" class="mr-2">mdi-star-outline</v-icon>
              {{ item }}
            </li>
          </ul>

          <v-divider class="mb-3"></v-divider>

          <v-card-actions>
            <strong>A partir de €400</strong>
            <v-btn variant="tonal" append-icon="mdi-arrow-right">Consultar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="rounded-lg">
          <v-card-title class="mb-6"> 
            <v-btn icon="mdi-briefcase-outline" class="mr-2" disabled></v-btn>
            Eventos & Branding
          </v-card-title>
          
          <v-card-text class="mb-3">
            Cobertura de eventos corporativos, artísticos e comerciais.
            Imagens que fortalecem sua marca e capturam a essência do momento.
          </v-card-text>
  
          <v-card-subtitle class="mb-2">INCLUI:</v-card-subtitle>
  
          <ul class="text-start text-body-2 mb-4">
            <li v-for="item in itemsEvento" :key="item">
              <v-icon size="18" color="grey-lighten-2" class="mr-2">mdi-star-outline</v-icon>
              {{ item }}
            </li>
          </ul>
  
          <v-divider class="mb-3"></v-divider>
  
          <v-card-actions>
            <strong>A partir de €600</strong>
            <v-btn variant="tonal" append-icon="mdi-arrow-right">Consultar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const itemsCasamento = [
  'Cobertura completa',
  'Álbum premium',
  'Edição profissional',
  'Galeria online'
]
const itemsRetratos = [
  'Sessão estúdio/externa',
  'Múltiplos looks',
  'Retoque profissional',
  'Prints inclusos'
]
const itemsNewborn = [
  'Sessão em casa ou estúdio',
  'Acessórios e cenários personalizados',
  'Edição cuidadosa',
  'Galeria online'
]
const itemsEvento = [
  'Reportagem completa',
  'Fotos de produto e ambiente',
  'Edição profissional',
  'Entrega digital para redes sociais'
]

</script>

<style scoped>

h1{
  font-family: 'Playfair Display';
  font-size: 80px;
  letter-spacing: 5px;
}

p{
  font-family: "Inter", sans-serif !important;
  font-weight: 300;
  font-size: 20px;
}

.v-card {
  background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-color: #222;
  transition: 0.3s;
  padding: 34px !important;
  height: 461px;
}
.v-card:hover {
  transform: translateY(-5px);
  border-color: #444;
}

.v-card-title {
  font-family: 'Playfair Display';
  font-size: 24x;
  letter-spacing: 1px;
  color: rgb(var(--v-theme-silver));

}

.v-card-text {
  font-family: "Inter", sans-serif !important;
  font-weight: lighter;
  font-size: 16px;
  text-transform: none !important;
  color: rgb(var(--v-theme-silver));
}

strong{
  font-family: "Inter", sans-serif !important;
  font-weight: 200;
  font-size: 20px;
  color: rgb(var(--v-theme-silver));
}

ul{
  font-family: "Inter", sans-serif !important;
  font-weight: lighter;
  list-style: none;
  font-size: 16px !important; 
  color: rgb(var(--v-theme-silver));
}

ul li {
  margin-bottom: 2px;
}

.v-card-actions{
  justify-content: space-between;
}

.v-btn{
  font-family: "Inter", sans-serif !important;
  text-transform: none !important;
  font-weight: lighter;
  color: rgb(var(--v-theme-silver));
}

</style>
