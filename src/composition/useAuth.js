import { ref, onMounted, onUnmounted } from 'vue';
import { subscribeToAuth } from '../services/auth';
import { getAuthUserProfileById } from '../services/user';

export function useAuth() {
    const userLoading = ref(true);
    const user = ref({
        id: null,
        email: null,
        displayName: null,
        role: null,
        photoURL: null,
    });
    let unsubscribeAuth;

    onMounted(() => {
        unsubscribeAuth = subscribeToAuth(async (newUser) => {
            if (newUser) {
                userLoading.value = true;
                const userProfile = await getAuthUserProfileById(newUser.id);
                user.value = { ...userProfile };
                userLoading.value = false;
            } else {
                user = null;
            }
        });
    });

    onUnmounted(() => {
        if (unsubscribeAuth) {
            unsubscribeAuth();
        }
    });

    return {
        user,
        userLoading
    }
}