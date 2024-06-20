<script setup>
import BaseButton from '../components/BaseButton.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseInput from '../components/BaseInput.vue';
import { login, isAuthenticated } from '../services/Auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const loginLoading = ref(false);

let loginErrorMessage = ref(null);

const form = ref({
    email: '',
    password: '',
});

const doLogin = async () => {
    try {
        loginLoading.value = true;
        await login({
            ...form.value,
        });

        if (isAuthenticated()) {
            router.push('/');
        }

    } catch (error) {
        if (error.code === 'auth/missing-password' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-login-credentials') {
            loginErrorMessage = 'Credenciales inválidas';
        }
    }
    loginLoading.value = false;
}

</script>
<template>
    <div class="max-w-screen-sm flex flex-col justify-center m-auto">
        <h1 class="text-3xl font-black mb-4">Iniciar sesión</h1>
        <form action="#"
        @submit.prevent="doLogin"
        >
            <div>
                <BaseLabel modelFor="email">Email</BaseLabel>
                <BaseInput
                :disabled="loginLoading"
                type="email" 
                id="email"
                v-model="form.email"
                />
            </div>
            <div>
                <BaseLabel modelFor="password">Contraseña</BaseLabel>
                <BaseInput 
                :disabled="loginLoading"
                type="password" 
                id="password"
                v-model="form.password"
                />
            </div>
            <BaseButton :loading="loginLoading">Iniciar sesión</BaseButton>
        </form>
            <div v-if="loginErrorMessage" class="text-red-500 mt-2">{{ loginErrorMessage }}</div>
     </div>
</template>