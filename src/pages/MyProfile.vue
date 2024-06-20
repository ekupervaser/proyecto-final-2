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
    <template v-if="!userLoading">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl font-black mb-4 text-center w-100">Mi perfil</h1>
            <div class="flex w-[100%] justify-center items-center" v-if="!editing && !editingPhoto">
                    <div class="flex flex-col items-center p-3 mb-2 bg-light shadow mr-10">
                        <img v-if="user.photoURL" :src="user.photoURL" alt="Foto del perfil" class="w-[100px] h-[100px] rounded-full" style="object-fit: cover;">
<!--                         <img v-else src="public/user.png" alt="Sin foto del perfil" class="w-[150px] h-[150px] rounded-full" style="object-fit: cover;">
 -->                        <button
                            class="bg-white p-1 rounded-full -mt-7 text-sm"
                            @click="handlePhotoFormShow"
                            >
                            {{user.photoURL ? 'Actualizar' : 'Cargar'}}
                        </button>
                        <div class="mt-5">
                            <p class="font-bold">Email</p>
                            <p class="mb-2">{{ user.email }}</p>
                            <p class="font-bold">Nombre</p>
                            <p class="mb-2">{{ user.displayName || 'No especificado' }}</p>
                            <p class="font-bold">Rol</p>
                            <p>{{ user.role || 'Usuario estándar' }}</p>
                            <BaseButton
                            @click="handleEditShow"
                            >Editar mis datos</BaseButton>
                        </div>
                    </div>
                    <div>
                        <h2 class="mb-3 text-xl font-black">Mis cursos comprados</h2>
                        <template v-if="!user.coursesPurchased">
                            <p>No tenés ningún curso comprado.</p>
                        </template>
                        <template v-else>
                            <ul>
                            <li v-for="course in user.coursesPurchased" :key="course.id">
                                {{ formatFirebaseDate(course.purchaseDate) }} {{ course.name }}
                            </li>
                        </ul>
                        </template>
                    </div>
                </div>

            <template v-else-if="editing">
                <form
                action="#"
                method="post"
                @submit.prevent="handleEditForm"
                >
                    <div>
                        <BaseLabel for="displayName">Nombre</BaseLabel>
                        <BaseInput
                        id="displayName"
                        :disabled="editingLoading"
                        v-model="editData.displayName"
                        >
                        </BaseInput>
                    </div>
                <BaseButton
                :loading="editingLoading"
                >Actualizar
                </BaseButton>
                <BaseButton
                @click="handleEditHide"
                >Cancelar
                </BaseButton>
                </form>
            </template>
            <template v-else>
                <form
                action="#"
                method="post"
                @submit.prevent="handlePhotoFormSubmit"
                >
                    <div class="flex flex-col">
                        <BaseLabel for="newPhoto">Foto de Perfil</BaseLabel>
                        <input
                            type="file"
                            id="newPhoto"
                            :disabled="editingPhotoLoading"
                            @change="handlePhotoChange"
                        />
                    </div>
                    <div v-if="photoData.preview !== null" class="container">
                        <p>Previsualización de la foto seleccionada</p>
                        <img :src="photoData.preview" alt="Foto de prefil" class="mt-3 m-auto" style="width: 200px; height: 200px;">
                    </div>
                        <BaseButton
                        :loading="editingPhotoLoading"
                        @click="doEditProfile"
                        >Actualizar foto
                        </BaseButton>
                        <BaseButton
                        @click="handlePhotoFormeHide"
                        >Cancelar
                        </BaseButton>
                </form>
            </template>
        </div>
    </template>
    <template v-else>
        <Loader></Loader>
    </template>
</template>
