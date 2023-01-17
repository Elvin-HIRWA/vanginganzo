<template>
  <div>
    <Header></Header>
    <div id="layoutSidenav" v-if="display">
        <SideBar />
      <div id="layoutSidenav_content">
        <main>
          <div class="container px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="row">
              <div class="col-xl-4 col-md-6">
                <div class="card bg-primary text-white mb-4">
                  <div class="card-body"><center>Number of Users</center></div> <center> </cnter><span style="color:white; font-size: 30px;">{{ data.numberOfUser }}</span></center>
                  <div
                    class="
                      card-footer
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="card bg-success text-white mb-4">
                  <div class="card-body"><center>Number of Upcoming Events</center></div> <center><span style="color:white; font-size: 30px;">{{ data.upcomingEvent }}</span></center>
                  <div
                    class="
                      card-footer
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-md-6">
                <div class="card bg-danger text-white mb-4">
                  <div class="card-body"><center>Number of past events</center></div> <center><span style="color:white; font-size: 30px;">{{ data.latestEvent }}</span></center>
                  <div
                    class="
                      card-footer
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div
              class="d-flex align-items-center justify-content-between small"
            >
              <div class="text-muted">Copyright &copy; Your Website 2022</div>
              <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<!-- <script>
import Header from '../../components/Admin/Header.vue'
import SideBar from '../../components/Admin/SideBar.vue'
export default {
    components:{
        Header,
        SideBar
    }
};
</script> -->


<script>
import axios from "axios";
import Header from '../../components/Admin/Header.vue'
import SideBar from '../../components/Admin/SideBar.vue'
export default {
  data(){
    return{
      data: null,
      display: false
    }
  },
  components:{
        Header,
        SideBar
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
    async getDashBoardData(){
      try{
        const response = await axios.get("/api/dashboard/get");
        this.$Progress.finish();
        this.data = response.data
        this.display = true
      }catch(error){
        this.$Progress.fail();
        this.display = false
      }
    }
  },
  mounted(){
    this.getscript()
    this.getDashBoardData()
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
</style>>

