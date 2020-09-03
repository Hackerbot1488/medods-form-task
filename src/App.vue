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
		onSuccess() {
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
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap")
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
