<script>
import BaseButton from '../components/BaseButton.vue'
import BaseLabel from '../components/BaseLabel.vue';
import BaseInput from '../components/BaseInput.vue';
import { register } from '../services/auth';

export default {
    name: 'Register',
    components: { BaseButton, BaseLabel, BaseInput },
    data() {
        return {
            isLoading: false,
            newUser: {
                email: '',
                password: '',
            },
        }
    },
    methods: {
        async handleSubmit() {
            this.isLoading = true;
            try {
                await register({...this.newUser});
                this.$router.push('/');
            } catch (error) {
            }
            this.isLoading = false;
          
        }
    },
}
</script>

<template>
    <div class="max-w-screen-sm flex flex-col justify-center m-auto" style="height: calc(100vh - 136px)">
        <h1 class="text-3xl font-black mb-4">Crear cuenta</h1>
        <form action="#"
        @submit.prevent="handleSubmit"
        >
            <div>
                <BaseLabel modelFor="email">Email</BaseLabel>
                <BaseInput 
                type="email" 
                id="email"
                v-model="newUser.email"
                />
            </div>
            <div>
                <BaseLabel modelFor="password">Contraseña</BaseLabel>
                <BaseInput 
                type="password" 
                id="password"
                v-model="newUser.password"
                />
            </div>
            <BaseButton>Registrarme</BaseButton>
        </form>
     </div>
</template>