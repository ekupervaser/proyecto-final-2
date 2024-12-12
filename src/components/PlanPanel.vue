<script>
import { importPlans } from '../services/shine-services.js';
import { deletePlan } from '../services/panel.js';
import Loader from './Loader.vue';
import BaseButton from './BaseButton.vue';

export default {
    name: "PlanPanel",
    data() {
        return {
            isLoading: true,
            plans: [],
            showingConfirmation: false,
            planIdToDelete: null,
        };
    },
    methods: {
        eliminarPlan() {
            deletePlan(this.planIdToDelete)
                .then(() => {
                    this.plans = this.plans.filter(plan => plan.id !== this.planIdToDelete);
                    this.showingConfirmation = false;
                })
                .catch(error => console.error('Error al eliminar el plan:', error));
        },
        showConfirmation(planId) {
            this.planIdToDelete = planId;
            this.showingConfirmation = true;
        },
        // Redirigir a la página de edición del plan
        redirectToEditPlan(planId) {
            this.$router.push('/edit-plan/' + planId)
        }
    },
    mounted() {
        this.isLoading = true;
        importPlans(plans => {
            this.plans = plans;
            this.isLoading = false;
            this.showingConfirmation = false;
        });
    },
    components: { Loader }
};
</script>

<template>
  <div class="flex flex-col" v-if="!isLoading">
    <div class="container mx-auto">
      <div class="overflow-x-auto rounded-lg">
        <table class="min-w-full table-fixed">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-300 text-left">Nombre</th>
              <th class="px-6 py-3 bg-gray-300 text-left">Descripción</th>
              <th class="px-6 py-3 bg-gray-300 text-left">Precio</th>
              <th class="px-6 py-3 bg-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="plan in plans" :key="plan.id">
              <td class="border px-6 py-4 align-middle h-full">{{ plan.name }}</td>
              <td class="border px-6 py-4 align-middle h-full">{{ plan.description }}</td>
              <td class="border px-6 py-4 align-middle h-full">${{ plan.price }}</td>
              <td class="border px-6 py-4">
                <!-- Botón para editar (redirige a EditPlan.vue) -->
                <button 
                  @click="redirectToEditPlan(plan.id)" 
                  class="boton-editar w-full text-white px-4 py-2 rounded-lg">
                  Editar
                </button>
                <!-- Botón para eliminar -->
                <button 
                  @click="showConfirmation(plan.id)" 
                  class="boton-cancelar w-full text-white mt-2 px-4 py-2 rounded-lg">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Modal de confirmación -->
        <div v-if="showingConfirmation" class="modal flex flex-col">
          <p>Estás a punto de eliminar el plan. ¿Deseas continuar?</p>
          <button 
            class="mx-auto mt-3 py-1 w-40 bg-red-600 rounded text-white" 
            @click="eliminarPlan()">
            Sí, eliminarlo
          </button>
          <button 
            class="mx-auto mt-3 py-1 w-40 bg-gray-600 rounded text-white"
            @click="showingConfirmation = false">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center" v-else><Loader /></div>
</template>