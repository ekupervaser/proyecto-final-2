<script>
import BaseButton from '../components/BaseButton.vue';
import CoursePanel from '../components/CoursePanel.vue';

export default {
    name: 'CourseAdmin',
    components: { CoursePanel, BaseButton },
    data() {
        return {
            isLoading: true, 
            courses: [],
       }
    },
}
</script>

<template>
    <p class="text-xl font-black mb-6 text-center">¡Agrega y elimina los cursos cuando desees!</p>
    <CoursePanel></CoursePanel>
    <div class="flex">
        <router-link class="my-5 py-3 px-3 rounded w-full text-center bg-blue-700 text-white hover:bg-blue-600 disabled:bg-blue-400 active:bg-blue-800 transition" :to="`/cargar-curso`">Cargar nuevo curso</router-link>
    </div>
</template>