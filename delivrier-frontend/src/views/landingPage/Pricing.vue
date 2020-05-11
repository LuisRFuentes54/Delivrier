<template>
  <v-container fluid class="mt-4 breakWordRule">
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-x-transition"
      min-height="200"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">Cotizacón</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular ">
              En
              <span class="textColorOrange">Delivrier</span> nos importa la
              transparencia con nuestros clientes. Al pagar por nuestros
              servicios queremos hacerte saber exactamente de los aspectos a
              tomar en consideración para el costo final
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{ threshold: 0.5 }"
      transition="slide-x-transition"
      min-height="400"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <v-container>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  class="mx-auto"
                  color="transparent"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/plan.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Plan de envío</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Se ofrecen distintos planes de envío con características
                      diferentes. Cada uno de dichos planes poseen un costo base
                      que será modificado por las demás carácterísticas del
                      envío
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  color="transparent"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/peso.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Peso</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      El peso de tu paquete juega un papel importante en el
                      precio final de tu envío. Minetras más pesado el paquete
                      se requiere mayor cuidado para su movilización
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  color="transparent"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/cajas.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Cantidad de paquetes</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      En un mismo envío puedes incluir varios paquetes. La
                      cantidad de tu paquetes es proporcional al precio
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  class="mx-auto"
                  color="transparent"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/camion.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Distancia</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Para envíos de largas distancias se utiliza mayor cantidad
                      de combustible. Es por eso que al precio final se le
                      incluye un pequeño porcentaje proporcional a la distancia
                      a recorrer
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  color="transparent"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/empaque.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Empaques</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Nuestros usuarios pueden seleccionar entre distintos
                      empaques para sus envíos. Cada empaque posee un precio que
                      se adiciona directamente al monto del envío final
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  flat
                  color="transparent"
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/seguro.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Seguros</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Ofrecemos varios planes de seguros que cubren distintos
                      porcentajes del valor de los objetos enviados en caso de
                      extravío o daño
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: "Pricing",

  data: () => ({
    //
  })
};
</script>
<style scoped>
.textColorOrange {
  color: #ff6200 !important;
}
.backgroundAlternative {
  background-color: #fafafa !important;
}
.breakWordRule {
  word-break: break-word !important;
}
</style>
