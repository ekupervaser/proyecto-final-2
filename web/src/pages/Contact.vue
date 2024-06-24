<script>
export default {
    name: 'Contact',
}
</script>

<template>
    <div>
        <h1 class="text-3xl font-black mb-4 text-center">Contacto</h1>
        <p class="text-center mb-10">Elige el medio que prefieras para contactarte con nuestro equipo</p>
    </div>
    <template class="flex justify-between">
        <div class="flex flex-col items-center">
            <img src="../../public/chat.png" alt="chat" class="max-w-[150px]">
            <h2 class="mt-2 mb-2 text-xl font-bold">Chat</h2>
            <router-link 
            :to="`/usuario/lpzKk2JucWR1Bqyr3IOWlht8LQ33/chat`"
            class="text-blue-600">Inicia una conversación con un ejecutivo de Shine</router-link>
        </div>
        <div class="flex flex-col items-center">
            <img src="../../public/email.png" alt="email" class="max-w-[150px]">
            <h2 class="mt-2 mb-2 text-xl font-bold">Email</h2>
            <p>Escribe tu consulta a <a class="text-blue-600" href="mailto:mesadeayuda@ilearn.com">mesadeayuda@shine.com</a></p>
        </div>
        <div class="flex flex-col items-center">
            <img src="../../public/phone.png" alt="teléfono" class="max-w-[150px]">
            <h2 class="mt-2 mb-2 text-xl font-bold">Teléfono</h2>
            <p>Comunícate al +54 9 11 49384958</p>
        </div>
    </template>
</template>