<script setup>
import { useAuth } from '../composition/useAuth';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

library.add(faComments, faEnvelope, faPhone);

const { user } = useAuth();
</script>

<template>
  <div class="min-h-full p-6 md:p-20 align-middle" style="margin-top: 64px;">
    <div>
      <h1 class="text-2xl md:text-3xl font-black mb-4 text-center">Contacto</h1>
      <p class="text-center mb-10">Elige el medio que prefieras para contactarte con nuestro equipo</p>
    </div>
    <div class="flex flex-col md:flex-row justify-center gap-10 md:gap-20 mt-10 md:mt-20">

      <div class="p-6 flex flex-col items-center text-center shadow rounded-lg min-w-[300px]">
        <font-awesome-icon :icon="['fas', 'envelope']" class="my-1 text-[#94D1BF] text-4xl md:text-5xl"/>                
        <h2 class="mt-2 mb-2 text-lg md:text-xl font-bold">Email</h2>
        <p>Escribe tu consulta a <a class="text-blue-600" href="mailto:mesadeayuda@ilearn.com">mesadeayuda@shine.com</a></p>
      </div>

      <div class="p-6 flex flex-col items-center text-center shadow rounded-lg min-w-[300px]">
        <font-awesome-icon :icon="['fas', 'phone']" class="my-1 text-[#94D1BF] text-4xl md:text-5xl"/>                
        <h2 class="mt-2 mb-2 text-lg md:text-xl font-bold">Teléfono</h2>
        <p>Comunicate al +54 9 11 49384958</p>
      </div>
    </div>
  </div>
</template>

<style>
.min-h-full {
  min-height: calc(100vh - 136px);
}
</style>