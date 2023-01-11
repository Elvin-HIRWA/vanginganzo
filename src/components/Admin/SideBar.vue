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
          <router-link to="/permissions">
            <a class="nav-link">
              <div class="sb-nav-link-icon">
                <i class="fas fa-chart-area"></i>
              </div>
              Permissions
            </a>
          </router-link>
          <router-link to="/keys">
            <a class="nav-link">
              <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
              Keys
            </a>
          </router-link>
          <router-link to="/users">
            <a class="nav-link">
              <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
              Users
            </a>
          </router-link>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>