<template>
  <div class="row">
    <!-- <div class="card mb-4"> -->
      <button class=" col-3 btn btn-success" @click="triggerSomeAction('view')">
        <i class="fa fa-eye"></i>
        <!-- trash icon -->
      </button>
    <!-- </div> -->
    <!-- <div class="card mb-4"> -->
      <button class="col-3 btn btn-info" @click="updateUser('edit')">
        <i class="fa fa-edit"></i>
      </button>
    <!-- </div> -->
    <!-- <div class="card mb-4"> -->
      <button class="col-3 btn btn-danger" @click="deleteCompany('delete')">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  <!-- </div> -->
</template>
<script>
export default {
  name: "ButtonDelete",
  methods: {
    triggerSomeAction() {
      // this.$store.commit(actionName, this.data)
      console.log(this.data);
      this.$router.push(`/users/${this.data.id}`)
    },
    updateUser(){

    },
    deleteCompany(){
        
    }
  },
  props: {
    // prop below is REQUIRED:
    data: {
      type: Object,
    },
  },
};
</script>