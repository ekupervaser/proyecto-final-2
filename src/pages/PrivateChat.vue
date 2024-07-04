<script>
import BaseButton from '../components/BaseButton.vue';
import BaseTextarea from '../components/BaseTextarea.vue';
import Loader from '../components/Loader.vue';
import { sendPrivateChatMessage, subscribeToPrivateChat } from '../services/private-chat';
import { subscribeToAuth } from '../services/auth';
import { getUserProfileById } from '../services/user';
import { dateToString } from '../helpers/date'
import { auth } from '../services/firebase';

export default {
    name: 'PrivateChat',
    components: { Loader, BaseTextarea, BaseButton },
    data() {
        return {
            userLoading: true,
            user: {
                id: null,
                email: null,
            },
            authUser: {
                id: null,
                email: null,
            },
            unsubscribeAuth: () => {},
            newMessage: {
                message: '',
            },
            messagesLoading: true,
            messages: [],
            unsubscribeMessages: () => {},
        };
    },
    methods: {
        handleSendMessage() {
            sendPrivateChatMessage({
                senderId: this.authUser.role ? 'KOJ6Xn66d5YaYOeTPczEZlUTOGG3' : this.authUser.id,
                receiverId: this.authUser.role ? this.user.id : 'KOJ6Xn66d5YaYOeTPczEZlUTOGG3',
                message: this.newMessage.message,
                });
                this.newMessage.message = '';
        },
        formatDate(date) {
            return dateToString(date);
        }
    },
    async mounted() {
        this.userLoading = true;
        this.user = await getUserProfileById(this.$route.params.id);
        this.unsubscribeAuth = subscribeToAuth(newUser => this.authUser = newUser);
        console.log({user: this.user, authUser: this.authUser});
        this.userLoading = false;
        this.messagesLoading = true;
        this.unsubscribeMessages = await subscribeToPrivateChat(
            {
                senderId: this.authUser.role ? 'KOJ6Xn66d5YaYOeTPczEZlUTOGG3' : this.authUser.id,
                receiverId: this.authUser.role ? this.user.id : 'KOJ6Xn66d5YaYOeTPczEZlUTOGG3',
            }, 
            (newMessages) => this.messages = newMessages
        );
        this.messagesLoading = false;
    },
    unmounted() {
        this.unsubscribeAuth();
        this.unsubscribeMessages();
    }
}
</script>

<template>
      <Loader style="height: calc(100vh - 136px);" v-if="userLoading"></Loader>
        <template v-else>
            <h1 class="text-3xl font-black mb-4 text-center">Conversación con {{ authUser.role ? user.email : "Soporte de Shine" }}</h1>
            <h2 class="sr-only">Mensajes</h2>
            <div class="flex flex-col items-start min-h-[400px] max-w-[800px] mx-auto p-4 mb-4 border rounded-lg bg-white shadow-lg">
                <Loader v-if="messagesLoading"></Loader>
                <template v-else>
                    <div v-for="message in messages"
                    :key="message.id"
                    class="max-w-[70%] p-2 rounded mb-2"
                    :class="{
                         'bg-gray-100': message.senderId !== authUser.id,
                         'bg-green-200': message.senderId === authUser.id,
                         'self-end': message.senderId === authUser.id,
                    }"
                    >
                    <div>{{ message.message }}</div>
                    <div class="text-right"> {{ formatDate(message.created_at) || 'Enviando...'}} </div>
                    </div>
                </template>
            </div>
            <h2 class="sr-only">Enviar mensajes</h2>
            <form 
            class="flex gap-2 max-w-[800px] mx-auto"
                action=""
                @submit.prevent="handleSendMessage" 
                >
                <label for="message" class="sr-only"></label>
                <BaseTextarea
                id="message"
                class="w-10/12 border border-gray-300 rounded-lg"
                v-model="newMessage.message"
                />
                <Button class="bg-green-600 rounded text-white w-2/12">Enviar</Button>
            </form>
        </template>
</template>