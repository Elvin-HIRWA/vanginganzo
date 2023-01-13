<template>
  <div class="row">
    <div class="col-6">
      <!-- <div class="card mb-4"> -->
      <button
        class="col-3 btn btn-success active"
        @click="updatePermission('edit')"
      >
        <i class="fa fa-edit"></i>
        <!-- trash icon -->
      </button>
      <!-- </div> -->
    </div>
    <!-- <div class="col-3">

</div> -->

    <div class="col-6">
      <!-- <div class="card mb-4"> -->
      <button class="col-3 btn btn-danger active" @click="deletePermission()">
        <i class="fa fa-trash"></i>
        <!-- trash icon -->
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ButtonDelete",
  methods: {
    async deletePermission() {
      try {
        const response = await axios.delete(
          `/api/permission-delete/${this.data.id}`
        );
        this.$Progress.finish();
        this.$router.push("/permissions").catch(() => {});
      } catch (error) {
        console.log(error.response.data[0]);
        this.$noty.error(error.response.data[0]);
        // this.$noty.error(error.response.data[0]);
        this.$Progress.fail();
        this.clicked = false;
      }
    },
    updatePermission() {
      // this.$store.commit(actionName, this.data)
      this.$router.push(`/permission-update/${this.data.id}`);
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