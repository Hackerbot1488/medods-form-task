<template>
	<div id="app" :class="{success_visible: success}">
		<Form v-if="!success" @success="onSuccess" />
		<Success v-if="success" />
	</div>
</template>

<script>
import Form from "@/components/Form.vue";
import Success from "@/components/Success.vue";
export default {
	name: "App",
	data() {
		return {
			success: false,
		};
	},
	methods: {
		onSuccess(data) {
			this.success = true;
		},
	},
	components: {
		Form,
		Success,
	},
};
</script>

<style lang="sass">
@font-face
	font-family: "Oswald"
	src: url("/fonts/Oswald/Oswald-Regular.eot")
	src: url("/fonts/Oswald/Oswald-Regular.ttf") format("opentype")
	src: url("/fonts/Oswald/Oswald-Regular.woff2") format("woff2")
	src: url("/fonts/Oswald/Oswald-Regular.svg") format("svg")
	font-style: normal
	font-weight: normal
@font-face
	font-family: "Oswald"
	src: url("/fonts/Oswald/Oswald-Bold.eot")
	src: url("/fonts/Oswald/Oswald-Bold.ttf") format("opentype")
	src: url("/fonts/Oswald/Oswald-Bold.woff2") format("woff2")
	src: url("/fonts/Oswald/Oswald-Bold.svg") format("svg")
	font-style: normal
	font-weight: bold
body
	font-family: "Oswald", sans-serif
	margin: 0
	padding: 0
	min-height: 100vh
	background: #0f2027

#app
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	display: flex
	align-items: center
	min-height: 100vh
	padding: 50px 0
.success_visible
	min-height: 100% !important
</style>
