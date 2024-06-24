<script>
import { getUserProfileById } from '../services/user';
import { getCoursesPurchasedByUser } from '../services/shine-services';
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
        coursesPurchased: [],
      },
      courseData: [],
    };
  },
  methods: {
    async loadUserProfile() {
      try {
        const userId = this.$route.params.id;
        const userProfile = await getUserProfileById(userId);
        this.user = { ...userProfile };
      } catch (error) {
      }
    },
    async loadCourseData() {
      try {
          this.courseData = await getCoursesPurchasedByUser(this.user.id);
      } catch (error) {

      } 
        this.userLoading = false;
    },
  },
  async mounted() {
    this.userLoading = true;
    await this.loadUserProfile();
    await this.loadCourseData();
    this.userLoading = false;
  },
};
</script>

<template>
  <div>
    <h1 class="font-bold text-center text-3xl">Planes comprados por {{ user.email }}</h1>
    <template v-if="userLoading">
      <Loader></Loader>
    </template>
    <template v-else>
      <ul class="text-center mt-5">
        <li v-for="course in courseData" :key="course.id" class="text-xl">
          {{ course.name }}
        </li>
      </ul>
      <div v-if="courseData.length === 0 && !userLoading" class="text-center mt-4">
        {{ user.email }} no tiene ningún plan comprado.
      </div>
    </template>
  </div>
</template>