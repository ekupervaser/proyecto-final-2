<script>
import { SaveNewCourse } from '../services/panel';
import BaseButton from '../components/BaseButton.vue';
import BaseInput from '../components/BaseInput.vue';
import BaseLabel from '../components/BaseLabel.vue';
import BaseTextarea from '../components/BaseTextarea.vue';

export default {
    name: 'NewPlan',
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
               benefits: [],
            },
            validationErrors: {
            name: '',
            description: '',
            price: '',
            benefits: '',
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

            if (this.newCourse.benefits.length === 0) {
            this.validationErrors.benefits = 'Agrega al menos un beneficio para el curso';
            isValid = false;
            } else {
                this.validationErrors.benefits = '';
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
                benefits: this.newCourse.benefits,
            })
            this.$router.push("/panel");
        },
    addBenefit() {
      this.newCourse.benefits.push({ text: '' });
    },

    removeBenefit(index) {
      this.newCourse.benefits.splice(index, 1);
    },
},
}
    
</script>

<template>
    <div class="min-h-full max-w-screen-sm flex flex-col justify-center m-auto">
    <h1 class="text-3xl font-black mb-4 text-center">Cargar nuevo plan</h1>
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
            <div>
                <div class="flex flex-col">
                    <BaseLabel modelFor="benefits">Beneficios</BaseLabel>
                    <div v-for="(benefit, index) in newCourse.benefits" :key="index">
                    <BaseInput class="mt-2 mb-0"v-model="benefit.text" />
                    <button type="button" @click="removeBenefit(index)">Eliminar</button>
                    </div>
                        <button type="button" @click="addBenefit" class="text-left">Agregar Beneficio</button>
                        <p class="text-red-500">{{ validationErrors.benefits }}</p>
                    </div>
                    </div>
                    <BaseButton type="submit">Cargar plan</BaseButton>
                    </form>
                </div>
</template>

<style>
    .min-h-full {
        min-height: calc(100vh - 136px);
    }
</style>