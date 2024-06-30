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
  <div className="relative overflow-hidden" style="height: calc(100vh - 160px)">
    <video className="absolute top-0 left-0 w-full h-auto object-cover z-1" style="height: calc(100vh - 160px)" src="/video-home.mp4" autoplay muted loop></video>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-4">
      <header className="py-6 max-w-4xl mx-auto">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white drop-shadow-md">Tecnología y excelencia para cuidar tu ropa</h1>
        </div>
      </header>
      <p className="text-lg mb-6 text-white drop-shadow-md max-w-3xl mx-auto">En <b>SHINE</b> nos dedicamos a ofrecerte el mejor servicio de lavado y cuidado de ropa. </p>
    </div>
  </div>

  <section class="flex justify-center bg-gray-200 w-auto mx-auto -mt-12">
    <div class="bg-white rounded-lg p-6 shadow-lg max-w-4xl mx-auto z-10">
      <p class="text-lg">Sabemos lo importante que es para vos mantener tus prendas en perfecto estado, y por eso, combinamos tecnología de punta con un equipo de expertos comprometidos con la excelencia.</p>
    </div>
  </section>

  <section className="bg-gray-200 py-12">
    <div className="container mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-8">¿Qué ofrecemos?</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-[#94D1BF] mb-4"><font-awesome-icon :icon="['fas', 'truck']" /></div>
            <h3 className="text-xl font-bold mb-4">Servicio a Domicilio</h3>
            <p>Recogemos y entregamos tu ropa en la comodidad de tu hogar.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-[#94D1BF] mb-4"><font-awesome-icon :icon="['fas', 'tshirt']" /></div>
            <h3 className="text-xl font-bold mb-4">Tratamiento Especializado</h3>
            <p>Cuidado especial para prendas delicadas y artículos de limpieza complejos.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-[#94D1BF] mb-4"><font-awesome-icon :icon="['fas', 'leaf']" /></div>
            <h3 className="text-xl font-bold mb-4">Sostenibilidad</h3>
            <p>Utilizamos productos ecológicos que cuidan tu ropa y el medio ambiente.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl text-[#94D1BF] mb-4"><font-awesome-icon :icon="['fas', 'tags']" /></div>
            <h3 className="text-xl font-bold mb-4">Promociones y Descuentos</h3>
            <p>Tenemos promociones y descuentos para vos.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="py-12 inset-0 bg-cover bg-center bg-opacity-20" style="background-image: url('/logo-con-opacidad.png');">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegirnos?</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-2/3 p-4">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Calidad Insuperable</h3>
            <p>Nuestra prioridad es que tus prendas reciban el mejor tratamiento posible. Utilizamos tecnología avanzada y productos de limpieza de alta calidad que aseguran resultados impecables.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Comodidad a tu Alcance</h3>
            <p>Sabemos que tu tiempo es valioso. Con un par de clics en nuestra plataforma, podés programar la recogida y entrega, sin necesidad de desplazarte.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Sostenibilidad y Responsabilidad</h3>
            <p>Utilizamos productos ecológicos y técnicas de lavado eficientes que reducen el impacto ambiental. Al elegirnos, también estás contribuyendo a un futuro más sostenible.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">Promociones y Ofertas Exclusivas</h3>
            <p>Nos gusta premiar a nuestros clientes leales. Regularmente lanzamos promociones y descuentos especiales para que puedas disfrutar de nuestros servicios premium a precios aún más atractivos.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="container py-8">
    <h2 className="text-3xl font-bold mb-4 text-center">¡Probá la Diferencia Hoy Mismo!</h2>
    <GeneralPlanCards></GeneralPlanCards>
  </section>

  <section className="bg-[#FFCCBC] py-12">
    <div className="mx-auto text-center px-4">
      <p className="text-lg mb-8">Elegir <b>SHINE</b> significa optar por un servicio de lavandería que entiende y satisface tus necesidades.</p>
      <router-link to="/planes" class="bg-white px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">Registrate</router-link>
    </div>
  </section>
</template>
