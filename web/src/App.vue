<script>
import { logout, subscribeToAuth } from './services/Auth'
import Home from './pages/Home.vue';
import Footer from './components/Footer.vue';
import { getUserProfileById } from './services/user';

export default {
    name: "App",
    components: { Home, Footer },
    data() {
        return {
            user: {
                id: null,
                email: null,
            },
            userFirestore: {},
        }
    },
    methods: {
        async handleLogout () {
             await logout();
             this.user = {id: null, email:null};
             this.userFirestore = {};
             this.$router.push('/login');
        }
    },
    mounted() {
        subscribeToAuth(async user => {
            this.user = {...user};
            this.userFirestore = await getUserProfileById(this.user.id);
        });
    }
};
</script>

<template>

    <header>
        <div class="bg-black text-white">
            <div class="container m-auto flex justify-between gap-4 items-center p-4">
                <div>
                    <img src="../../favicon-32x32.png" alt="Favicon">
                </div>
                <nav>
                    <ul class="flex gap-5">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <template v-if="!user.id">
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
                            <template v-if="userFirestore.role !== 'admin'">
                                <li>
                                    <router-link to="/servicios">Servicios</router-link>
                                </li>
                                <li>
                                    <router-link to="/contacto">Contacto</router-link>
                                </li>
                            </template>
                            
                            <li>
                                <form action=""
                                @submit.prevent="handleLogout"
                                >
                                    <button type="submit">{{user.email}} (Cerrar sesión)</button>
                                </form>
                            </li>
                        </template>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <div class="container m-auto p-10">
    <router-view></router-view>
    </div>
    <Footer></Footer>
</template>