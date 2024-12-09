<script setup>
import BaseButton from '../components/BaseButton.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseInput from '../components/BaseInput.vue';
import { login, isAuthenticated } from '../services/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faEyeSlash, faEye);

const router = useRouter();

const loginLoading = ref(false);

let loginErrorMessage = ref(null);

const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

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
    <div class="max-w-72 flex flex-col justify-center m-auto" style="height: calc(100vh - 136px); margin-top: 64px">
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
            <div class="relative">
                <BaseLabel modelFor="password">Contraseña</BaseLabel>
                <BaseInput 
                :disabled="loginLoading"
                :type="isPasswordVisible ? 'text' : 'password'"
                id="password"
                v-model="form.password"
                class="relative"
                />
                <button
                    type="button"
                    class="absolute mt-4 inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                    @click="togglePasswordVisibility"                >
                    <FontAwesomeIcon v-if="isPasswordVisible" :icon="['fas', 'fa-eye-slash']" />
                    <FontAwesomeIcon v-else :icon="['fas', 'fa-eye']" />
                </button>
            </div>
            <BaseButton :loading="loginLoading">Iniciar sesión</BaseButton>
        </form>
            <div v-if="loginErrorMessage" class="text-red-500 mt-2">{{ loginErrorMessage }}</div>
            <p>¿No tenés usuario? <router-link to="/registro" class="font-bold hover:bg-gray-100 transition">Registrate</router-link></p>
     </div>
</template>