<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <ChatList :usersList="usersList" />
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
      usersList: [
        { studentName: "Anil" },
        { studentName: "AB" },
        { studentName: "Sai" }
      ],
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
