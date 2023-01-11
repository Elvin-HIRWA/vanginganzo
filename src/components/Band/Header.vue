<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <!-- Navbar Brand-->
      <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
      <!-- Sidebar Toggle-->
      <button
        class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        href="#!"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search-->
      <div class="
          d-none d-md-inline-block
          form-inline
          m-5
          me-0 me-md-3
          my-2 my-md-0
        ">
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <router-link to="/login" class="dropdown-item" @click.native="logoutUser()">
                            <i class="metismenu-icon pe-7s-power"></i>
                            Logout
                          </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
      </div>
      
    </nav>
</template>

<script>
import axios from "axios";
export default {
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
  }
}
</script>

<style>

</style>