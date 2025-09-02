<script setup lang="ts">
import { computed, ref, onMounted  } from 'vue';
import InputText from 'primevue/inputtext'
import Card from 'primevue/card';
import { useI18n, } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth-store';
import ButtonComponent from '@/components/button-component/ButtonComponent.vue';
import VerifyEmailDialog from './components/VerifyEmailDialog.vue'

onMounted(() => {
  useAuth.clear();
});

const { t, d, n, locale } = useI18n();
const useAuth = useAuthStore();
const showDialog = ref(false);

const emailTouched = ref(false);
const emailInputRef = ref<HTMLInputElement | null>(null);

const emailValidator = /.+@/;
const isEmailEmpty = computed(() => !((useAuth.email || '').trim().length));
const isEmailValid = computed(() => emailValidator.test(useAuth.email || ''));
const showError = computed(() => emailTouched.value && (isEmailEmpty.value || !isEmailValid.value));

const emailError = computed(() => {
  if (!emailTouched.value) return '';
  if (isEmailEmpty.value || !isEmailValid.value) return t('refund.email_invalid') || 'Informe seu e-mail';
  return '';
});

function onBlurEmail() {
  emailTouched.value = true;
}

function openDialog(e?: Event) {
  e?.preventDefault();
  emailTouched.value = true;

  if (isEmailEmpty.value || !isEmailValid.value) {
    emailInputRef.value?.focus();
    return;
  }
  showDialog.value = true;
}

function onConfirm() {
	showDialog.value = false
}
</script>

<template>
	<div>

		<main class="pages box-main flex flex-column align-items-center p-3 sm:p-4 md:p-2">
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

								<InputText
                  id="email"
                  ref="emailInputRef"
                  v-model="useAuth.email"
                  type="email"
                  name="email"
                  spellcheck="false"
                  :aria-invalid="showError"
                  :aria-describedby="showError ? 'email-error' : undefined"
                  :class="['w-full','input-text',{ 'p-invalid': showError }]"
                  :pt="{ root: { class: 'input-text' } }"
                  @blur="onBlurEmail"
                />

								 <small v-if="emailError" class="p-error msg-erro">{{ emailError }}</small>

							</div>
							<ButtonComponent 
  							:label="t('refund.text_button')" 
  							:max-width="390" 
  							:margin-top="24" 
  							@click="openDialog"
  							type="submit"
  							:disabled="!isEmailValid && emailTouched"
							/>
						</template>
					</Card>
				</form>
			</div>
		</main>
		<VerifyEmailDialog v-model:visible="showDialog" :email="useAuth.email" @confirm="onConfirm" />
	</div>
</template>

<style scoped>
.box-main {
	width: 100%;
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

:deep(.p-inputtext.p-invalid),
.input-text.p-invalid {
  border-color: #DC2626 !important;   /* vermelho */
  box-shadow: 0 0 0 1px rgba(220,38,38,0.08);
}

/* mensagem de erro */
.msg-erro {
  display: block;
  margin-top: 6px;
  color: #DC2626;
  font-size: 12px;
}
</style>
