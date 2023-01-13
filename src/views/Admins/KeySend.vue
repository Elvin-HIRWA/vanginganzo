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
                  <form @submit.prevent="sendKey()">
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="inputKeyId"
                        type="text"
                        placeholder="Enter email"
                        v-model="key.id"
                        disabled
                      />
                      <label for="inputEmail">KeyID</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="inputKeyId"
                        type="text"
                        placeholder="Enter email"
                        v-model="key.value"
                        disabled
                      />
                      <label for="inputEmail">KeyID</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        class="form-control"
                        id="inputEmail"
                        type="email"
                        placeholder="Enter email"
                        v-model="key.email"
                      />
                      <label for="inputEmail">Email</label>
                    </div>
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
        key: {
        id:"",
        value: "",
        email: "",
        duration:""
      },
      };
    },
    mounted() {
      this.getKey();
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
      async getKey() {
      this.$Progress.start();
      const id = this.$route.params.id;

      try {
        const response = await axios.get(`/api/key/${id}`);
        this.$Progress.finish();

        this.key = response.data;

      } catch (error) {
        this.$Progress.fail();
      }
    },
  
      async sendKey() {
      this.$Progress.start();
      const id = this.$route.params.id;

      const data = {
        key: this.key.id,
        email: this.key.email,
      };

      try {
        const response = await axios.post(`/api/sending-key`, data);
        this.$Progress.finish();
        this.$noty.success(response.data.success);
        this.$router.push({ name: "Keys" });
      } catch (error) {
        this.$Progress.fail();
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
    
    