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
                      placeholder="Name"
                      v-model="name"
                    />
                    <label for="inputEmail">Name</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      class="form-control"
                      id="inputVenue "
                      type="text"
                      placeholder="Password"
                      v-model="venue"
                    />
                    <label for="inputPassword">Venue</label>
                  </div>
                  <div class="form-floating mb-3">
                    <label for="inputPassword" v-if="startTime == null">Start Date</label>
                    <flat-pickr
                      id="example-flatpickr-datetime"
                      class="form-control bg-white"
                      :config="config"
                      placeholder="select Start date"
                      v-model="startTime"
                    ></flat-pickr>
                  </div>
                  <div class="form-floating mb-3">
                    <label for="inputPassword" v-if="endTime == null">End Date</label>
                    <flat-pickr
                      id="example-flatpickr-datetime"
                      class="form-control bg-white"
                      :config="config"
                      placeholder="select End date"
                      v-model="endTime"
                    ></flat-pickr>
                  </div>
                  <!-- <div class="form-floating mb-3"> -->
                    <input
                      class="form-control"
                      id="inputFlier "
                      type="file"
                      @change="onFileChanged"
                      placeholder="choose Flier"
                    />
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
  data(){
    return{
      userID: null,
      name: null,
      venue: null,
      startTime: null,
      endTime: null,
      imageFile: null,
      image: null,
      updatePicture: false,
      imagePath: null,
      config:{
        enableTime: true,
        dateFormat: "Y-m-d H:i"
      }
    }
  },
  methods:{
    async submitForm() {
      this.$Progress.start();
      this.clicked = true;
      this.userID = this.$store.state.userID
      const formData = new FormData();
      formData.append("userID", this.userID);
      formData.append("name", this.name);
      formData.append("venue", this.venue);
      formData.append("startTime", this.startTime);
      formData.append("endTime", this.endTime);
      formData.append("image", this.image);

      try {
        const response = await axios.post("/api/entertainments/create", formData, { headers: {'Content-Type': 'multipart/form-data' }});
        this.$Progress.finish();
        this.$router.push("/events").catch(()=>{});
        
      } catch (error) {
        this.$Progress.fail();
        this.clicked = false;
      }
    },
    onFileChanged(event) {
      this.image = event.target.files[0];
      if (event.target.files[0] === undefined) {
        this.$noty.error("Select an image please");
      } else {
        if (this.image.size > 10000000) {
          this.$noty.error("Image size limit is 10MB");
        } else {
          if (
            this.image.type !== "image/jpeg" &&
            this.image.type !== "image/jpg" &&
            this.image.type !== "image/png"
          ) {

            this.$noty.error("Only JPG, JPEG and PNG file types are allowed");
          }
        }
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
  mounted(){
    this.getscript()
  }
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