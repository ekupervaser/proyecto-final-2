<script>
import CourseCards from '../components/CourseCards.vue'

export default {
    name: 'Courses',
    components: { CourseCards }
}
</script>

<template>
    <h1 class="text-3xl font-black mb-4 text-center">Explora nuestros Servicios</h1>
    <p class="text-center max-w-[800px] mt-5 mb-5 m-auto">En <strong>iLearn</strong>, te ofrecemos una amplia gama de cursos diseñados para enriquecer tu conocimiento y potenciar tu crecimiento personal y profesional. ¡Descubre tus próximas oportunidades de aprendizaje y comienza a construir un futuro brillante hoy mismo!</p>
    <CourseCards></CourseCards>
</template>