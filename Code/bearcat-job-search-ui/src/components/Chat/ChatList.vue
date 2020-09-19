<template>
  <div>
    ------{{Object.keys(getActiveUsers)}}
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
            <font-awesome-icon icon="circle" class="active-icon" />
            {{user}}
            <span v-if="userName == user">(You)</span>
            <b-button size="sm" variant="success" class="pull-right">Chat</b-button>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ChatList",
  data() {
    return {
      userName: localStorage.getItem("user_name")
    };
  },
  created() {
    // this.$store.dispatch("addNewUser");
    this.addNewUser();
  },
  methods: {
    ...mapActions(["addNewUser"])
  },
  computed: mapGetters(["getActiveUsers"])
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