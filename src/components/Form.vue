<template>
	<form class="form">
		<section class="personal-info">
			<h2 class="form__header">Персональные данные</h2>
			<div class="group">
				<div class="group__column">
					<div class="group__item">
						<label for="name" class="required">Имя</label>
						<input class="form__input" type="text" name="name" id="name" placeholder="Иван" />
					</div>
					<div class="group__item">
						<label for="surname" class="required">Фамилия</label>
						<input class="form__input" type="text" name="surname" id="surname" placeholder="Карамазов" />
					</div>
					<div class="group__item">
						<label for="patronymic">Отчество</label>
						<input
							class="form__input"
							type="text"
							name="patronymic"
							id="patronymic"
							placeholder="Фёдорович"
						/>
					</div>
					<div class="group__item">
						<label>Пол</label>
						<div class="wrap-radio">
							<input type="radio" id="male" name="sex" value="male" />
							<label for="male">Мужской</label>
						</div>
						<div class="wrap-radio">
							<input type="radio" id="female" name="sex" value="female" />
							<label for="female">Женский</label>
						</div>
						<div class="wrap-radio">
							<input type="radio" id="custom" name="sex" value="custom" />
							<label for="custom">Микс</label>
						</div>
					</div>
					<!-- <div class="group__item">
						<label for="notifications">SMS - Уведомления</label>
						<div class="wrap-checkbox">
							<input type="checkbox" name="notifications" id="notifications" />
							<label for="notifications">Не получать sms-уведомления</label>
						</div>
					</div>-->
				</div>
				<div class="group__column">
					<div class="group__item">
						<label class="required" for="birthday">Дата рождения</label>
						<input
							class="form__input"
							type="date"
							name="birthday"
							id="birthday"
							placeholder="дд.мм.гггг"
							maxlength="10"
						/>
					</div>
					<div class="group__item">
						<label for="phone" class="required">Номер телефона</label>
						<input class="form__input" type="tel" maxlength="12" name="phone" id="phone" placeholder="+7" />
					</div>
					<div class="group__item">
						<label for="doctor">Лечащий врач</label>
						<select class="form__select" name="doctor" id="doctor">
							<option disabled selected style="display:none">Выберите врача</option>
							<option value="ivanov">Иванов</option>
							<option value="zaharov">Захаров</option>
							<option value="chernishev">Чернышев</option>
						</select>
					</div>
					<div class="group__item">
						<label for="client-group" class="required">Группа клиентов</label>
						<select
							multiple
							class="form__select form__select_multiple"
							name="client-group"
							id="client-group"
							size="3"
						>
							<option value="vip">VIP</option>
							<option value="problem">Проблемные</option>
							<option value="oms">ОМС</option>
						</select>
					</div>
				</div>
			</div>
			<div class="group">
				<div class="group__item">
					<label for="notifications">SMS - Уведомления</label>
					<div class="wrap-checkbox">
						<input type="checkbox" name="notifications" id="notifications" />
						<label for="notifications">Не получать sms-уведомления</label>
					</div>
				</div>
			</div>
		</section>
		<section class="adress">
			<h2 class="form__header">Адрес</h2>
			<div class="group">
				<div class="group__column">
					<div class="group__item">
						<label for="country">Страна</label>
						<input
							class="form__input"
							type="text"
							name="country"
							id="country"
							placeholder="Российская империя"
						/>
					</div>
					<div class="group__item">
						<label for="state">Область</label>
						<input class="form__input" type="text" name="state" id="state" placeholder="Ичкерия" />
					</div>
					<div class="group__item">
						<label class="required" for="city">Город</label>
						<input class="form__input" type="text" name="city" id="city" placeholder="Грозный" />
						<!-- <p class="error">Обязательное поле!</p> -->
					</div>
				</div>
				<div class="group__column">
					<div class="group__item">
						<label for="street">Улица</label>
						<input
							class="form__input"
							type="text"
							name="street"
							id="street"
							placeholder="Витебский тракт"
						/>
					</div>
					<div class="group__item">
						<label for="postcode">Индекс</label>
						<input
							class="form__input"
							type="text"
							name="postcode"
							id="postcode"
							maxlength="6"
							placeholder="777777"
						/>
					</div>
					<div class="group__item">
						<label for="building">Дом</label>
						<input class="form__input" type="text" name="building" id="building" placeholder="14б" />
					</div>
				</div>
			</div>
		</section>
		<section class="documents">
			<h2 class="form__header">Документы</h2>
			<!-- <div class="group">
				<div class="group__column">
					<div class="group__item">
						<label for="passport">Тип документа</label>
						<select class="form__select" name="passport" id="passport">
							<option value="person-doc" selected>Паспорт</option>
							<option value="birth-doc">Свидетельство о рождении</option>
							<option value="driver-doc">Водительское удостоверение</option>
						</select>
					</div>
				</div>
			</div>-->
			<div class="group">
				<div class="group__column">
					<div class="group__item">
						<label for="passport" class="required">Тип документа</label>
						<select class="form__select" name="passport" id="passport">
							<option disabled selected style="display:none">Выберите тип документа</option>
							<option value="person-doc">Паспорт</option>
							<option value="birth-doc">Свидетельство о рождении</option>
							<option value="driver-doc">Водительское удостоверение</option>
						</select>
					</div>
					<div class="group__item">
						<label for="doc-code">Серия</label>
						<input
							class="form__input"
							type="text"
							name="doc-code"
							id="doc-code"
							maxlength="4"
							placeholder="7777"
						/>
					</div>
					<div class="group__item">
						<label for="doc-number">Номер</label>
						<input
							class="form__input"
							type="text"
							name="doc-number"
							id="doc-number"
							maxlength="6"
							placeholder="777777"
						/>
					</div>
				</div>
				<div class="group__column">
					<div class="group__item">
						<label for="departament">Кем выдан</label>
						<input
							class="form__input"
							type="text"
							name="departament"
							id="departament"
							placeholder="Отделом УФМС России.."
						/>
					</div>
					<div class="group__item">
						<label class="required" for="date-of-getting">Дата выдачи</label>
						<input
							class="form__input"
							type="date"
							name="date-of-getting"
							id="date-of-getting"
							placeholder="дд.мм.гггг"
							maxlength="10"
						/>
					</div>
				</div>
			</div>
		</section>
		<div class="wrap-submit-button">
			<button type="submit" class="submit-button">Создать</button>
		</div>
	</form>
</template>

<script>
export default {
	name: "Form",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.required
	&::after
		position: absolute
		content: '*'
		color: red
		top: 0px
		left: 103%
.error
	color: red
	font-size: 15px
	position: absolute
	margin: 0
	left: 10px
	bottom: 5px
.form
	margin: 0 auto
	max-width: 800px
	width: 800px
	border-radius: 20px
	padding: 20px 100px
	color: #053461
	background: #91eae4
	section, .wrap-submit-button
		width: 100%
	.wrap-submit-button
		padding: 20px 0px 50px
		display: flex
		justify-content: flex-end

.personal-info
	display: flex
	flex-direction: column

.form__header
	font-size: 40px
	font-weight: bold
.group
	display: flex
	width: 100%
.group__column
	flex: 1
	max-width: 360px
	&:first-child
		margin-right: 80px
.group__item
	display: flex
	position: relative
	flex-direction: column
	padding-bottom: 30px
	label
		font-size: 22px
		font-weight: bold
		margin-left: 10px
		margin-bottom: 3px
		width: fit-content
		display: inline-table
		position: relative
	.wrap-radio
		display: flex
		align-items: center
		margin-bottom: 5.6px
		&:last-child
			margin-bottom: 0
		label
			font-size: 20px
			font-weight: normal
			margin-bottom: 0
	.wrap-checkbox
		display: flex
		align-items: center
		label
			font-size: 20px
			font-weight: normal
			margin-bottom: 0
.form__input
	height: 40px
	border: 2px solid white
	max-width: 360px
	border-radius: 40px
	padding: 0 20px
	font-size: 20px
	outline: none
	color: #053461
	transition: 0.5s
	background-color: white
	&:focus
		border-color: black
	&_error
		border-color: red
	&::-webkit-input-placeholder
		color: #ccc
	&::-moz-placeholder
		color: #ccc
	&:-ms-input-placeholder
		color: #ccc !important
.form__select
	height: 44px
	background-color: white
	border: 2px solid white
	max-width: 360px
	border-radius: 40px
	font-size: 20px
	outline: none
	color: #053461
	transition: 0.5s
	padding: 0 20px
	&:focus
		border-color: black
	&_multiple
		height: 100px
		padding: 10px 20px
		overflow: hidden
.submit-button
	background-color: #0f2027
	color: white
	cursor: pointer
	text-align: center
	padding: 0 50px
	height: 60px
	font-size: 20px
	border: none
	border-radius: 10px
	transition: 1s
	&:hover
		opacity: 0.7
@media (max-width: 400px)
	.form__select_multiple
		padding: 10px 20px
		height: auto
	.form__input
		width: 320px
</style>
