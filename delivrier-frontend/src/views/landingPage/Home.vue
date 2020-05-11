<template>
  <v-container fluid class="mt-4 breakWordRule">
    <v-lazy
      :options="{ threshold: 0.5 }"
      transition="slide-x-transition"
      min-height="400"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">Experiencia Delivrier</h1>
          <br />
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular  ">
              Somos una compañía de envíos de paquetes con alcance a todo el
              territorio estadounidense. Ofrecemos un servicio rápido, eficiente
              y confiable siendo nuestro principal objetivo la satisfacción de
              nuestros clientes. Para ello ponemos especial cuidado en el trato
              de cada uno de los paquetes enviados y la velocidad de las
              entregas para mantener la calidad de nuestro servicio
            </p>
            <p class="title font-weight-bold textColorOrange">
              ¡Únete ahora para realizar tu primer envío!
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-y-transition"
      min-height="400"
    >
      <v-row class="text-center backgroundAlternative">
        <v-col cols="12">
          <br />

          <h1
            class="font-weight-medium"
            :class="$vuetify.breakpoint.smAndUp ? 'display-2' : 'display-1'"
          >
            Características del Servicio
          </h1>
          <br />
          <br />
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
                        src="../../assets/alfiler.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Alcance de envíos</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      En Delivrier queremos conectar a toda una nación, por lo
                      cual realizamos envíos a cualquier destino en el
                      territorio estadounidense
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
                        src="../../assets/caja.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Modalidad Oficina a Puerta</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Después de registrar tu envío solo debes preocuparte por
                      entregar el paquete en una de nuestras oficinas y nosotros
                      nos encargamos del resto
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
                        src="../../assets/camion.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Monitorea tu envío</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Ofrecemos la opción a nuestros clientes de monitorear el
                      estado de tu paquete en todo momento. Pudiendo ver el
                      recorrido que realiza y el tiempo que tarda en realizarlo
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-y-transition"
      min-height="400"
    >
      <v-row class="text-center parallax">
        <v-col cols="12">
          <br />
          <h1 class="display-2 font-weight-medium breakWordRule white--text">
            Servicios adicionales
          </h1>
          <br />
          <p class="subtitle-1 font-weight-regular breakWordRule white--text">
            Para mejorar la experiencia y comodidad de nuestros usuarios
            ofrecemos las siguientes comodidades
          </p>
          <v-container>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card
                  color="transparent"
                  flat
                  class="mx-auto white--text"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/telegram.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Integración con telegram</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 white--text font-weight-medium breakWordRule"
                  >
                    <div>
                      Nuestros clientes pueden interactuar con nuestro bot de
                      telegram
                      <span class="textColorOrange">@myDelivrierBot</span> para
                      determinar el estado de cualquiera de sus envíos, ya sea
                      que hayan sido entregados o no. Solo necesitarán
                      introducir el comando
                      <span class="textColorOrange">/PackageCheck</span>
                      y a continuación el número de rastreo
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
                        src="../../assets/factura.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule white--text"
                    >Estimador y Cotizador</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 white--text font-weight-medium breakWordRule"
                  >
                    <div>
                      Nuestro objetivo es hacer fácil para nuestros clientes
                      todo el complicado proceso tradicional de envíos. Es por
                      eso que al momento de resgistrar las características de tu
                      envío obtienes varias opciones de cotización basado en los
                      planes de envío y el tiempo estimado de entrega
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  color="transparent"
                  flat
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/escanear.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule white--text"
                    >Código QR</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 white--text font-weight-medium breakWordRule"
                  >
                    <div>
                      Utilizar un número de rastreo para monitorear tus envíos
                      puede resultar un poco confuso y complicado y por eso
                      hemos implementado el método de generación de códigos QR
                      por envío. Solo debes almacenar el código en una imagen y
                      cargarla a la plataforma cada vez que quieras ver el
                      estado de tu envío
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card
                  color="transparent"
                  flat
                  class="mx-auto"
                  max-width="400"
                >
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/correo.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule white--text"
                    >Notificaciones por Correo</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 white--text font-weight-medium breakWordRule"
                  >
                    <div>
                      En lugar de ingresar siempre a la plataforma para observar
                      el estado de tus envíos, en Delivrier velamos por tu
                      comodidad y te enviamos correos electrónicos cada vez que
                      se actualice el estado de alguno de tus envíos. De esta
                      forma siempre estarás enterado de la ubicación de tus
                      envío y de su llegada a su destino
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <br />
            <v-row justify="center">
              <p class="title font-weight-bold textColorOrange breakWordRule">
                ¡Registrate ahora para disfrutar de todos estos servicios!
              </p>
            </v-row>
            <v-row justify="center">
              <v-col
                cols="12"
                md="2"
                class="d-flex justify-center align-center"
              >
                <v-btn
                  rounded
                  class="font-weight-bold"
                  color="#FF6200"
                  :large="!$vuetify.breakpoint.smAndDown"
                  dark
                  >Registrarme</v-btn
                >
              </v-col>
            </v-row>
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
      <v-row class="text-center backgroundAlternative">
        <v-col cols="12">
          <br />

          <h1 class="display-2 font-weight-medium">Oficinas</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular ">
              Delivrier está basado en el modelo Oficina a Puerta por lo que
              para enviar tus paquetes debes entregarlos en una oficina de
              Delivrier. Desafortunadamente Delivrier es todavía una empresa
              pequeña por lo que poseemos solo un local por estado
            </p>

            <p class="title font-weight-bold textColorOrange">
              ¡Al realizar tu envío descubre la oficina más cercana a ti!
            </p>
          </v-container>
        </v-col>
      </v-row>
    </v-lazy>
    <v-lazy
      :options="{
        threshold: 0.7
      }"
      transition="slide-x-transition"
      min-height="400"
    >
      <v-row class="text-center">
        <v-col cols="12">
          <br />
          <h1 class="display-2 font-weight-medium">COVID-19</h1>
          <br />
          <v-container>
            <p class="subtitle-1 font-weight-regular">
              Actualmente, todo el mundo ha sido afectado por el
              <span class="textColorOrange">COVID-19</span>. Ha cambiado por
              completo nuestra forma de vivir, comunicarnos, estudiar y
              trabajar. Y sabemos que muchas personas dependen de los servicios
              de envíos en estos tiempos atípicos
              <br />
              <br />
              Es por eso que siguiendo las recomendaciones de la
              <span class="textColorOrange"
                >Organización Mundial de la Salud (OMS)</span
              >
              seguimos prestando nuestros servicios con las precauciones
              apropiadas para proteger a nuestros clientes y personal. En esta
              situación Delivrier ha tomado las siguientes acciones:
            </p>
          </v-container>
          <v-container>
            <v-row class="text-center">
              <v-col cols="12" sm="4">
                <v-card flat class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/lavabo.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Higiene</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Colocamos especial atención en la higiene, fomentando
                      buenas prácticas de higiene y lavado de manos en todo
                      nuestro personal para que las adopten
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card flat class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/prescripcion.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Educación e Información</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Se realizan conferencias y se mantiene informado a nuestro
                      personal sobre el COVID-19 y cómo se debe realizar el
                      trato adecuado de paquetes
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" sm="4">
                <v-card flat class="mx-auto" max-width="400">
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <v-img
                        class="white--text align-end"
                        src="../../assets/mascara.svg"
                        transition="scale-transition"
                      ></v-img>
                    </v-col>

                    <v-col cols="3"></v-col>
                  </v-row>

                  <v-card-title class="justify-center breakWordRule"
                    >Responsabilidad</v-card-title
                  >

                  <v-card-text
                    class="subtitle-1 font-weight-medium breakWordRule"
                  >
                    <div>
                      Se realiza una evaluación constante de nuestro personal y
                      se le pide a todo aquel que presente síntomas del COVID-19
                      que se quede en casa
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
  name: "Home",

  data: () => ({})
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

.parallax {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../../assets/delivery-box.png");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
