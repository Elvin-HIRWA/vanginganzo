<template>
  <div class="row">

    <!-- <div class="card mb-4"> -->
      <button class="col-3 btn btn-info" @click="sendKey()">
        <i class="pe-7s-paper-plane"></i>
        <!-- trash icon -->
      </button>
    <!-- </div> -->

    <!-- <div class="card mb-4"> -->
      <button class="col-3  btn btn-danger" @click="triggerSomeAction('view')">
        <i class="fa fa-trash"></i>
        <!-- trash icon -->
      </button>
    <!-- </div> -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "ButtonDelete",
  methods: {
    triggerSomeAction() {
      // this.$store.commit(actionName, this.data)
      this.$router.push(`/key-delete/${this.data.id}`)
    },
    sendKey() {
      // this.$store.commit(actionName, this.data)
      this.$router.push(`/key-send/${this.data.id}`)
    },
  },
  props: {
    // prop below is REQUIRED:
    data: {
      type: Object,
    },
  },
};
</script>