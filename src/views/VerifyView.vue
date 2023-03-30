<template>
  <div id="verifyForm">
    <div id="divVerify" class="card">
      <div class="card-header">
        <div class="d-flex justify-content-end social_icon">
          <span>
            <i class="bi bi-check-circle"></i>
          </span>
        </div>
      </div>
      <h3 class="">Verify</h3>
      <br>
      <h5>JWT: </h5>
      <p>{{ token }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VerifyView',
  components: {
  },
  data() {
    return {
      token: this.$route.params["token"]
    }
  },
  mounted() {
    if (this.$route.params["token"] == "") {
      this.$route.params["token"] = "Login first"
    }
  }
}
</script>

<style scoped lang="scss">

#divVerify {
  border: 3px solid black;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 15px 15px 15px 15px;
  max-width: 400px;
  color: #ffc312;
}

.centrar {
  display: block;
  margin: auto;
  text-align: center;
  margin-bottom: 20px;
}

#verifyForm {
  margin-top: 5vh;
  align-items: center;
}

#btnRegister {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffc312;
  color: black;
  font-weight: 700;

  &:hover {
    background-color: white;
    color: black;
    font-weight: 700;
  }

}

.form-control {
  background-color: rgba(0, 0, 0, 0);
  color: #ffc312;

  &:focus {
    background-color: rgba(0, 0, 0, 0);
    color: #ffc312;
  }

  &::-webkit-input-placeholder {
    color: #ffc312;
  }

}

.input-group-text {
  background-color: #ffc312;
  font-weight: 900;
  font-size: 1.3em;
}

.input-group {
  height: 50px;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;

  span {
    font-size: 60px;
    margin-left: 10px;
    color: #ffc312;
  }
}
</style>