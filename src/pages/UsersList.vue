<script>
import Loader from '../components/Loader.vue';
import { getUsers } from '../services/user';
import { getAuthUserProfileById } from '../services/user';
import { getPlansPurchasedByUser } from '../services/shine-services';
import { useAuth } from '../composition/useAuth';

export default {
    name: 'UsersList',
    components: { Loader },
    data() {
        return {
          planData: [],
          usersLoading: true,
          userList: [],
          user: {
            id: null,
            email: null,
            displayName: null,
            role: null,
            photoURL: null,
            plansPurchased: [],
          },
      };
    },
    async mounted() {
        this.usersLoading = true;
        await this.loadUserProfile();
        await this.loadPlanData();
        await this.fetchUsers();
        this.usersLoading = false;
    },
    methods: {
      async loadUserProfile() {
      try {
        const auth = useAuth();
        const userId = this.$route.params.id;
        const userProfile = await getAuthUserProfileById(userId);
        this.user = { ...userProfile };
      } catch (error) {
      }
    },
      async loadPlanData() {
        try {
            this.planData = await getPlansPurchasedByUser(this.user.id);
        } catch (error) {

      } 
        this.userLoading = false;
    },
    async fetchUsers() {
      try {
        const userList = await getUsers();
        const usersWithPlans = await Promise.all(
          userList.map(async (user) => {
            const plansPurchased = await getPlansPurchasedByUser(user.id);
            return { ...user, plansPurchased }; 
          })
        );
        this.userList = usersWithPlans; 
      } catch (error) {
        console.error("Error fetching users or plans:", error);
      }
    },
  }
};
</script>

<template>
  <div class="min-h-full flex content-center justify-center p-4 md:p-6" style="margin-top: 64px;">
    <Loader v-if="usersLoading"></Loader>
    <template v-else>
      <div class="w-full max-w-3xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-lg">
        <h1 class="text-2xl md:text-3xl font-black mb-6 text-center">Usuarios</h1>
        <div class="overflow-x-auto">
          <table class="w-full bg-white rounded-lg overflow-hidden shadow-lg border-collapse">
            <thead class="bg-gray-200">
              <tr>
                <th class="border-b border-gray-300 px-2 md:px-4 py-2 md:py-4 text-left text-gray-700">Email</th>
                <th class="border-b border-gray-300 px-2 md:px-4 py-2 md:py-4 text-left text-gray-700">Acciones</th>
                <th class="border-b border-gray-300 px-2 md:px-4 py-2 md:py-4 text-left text-gray-700">Planes comprados</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in userList" :key="user.id" class="hover:bg-gray-100">
                <td class="border-b border-gray-300 px-2 md:px-4 py-2 align-middle">{{ user.email }}</td>
                <td class="border-b border-gray-300 px-2 md:px-4 py-2 align-middle">
                  <router-link :to="`/usuario/${user.id}/chat`" class="text-blue-500 hover:underline">
                    Chatear
                  </router-link>
                </td>
                <td class="border-b border-gray-300 px-2 md:px-4 py-2 align-middle">
                  <div v-if="user.plansPurchased!=0" class="text-gray-700">
                    {{ user.plansPurchased.map(plan => plan.name).join(', ') }}
                  </div>
                  <div v-else>
                    <p>-</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<style>
.min-h-full {
  min-height: calc(100vh - 136px);
}
</style>