<template>
  <v-footer
    app
    class="text-grey-lighten-3 pa-12"
    height="auto"
    style="background-color: rgb(var(--v-theme-background));"
  >
    <v-container>
      <v-divider class="my-6 opacity-20"></v-divider>
      <v-row >
        <v-col cols="12" md="4">
          <h4 class="text-h5 font-weight-bold mb-2">Roberta</h4>
          <p class="mb-6">
            Fotógrafa profissional especializada em capturar momentos únicos com elegância e sofisticação em Portugal.
          </p>

          <div class="d-flex align-center gap-4">
            <v-btn icon variant="tonal" color="grey-darken-3">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon variant="tonal" color="grey-darken-3">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon variant="tonal" color="grey-darken-3">
              <v-icon>mdi-email-outline</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <h5 class="text-h6 font-weight-bold mb-3">Navegação</h5>
          <v-list density="compact" bg-color="transparent" class="pa-0">
            <v-list-item v-for="(item, i) in navLinks" :key="i" class="pa-0">
              <v-list-item-title class="text-grey-lighten-2">{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="4">
          <h5 class="text-h6 font-weight-bold mb-3">Contato</h5>
          <div class="d-flex align-center mb-2">
            <v-icon start color="grey-lighten-2">mdi-email-outline</v-icon>
            <span>roberta@photography.pt</span>
          </div>
          <div class="d-flex align-center mb-2">
            <v-icon start color="grey-lighten-2">mdi-phone</v-icon>
            <span>+351 000 000 000</span>
          </div>
          <div class="d-flex align-center">
            <v-icon start color="grey-lighten-2">mdi-map-marker</v-icon>
            <span>Portugal</span>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-6 opacity-20"></v-divider>

      <v-row justify="space-between" align="center">
        <v-col cols="12" md="6" class="text-grey-lighten-2">
          © 2025 Roberta Photography. Todos os direitos reservados.
        </v-col>
        <v-col cols="12" md="6" class="text-md-right text-grey-lighten-2 d-flex justify-end align-center">
          Feito com
          <v-icon color="red" size="small" class="mx-1">mdi-heart-outline</v-icon>
          em Portugal
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
const navLinks = ['Home', 'Portfólio', 'Sobre', 'Serviços', 'Contato']
</script>

<style scoped>
.v-footer {
  position: relative;
  bottom: 0;
  width: 100%;
}

.gap-4 > *:not(:last-child) {
  margin-right: 1rem;
}
</style>
