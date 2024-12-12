<script>
import { logout, subscribeToAuth } from './services/auth';
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';
import { getAuthUserProfileById } from './services/user';
import ChatWidget from './components/ChatWidget.vue';

export default {
    name: "App",
    components: { Home, Footer, ChatWidget },
    data() {
        return {
            user: {
                id: null,
                email: null,
            },
            userFirestore: {},
            isMenuOpen: false,
        };
    },
    methods: {
        async handleLogout() {
            await logout();
            this.user = { id: null, email: null };
            this.userFirestore = {};
            this.$router.push('/login');
        },
        navigateToPlans() {
            if (this.user.id) {
                this.$router.push('/mis-planes');
            } else {
                this.$router.push('/planes');
            }
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
    mounted() {
        subscribeToAuth(async (user) => {
            this.user = { ...user };
            this.userFirestore = await getAuthUserProfileById(this.user.id);
        });
    }
};
</script>

<template>
    <header class="fixed top-0 z-20 w-screen">
        <div class="bg-[#3B413C] text-white">
            <div class="container m-auto flex justify-between items-center py-2">
                <!-- Logo -->
                <div>
                    <img src="/logo-web.png" alt="Favicon" id="logo-nav">
                </div>

                <!-- Botón menú hamburguesa (visible en pantallas chicas) -->
                <button 
                    class="md:hidden text-white text-xl" 
                    @click="toggleMenu"
                >
                    <span v-if="!isMenuOpen">☰</span>
                    <span v-else>✖</span>
                </button>

                <!-- Menú de navegación -->
                <nav 
                    :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }" 
                    class="absolute top-full left-0 w-full bg-[#3B413C] md:relative md:flex md:w-auto md:bg-transparent"
                >
                    <ul class="flex flex-col md:flex-row gap-5 p-4 md:p-0">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <template v-if="!user.id">
                            <li>
                                <button @click="navigateToPlans">Planes</button>
                            </li>
                            <li>
                                <router-link to="/registro">Registro</router-link>
                            </li>
                            <li>
                                <router-link to="/login">Iniciar sesión</router-link>
                            </li>
                        </template>
                        <template v-else>
                            <template v-if="userFirestore.role === 'admin'">
                                <li>
                                    <router-link to="/usuarios">Usuarios</router-link>
                                </li>
                            </template>
                            <li>
                                <router-link to="/perfil">Mi perfil</router-link>
                            </li>
                            <template v-if="userFirestore.role === 'admin'">
                                <li>
                                    <router-link to="/panel">Panel</router-link>
                                </li>
                            </template>
                            <li>
                                <button @click="navigateToPlans">Planes</button>
                            </li>
                            <template v-if="userFirestore.role !== 'admin'">
                                <li>
                                    <router-link to="/contacto">Contacto</router-link>
                                </li>
                            </template>
                            <li>
                                <form 
                                    action="" 
                                    @submit.prevent="handleLogout"
                                >
                                    <button type="submit">{{ user.email }} (Cerrar sesión)</button>
                                </form>
                            </li>
                        </template>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <router-view></router-view>
    <ChatWidget 
        v-if="user.id && user.id != 'KOJ6Xn66d5YaYOeTPczEZlUTOGG3'" 
        :user="user" 
    />
    <Footer></Footer>
</template>