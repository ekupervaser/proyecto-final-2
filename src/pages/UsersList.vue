<script>
import Loader from '../components/Loader.vue';
import { getUsers } from '../services/user'

export default {
    name: 'UsersList',
    components: { Loader },
    data() {
        return {
            usersLoading: true,
            userList: [],
        }
    },
    async mounted() {
        this.usersLoading = true;
        await this.fetchUsers();
        this.usersLoading = false;
    },
    methods: {
        async fetchUsers() {
            try {
                const userList = await getUsers();
                this.userList = userList;
            } catch (error) {
            }
        },
    },
};
</script>

<template>
  <div class="min-h-full flex content-center justify-center">
  <Loader v-if="usersLoading"></Loader>
    <template v-else>
      <div class="max-w-5xl mx-auto p-6rounded-lg">
        <h1 class="text-3xl font-black mb-6 text-center">Usuarios</h1>
        <table class="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
          <thead class="bg-gray-200">
            <tr>
              <th class="border-b border-gray-300 px-6 py-4 text-left text-gray-700">Email</th>
              <th class="border-b border-gray-300 px-6 py-4 text-left text-gray-700">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in userList" :key="user.id" class="hover:bg-gray-100">
              <td class="border-b border-gray-300 px-6 py-4">{{ user.email }}</td>
              <td class="border-b border-gray-300 px-6 py-4">
                <router-link :to="`/usuario/${user.id}/chat`" class="text-blue-500 hover:underline mr-4">
                  Chatear
                </router-link>
                <router-link :to="`/usuario/${user.id}/planes`" class="text-green-500 hover:underline">
                  Ver planes
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>