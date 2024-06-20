<script setup>
import { useRoute } from 'vue-router';
import { useUserProfile } from '../composition/useUserProfile';
import UserProfileData from '../components/UserProfileData.vue';
import LoadingContext from '../components/LoadingContext.vue';

const route = useRoute();
const { user, userLoading } = useUserProfile(route.params.id);
</script>

<template>
    <LoadingContext :loading="userLoading">
        <h1 class="mb-4 font-bold text-3xl">Perfil de {{ user.email }}</h1>
        <UserProfileData :user="user" />
        <hr class="mb-4" />
        <h2 class="mb-2 text-xl">Conversación privada</h2>
        <router-link 
            :to="`/usuario/${user.id}/chat`"
            class="text-blue-600 underline"
        >Iniciar una conversación privada con {{ user.email }}</router-link>
    </LoadingContext>
</template>