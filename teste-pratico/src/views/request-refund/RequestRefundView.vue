<script setup lang="ts">
import { ref } from 'vue';
import InputText from 'primevue/inputtext'
import Card from 'primevue/card';
import { useI18n, type Locale } from 'vue-i18n'
import { useAuthStore } from '../../stores/auth-store';
import ButtonComponent from '../../components/button-component/ButtonComponent.vue';
import VerifyEmailDialog from './components/VerifyEmailDialog.vue'

const { t, d, n, locale } = useI18n();
const useAuth = useAuthStore();
const showDialog = ref(false);

function openDialog(e?: Event) {
	e?.preventDefault()
	showDialog.value = true
}
function onConfirm() {
	showDialog.value = false
}

/* 
const order: Locale[] = ['pt-BR', 'en', 'de'];
function cycleLocale() {
	const i = order.indexOf(locale.value as Locale)
	const next = order[(i + 1) % order.length]
	locale.value = next
	localStorage.setItem('locale', next)
}

const nextLabel = computed(() => {
	const i = order.indexOf(locale.value as Locale)
	const next = order[(i + 1) % order.length]
	return next === 'en'
		? 'Switch to English'
		: next === 'de'
		? 'Wechseln zu Deutsch'
		: 'Mudar para Português'
}); */

</script>

<template>
	<div>

		<main class="box-main flex flex-column align-items-center p-3 sm:p-4 md:p-5">
			<div class="container-formulario">

				<div class="container-texto">
					<h1 class="font-bold text-3xl mb-3">{{ t('refund.title') }}</h1>
					<p class="text-base">{{ t('refund.text') }}</p>
				</div>

				<form action="" class="flex flex-column align-items-center">
					<Card class="mt-6 p-4 shadow-2 border-round" :pt="{ root: { class: 'card' } }">
						<template #content>
							<div class="flex-auto">

								<label style="color: #1D1F20; font-weight: 600; font-size: 14px;" for="ssn"
									class="font-bold block mb-2">{{ t('refund.email_label') }}</label>

								<InputText :pt="{
									root: {
										class :'input-text'
									},
								}" id="email" v-model="useAuth.email" type="email" class="w-full" autocomplete="email" />

							</div>
							<ButtonComponent :label="t('refund.text_button')" :max-width="390" :margin-top="24" @click="openDialog"
								type="submit" />
						</template>
					</Card>
				</form>
			</div>
		</main>
		<VerifyEmailDialog v-model:visible="showDialog" :email="useAuth.email" @confirm="onConfirm" />
	</div>
	<!-- <Button class="mt-3" outlined size="small" @click="cycleLocale">
    		{{ nextLabel }}
  		</Button> -->
</template>

<style scoped>
.box-main {
	width: 100%;
	min-height: calc(100vh - 65px);
	background-color: #FAFAFA;
}

.container-formulario {
	width: 100%;
	max-width: 1000px;
	height: 349px;
	margin-top: 40px;
}

h1 {
	text-align: center;
	font-size: 28px;
}

p {
	text-align: center;
	font-size: 14px;
	margin-top: 10px;
}

.card {
	width: 100%;
	max-width: 470px;
}

.input-text {
	background-color: #FFFFFF;
	border: 1px solid #C4C7CA;
	color: #171717;
	width: 100%;
	max-width: 390px;
	height: 48px;
}
</style>
