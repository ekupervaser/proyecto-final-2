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
    <div class="py-8 m-auto" style="max-width: 1200px;">
        <p class="text-3xl mt-5 font-black mb-6 text-center">Administrar planes de suscripción</p>
        <PlanPanel></PlanPanel>
        <div class="container flex">
            <router-link class="my-5 py-3 px-3 rounded w-full text-center bg-[#94D1BF] hover:bg-[#A8D9CD] active:bg-[#7BB8A6] disabled:bg-[#C1E5DF] text-white transition" :to="`/cargar-plan`">Cargar nuevo plan</router-link>
        </div>
    </div>
</template>