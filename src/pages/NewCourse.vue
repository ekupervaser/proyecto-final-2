<script>
import { SaveNewCourse } from '../services/panel';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseTextarea from '../components/BaseTextarea.vue';

export default {
    name: 'NewCourse',
    components: { BaseButton, BaseInput, BaseLabel, BaseTextarea },
    data() {
        return {
            isLoading: true, 
            courses: [],
            isSaving: false,
            newCourse: {
               name: '',
               description: '',
               price: '',
            },
            validationErrors: {
            name: '',
            description: '',
            price: '',
            },
       }
    },
    methods: {
           validateForm() {
            let isValid = true;

            if (!this.newCourse.name) {
                this.validationErrors.name = "Incluye un nombre para el curso";
                isValid = false;
            } else {
                this.validationErrors.name = '';
            }

            if (!this.newCourse.description) {
                this.validationErrors.description = 'Incluye una descripción para el curso';
                isValid = false;
            } else {
                this.validationErrors.description = '';
            }

            if (!this.newCourse.price) {
                this.validationErrors.price = 'Incluye un precio para el curso';
                isValid = false;
            } else if (isNaN(this.newCourse.price) || parseFloat(this.newCourse.price) <= 0) {
                this.validationErrors.price = 'El precio debe ser un número válido';
                isValid = false;
            } else {
                this.validationErrors.price = '';
            }

            return isValid;
            },
            saveCourse() {
            if(this.isSaving || !this.validateForm()) return;
            this.isSaving = true;
            SaveNewCourse({
                name: this.newCourse.name,
                description: this.newCourse.description,
                price: this.newCourse.price,
            })
            this.$router.push("/panel");
        }},
    }
</script>

<template>
    <div class="max-w-screen-sm flex flex-col justify-center m-auto">
    <h1 class="text-3xl font-black mb-4 text-center">Cargar nuevo curso</h1>
    <p class="font-black mb-4">Agrega el ítem a continuación</p>
    <form action="#"
    @submit.prevent="saveCourse"
    >
            <div>
                <BaseLabel modelFor="name">Nombre</BaseLabel>
                <BaseInput 
                id="name"
                v-model="newCourse.name"/>
                <p class="text-red-500">{{ validationErrors.name }}</p>
            </div>
            <div>
                <BaseLabel modelFor="description">Descripción</BaseLabel>
                <BaseTextarea 
                id="description"
                v-model="newCourse.description"/>
                <p class="text-red-500">{{ validationErrors.description }}</p>
            </div>
            <div>
                <BaseLabel modelFor="price">Precio</BaseLabel>
                <BaseInput 
                id="price"
                v-model="newCourse.price"/>
                <p class="text-red-500">{{ validationErrors.price }}</p>
            </div>
            <BaseButton type="submit">Cargar curso</BaseButton>
        </form>
    </div>
</template>