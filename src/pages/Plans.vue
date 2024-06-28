<script>
import PlanCards from '../components/PlanCards.vue'

export default {
    name: 'Plans',
    components: { PlanCards }
}
</script>

<template>
    <h1 class="text-3xl font-black mb-4 text-center">Conocé nuestros Planes</h1>
    <p class="text-center max-w-[800px] mt-5 mb-5 m-auto">En <strong>Shine</strong> te ofrecemos una amplia gama de planes diseñados para enriquecer tu experiencia de lavandería y cuidar tus prendas de manera profesional. ¡Descubrí tus opciones y comenzá a disfrutar de un servicio de calidad hoy mismo!</p>
    <PlanCards></PlanCards>
</template>