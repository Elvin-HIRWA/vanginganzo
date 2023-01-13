<template>
  <div>
    <Header></Header>
    <div id="layoutSidenav">
      <SideBar />
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid px-4">
            <h1 class="mt-4">Event</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Event</li>
            </ol>
            <div class="row">
              <div class="col-xl-3 col-md-6"></div>
              <div class="col-xl-6 col-md-6">
                <form @submit.prevent="submitForm">
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputName"
                      type="text"
                      :placeholder="permission.Name"
                      v-model="permission.name"
                    />
                    <label for="inputEmail">Name</label>
                  </div>
                  <!-- <label for="inputPassword">Flier</label> -->
                  <!-- </div> -->
                  <div
                    class="
                      d-flex
                      align-items-center
                      justify-content-between
                      mt-4
                      mb-0
                    "
                  >
                    <div></div>
                    <button
                      style="margin-right: 10px"
                      class="btn btn-primary"
                      @click="submitForm"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <div class="col-xl-3 col-md-6"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "../../components/Band/Header.vue";
import SideBar from "../../components/Band/SideBar.vue";
import Footer from "../../components/Band/Footer.vue";
export default {
  components: {
    Header,
    SideBar,
    Footer,
  },
  data() {
    return {
      permission: {
        name: null,
      },
    };
  },
  mounted() {
    this.getPermission();
    this.getscript();
  },
  methods: {
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
    async getPermission() {
      this.$Progress.start();

      const id = this.$route.params.id;

      try {
        const response = await axios.get(`/api/permission/${id}`);

        this.$Progress.finish();

        this.permission = response.data;
      } catch (error) {
        this.$Progress.fail();
      }
    },

    async submitForm() {
      this.$Progress.start();

      this.clicked = true;

      const datas = {
        name: this.permission.name,
      };

      console.log(datas);

      const id = this.$route.params.id;

      try {
        const response = await axios.put(
          `/api/permission-update/${id}`,
          datas
        );
        this.$Progress.finish();
        this.$router.push("/permissions").catch(() => {});
      } catch (error) {
        this.$Progress.fail();
        this.clicked = false;
      }
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
</style>
  
  