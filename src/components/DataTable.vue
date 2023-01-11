<template>
  <div>
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">{{ HeadTitle}}</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">{{Title}}</li>
        </ol>
        <div class="card mb-4">
          <div class="card-header">
            <i class="fas fa-table me-1"></i>
            DataTable Example
          </div>
          <div class="card-body">
            <data-table v-bind="parameters" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
  
  <script>
import Header from "./Admin/Header.vue";
import SideBar from "./Admin/SideBar.vue";
export default {
  components: {
    Header,
    SideBar,
  },
  props: {
    parameters: {
      type: Object,
      required: true,
    },
    HeadTitle:{
      type: String,
      required: true
    },
    Title:{
      type: String,
      required: true
    }
  },
};
</script>
  
  <style>
</style>