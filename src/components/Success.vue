<template>
	<div class="success">
		<img src="@/img/success.gif" alt="Успех!" class="success__img" />
		<h1 class="success__title">Новый клиент успешно добавлен!</h1>
	</div>
</template>
<script>
export default {
	name: "Success",
};
</script>
<style lang="sass" scoped>
.success
  margin: 0 auto
  max-width: 800px
  border-radius: 20px
  padding: 20px 100px
  background: #91eae4
  color: #053461
  display: flex
  flex-direction: column
  &__title
    font-size: 40px
    font-weight: bold
    text-align: center
  &__img
    margin: 0 auto
    width: 200px
    height: 200px
@media (max-width: 900px)
  .success
    margin: 0 50px
    /** width: calc(100% - 100px) **/
    padding: 20px calc((100% - 540px) / 2)
    &__title
      font-size: 30px
      width: 440px
      margin: auto
@media (max-width: 600px)
  .success
    margin: 0 50px
    /** width: calc(100% - 100px) **/
    padding: 20px calc((100% - 400px) / 2)
    &__title
      font-size: 20px
      margin: auto
      width: 300px
    &__img
      width: 150px
      height: 150px
@media (max-width: 440px)
  .success
    padding: 20px
    &__title
      width: auto
</style>