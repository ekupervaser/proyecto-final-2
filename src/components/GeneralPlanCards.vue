<script setup>
import { ref, onMounted } from 'vue';
import { importCursos } from '../services/shine-services';
import Loader from './Loader.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck)


const isLoading = ref(true);
const courses = ref([]);

onMounted(() => {
  isLoading.value = true;

  importCursos((data) => {
    courses.value = data.map(course => ({
      ...course,
      isPurchased: false,
      isPurchasing: false,
    }));
    isLoading.value = false;
  });
});

</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-if="!isLoading" v-for="course in courses" :key="course.id">
      <div class="bg-white p-6 rounded-md shadow-md mb-4 flex flex-col justify-between h-full bg-[#ebc5eb86]">
        <div>
          <h2 class="text-xl font-bold mb-2">{{ course.name }}</h2>
          <p class="text-gray-600">{{ course.description }}</p>
          <ul class="mt-2">
            <li class="flex" v-for="(benefit, index) in course.benefits" :key="index">
                <font-awesome-icon :icon="['fas', 'check']" class="mt-1 mr-1 text-[#94D1BF]"/> 
                <p class="text-gray-600">{{ benefit.text }}</p>
            </li>
        </ul>
        </div>
        <div class="mt-4">
          <p class="px-2 text-xl rounded font-bold w-fit">${{ course.price }}</p>
          <div class="my-3 w-full">
            <router-link to="/login" class="py-2 px-3 rounded w-full bg-[#94D1BF] hover:bg-[#A8D9CD] active:bg-[#7BB8A6] disabled:bg-[#C1E5DF] text-white transition block text-center">Suscribirme</router-link>
            </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loader></Loader>
    </div>
  </div>
</template>