<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPlanById, editPlan } from '../services/panel.js';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseTextarea from '../components/BaseTextarea.vue';
import Loader from '../components/Loader.vue';

export default {
  name: 'EditPlan',
  components: { BaseButton, BaseInput, BaseLabel, BaseTextarea, Loader },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const isLoading = ref(false); // Estado de carga
    const plan = ref({
      id: '',
      name: '',
      description: '',
      price: '',
      benefits: [],
    });

    const planId = route.params.id;

    if (!planId) {
      console.error('El ID del plan no está disponible');
      return;
    }

    onMounted(() => {
      getPlanById(planId)
        .then(data => {
          plan.value = data;
        })
        .catch(error => {
          console.error('Error al cargar el plan:', error);
        });
    });

    const updatePlan = () => {
      isLoading.value = true; // Activar Loader
      const updatedData = {
        price: plan.value.price,
        benefits: plan.value.benefits,
        description: plan.value.description,
        name: plan.value.name,
      };

      editPlan(planId, updatedData)
        .then(response => {
          console.log('Plan actualizado con éxito', response);
          router.push('/panel');
        })
        .catch(error => {
          console.error('Error al guardar el plan', error);
        })
        .finally(() => {
          isLoading.value = false; // Desactivar Loader
        });
    };

    const addBenefit = () => {
      plan.value.benefits.push({ text: '' });
    };

    const removeBenefit = index => {
      plan.value.benefits.splice(index, 1);
    };

    return {
      plan,
      isLoading,
      updatePlan,
      addBenefit,
      removeBenefit,
    };
  }
};
</script>

<template>
  <div class="min-h-full max-w-screen-sm flex flex-col justify-center m-auto" style="margin-top: 64px;">
    <h1 class="text-3xl font-black mb-4 text-center">Editar Plan</h1>
    <form action="#" @submit.prevent="updatePlan">
      <div>
        <BaseLabel modelFor="name">Nombre</BaseLabel>
        <BaseInput id="name" v-model="plan.name" />
      </div>
      <div>
        <BaseLabel modelFor="description">Descripción</BaseLabel>
        <BaseTextarea id="description" v-model="plan.description" />
      </div>
      <div>
        <BaseLabel modelFor="price">Precio</BaseLabel>
        <BaseInput id="price" v-model="plan.price" type="number" />
      </div>
      <div>
        <div class="flex flex-col">
          <BaseLabel modelFor="benefits">Beneficios</BaseLabel>
          <div v-for="(benefit, index) in plan.benefits" :key="index" class="mt-2">
            <BaseInput v-model="benefit.text" />
            <button type="button" @click="removeBenefit(index)" class="text-red-500 mt-1">
              Eliminar
            </button>
          </div>
          <button type="button" @click="addBenefit" class="text-left mt-2">
            Agregar Beneficio
          </button>
        </div>
      </div>
      <BaseButton type="submit">
        <template v-if="isLoading">
          <Loader />
        </template>
        <template v-else>
          Guardar cambios
        </template>
      </BaseButton>
    </form>
  </div>
</template>

<style>
.min-h-full {
  min-height: calc(100vh - 136px);
}
</style>