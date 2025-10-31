<template>
  <v-container style="padding-top: 80px; min-height: 100vh;">
    <v-row>
      <v-col cols="12" class="text-center mb-8">
        <h1 class="mb-8">Contato</h1>
        <p>Pronto para capturar momentos especiais ? Entre em contato e vamos criar algo extraodinário junto</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="text-h5 font-weight-bold mb-6" style="color: hsl(0, 0%, 95%);">Vamos Conversar</h2>

        <v-card flat class="mb-4 px-4 py-3 rounded-xl" style="background-color: hsl(0 0% 10%);">
          <v-row no-gutters align="center">
            <v-col cols="auto">
              <v-icon size="28" color="platinum" class="mr-3">mdi-email-outline</v-icon>
            </v-col>
            <v-col>
              <div class="text-silver text-body-2">Email</div>
              <div class="text-platinum">roberta@photography.pt</div>
            </v-col>
          </v-row>
        </v-card>

        <v-card flat class="mb-4 px-4 py-3 rounded-xl" style="background-color: hsl(0 0% 10%);">
          <v-row no-gutters align="center">
            <v-col cols="auto">
              <v-icon size="28" color="platinum" class="mr-3">mdi-phone-outline</v-icon>
            </v-col>
            <v-col>
              <div class="text-silver text-body-2">Telefone</div>
              <div class="text-platinum">+351 000 000 000</div>
            </v-col>
          </v-row>
        </v-card>

        <v-card flat class="mb-6 px-4 py-3 rounded-xl" style="background-color: hsl(0 0% 10%);">
          <v-row no-gutters align="center">
            <v-col cols="auto">
              <v-icon size="28" color="platinum" class="mr-3">mdi-map-marker-outline</v-icon>
            </v-col>
            <v-col>
              <div class="text-silver text-body-2" style="">Localização</div>
              <div class="text-platinum">Portugal - Serviços em todo o país</div>
            </v-col>
          </v-row>
        </v-card>

        <v-btn
          block
          rounded="xl"
          color="success"
          size="large"
          prepend-icon="mdi-whatsapp"
          class="mb-8"
        >
          Conversar no WhatsApp
        </v-btn>

        <v-card flat class="px-4 py-3 rounded-xl" style="background-color: hsl(0 0% 10%);">
          <div class="text-platinum font-weight-bold mb-2">Horário de Atendimento</div>
          <div class="text-silver text-body-2">Segunda a Sexta: 9h às 18h</div>
          <div class="text-silver text-body-2">Sábado: 10h às 16h</div>
          <div class="text-silver text-body-2">Domingo: Sob consulta</div>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-8 rounded-xl" style="background-color: hsl(0 0% 10%);">
          <h2 class="text-h5 font-weight-bold mb-6" style="color: hsl(0, 0%, 95%);">Solicite um Orçamento</h2>

          <v-form>
            <v-row dense>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Nome *"
                  variant="outlined"
                  placeholder="Seu nome completo"
                  color="platinum"
                  class="mb-4"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Email *"
                  variant="outlined"
                  placeholder="seu@email.com"
                  color="platinum"
                  class="mb-4"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-text-field
                  label="Telefone"
                  variant="outlined"
                  placeholder="+351 000 000 000"
                  color="platinum"
                  class="mb-4"
                />
              </v-col>

              <v-col cols="12" md="6">
                <v-select
                  label="Tipo de Serviço"
                  variant="outlined"
                  color="platinum"
                  :items="['Casamento', 'Retrato', 'Evento', 'Gestante']"
                  placeholder="Selecione um serviço"
                  class="mb-4"
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  label="Mensagem *"
                  variant="outlined"
                  color="platinum"
                  placeholder="Conte-me sobre seu projeto, data do evento, localização e qualquer detalhe importante..."
                  rows="4"
                  class="mb-6"
                />
              </v-col>

              <v-col cols="12">
                <v-btn
                  block
                  rounded="xl"
                  color="platinum"
                  size="large"
                  prepend-icon="mdi-send-outline"
                  style="color: black; font-weight: bold;"
                >
                  Enviar Mensagem
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  h1{
    font-family: 'Playfair Display';
    letter-spacing: 1px;
    font-size: 48px !important;
    color: rgb(var(--v-theme-silver)) !important;
  }

  h2{
    font-family: 'Playfair Display';
    letter-spacing: 1px;
    color: rgb(var(--v-theme-silver)) !important;
  }

  p{
    font-family: "Inter", sans-serif !important;
    font-weight: light;
    list-style: none;
    font-size: 18px !important; 
    color: rgb(var(--v-theme-silver));
  }

  .v-textarea{
    font-family: "Inter", sans-serif !important;
    color: rgb(var(--v-theme-silver));
  }

  .v-text-field{
    font-family: "Inter", sans-serif !important;
    list-style: none;
    color: rgb(var(--v-theme-silver));
  }



  .v-btn{
    font-family: 'Playfair Display' !important;
    text-transform: none !important;
  }
  
</style>