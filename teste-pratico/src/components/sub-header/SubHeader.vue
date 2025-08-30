<script setup lang="ts">
import { withDefaults } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useRefundRequest } from './../../stores/request-refund'

const props = withDefaults(defineProps<{
  title: string
  onBack?: (ev: MouseEvent) => void
}>(), {})

const { t } = useI18n();

const refund = useRefundRequest();
const { email } = storeToRefs(refund);
</script>

<template>
	<section class="cabecalho">
		<div class="voltar" @click="props.onBack && props.onBack($event)">
			<i class="pi pi-arrow-left mr-2" aria-hidden="true"></i>
			<span>{{ t('your_purchases.button_back') }}</span>
		</div>

		<div class="container-texto-cabecalho flex flex-row justify-content-between align-items-center">
			<div class="titulo">
				<h2>{{ title }}</h2>
			</div>

			<div class="login">
				<p>{{ t('your_purchases.logged_in') }} {{ email }}. {{ t('your_purchases.log_out') }} <b>{{
					t('your_purchases.log_out_button') }}</b></p>
			</div>
		</div>
	</section>
</template>

<style scoped>

.cabecalho {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	max-width: 1000px;
	height: 114px;
	margin-top: 20px;
}

b {
	color: #171717;
}

.voltar {
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 1rem;
	margin-bottom: 1rem;
}

.voltar:hover span {
	text-decoration: underline;
}

.container-texto-cabecalho h2 {
	font-size: 28px;
}

.login p {
	font-size: 12px;
	color: #737373;
}

</style>