<script>
  import BaseButton from '../components/BaseButton.vue';
  import BaseTextarea from '../components/BaseTextarea.vue';
  import Loader from '../components/Loader.vue';
  import { sendPrivateChatMessage, subscribeToPrivateChat } from '../services/private-chat';
  import { subscribeToAuth } from '../services/auth';
  import { getAuthUserProfileById } from '../services/user';
  import { dateToString } from '../helpers/date';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faPaperPlane, faComment, faX } from '@fortawesome/free-solid-svg-icons'

  library.add(faPaperPlane, faComment, faX);
  
  export default {
    name: 'ChatWidget',
    components: { Loader, BaseTextarea, BaseButton, FontAwesomeIcon },
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        isOpen: false,
        userLoading: true,
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
      toggleChat() {
        this.isOpen = !this.isOpen;
      },
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
      },
      messageClass(senderId) {
        return senderId === this.authUser.id ? 'bg-green-200 p-2 rounded-lg self-end' : 'bg-gray-100 p-2 rounded-lg';
      }
    },
    async mounted() {
      this.userLoading = true;
      /* this.user = await getAuthUserProfileById(this.$route.params.id);
      this.unsubscribeAuth = subscribeToAuth(newUser => this.authUser = newUser); */
      this.authUser = await getAuthUserProfileById(this.user.id);
      this.unsubscribeAuth = subscribeToAuth(newUser => this.authUser = newUser);
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
    <div>
      <!-- Botón para abrir/cerrar el chat -->
      <button
        class="fixed bottom-4 right-4 bg-[#94D1BF] text-white p-4 rounded-full shadow-lg w-16 h-16"
        @click="toggleChat"
      >
      <font-awesome-icon v-if="!isOpen" class="text-3xl" :icon="['fas', 'comment']" />
      <font-awesome-icon v-else class="text-2xl" :icon="['fas', 'x']" />

      </button>
  
      <!-- Ventana de chat -->
      <div v-if="isOpen" class="z-20 fixed bottom-20 right-4 w-80 h-96 bg-white border rounded-lg shadow-lg flex flex-col">
        <!-- Header del chat -->
        <div class="bg-[#3B413C] text-white flex items-center p-4 rounded-t-lg">
          <img src="../../public/logo-mobile.png" alt="" style="width: 32px;">
          <h2 class="pl-1 text-lg font-bold">Soporte de Shine</h2>
        </div>
  
        <!-- Cuerpo del chat -->
        <div class="flex-1 p-4 overflow-y-auto">
          <Loader v-if="messagesLoading"></Loader>
          <template v-else>
            <div v-for="(message, index) in messages" :key="index" class="mb-2">
              <div :class="messageClass(message.senderId)">
                <p>{{ message.message }}</p>
                <div class="text-right text-xs text-gray-500">{{ formatDate(message.created_at) || 'Enviando...' }}</div>
              </div>
            </div>
          </template>
        </div>
  
        <!-- Input para nuevos mensajes -->
        <div class="p-4 border-t">
          <form @submit.prevent="handleSendMessage" class="flex gap-2">
            <BaseTextarea
              id="message"
              class="h-[40px] flex-grow border-0 border-gray-300 rounded-lg"
              v-model="newMessage.message"
              placeholder="Escribe un mensaje..."
            />
            <button :disabled="!newMessage.message "class="hover:shadow-md rounded-lg px-4">
                <font-awesome-icon :icon="['fas', 'paper-plane']" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
