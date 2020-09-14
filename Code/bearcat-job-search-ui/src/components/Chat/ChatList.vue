<template>
  <div>
    <b-button class="pull-right mr-2" variant="success" v-b-toggle.chat-list>Chat</b-button>
    <b-sidebar
      id="chat-list"
      title="Active Users"
      bg-variant="secondary"
      text-variant="dark"
      right
      shadow
    >
      <hr class="m-3" />
      <div class="px-3 py-2">
        <b-list-group>
          <b-list-group-item v-for="user in usersList" :key="user.studentName">
            {{user.studentName}}
            <b-button size="sm" variant="success" class="pull-right">Chat</b-button>
          </b-list-group-item>
        </b-list-group>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "ChatList",
  props: ["usersList"],
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.list-group-item:hover {
  background-color: #ddd;
}
</style>