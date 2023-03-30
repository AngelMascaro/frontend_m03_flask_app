<template>
	<div id="initForm">
		<div id='divInit' class="card">
			<div class="card-header">
				<div class="d-flex justify-content-end social_icon">
					<span>
						<i class="bi bi-arrow-right-circle-fill"></i>
					</span>
				</div>
			</div>
			<h3 class="">
				Init
			</h3>
			<div class="input-group mb-4 mt-5">
				<span class="input-group-text" id="Password">
					<i style="min-width:25px" class="bi bi-lock-fill"></i>
				</span>
				<input type="password" class="form-control" placeholder="Password" aria-label="Password"
					aria-describedby="Password" v-model="password">
			</div>
			<br>
			<button id="btnInit" class='btn btn-dark my-2 my-sm-0 centrar' @click="init">
				Init Password
			</button>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	name: "InitView",
	data() {
		return {
			password: "",
			//get url
			token: window.location.href.split("=").pop(),
			password_param: window.location.href.split("&?password=").pop(),
		}
	},
	methods: {
		async init() {
			var dades = {
				password: this.password,
				token: this.token
			}
			await axios
				.post(
					"http://localhost:5000/api/init ", dades
				)
				.then((r) => {
					console.log(r)
					this.$router.push('/login')
				})
				.catch(error => console.log(error))
		}
	},
	mounted() {
		console.log(this.password_param)
	},
}
</script>

<style scoped lang="scss">
#divInit {
	border: 3px solid black;
	margin-left: auto;
	margin-right: auto;
	background-color: rgba(0, 0, 0, 0.9);
	padding: 15px 15px 15px 15px;
	max-width: 400px;
	color: #FFC312;
}

.centrar {
	display: block;
	margin: auto;
	text-align: center;
	margin-bottom: 20px;
}

#initForm {
	margin-top: 5vh;
	align-items: center;
}

#btnInit {
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