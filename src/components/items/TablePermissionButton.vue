<template>
  <div class="row">

    <!-- <div class="card mb-4"> -->
      <button class="col-3 btn btn-success" @click="updatePermission('edit')">
        <i class="fa fa-edit"></i>
        <!-- trash icon -->
      </button>
    <!-- </div> -->

    <!-- <div class="card mb-4"> -->
      <button class="col-3 btn btn-danger" @click="deletePermission('delet')">
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
    deletePermission() {
      // this.$store.commit(actionName, this.data)
      this.$router.push(`/permission-delete/${this.data.id}`)
    },
    updatePermission() {
      // this.$store.commit(actionName, this.data)
      this.$router.push(`/permission-update/${this.data.id}`)
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