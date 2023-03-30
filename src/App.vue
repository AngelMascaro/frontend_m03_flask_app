<template>
  <nav>
    <router-link v-if="user.userState.loggedIn === false" to="/register">Register</router-link> |
    <router-link v-if="user.userState.loggedIn === false" to="/init">Init</router-link> |
    <router-link v-if="user.userState.loggedIn === false" to="/login">Login</router-link> |
    <router-link v-if="user.userState.loggedIn === false" to="/verify">Verify</router-link> |
    <!-- <div  class="iconLogged d-flex flex-column-reverse justify-content-end">
      <button @click="logoutvuex">LOGOUT</button>
      <p> {{ user.userState.user }} </p>
      <i class="bi bi-person-circle"></i>
    </div> -->
    <div class="btn-group iconLogged">
      <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {{ user.userState.user }}
        <i class="bi bi-person-circle"></i>
      </button>
      <ul class="dropdown-menu">
        <li v-if="user.userState.loggedIn === true"><a @click="logoutvuex" class="dropdown-item" href="#">Logout</a></li>
        <!-- <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li> -->
      </ul>
    </div>
    
  </nav>
  <router-view/>
  <video autoPlay muted loop id="backgroundVideo">
    <source src="https://dsqqu7oxq6o1v.cloudfront.net/preview-1014399-dJuQm5UBet-high.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>
</template>

<script>

export default {
  name: "App",
  components: {
  },
    data(){
      return {
        }
  },
  computed: {
    user() {
      return this.$store.state;
    },
  },
  methods: {
    logoutvuex() {
      this.$store.dispatch('logoutAction', { loggedIn: false, user: null, token: null })
    },
  }

}
</script>

<style lang="scss">

.app {
  position: absolute;
  font-family: Avenir, Helvetica, Arial, sans-serif;
	width: 100%;
	// background-image: url("https://dsqqu7oxq6o1v.cloudfront.net/preview-820138-EdlIREApd9-high.mp4");
  min-height: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	padding-bottom: 100px;
  text-align: center;
}

#backgroundVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  z-index: -100;
}

nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #c6d6e6;

    &.router-link-exact-active {
      color: #FFC312;
    }
  }
}
.LanguageSwitcher{
  position: absolute;
  right: 10px;
  top: 10px;
}
.btn-group{
  position: absolute !important;
}
p{
  color: #FFC312;
}
.iconLogged{
  position: absolute;
  right: 10px;
  top: 10px;
  // font-size: 25px;
}
</style>
