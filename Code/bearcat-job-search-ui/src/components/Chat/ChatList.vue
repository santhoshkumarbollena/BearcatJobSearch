<template>
  <div>
    <b-button class="pull-right mr-2" variant="success" v-b-toggle.chat-list>Chat</b-button>
    <b-sidebar
      id="chat-list"
      title="Active Users"
      bg-variant="secondary"
      text-variant="dark"
      right
      backdrop-variant="secondary"
      backdrop
    >
      <hr class="m-3" />
      <div class="px-3 py-2">
        <b-list-group>
          <b-list-group-item v-for="user in Object.keys(getActiveUsers)" :key="user">
            <font-awesome-icon icon="circle" class="active-icon mr-1" />
            <span class="mr-auto">{{user}}</span>
            <span v-if="userName == user">(You)</span>
            <b-button
              size="sm"
              variant="success"
              class="pull-right"
              v-show="userName !== user"
              v-b-toggle.chat-list
              @click="chatUser(user)"
            >Chat</b-button>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
    <div v-if="Object.keys(chatWith).length>0">
      <ChatWindow :chatUser="chatWith" :closeWindow="closeWindow" />
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters, mapActions } from "vuex";
import ChatWindow from "./ChatWindow";

export default {
  name: "ChatList",
  components: {
    ChatWindow
  },
  data() {
    return {
      userName: localStorage.getItem("user_name"),
      chatWith: {}
    };
  },
  created() {
    // this.$store.dispatch("addNewUser");
    this.addNewUser();
  },
  computed: mapGetters(["getActiveUsers", "getMesages"]),
  watch: {
    getMesages: function(newUser, oldUser) {
      if (_.isEmpty(this.chatWith)) {
        this.chatUser(newUser[0].author);
      }
    }
  },
  methods: {
    ...mapActions(["addNewUser"]),

    chatUser(user) {
      let testObj = {};
      testObj[user] = this.getActiveUsers[user];
      this.chatWith = testObj;
    },

    closeWindow() {
      this.chatWith = {};
    }
  }
};
</script>

<style scoped>
.list-group-item:hover {
  background-color: #ddd;
}

.active-icon {
  font-size: 10px;
  color: #7ae97a;
}
</style>
