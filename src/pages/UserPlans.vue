<script>
import { getAuthUserProfileById } from '../services/user';
import { getPlansPurchasedByUser } from '../services/shine-services';
import { useAuth } from '../composition/useAuth'
import Loader from '../components/Loader.vue';

export default {
  name: 'UserPlans',
  components: { Loader },
  data() {
    return {
      userLoading: true,
      user: {
        id: null,
        email: null,
        displayName: null,
        role: null,
        photoURL: null,
        plansPurchased: [],
      },
      planData: [],
    };
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
  },
  async mounted() {
    this.userLoading = true;
    await this.loadUserProfile();
    await this.loadPlanData();
    this.userLoading = false;
  },
};
</script>

<template>
  <div class="min-h-full" style="margin-top: 64px;">
    <h1 class="font-bold text-center text-3xl">Planes comprados por {{ user.email }}</h1>
    <template v-if="userLoading">
      <Loader></Loader>
    </template>
    <template v-else>
      <ul class="text-center mt-5">
        <li v-for="plan in planData" :key="plan.id" class="text-xl">
          {{ plan.name }}
        </li>
      </ul>
      <div v-if="planData.length === 0 && !userLoading" class="text-center mt-4">
        {{ user.email }} no tiene ningún plan comprado.
      </div>
    </template>
  </div>
</template>

<style>
    .min-h-full {
        min-height: calc(100vh - 136px);
    }
</style>