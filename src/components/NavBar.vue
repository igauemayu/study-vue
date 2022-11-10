<template>
  <div class="nav-container mb-3">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item nav-nemu">
              <router-link to="/" class="nav-link">
                <font-awesome-icon icon="home" size="lg" /> Home
              </router-link>
            </li>
            <li class="nav-item nav-nemu">
              <router-link to="/PersonalInfo" class="nav-link">
                <font-awesome-icon icon="users" size="lg" /> 個人情報
              </router-link>
            </li>
            <li class="nav-item nav-nemu">
              <router-link to="/Agreement" class="nav-link">
                <font-awesome-icon icon="address-card" size="lg" /> 契約登録
              </router-link>
            </li>
            <li class="nav-item nav-nemu">
              <router-link to="/History" class="nav-link">
                <font-awesome-icon icon="history" size="lg" /> 履歴確認
              </router-link>
            </li>

          </ul>
        </div>
      <div class="login-user">
        <ul class="navbar-nav">
            <li><font-awesome-icon icon="user" size="lg" /> igaue</li>
          </ul>
      </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.login-user {
  float: right;
  margin-right: 10px;
}
.nav-nemu {
  margin-right: 10px;
}
</style>

<script>
export default {
  name: "NavBar",
}
</script>