<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTruck, faTshirt, faLeaf, faTags, faPhoneAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import GeneralPlanCards from '../components/GeneralPlanCards.vue'

library.add(faTruck, faTshirt, faLeaf, faTags, faPhoneAlt, faCheck)

export default {
  name: 'Home',
  components: {
    FontAwesomeIcon, 
    GeneralPlanCards
  }
}
</script>

<template>
  <div class="relative overflow-hidden" style="height: calc(100vh - 160px)">
    <video class="absolute top-0 left-0 w-full h-auto object-cover z-1" style="height: calc(100vh - 160px)" src="/video-home.mp4" autoplay muted loop></video>
    <div class="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-4">
      <header class="py-6 max-w-4xl mx-auto">
        <div class="container mx-auto">
          <h1 class="text-4xl font-bold text-white drop-shadow-md">Tecnología y excelencia para cuidar tu ropa</h1>
        </div>
      </header>
      <p class="text-lg mb-6 text-white drop-shadow-md max-w-3xl mx-auto">En <b>SHINE</b> nos dedicamos a ofrecerte el mejor servicio de lavado y cuidado de ropa.</p>
    </div>
  </div>

  <section class="flex justify-center bg-gray-200 w-auto mx-auto -mt-12">
    <div class="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto z-10">
      <p class="text-lg">Sabemos lo importante que es para vos mantener tus prendas en perfecto estado, y por eso, combinamos <strong>tecnología de punta</strong> con un <strong>equipo de expertos</strong> comprometidos con la excelencia.</p>
    </div>
  </section>

  <section class="bg-gray-200 py-12">
    <div class="container mx-auto text-center px-4">
        <h2 class="text-3xl font-bold mb-8">¿Qué ofrecemos?</h2>
        <div class="flex flex-wrap justify-center">
            <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
                    <div class="text-4xl text-[#94D1BF] mb-4">
                        <font-awesome-icon :icon="['fas', 'truck']" />
                    </div>
                    <h3 class="text-xl font-bold mb-4">Servicio a Domicilio</h3>
                    <p class="flex-grow">Recogemos y entregamos tu ropa en la comodidad de tu hogar.</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
                    <div class="text-4xl text-[#94D1BF] mb-4">
                        <font-awesome-icon :icon="['fas', 'tshirt']" />
                    </div>
                    <h3 class="text-xl font-bold mb-4">Tratamiento Especializado</h3>
                    <p class="flex-grow">Cuidado especial para prendas delicadas y artículos de limpieza complejos.</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
                    <div class="text-4xl text-[#94D1BF] mb-4">
                        <font-awesome-icon :icon="['fas', 'leaf']" />
                    </div>
                    <h3 class="text-xl font-bold mb-4">Sostenibilidad</h3>
                    <p class="flex-grow">Utilizamos productos ecológicos que cuidan tu ropa y el medio ambiente.</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full">
                    <div class="text-4xl text-[#94D1BF] mb-4">
                        <font-awesome-icon :icon="['fas', 'tags']" />
                    </div>
                    <h3 class="text-xl font-bold mb-4">Promociones y Descuentos</h3>
                    <p class="flex-grow">Tenemos promociones y descuentos para vos.</p>
                </div>
            </div>
        </div>
    </div>
</section>


  <section class="py-12 inset-0 bg-cover relative">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-center">¿Por qué elegirnos?</h2>
      <div class="flex flex-wrap">
        <div class="w-full lg:w-2/3 p-4">
          <div class="mb-4">
            <h3 class="text-2xl font-bold mb-2">Calidad Insuperable</h3>
            <p>Nuestra prioridad es que tus prendas reciban el mejor tratamiento posible. Utilizamos tecnología avanzada y productos de limpieza de alta calidad que aseguran resultados impecables.</p>
          </div>
          <div class="mb-4">
            <h3 class="text-2xl font-bold mb-2">Comodidad a tu Alcance</h3>
            <p>Sabemos que tu tiempo es valioso. Con un par de clics en nuestra plataforma, podés programar la recogida y entrega, sin necesidad de desplazarte.</p>
          </div>
          <div class="mb-4">
            <h3 class="text-2xl font-bold mb-2">Sostenibilidad y Responsabilidad</h3>
            <p>Utilizamos productos ecológicos y técnicas de lavado eficientes que reducen el impacto ambiental. Al elegirnos, también estás contribuyendo a un futuro más sostenible.</p>
          </div>
          <div class="mb-4">
            <h3 class="text-2xl font-bold mb-2">Promociones y Ofertas Exclusivas</h3>
            <p>Nos gusta premiar a nuestros clientes leales. Regularmente lanzamos promociones y descuentos especiales para que puedas disfrutar de nuestros servicios premium a precios aún más atractivos.</p>
          </div>
        </div>
        <div class="hidden lg:block absolute inset-y-0 right-0 w-1/2 overflow-hidden">
          <img src="/logo-con-opacidad.png" alt="Logo" class="mt-5 h-full w-auto max-w-full transform translate-x-1/2" style="clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);">
        </div>
      </div>
    </div>
  </section>

  <section class="container py-8">
    <h2 class="text-3xl font-bold mb-4 text-center">¡Probá la Diferencia Hoy Mismo!</h2>
    <GeneralPlanCards></GeneralPlanCards>
  </section>

  <section class="bg-[#FFCCBC] py-12">
    <div class="mx-auto text-center px-4">
      <p class="text-lg mb-8">Elegir <b>SHINE</b> significa optar por un servicio de lavandería que entiende y satisface tus necesidades.</p>
      <router-link to="/planes" class="bg-white px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">Registrate</router-link>
    </div>
  </section>
</template>
