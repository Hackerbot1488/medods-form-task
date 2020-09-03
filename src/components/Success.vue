<template>
	<div class="success">
		<div class="success__container">
			<img src="@/img/success.gif" alt="Успех!" class="success__img" />
			<h1 class="success__title">Новый клиент успешно добавлен!</h1>
		</div>
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
  &__container
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
    width: calc(100% - 100px)
    padding: 20px 0
    &__container
      width: 440px
      margin: 0 auto
    &__title
      font-size: 30px
      width: 440px
@media (max-width: 600px)
  .success
    width: calc(100% - 100px)
    &__container
      width: 300px
    &__title
      font-size: 20px
      width: 300px
    &__img
      width: 150px
      height: 150px
@media (max-width: 440px)
  .success
    padding: 20px
    width: calc(100% - 100px)
    &__container
      width: 100%
    &__title
      width: auto
</style>