<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import Card from 'primevue/card';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import SubHeader from '@/components/sub-header/SubHeader.vue';
import ButtonComponent from '@/components/button-component/ButtonComponent.vue';
import RefundRequestedDialog from './components/RefundRequestedDialog.vue'

const { t } = useI18n();

const navegar = useRouter();

function goBack() {
	navegar.push({ name: 'your-purchases' });
}

const selectedCategory = ref<string | null>(null);
const categories = ref([
	{ name: t('refund-form.reason_1'), key: '1' },
	{ name: t('refund-form.reason_2'), key: '2' },
	{ name: t('refund-form.reason_3'), key: '3' },
	{ name: t('refund-form.reason_4'), key: '4' },
	{ name: t('refund-form.reason_5'), key: '5' },
	{ name: t('refund-form.reason_6'), key: '6' },
]);

const value = ref('');

const visible = ref(false);

const touched = ref(false);
const isReasonSelected = computed(() => !!selectedCategory.value);
const reasonError = computed(() => {
	if (!touched.value) return '';
	return isReasonSelected.value ? '' : (t('refund-form.reason_required'));
});

function refundRequested() {
	touched.value = true;
	if (!isReasonSelected.value) return;
	visible.value = true;
}

</script>

<template>
	<main class="pages container-refund-form flex flex-column md:justify-content-between align-items-center">
		<SubHeader :title="t('refund-form.title')" v-on:back="goBack" />

		<section class="container-cards flex flex-column justify-content-between md:gap-4"
			style="max-width: 600px; width: 100%; height: 100%;">

			<div class="card-detalhes-produto p-3 md:p-0">
				<h2 class="mb-2" style="font-size: 18px; ">{{ t('refund-form.subtitle_card_product') }}</h2>

				<Card :pt="{
					root: {
						style: {
							width: '100%', padding: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px',
						}
					}
				}">
					<template #content>

						<div class="container-card flex flex-column justify-content-between"
							style="width:100%; max-width:600px; height: 100%; min-height: 359px;">

							<div class="campo-produto nome">
								<h3>{{ t('refund-form.name_product') }}</h3>
								<span>Wireless Noise-Canceling Headphones</span>
							</div>

							<div class="campo-produto valor">
								<h3>{{ t('refund-form.value_buy') }}</h3>
								<span>1 x € 324.00</span>
							</div>

							<div class="campo-produto data-limite">
								<h3>{{ t('refund-form.date_limit') }}</h3>
								<span>29/05/2025</span>
							</div>

							<div class="campo-produto metodo-pagamento">
								<h3>{{ t('refund-form.method_payment') }}</h3>
								<span>Mastercard 9915</span>
							</div>

							<div class="campo-produto email">
								<h3>{{ t('refund-form.email_support') }}</h3>
								<span>suporte@multidrop.com</span>
							</div>
						</div>
					</template>
				</Card>
			</div>

			<div class="card-motivo-reembolso p-3 md:p-0">
				<h2 class="mb-2" style="font-size: 18px; ">{{ t('refund-form.subtitle_card_reason') }}</h2>

				<Card :pt="{
					root: {
						style: {
							width: '100%', padding: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px',
						}
					}
				}">
					<template #content>

						<div class="container-card flex flex-column justify-content-between"
							style="width:100%; max-width:600px; height: 100%; min-height: 359px;">

							<div class="sub-titulo flex flex-column mb-3">
								<h3>{{ t('refund-form.title_form') }}</h3>
								<span class="span-secundario">{{ t('refund-form.subtitle_form') }}</span>
							</div>

							 <form>
                <div class="container-radio flex flex-column justify-content-between"
                  style="height: 258px;"
                  :class="{ 'field-invalid': touched && !isReasonSelected }">
                  <div v-for="category in categories" :key="category.key" class="flex items-center gap-2"
                    style="height: 21px; font-size: 14px; font-weight: 400; align-items: center;">
                    <RadioButton v-model="selectedCategory" :inputId="category.key" name="dynamic" :value="category.name"
                      :aria-invalid="touched && !isReasonSelected" />
                    <label style="color:#171717; font-size:14px; font-weight:400;" :for="category.key">
                      {{ category.name }}
                    </label>
                  </div>
                  <small v-if="reasonError" class="p-error msg-erro">{{ reasonError }}</small>
                </div>

                <div class="container-textarea flex flex-column mt-4">
                  <h3>{{ t('refund-form.title_text_area') }}</h3>
                  <Textarea v-model="value" rows="5" cols="30" style="resize:none"
                    :pt="{ root:{ style:{ width:'100%', maxWidth:'536px', height:'64px' } } }" />
                  <span class="span-secundario">{{ t('refund-form.subtitle_text_area') }}</span>
                </div>
              </form>
						</div>

					</template>
				</Card>
			</div>

			<div class="button flex justify-content-center mb-5 p-3 md:p-0">
				<ButtonComponent :label="t('refund-form.button')" text-color="#FFFFFF" bg-color="#367C50" :max-width="192"
					:font-size="15.75" type="button" @click="refundRequested" />
			</div>

			<RefundRequestedDialog v-model:visible="visible" />
		</section>
	</main>
</template>

<style scoped>
.campo-produto {
	height: 39px;
}

h3 {
	font-size: 14px;
	font-weight: 600px;
	color: #171717;
	margin-bottom: 8px;
}

span {
	font-size: 14px;
	font-weight: 500;
	color: #171717;
}

.span-secundario {
	font-size: 12px;
	color: #737373;
}

.field-invalid {
  border: 1px solid #DC2626;
  border-radius: 8px;
  padding: 8px;
}

.msg-erro {
  display: block;
  margin-top: 6px;
  color: #DC2626;
  font-size: 12px;
}
</style>
