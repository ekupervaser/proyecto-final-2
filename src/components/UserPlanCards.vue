<script setup>
import { ref, onMounted } from 'vue';
import { useAuth } from '../composition/useAuth';
import { importPlans, purchasePlanFirestore } from '../services/shine-services';
import { getAuthUserProfileById, loadUserData } from '../services/user';
import Loader from './Loader.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck);

const { user } = useAuth();

const isLoading = ref(true);
const plans = ref([]);

onMounted(async () => {
  isLoading.value = true;

  await loadUserData(user);

  importPlans(async (data) => {
    const userPlans = user.value?.plans || [];
    const userProfile = await getAuthUserProfileById(user.value.id);
    const userPurchasedPlans = userProfile.plansPurchased || [];

    plans.value = data.map(plan => {
      const isPurchased = userPlans.some(userPlanId => userPlanId === plan.id) ||
        userPurchasedPlans.some(purchasedPlan => purchasedPlan.planId === plan.id);

      return {
        ...plan,
        isPurchased,
        isPurchasing: false,
      };
    });
    isLoading.value = false;
  });
});


async function purchasePlan(userId, planId) {

  const userProfile = await getAuthUserProfileById(userId);

  if (!userProfile.plansPurchased || !userProfile.plansPurchased.includes(planId)) {

    plans.value = plans.value.map(p => ({
      ...p,
      isPurchasing: p.id === planId,
    }));

    // Obtener la fecha y hora actuales
    const fechaActual = new Date();

    // Actualizar el perfil del usuario con el plan comprado y la fecha de compra
    await purchasePlanFirestore(userId, planId);

    plans.value = plans.value.map(plan => {
      if (plan.id === planId) {
        return { ...plan, isPurchased: true, isPurchasing: false, };
      }
      return plan;
    });

    plans.value = plans.value.map(p => ({
      ...p,
      isPurchasing: false,
    }));
  }
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div v-if="!isLoading" v-for="plan in plans" :key="plan.id">
      <div class="bg-white p-6 rounded-md shadow-md mb-4 flex flex-col justify-between h-full bg-[#ebc5eb86]">
        <div>
          <h2 class="text-xl font-bold mb-2">{{ plan.name }}</h2>
          <p class="text-gray-600">{{ plan.description }}</p>
          <ul class="mt-2">
            <li class="flex" v-for="(benefit, index) in plan.benefits" :key="index">
                <font-awesome-icon :icon="['fas', 'check']" class="mt-1 mr-1 text-[#94D1BF]"/> 
                <p class="text-gray-600">{{ benefit.text }}</p>
            </li>
        </ul>
        </div>
        <div class="mt-4">
          <p v-if="!plan.isPurchased" class="bg-slate-200 px-2 rounded font-bold w-fit">${{ plan.price }}</p>
          <button v-if="!plan.isPurchased" @click="purchase(user.id, plan.id)"
            class="mt-2 bg-[#94D1BF] text-white px-4 py-2 w-full rounded cursor-pointer">
            <span v-if="plan.isPurchasing">
              <Loader size="small"></Loader>
            </span>
            <span v-else>Comprar</span>
          </button>
          <button v-else :disabled="plan.isPurchased"
            :class="{ 'bg-gray-300': plan.isPurchased, 'cursor-de fault': plan.isPurchased }"
            class="mt-2 w-full text-white px-4 py-2 rounded cursor-pointer">
            Comprado
          </button>
        </div>
      </div>
    </div>
    <div class="col-span-full flex justify-center items-center" v-else>
      <Loader style="height: calc(100vh - 136px);"></Loader>
    </div>
  </div>
</template>