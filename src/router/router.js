import Home from '../pages/Home.vue'
import MyProfile from '../pages/MyProfile.vue'
import PrivateChat from '../pages/PrivateChat.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import Panel from '../pages/Panel.vue'
import NewCourse from '../pages/NewCourse.vue'
import Courses from '../pages/Courses.vue'
import Contact from '../pages/Contact.vue'
import UsersList from '../pages/UsersList.vue'
import UserCourses from '../pages/UserCourses.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { subscribeToAuth } from '../services/Auth'

const routes = [
    {path: '/',                   component: Home},
    {path: '/perfil',             component: MyProfile,      meta: { requiresAuth: true }, },
    {path: '/usuario/:id/chat',   component: PrivateChat,    meta: { requiresAuth: true }, },
    {path: '/usuario/:id/cursos', component: UserCourses,    meta: { requiresAuth: true }, },
    {path: '/panel',              component: Panel,          meta: { requiresAuth: true }, },
    {path: '/cargar-curso',       component: NewCourse,      meta: { requiresAuth: true }, },
    {path: '/contacto',           component: Contact,        meta: { requiresAuth: true }, },
    {path: '/usuarios',           component: UsersList,      meta: { requiresAuth: true }, },
    {path: '/servicios',          component: Courses,        meta: { requiresAuth: true }, },
    {path: '/registro',           component: Register},
    {path: '/login',              component: Login},

];

const router = createRouter({
    routes, 
    history: createWebHashHistory(),
});

let user = {
    id: null,
    email: null,
};

subscribeToAuth(newUser => user = newUser);

router.beforeEach((to, from) => {
    if (user.id === null && to.meta.requiresAuth) {
        return '/login';
    }
});

export default router;