<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <a class="nav-link" href="index.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </a>
          <router-link to="/events">
            <a class="nav-link">
              <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
              Event
            </a>
          </router-link>
        </div>
      </div>
      <div>
      </div>
        <router-link to="/login" @click.native="logoutUser()">
            <a class="nav-link" style="text-decoration: none">
              <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
              Logout
            </a>
          </router-link>
        <!-- <router-link to="/login" class="sb-sidenav-footer" @click.native="logoutUser()">
          <i class="metismenu-icon pe-7s-power"></i>
          Logout
        </router-link> -->
      
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        {{name}}
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      name: null,
    }
  },
  methods:{
    async logoutUser() {
      this.$Progress.start()
      this.$store.commit('initializeStore')

      const token = this.$store.state.token

      if (token) {
        axios.defaults.headers.common['Authorization'] = "Bearer " + token
      }

      try {
        await axios.get("/api/auth/logout");

        this.$Progress.finish()

        localStorage.removeItem("token");

        this.$store.commit("removeToken");

        localStorage.removeItem("permissionName");

        this.$store.commit("removePermissionName");

        localStorage.removeItem("isUnauthenticated");

        this.$store.commit("removeUserID");

        axios.defaults.headers.common["Authorization"] = "";

        this.$router.push('/login');
      } catch (error) {
        this.$Progress.fail()
        if (error.response) {
            this.$noty.error(`${error.response.data.errors[0]}`);
        } else {
          this.$noty.error("Something went wrong! Please try again");

          console.log(JSON.stringify(error));
        }
      }
    },
  },
  mounted(){
    this.name = this.$store.state.permissionName
  }
};
</script>

<style>
</style>