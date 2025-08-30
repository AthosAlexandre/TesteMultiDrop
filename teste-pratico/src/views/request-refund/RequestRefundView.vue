<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Card from 'primevue/card';
import { useI18n } from 'vue-i18n'
import VerifyEmailDialog from './components/VerifyEmailDialog.vue'
import { useRefundRequest } from './../../stores/request-refund';
import { ref } from 'vue';
import ButtonComponent from '../../components/button-component/ButtonComponent.vue';

const { t, d, n, locale } = useI18n();
const showDialog = ref(false);
const useRefund = useRefundRequest();

function openDialog(e?: Event) {
  e?.preventDefault() 
  showDialog.value = true
}

function onConfirm() {
  showDialog.value = false
}

function toggleLocale() {
  locale.value = locale.value === 'pt-BR' ? 'en' : 'pt-BR'
}


</script>

<template>
	<div>
		
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
								<InputText
                  id="email"
                  v-model="useRefund.email"
                  type="email"
                  class="input w-full"
                  autocomplete="email"
                />
							</div>
							<ButtonComponent 
							:label="t('refund.text_button')"
							:max-width="390"
							:margin-top="24"
							@click="openDialog"
							type="submit"
							/>
						</template>
					</Card>
				</form>
			</div>
		</main>
		<VerifyEmailDialog
      v-model:visible="showDialog"
      :email="useRefund.email"
      @confirm="onConfirm"
    />
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

.card{
	width: 100%;
	max-width: 470px;
}

.input{
	width: 100%;
	max-width: 390px;
}
</style>
