<script>
import { importPlans } from '../services/shine-services.js'
import { deletePlan } from '../services/panel.js'
import Loader from './Loader.vue';

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
        })
        .catch((error) => {
        });
    },
    showConfirmation(planId) {
      this.planIdToDelete = planId;
      this.showingConfirmation = true;
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
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-300 text-left">Nombre</th>
              <th class="px-6 py-3 bg-gray-300 text-left">Descripción</th>
              <th class="px-6 py-3 bg-gray-300 text-left">Precio</th>
              <th class="px-6 py-3 bg-gray-300"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="plan in plans">
              <td class="border px-6 py-4">{{plan.name}}</td>
              <td class="border px-6 py-4">{{plan.description}}</td>
              <td class="border px-6 py-4">${{plan.price}}</td>
              <td class="border px-6 py-4">
                <button @click="showConfirmation(plan.id)" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="showingConfirmation" class="modal flex flex-col">
          <p>Estás a punto de eliminar el curso. ¿Deseas continuar con la acción?</p>
          <button class="mx-auto mt-3 py-1 w-40 bg-red-600 rounded text-white " 
          @click="eliminarPlan(planIdToDelete)">Sí, eliminarlo</button>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center" v-else><Loader></Loader></div>
</template>

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 1000;
  }
</style>