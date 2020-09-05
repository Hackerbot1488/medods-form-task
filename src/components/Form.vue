<template>
	<form class="form" @submit.prevent="submitHandler">
		<section class="personal-info">
			<h2 class="form__header">Персональные данные</h2>
			<div class="group">
				<div class="group__column">
					<div class="group__item">
						<label for="name" class="required">Имя</label>
						<input
							class="form__input"
							type="text"
							v-model.trim="form.name"
							name="name"
							id="name"
							placeholder="Иван"
						/>
						<p v-if="$v.form.name.$dirty && !$v.form.name.required" class="error">{{errors.isRequired}}</p>
						<p v-if="$v.form.name.$dirty && !$v.form.name.isWord" class="error">{{errors.isWord}}</p>
					</div>
					<div class="group__item">
						<label for="surname" class="required">Фамилия</label>
						<input
							class="form__input"
							type="text"
							v-model.trim="form.surname"
							name="surname"
							id="surname"
							placeholder="Карамазов"
						/>
						<p
							v-if="$v.form.surname.$dirty && !$v.form.surname.required"
							class="error"
						>{{errors.isRequired}}</p>
						<p v-if="$v.form.surname.$dirty && !$v.form.surname.isWord" class="error">{{errors.isWord}}</p>
					</div>
					<div class="group__item">
						<label for="patronymic">Отчество</label>
						<input
							class="form__input"
							type="text"
							v-model.trim="form.patronymic"
							name="patronymic"
							id="patronymic"
							placeholder="Фёдорович"
						/>
						<p
							v-if="$v.form.patronymic.$dirty && !$v.form.patronymic.isWord"
							class="error"
						>{{errors.isWord}}</p>
					</div>
					<div class="group__item">
						<label>Пол</label>
						<div class="wrap-radio">
							<input type="radio" id="male" name="sex" v-model.trim="form.gender" value="male" />
							<label for="male">Мужской</label>
						</div>
						<div class="wrap-radio">
							<input type="radio" id="female" name="sex" v-model.trim="form.gender" value="female" />
							<label for="female">Женский</label>
						</div>
						<div class="wrap-radio">
							<input type="radio" id="custom" name="sex" v-model.trim="form.gender" value="custom" />
							<label for="custom">Микс</label>
						</div>
					</div>
				</div>
				<div class="group__column">
					<div class="group__item">
						<label class="required" for="birthday">Дата рождения</label>
						<input
							class="form__input"
							type="date"
							name="birthday"
							v-model.trim="form.birthday"
							id="birthday"
							placeholder="дд.мм.гггг"
							maxlength="10"
						/>
						<p
							v-if="$v.form.birthday.$dirty && !$v.form.birthday.required"
							class="error"
						>{{errors.isRequired}}</p>
						<p
							v-if="$v.form.birthday.$dirty && !$v.form.birthday.isDate"
							class="error"
						>{{errors.wrongFormat}}</p>
					</div>
					<div class="group__item">
						<label for="phone" class="required">Номер телефона</label>
						<input
							class="form__input"
							type="tel"
							maxlength="12"
							name="phone"
							v-model.trim="form.phone"
							id="phone"
							placeholder="+7"
						/>
						<p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="error">{{errors.isRequired}}</p>
						<p v-if="$v.form.phone.$dirty && !$v.form.phone.isPhone" class="error">{{errors.wrongFormat}}</p>
					</div>
					<div class="group__item">
						<label for="doctor">Лечащий врач</label>
						<select class="form__select" name="doctor" id="doctor" v-model.trim="form.doctor">
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
							v-model.trim="form.clientGroup"
							size="3"
						>
							<option value="vip">VIP</option>
							<option value="problem">Проблемные</option>
							<option value="oms">ОМС</option>
						</select>
						<p
							v-if="$v.form.clientGroup.$dirty && !$v.form.clientGroup.required"
							class="error"
						>{{errors.isRequired}}</p>
					</div>
				</div>
			</div>
			<div class="group">
				<div class="group__column">
					<div class="group__item">
						<label for="notifications">SMS - Уведомления</label>
						<div class="wrap-checkbox">
							<label class="checkbox path">
								<input type="checkbox" id="notifications" v-model.trim="form.notifications" />
								<svg viewBox="0 0 21 21">
									<path
										d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"
									/>
								</svg>
							</label>
							<label for="notifications">Не получать sms-уведомления</label>
						</div>
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
							v-model.trim="form.country"
							placeholder="Российская империя"
						/>
						<p v-if="$v.form.country.$dirty && !$v.form.country.isWord" class="error">{{errors.isWord}}</p>
					</div>
					<div class="group__item">
						<label for="state">Область</label>
						<input
							class="form__input"
							type="text"
							name="state"
							id="state"
							v-model.trim="form.state"
							placeholder="Ичкерия"
						/>
						<p v-if="$v.form.state.$dirty && !$v.form.state.isWord" class="error">{{errors.isWord}}</p>
					</div>
					<div class="group__item">
						<label class="required" for="city">Город</label>
						<input
							class="form__input"
							type="text"
							name="city"
							id="city"
							v-model.trim="form.city"
							placeholder="Грозный"
						/>
						<p v-if="$v.form.city.$dirty && !$v.form.city.required" class="error">{{errors.isRequired}}</p>
						<p v-if="$v.form.city.$dirty && !$v.form.city.isWord" class="error">{{errors.isWord}}</p>
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
							v-model.trim="form.street"
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
							v-model.trim="form.postCode"
							placeholder="777777"
						/>
						<p
							v-if="$v.form.postCode.$dirty && !$v.form.postCode.isNumber"
							class="error"
						>{{errors.isNumber}}</p>
					</div>
					<div class="group__item">
						<label for="building">Дом</label>
						<input
							class="form__input"
							type="text"
							name="building"
							v-model.trim="form.building"
							id="building"
							placeholder="14б"
						/>
					</div>
				</div>
			</div>
		</section>
		<section class="documents">
			<h2 class="form__header">Документы</h2>
			<div class="group">
				<div class="group__column">
					<div class="group__item">
						<label for="passport" class="required">Тип документа</label>
						<select class="form__select" name="passport" id="passport" v-model.trim="form.document">
							<option disabled selected style="display:none">Выберите тип документа</option>
							<option value="person-doc">Паспорт</option>
							<option value="birth-doc">Свидетельство о рождении</option>
							<option value="driver-doc">Водительское удостоверение</option>
						</select>
						<p
							v-if="$v.form.document.$dirty && !$v.form.document.required"
							class="error"
						>{{errors.isRequired}}</p>
					</div>
					<div class="group__item">
						<label for="doc-code">Серия</label>
						<input
							class="form__input"
							type="text"
							name="doc-code"
							id="doc-code"
							maxlength="4"
							v-model.trim="form.documentCode"
							placeholder="7777"
						/>
						<p
							v-if="$v.form.documentCode.$dirty && !$v.form.documentCode.isNumber"
							class="error"
						>{{errors.isNumber}}</p>
					</div>
					<div class="group__item">
						<label for="doc-number">Номер</label>
						<input
							class="form__input"
							type="text"
							name="doc-number"
							id="doc-number"
							maxlength="6"
							v-model.trim="form.documentNumber"
							placeholder="777777"
						/>
						<p
							v-if="$v.form.documentNumber.$dirty && !$v.form.documentNumber.isNumber"
							class="error"
						>{{errors.isNumber}}</p>
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
							v-model.trim="form.department"
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
							v-model.trim="form.dateOfGetting"
							maxlength="10"
						/>
						<p
							v-if="$v.form.dateOfGetting.$dirty && !$v.form.dateOfGetting.required"
							class="error"
						>{{errors.isRequired}}</p>
						<p
							v-if="$v.form.dateOfGetting.$dirty && !$v.form.dateOfGetting.isDate"
							class="error"
						>{{errors.wrongFormat}}</p>
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
import { required, minLength } from "vuelidate/lib/validators";
import { isWord, isNumber, isPhone, isDate } from "@/utils/helpers.js";
export default {
	name: "Form",
	data() {
		return {
			form: {
				name: "",
				surname: "",
				patronymic: "",
				gender: "",
				birthday: "",
				phone: "",
				doctor: "",
				clientGroup: [],
				notifications: false,
				country: "",
				state: "",
				city: "",
				street: "",
				postCode: "",
				building: "",
				document: "",
				documentNumber: "",
				documentCode: "",
				department: "",
				dateOfGetting: "",
			},
			errors: {
				isRequired: "Обязательное поле!",
				isWord: "Можно использовать только буквы!",
				isNumber: "Можно использовать только цифры!",
				wrongFormat: "Неверный формат!",
			},
		};
	},
	validations: {
		form: {
			name: {
				required,
				isWord,
			},
			surname: {
				required,
				isWord,
			},
			patronymic: {
				isWord,
			},
			birthday: {
				required,
				isDate,
			},
			phone: {
				required,
				isPhone,
			},
			clientGroup: {
				required,
			},
			country: {
				isWord,
			},
			state: {
				isWord,
			},
			city: {
				required,
				isWord,
			},
			postCode: {
				isNumber,
			},
			document: {
				required,
			},
			documentCode: {
				isNumber,
			},
			documentNumber: {
				isNumber,
			},
			dateOfGetting: {
				required,
				isDate,
			},
		},
	},
	methods: {
		submitHandler() {
			if (this.$v.$invalid) {
				this.$v.$touch();
			} else {
				this.$emit("success", this.form);
			}
		},
	},
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
.checkbox
	--background: #fff
	--border: #D1D6EE
	--border-hover: #BBC1E1
	--border-active: #0f2027
	--tick: #fff
	margin: 0 0 0 4px !important
	width: 13px
	height: 13px
	position: relative
	input,
	svg
		width: 13px
		height: 13px
		display: block
	input
		-webkit-appearance: none
		-moz-appearance: none
		position: relative
		outline: none
		background: var(--background)
		border: none
		margin: 0
		padding: 0
		cursor: pointer
		border-radius: 3px
		transition: box-shadow .3s
		box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border))
		&:hover
			--s: 2px
			--b: var(--border-hover)
		&:checked
			--b: var(--border-active)
	svg
		pointer-events: none
		fill: none
		stroke-width: 2px
		stroke-linecap: round
		stroke-linejoin: round
		stroke: var(--stroke, var(--border-active))
		position: absolute
		top: 0
		left: 0
		width: 13px
		height: 13px
		transform: scale(var(--scale, 1)) translateZ(0)
	&.path
		input
			&:checked
				--s: 2px
				transition-delay: .4s
				& + svg
					--a: 16.1 86.12
					--o: 102.22
		svg
			stroke-dasharray: var(--a, 86.12)
			stroke-dashoffset: var(--o, 86.12)
			transition: stroke-dasharray .6s, stroke-dashoffset .6s

@media (max-width: 1144px)
	.form
		padding: 20px
		section, .wrap-submit-button
			width: 631px
			margin: 0 auto
	.group__column
		flex: 1
		max-width: 300px
		&:first-child
			margin-right: 40px
@media (max-width: 900px)
	.form
		margin: 0 30px
@media (max-width: 732px)
	.form
		section
			width: 400px
			margin: 0 auto
		.wrap-submit-button
			padding: 20px 20px 20px 0px
			width: auto
	.form__header
		width: 400px
	.group
		/** flex-direction: column **/
		display: block
		width: 400px
	.group__column
		flex: 1
		max-width: 300px
		&:first-child
			margin: 0
	.form__select
		width: 300px
		&_multiple
			height: auto
@media (max-width: 500px)
	.form
		margin: 0 10px
		section
			width: 300px
			margin: 0 auto
		.wrap-submit-button
			padding: 20px 0 0
	.form__header
		font-size: 30px
		width: auto
	.group
		width: auto
	.group-column
		width: 100%
	.submit-button
		height: 50px
		padding: 0 30px
@media (max-width: 360px)
	.form
		section
			margin: 0
			width: auto
	.form__header
		font-size: 25px
	.form__input,
		width: calc(100% - 40px)
	.form__select
		width: 100%
</style>
