<script>
import { importCursos } from '../services/shine-services.js'
import { deleteCourse } from '../services/panel.js'
import Loader from './Loader.vue';

export default {
    name: "CoursePanel",
    data() {
        return {
            isLoading: true,
            courses: [],
            showingConfirmation: false,
            courseIdToDelete: null,
        };
    },
    methods: {
    eliminarCurso() {
      deleteCourse(this.courseIdToDelete)
        .then(() => {
        })
        .catch((error) => {
        });
    },
    showConfirmation(courseId) {
      this.courseIdToDelete = courseId;
      this.showingConfirmation = true;
    }
  },
    mounted() {
        this.isLoading = true;
        importCursos(courses => {
            this.courses = courses;
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
            <tr v-for="course in courses">
              <td class="border px-6 py-4">{{course.name}}</td>
              <td class="border px-6 py-4">{{course.description}}</td>
              <td class="border px-6 py-4">${{course.price}}</td>
              <td class="border px-6 py-4">
                <button @click="showConfirmation(course.id)" class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="showingConfirmation" class="modal flex flex-col">
          <p>Estás a punto de eliminar el curso. ¿Deseas continuar con la acción?</p>
          <button class="mx-auto mt-3 py-1 w-40 bg-red-600 rounded text-white " 
          @click="eliminarCurso(courseIdToDelete)">Sí, eliminarlo</button>
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
</style>../services/shine-services.js