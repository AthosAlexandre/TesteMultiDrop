<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRefundRequest } from './../../stores/request-refund'
import { useRouter } from 'vue-router'
import ButtonComponent from '../../components/button-component/ButtonComponent.vue';
import Card from 'primevue/card';
import fone from '@/assets/fone-transparente.avif';
import { Message } from 'primevue';
import { useI18n } from 'vue-i18n'
import SubHeader from '../../components/sub-header/SubHeader.vue';

const { t } = useI18n();

const refund = useRefundRequest();
const { email } = storeToRefs(refund);

const navegar = useRouter();

function goBack() {
	navegar.push({ name: 'request-refund' });
}

function refundRequest () {
	navegar.push({ name: 'refund-form' });
}
</script>

<template>
	<main class="container-main flex flex-column align-items-center">

		<SubHeader :title="t('your_purchases.title')" v-on:back="goBack" />

		<section class="aviso">
			<div class="flex flex-row align-items-center gap-2">
				<i class="pi pi-info-circle"></i>
				<p>{{ t('your_purchases.alert') }}</p>
			</div>
		</section>

		<section class="cards">
			<div class="container-cards">
				<Card class="mb-3" :style="{ width: '100%', height: '164px' }">
					<template #content>
						<div class="container-card -m-12 flex flex-row justify-content-between align-items-center ">
							<div class="card-texto flex align-items-center flex-row gap-5">
								<div class="img">
									<img class="" :src="fone" alt="Imagem do produto" />
								</div>
								<div class="flex flex-column gap-2 align-content-center">
									<h2>Wireless Noise-Canceling Headphones</h2>
									<span>{{ t('your_purchases.card_value_buy') }} € 324.00</span>
									<span>{{ t('your_purchases.card_date_buy') }} 22/05/2025</span>
									<span>{{ t('your_purchases.card_date_limit') }} 29/05/2025</span>
								</div>
							</div>
							<div class="botao px-4">
								<ButtonComponent @click="refundRequest" :label="t('your_purchases.card_button')" text-color="#404040" bg-color="#E5E5E5"
									:max-width="150" :font-size="13"  type="button" />

							</div>
						</div>
					</template>
				</Card>

				<Card class="mb-3" :style="{ width: '100%', height: '164px' }">
					<template #content>
						<div class="container-card -m-12 flex flex-row justify-content-between align-items-center ">
							<div class="card-texto flex align-items-center flex-row gap-5">
								<div class="img">
									<img class="" :src="fone" alt="Imagem do produto" />
								</div>
								<div class="flex flex-column gap-2 align-content-center">
									<h2>Wireless Noise-Canceling Headphones</h2>
									<span>{{ t('your_purchases.card_value_buy') }} € 324.00</span>
									<span>{{ t('your_purchases.card_date_buy') }} 22/05/2025</span>
									<span>{{ t('your_purchases.card_date_limit') }} 29/05/2025</span>
								</div>
							</div>
						</div>
					</template>
				</Card>

				<Card class="mb-3" :style="{ width: '100%', height: '164px' }">
					<template #content>
						<div class="container-card -m-12 flex flex-row justify-content-between align-items-center ">
							<div class="card-texto flex align-items-center flex-row gap-5">
								<div class="img">
									<img class="" :src="fone" alt="Imagem do produto" />
								</div>
								<div class="flex flex-column gap-2 align-content-center">
									<h2>Wireless Noise-Canceling Headphones</h2>
									<span>{{ t('your_purchases.card_value_buy') }} € 324.00</span>
									<span>{{ t('your_purchases.card_date_buy') }} 22/05/2025</span>
									<span>{{ t('your_purchases.card_date_limit') }} 29/05/2025</span>
								</div>
							</div>
							<div class="botao px-4">
								<Message severity="success" :pt="{
									root: {
										style: {
											display: 'inline-flex',
											alignItems: 'center', color: '#FFFFFF', borderRadius: '140px', maxHeight: '22px',
										},

									},
									text: { style: { fontSize: '12px', } },
								}" class="bg-green-500" icon="pi pi-user">
									{{ t('your_purchases.card_status') }}</Message>
							</div>
						</div>
					</template>
				</Card>
			</div>
		</section>

	</main>
</template>

<style scoped>
.container-main {
	background-color: #FAFAFA;
}

.aviso {
	background: #EFF6FF;
	border-radius: 4px;
	margin-bottom: 10px;
	padding: 12px 16px;
	color: #2563EB;
	font-size: 12px;
}

.cards {
	width: 100%;
	max-width: 1000px;
}

.cards h2 {
	font-size: 18px;
	color: #171717;
}

.img {
	width: 176px;
	height: 132px;
	border-radius: 12px;
	background-color: #2D4C48;
	display: flex;
	justify-content: center;
	align-items: center;
}

.img img {
	width: 146px;
	height: 132px;
	object-fit: cover;
}

span {
	font-size: 14px;
	color: #737373;
}
</style>