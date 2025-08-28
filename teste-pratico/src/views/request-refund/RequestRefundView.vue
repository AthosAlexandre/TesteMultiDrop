<script setup lang="ts">
import InputMask from 'primevue/inputmask';
import Card from 'primevue/card';
import { useI18n } from 'vue-i18n'
const { t, d, n, locale } = useI18n()

import HeaderComponent from '../../components/Header/HeaderComponent.vue';

import { ref } from 'vue';
import { Button } from 'primevue';

function toggleLocale() {
  locale.value = locale.value === 'pt-BR' ? 'en' : 'pt-BR'
}

const email = ref('');
</script>

<template>
	<div>
		<HeaderComponent />
		<main class="box-main">
			<div class="container-formulario">

				<div class="container-texto">
					<h1 class="font-bold text-3xl mb-3">{{ t('refund.title') }}</h1>
					<p class="text-base">{{ t('refund.text') }}</p>
				</div>

				<form action="" class="flex flex-column align-items-center">
					<Card class="mt-6 p-4 shadow-2 border-round card">
						<template #content>
							<div class="flex-auto">
								<label for="ssn" class="font-bold block mb-2">{{ t('refund.email_label') }}</label>
								<InputMask class="input" id="ssn" v-model="email" fluid />
							</div>
							<Button class="buttton" type="submit">{{ t('refund.text_button') }}</Button>
						</template>
					</Card>
				</form>
			</div>
		</main>
	</div>
	<!-- <Button class="mt-3" outlined size="small" @click="toggleLocale">
                {{ locale === 'pt-BR' ? 'Switch to English' : 'Mudar para Português' }}
              </Button> -->
</template>

<style scoped>
.box-main {
	width: 100%;
	min-height: calc(100vh - 65px);
	display: flex;
	align-items: center;
	flex-direction: column;
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
	color: #171717;
}

p {
	text-align: center;
	font-size: 14px;
	margin-top: 10px;
	color: #171717;
}

.card{
	width: 100%;
	max-width: 470px;
}

.input{
	width: 100%;
	max-width: 390px;
}
.buttton{
	width: 100%;
	max-width: 390px;
	height: 42px;
	margin-top: 20px;
	background-color: #367C50;
	color: #FFFFFF;
}

.buttton:hover{
	background-color: #2E6B42;
	color: #FFFFFF;
}
</style>
