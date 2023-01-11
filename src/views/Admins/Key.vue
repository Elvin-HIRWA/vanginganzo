<template>
  <div>
    <Header></Header>
    <div id="layoutSidenav">
      <SideBar />
      <div id="layoutSidenav_content">
        <DataTable :parameters="parameters" HeadTitle="Keys" Title="Keys" />
        <Footer />
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import Header from "../../components/Admin/Header.vue";
import SideBar from "../../components/Admin/SideBar.vue";
import Footer from "../../components/Admin/Footer.vue";
import DataTable from "../../components/DataTable.vue";
import TableButtons from '../../components/items/TableKeyButton.vue'
export default {
  components: {
    Header,
    SideBar,
    DataTable,
    Footer,
  },
  data() {
    return {
      parameters: {
        data: [],
        lang: "en",
        actionMode: "single",
        columns: [
          {
            key: "id",
            title: "ID",
          },
          {
            key: "keyValue",
            title: "value",
          },
          {
            key: "permissionName",
            title: "Permission",
          },
          {
            title: "Action",
            component: TableButtons,
          },
        ],
      },
    };
  },
  mounted() {
    this.getKey();
    this.getscript()
  },
  methods: {
    async getKey() {
      this.$Progress.start();

      try {
        const response = await axios.get("/api/key-list");
        this.$Progress.finish();

        this.parameters.data = response.data;
      } catch (error) {
        this.$Progress.fail();
      }
    },
    getscript() {
      window.addEventListener("DOMContentLoaded", (event) => {
        const sidebarToggle = document.body.querySelector("#sidebarToggle");
        if (sidebarToggle) {
          sidebarToggle.addEventListener("click", (event) => {
            event.preventDefault();
            document.body.classList.toggle("sb-sidenav-toggled");
            localStorage.setItem(
              "sb|sidebar-toggle",
              document.body.classList.contains("sb-sidenav-toggled")
            );
          });
        }
      });
    },
  },
};
</script>
  
<style scoped>
@import "https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css";
@import "../../assets/Assets1/css/styles.css";
@import "https://use.fontawesome.com/releases/v6.1.0/js/all.js";
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
@import "https://cdn.jsdelivr.net/npm/simple-datatables@latest";
@import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js";
</style>>