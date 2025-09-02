<script setup lang="ts">
import { useRouter } from 'vue-router'
import Card from 'primevue/card';
import { Message } from 'primevue';
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from '@/stores/auth-store'
import fone from '@/assets/fone-transparente.avif';
import SubHeader from '@/components/sub-header/SubHeader.vue';
import ButtonComponent from '@/components/button-component/ButtonComponent.vue';

const { t } = useI18n();

const useAuth = useAuthStore();
const { email } = storeToRefs(useAuth);
const navegar = useRouter();

function goBack() {
	navegar.push({ name: 'request-refund' });
}

function navigate() {
	navegar.push({ name: 'refund-form' });
}

const compras = [
	{
		'id': 1,
		'img_produto': fone,
		'valor_compra': '€ 324.00',
		'data_compra': '22/05/2025',
		'data_limite_reebolso': '29/05/2025',
		'estado': ''
	},
	{
		'id': 2,
		'img_produto': fone,
		'valor_compra': '€ 324.00',
		'data_compra': '22/05/2025',
		'data_limite_reebolso': '29/05/2025',
		'estado': 'aguardando'
	},
	{
		'id': 3,
		'img_produto': fone,
		'valor_compra': '€ 324.00',
		'data_compra': '22/05/2025',
		'data_limite_reebolso': '29/05/2025',
		'estado': 'realizado'
	}
];

const messagePt = {
  root: {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      color: '#FFFFFF',
      borderRadius: '140px',
      maxHeight: '22px',
      maxWidth: '135px',
      padding: '2px 8px'
    }
  },
  wrapper: {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px', 
      lineHeight: 1
    }
  },
  icon: {
    style: {
      fontSize: '14px',
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'center'
    }
  },
  text: {
    style: {
      fontSize: '12px',
      lineHeight: 1,
      display: 'inline-flex',
      alignItems: 'center'
    }
  }
}


</script>

<template>
	<main class="container-main flex flex-column align-items-center">

		<SubHeader :title="t('your_purchases.title')" v-on:back="goBack" />

		<section class="aviso mt-3 md:mt-0">
			<div class="flex flex-row align-items-center gap-2">
				<i class="pi pi-info-circle"></i>
				<p>{{ t('your_purchases.alert') }}</p>
			</div>
		</section>

		<section class="cards p-4 md:p-0">
			<div class="container-cards">
				<Card v-for="compra in compras" :key="compra.id" class="mb-3" :pt="{ root: { class: 'card-minh' } }">
					<template #content>
						<div class="container-card flex flex-column md:flex-row justify-content-between align-items-center">
							<div style="width: 100%; max-width: 562px;"
								class="card-texto flex align-items-center flex-column md:flex-row gap-5">
								<div class="img">
									<img :src="compra.img_produto" :alt="`Produto ${compra.id}`" />
								</div>

								<div class="flex flex-column gap-2 align-content-center">
									<h2>Wireless Noise-Canceling Headphones</h2>
									<span>{{ t('your_purchases.card_value_buy') }} {{ compra.valor_compra }}</span>
									<span>{{ t('your_purchases.card_date_buy') }} {{ compra.data_compra }}</span>
									<span>{{ t('your_purchases.card_date_limit') }} {{ compra.data_limite_reebolso }}</span>
								</div>
							</div>

							<div class="mt-3 md:mt-0 w-full md:w-auto">
								
								<ButtonComponent v-if="!compra.estado" @click="navigate" :label="t('your_purchases.card_button')"
									text-color="#404040" bg-color="#E5E5E5" hover-bg-color="#D1CFCF" :max-width="150"
									:full-width-mobile="true" :font-size="13" type="button" />

								<Message v-else-if="compra.estado === 'aguardando'" severity="info" :pt="messagePt" class="bg-blue-500"
									icon="pi pi-clock">
									{{ t('your_purchases.status_waiting') }}
								</Message>

								<Message v-else-if="compra.estado === 'realizado'" severity="success" :pt="messagePt"
									class="bg-green-500" icon="pi pi-user">
									{{ t('your_purchases.card_status') }}
								</Message>
								
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
	width: 100%;
	max-width: 598px;
	background: #EFF6FF;
	border-radius: 4px;
	margin-bottom: 10px;
	padding: 12px 10px;
	color: #2563EB;
	font-size: 12px;
}

.cards {
	width: 100%;
	max-width: 1000px;
}

.cards h2 {
	font-size: 18px;
	font-weight: 700;
	color: #171717;
}

.img {
	width: 100%;
	max-width: 176px;
	height: 100%;
	min-height: 132px;
	border-radius: 12px;
	background-color: #2D4C48;
	display: flex;
	justify-content: center;
	align-items: center;
}

.img img {
	width: 100%;
	max-width: 146px;
	height: 100%;
	min-height: 132px;
	object-fit: cover;
}

span {
	font-size: 14px;
	font-weight: 600;
	color: #737373;
}

.card-minh {
	width: 100%;
	min-height: 164px;
}

@media (max-width: 640px) {
	.card-minh {
		min-height: 488px;
	}

	.img {
		width: 100%;
		max-width: 296px;
		min-height: 222px;
	}

	.img img {
		max-width: 180px;
		min-height: 222px;
	}

}
</style>