<script>
import GeneralPlanCards from '../components/GeneralPlanCards.vue'

export default {
    name: 'Plans',
    components: { GeneralPlanCards }
}
</script>

<template>
    <div class="min-h-full">
        <h1 class="text-3xl font-black mb-4 text-center">Conocé nuestros Servicios</h1>
        <p class="text-center max-w-[800px] mt-5 mb-5 m-auto">En <strong>Shine</strong> te ofrecemos una amplia gama de lavados diseñados para enriquecer tu experiencia de lavandería y cuidar tus prendas de manera profesional. ¡Descubrí tus opciones y comenzá a disfrutar de un servicio de calidad hoy mismo!</p>
        <GeneralPlanCards></GeneralPlanCards>
    </div>
</template>