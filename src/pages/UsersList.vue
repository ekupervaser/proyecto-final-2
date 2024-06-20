<script>
import Loader from '../components/Loader.vue';
import { getUsers } from '../services/user'

export default {
    name: 'UsersList',
    components: { Loader },
    data () {
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
  <Loader v-if="usersLoading"></Loader>
  <template v-else>
    <div class="text-center">
      <h1 class="text-3xl font-black mb-4">Usuarios</h1>
      <p class="mb-2">Listado de usuarios</p>
      <table class="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th class="border border-gray-300 px-4 py-2">Email</th>
            <th class="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user.id">
            <td class="border border-gray-300 px-4 py-2">{{ user.email }}</td>
            <td class="border border-gray-300 px-4 py-2">
              <router-link :to="`/usuario/${user.id}/chat`" class="text-blue-600 underline mr-2">
                Chatear
              </router-link>
              <router-link :to="`/usuario/${user.id}/cursos`" class="text-green-600 underline">
                Ver cursos
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</template>
