<template>
  <div class="chat-popup" id="myForm">
    <form class="form-container">
      <h6 class="bg-primary mb-0 p-2 text-white">
        <font-awesome-icon icon="circle" class="active-icon mr-1" />
        {{userName}}
        <font-awesome-icon
          icon="times"
          class="float-right"
          style="cursor: pointer;"
          @click="hideChat"
        />
      </h6>
      <div ref="chatArea" class="chat-area" id="chatArea">
        <p
          v-for="message in getMesages"
          class="message"
          :class="{ 'message-out': message.author !== userName, 'message-in': message.author === userName }"
          :key="message.body"
        >{{ message.body }}</p>
      </div>
      <b-form inline @submit.prevent="sendMessage('out')" id="person2-form">
        <b-input
          style="width: 100%;"
          id="person2-input"
          v-model="youMessage"
          type="text"
          placeholder="Type your message"
        ></b-input>
      </b-form>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ChatWindow",
  props: {
    chatUser: {
      type: Object,
      required: false
    },
    closeWindow: {
      type: Function,
      required: false
    }
  },
  data() {
    return {
      localUser: localStorage.getItem("user_name"),
      userName: "",
      bobMessage: "",
      youMessage: "",
      updateScroll: {}
    };
  },
  computed: mapGetters(["getMesages"]),
  mounted() {
    document.getElementById("myForm").style.display = "block";
    this.updateScroll = () => {
      var element = document.getElementById("chatArea");
      if (element) {
        element.scrollTop = element.scrollHeight;
      }
    };
    setInterval(this.updateScroll, 1000);

    this.userName = Object.keys(this.chatUser)[0];
  },

  methods: {
    ...mapActions(["emitMessage"]),
    sendMessage(direction) {
      if (!this.youMessage && !this.bobMessage) {
        return;
      }
      if (direction === "out") {
        this.emitMessage({
          body: this.youMessage,
          author: this.localUser,
          emitTo: this.chatUser[this.userName]
        });

        // this.messages.push({ body: this.youMessage, author: this.localUser });
        this.youMessage = "";
      } else if (direction === "in") {
        this.messages.push({ body: this.bobMessage, author: "bob" });
        this.bobMessage = "";
      } else {
        alert("something went wrong");
      }
    },

    hideChat() {
      document.getElementById("myForm").style.display = "none";
      this.userName = "";
      clearInterval(this.updateScroll);
      this.closeWindow();
    }
  }
};
</script>

<style scoped>
/* The popup chat - hidden by default */
.chat-popup {
  display: none;
  position: fixed;
  bottom: 0;
  right: 15px;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

/* Add styles to the form container */
.form-container {
  max-width: 350px;
  background-color: white;
}

/* Full-width textarea */
.form-container textarea {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  resize: none;
  min-height: 200px;
}

/* When the textarea gets focus, do something */
.form-container textarea:focus {
  background-color: #ddd;
  outline: none;
}

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}

.headline {
  text-align: center;
  font-weight: 100;
  color: white;
}
.chat-area {
  /* background: white; */
  background: #ddd;
  height: 50vh;
  padding: 10px;
  overflow: auto;
  width: 350px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: 0.5em;
  /*   margin-bottom: .5em; */
  font-size: 0.8em;
}
.message-out {
  background: #407fff;
  color: white;
  margin-left: 55%;
}
.message-in {
  background: #fff;
  color: black;
}
.chat-inputs {
  display: flex;
  justify-content: space-between;
}
#person1-input {
  padding: 0.5em;
}
#person2-input {
  padding: 0.5em;
}

.active-icon {
  font-size: 10px;
  color: #19eb19;
  margin-bottom: 2px;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #5e72e4;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #34e;
}
</style>
