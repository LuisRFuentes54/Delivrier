<template>
  <v-container fluid class="mt-4 breakWordRule">
    <v-lazy
      :options="{ threshold: 0.5 }"
      transition="slide-x-transition"
      min-height="200"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">Envíos</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular ">
              <span class="textColorOrange">Delivrier</span> ofrece envíos de
              paquetes a cualquier parte del territorio estadounidense. Se basa
              en una modalidad Oficina a Puerta, es decir, el usuario entrega el
              paquete a envíar en una de nuestras oficinas y nosotros nos
              hacemos cargo del resto, entregando el paquete a la dirección de
              destino
            </p>
          </v-container>
          <p class="title font-weight-bold textColorOrange">
            ¡Realiza tu primer envío hoy!
          </p>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-x-transition"
      min-height="200"
    >
      <v-row class="text-center backgroundAlternative">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">Pasos</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular ">
              Queremos ofrecer a nuestros usuarios una forma sencilla y rápida
              de realizar todo el proceso de envío de paquetes. Para ello
              nuestros clientes solo deben seguir 3 sencillos pasos:
            </p>
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
                          src="../../assets/login.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >1. Inicia Sesión</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        Resgistrate o inicia sesión en nuestra plataforma de
                        envíos en línea
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
                          src="../../assets/register.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >2. Registra tu envío</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        Especifica las caraterísticas de tu envío así como
                        servicios adicionales
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
                          src="../../assets/tracking.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >3. Monitorea tu envío</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        Monitorea en todo momento el estado y posición de tu
                        envío
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
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

          <h1 class="display-2 font-weight-medium">Planes de envío</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular">
              Ofrecemos a nuestros clientes varios planes de envío según sus
              necesidades:
            </p>
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
                          src="../../assets/standard.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >Standard</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        Este es el tipo de envío básico. No tiene incluido
                        consideraciones especiales y por ello es el más barato.
                        Su paquete llegará a su destino en máximo 3 semanas
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
                          src="../../assets/priority.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >Priority</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        Pone especial atención en el cuidado y trato de los
                        paquetes. Es el mejor servicio para paquetes frágiles.
                        Además, el tiempo máximo de llegada del paquete a su
                        destino es de 1 semana
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
                          src="../../assets/express.svg"
                          transition="scale-transition"
                        ></v-img>
                      </v-col>

                      <v-col cols="3"></v-col>
                    </v-row>

                    <v-card-title class="justify-center breakWordRule"
                      >Express</v-card-title
                    >

                    <v-card-text
                      class="subtitle-1 font-weight-medium breakWordRule"
                    >
                      <div>
                        Este servicio se enfoca en la rapidez de entrega. Al
                        seleccionarlo garantizamos que el tiempo de llegada de
                        su paquete a su destino no superará los 3 días. Es el
                        mejor servicio para entregas urgentes.
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  name: "Delivery",

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
