<template>
  <div class="row">

    <div class="col-8">
        <button class="col-4 btn btn-info active" @click="sendKey()">
        <i class="fa fa-paper-plane"></i>
      </button>
    </div>

    <div class="col-4">
      <!-- <div class="card mb-4"> -->
        <button class="col-4  btn btn-danger active" @click="deleteKey()">
        <i class="fa fa-trash"></i>
        <!-- trash icon -->
      </button>
    <!-- </div> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: "ButtonDelete",
  methods: {
    async deleteKey() {
      try {
        const response = await axios.delete(
          `/api/key-delete/${this.data.id}`
        );
        this.$Progress.finish();
        this.$router.push("/keys").catch(() => {});
      } catch (error) {
        console.log(error.response.data[0]);
        this.$noty.error(error.response.data[0]);
        // this.$noty.error(error.response.data[0]);
        this.$Progress.fail();
        this.clicked = false;
      }
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