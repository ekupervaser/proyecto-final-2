<script setup>
import { ref } from 'vue';
import BaseButton from '../components/BaseButton.vue';
import { useAuth } from '../composition/useAuth'
import BaseLabel from '../components/BaseLabel.vue';
import BaseInput from '../components/BaseInput.vue';
import { editProfile, editProfilePhoto } from '../services/auth';
import Loader from '../components/Loader.vue';
import { useRouter } from 'vue-router';
import { formatFirebaseDate } from '../helpers/date';

const { user, userLoading } = useAuth();

const router = useRouter();

const {
    editData,
    editing,
    editingLoading,
    handleEditShow,
    handleEditHide,
    handleEditForm,
} = useProfileEdit(user);

const {
    editingPhoto,
    editingPhotoLoading,
    photoData,
    handlePhotoFormShow,
    handlePhotoFormeHide,
    handlePhotoFormSubmit,
    handlePhotoChange,
} = usePhotoEdit();


function usePhotoEdit() {
    const editingPhoto = ref(false);
    const editingPhotoLoading = ref(false);
    const photoData = ref({
        file: null,
        preview: null,
    });

    function handlePhotoFormShow() {
        editingPhoto.value = true;
    }

    function handlePhotoFormeHide() {
        editingPhoto.value = false;
    }

    async function handlePhotoFormSubmit() {
        editingPhotoLoading.value = true;

        try {
            await editProfilePhoto(photoData.value.file);
            handlePhotoFormeHide();
        } catch (error) {
        }
        editingPhotoLoading.value = false;

    }

    async function handlePhotoChange(event) {
        photoData.value.file = event.target.files[0];

        const reader = new FileReader();

        reader.addEventListener('load', function() {
            photoData.value.preview = reader.result;
        })

        reader.readAsDataURL(photoData.value.file);
    }

    return {
        editingPhoto,
        editingPhotoLoading,
        photoData,
        handlePhotoFormShow,
        handlePhotoFormeHide,
        handlePhotoFormSubmit,
        handlePhotoChange,
    }
}

function useProfileEdit(user) {
    const editing = ref(false);
    const editingLoading = ref(false);
    const editData = ref({
        displayName: '',
    });

    async function handleEditForm() {
        try {
            editingLoading.value = true;
            await editProfile({
                displayName: editData.value.displayName,
        });

        } catch(error) {
        }
        handleEditHide();
        editingLoading.value = false;
    }

    function handleEditShow() {
        editData.value.displayName = user.value.displayName;
        editing.value = true;
    }

    function handleEditHide() {
        editing.value = false;
    }

    return {
        editData,
        editing,
        editingLoading,
        handleEditShow,
        handleEditHide,
        handleEditForm,

    }
}
</script>

<template>
    <div class="min-h-full" style="margin-top: 64px;">
        <h1 class="text-3xl font-black mb-6 text-center">Mi perfil</h1>
            <div class="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <div class="flex w-full justify-center items-start gap-4" v-if="!editing && !editingPhoto">
                    <div class="flex flex-col items-center p-6 mb-4 bg-white shadow rounded-lg">
                        <div v-if="!userLoading">
                            <div class="text-center flex flex-col items-center">
                            <img v-if="user.photoURL" :src="user.photoURL" alt="Foto del perfil" class="w-[100px] h-[100px] rounded-full object-cover">
                            <img v-else src="/user.png" alt="Sin foto del perfil" class="w-[100px] h- [100px] rounded-full object-cover">            
                            <button
                                class="bg-black text-white p-2 rounded-full mt-4 text-sm hover:bg-[grey]"
                                @click="handlePhotoFormShow"
                            >
                                {{ user.photoURL ? 'Actualizar' : 'Cargar' }}
                            </button>
                        </div>
                            <div class="mt-6">
                                <p class="font-bold">Nombre</p>
                                <p class="mb-2">{{ user.displayName || 'No especificado' }}</p>
                                <p class="font-bold">Email</p>
                                <p class="mb-2">{{ user.email }}</p>
                            <!--   <p class="font-bold">Rol</p>
                                <p>{{ user.role || 'Usuario estándar' }}</p> -->
                                <BaseButton @click="handleEditShow" class="mt-4">Editar</BaseButton>
                            </div>
                        </div>
                        <div v-else>
                            <Loader></Loader>
                        </div>
                    </div>
                    <div class="w-full">
                    <div class="w-full flex flex-col p-6 mb-4 bg-white shadow rounded-lg">
                        <h2 class="mb-3 text-xl font-bold">Mis pedidos</h2>
                        <div v-if="!userLoading">
                            <template v-if="!user.plansPurchased || user.plansPurchased.length === 0">
                            <p>Actualmente no tenés ninguna suscripción activa.</p>
                        </template>
                        <template v-else>
                            <ul class="list-disc pl-5">
                                <li v-for="plan in user.plansPurchased" :key="plan.id">
                                    {{ formatFirebaseDate(plan.purchaseDate) }} - {{ plan.name }}
                                </li>
                            </ul>
                        </template>
                        </div>  
                        <div v-else>
                            <Loader></Loader>
                        </div>
                    </div>
                   <!--  <div class="w-full flex flex-col p-6 mb-4 bg-white shadow rounded-lg">
                        <h2 class="mb-3 text-xl font-bold">Mis pedidos</h2>
                        <div v-if="!userLoading">
                            <template v-if="!user.plansPurchased || user.plansPurchased.length === 0">
                            <p>Actualmente no tenés ninguna suscripción activa.</p>
                        </template>
                        <template v-else>
                            <ul class="list-disc pl-5">
                                <li v-for="plan in user.plansPurchased" :key="plan.id">
                                    {{ formatFirebaseDate(plan.purchaseDate) }} - {{ plan.name }}
                                </li>
                            </ul>
                        </template>
                        </div>
                        <div v-else>
                            <Loader></Loader>
                        </div>
                    </div> -->
                </div>
                </div>
                <template v-else-if="editing">
                    <form action="#" method="post" @submit.prevent="handleEditForm" class="w-full max-w-md mx-auto">
                        <div class="mb-4">
                            <BaseLabel for="displayName">Nombre</BaseLabel>
                            <BaseInput
                                id="displayName"
                                :disabled="editingLoading"
                                v-model="editData.displayName"
                                class="mt-1 block w-full"
                            >
                            </BaseInput>
                        </div>
                        <div class="flex justify-end space-x-4">
                            <BaseButton :loading="editingLoading">Actualizar</BaseButton>
                            <BaseButton class="boton-cancelar" @click="handleEditHide">Cancelar</BaseButton>
                        </div>
                    </form>
                </template>
                <template v-else>
                    <form action="#" method="post" @submit.prevent="handlePhotoFormSubmit" class="w-full max-w-md mx-auto">
                        <div class="mb-4">
                            <BaseLabel for="newPhoto">Foto de Perfil</BaseLabel>
                            <input
                                type="file"
                                id="newPhoto"
                                :disabled="editingPhotoLoading"
                                @change="handlePhotoChange"
                                class="mt-1 block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-blue-50 file:text-blue-700
                                hover:file:bg-blue-100"
                            />
                        </div>
                        <div v-if="photoData.preview !== null" class="text-center mb-4">
                            <p>Previsualización de la foto seleccionada</p>
                            <img :src="photoData.preview" alt="Foto de perfil" class="mt-3 mx-auto w-[200px] h-[200px] rounded-full object-cover">
                        </div>
                        <div class="flex justify-end space-x-4">
                            <BaseButton :loading="editingPhotoLoading">Actualizar foto</BaseButton>
                            <BaseButton @click="handlePhotoFormeHide">Cancelar</BaseButton>
                        </div>
                    </form>
                </template>
            </div>
        </div>
</template>

<style>
    .min-h-full {
        min-height: calc(100vh - 136px);
    }
</style>
