<script setup>
import { useAuth } from '../composition/useAuth'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faComments, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faComments, faEnvelope, faPhone)

const { user } = useAuth();

</script>

<template>
    <div class="min-h-full p-20 align-middle">
            <div>
                <h1 class="text-3xl font-black mb-4 text-center">Contacto</h1>
                <p class="text-center mb-10">Elige el medio que prefieras para contactarte con nuestro equipo</p>
            </div>
            <template class="flex justify-center gap-20 mt-20">
                <!-- <div class="flex flex-col items-center">
                    <font-awesome-icon :icon="['fas', 'comments']" class="my-1 mr-1 text-[#94D1BF] text-5xl"/>                
                    <h2 class="mt-2 mb-2 text-xl font-bold">Chat</h2>
                    <router-link 
                    :to="`/usuario/${user.id}/chat`"
                    class="text-blue-600">Chatea con un ejecutivo de Shine</router-link>
                </div> -->
                <div class="p-6 flex flex-col items-center shadow rounded-lg min-w-[400px]">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="my-1 mr-1 text-[#94D1BF] text-5xl"/>                
                    <h2 class="mt-2 mb-2 text-xl font-bold">Email</h2>
                    <p>Escribe tu consulta a <a class="text-blue-600" href="mailto:mesadeayuda@ilearn.com">mesadeayuda@shine.com</a></p>
                </div>
                <div class="p-6 flex flex-col items-center shadow rounded-lg min-w-[400px]">
                    <font-awesome-icon :icon="['fas', 'phone']" class="my-1 mr-1 text-[#94D1BF] text-5xl"/>                
                    <h2 class="mt-2 mb-2 text-xl font-bold">Teléfono</h2>
                    <p>Comunicate al +54 9 11 49384958</p>
                </div>
            </template>
    </div>
</template>

<style>
    .min-h-full {
        min-height: calc(100vh - 136px);
    }
</style>