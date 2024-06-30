<script>
import BaseButton from '../components/BaseButton.vue';
import PlanPanel from '../components/PlanPanel.vue';

export default {
    name: 'CourseAdmin',
    components: { PlanPanel, BaseButton },
    data() {
        return {
            isLoading: true, 
            courses: [],
       }
    },
}
</script>

<template>
    <p class="text-xl mt-5 font-black mb-6 text-center">Administrar planes de suscripción</p>
    <PlanPanel></PlanPanel>
    <div class="container flex">
        <router-link class="my-5 py-3 px-3 rounded w-full text-center bg-blue-700 text-white hover:bg-blue-600 disabled:bg-blue-400 active:bg-blue-800 transition" :to="`/cargar-plan`">Cargar nuevo plan</router-link>
    </div>
</template>