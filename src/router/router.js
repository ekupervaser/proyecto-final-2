import Home from '../pages/Home.vue'
import MyProfile from '../pages/MyProfile.vue'
import PrivateChat from '../pages/PrivateChat.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import Panel from '../pages/Panel.vue'
import NewPlan from '../pages/NewPlan.vue'
import EditPlan from '../pages/EditPlan.vue'
import MyPlans from '../pages/MyPlans.vue'
import Plans from '../pages/Plans.vue'
import Contact from '../pages/Contact.vue'
import UsersList from '../pages/UsersList.vue'
import UserPlans from '../pages/UserPlans.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { subscribeToAuth } from '../services/auth'

const routes = [
    {path: '/',                   component: Home},
    {path: '/perfil',             component: MyProfile,      meta: { requiresAuth: true }, },
    {path: '/usuario/:id/chat',   component: PrivateChat,    meta: { requiresAuth: true }, },
    {path: '/usuario/:id/planes', component: UserPlans,      meta: { requiresAuth: true }, },
    {path: '/panel',              component: Panel,          meta: { requiresAuth: true }, },
    {path: '/cargar-plan',        component: NewPlan,        meta: { requiresAuth: true }, },
    {path: '/edit-plan/:id',      component: EditPlan,       meta: { requiresAuth: true }, },
    {path: '/contacto',           component: Contact,        meta: { requiresAuth: true }, },
    {path: '/usuarios',           component: UsersList,      meta: { requiresAuth: true }, },
    {path: '/mis-planes',         component: MyPlans,        meta: { requiresAuth: true } },    
    {path: '/planes',             component: Plans},
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