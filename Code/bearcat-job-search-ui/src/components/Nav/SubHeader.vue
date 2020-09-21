<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <ChatList />
  </div>
</template>

<script>
import ChatList from "../Chat/ChatList";

export default {
  name: "SubHeader",
  components: {
    ChatList
  },
  data() {
    return {
      items: [
        {
          text: "List All Jobs",
          href: "/home"
        }
      ]
    };
  }
};
</script>
