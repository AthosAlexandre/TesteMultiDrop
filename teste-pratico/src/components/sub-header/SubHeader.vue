<script setup lang="ts">
import { useRouter } from 'vue-router'
import { withDefaults } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../../stores/auth-store'

const { t } = useI18n();

const useAuth = useAuthStore();
const { email } = storeToRefs(useAuth);
const navegar = useRouter();

const props = withDefaults(defineProps<{
	title: string
	onBack?: (ev: MouseEvent) => void
}>(), {});

function logOut(){
	navegar.push({ name: 'request-refund' });
}

</script>

<template>
	<section class="cabecalho flex flex-column justify-content-center p-3">
		<div class="voltar" @click="props.onBack && props.onBack($event)">
			<i style="font-size: 10px;" class="pi pi-arrow-left mr-2" aria-hidden="true"></i>
			<span>{{ t('your_purchases.button_back') }}</span>
		</div>

		<div class="container-texto-cabecalho flex flex-column md:flex-row md:align-items-center md:justify-content-between gap-2 md:gap-">
			<div class="titulo">
				<h2 style="font-size: 28px; font-weight: 700;" >{{ title }}</h2>
			</div>

			<div class="login flex flex-column md:flex-row gap-1">
				<p>{{ t('your_purchases.logged_in') }} {{ email }}.</p>
				<p>{{ t('your_purchases.log_out') }} <b @click="logOut">{{
					t('your_purchases.log_out_button') }}</b></p>
			</div>
		</div>
	</section>
</template>

<style scoped>
.cabecalho {
	width: 100%;
	max-width: 1000px;
	height: 114px;
	margin-top: 20px;
}

b {
	color: #171717;
}

b:hover{
	cursor: pointer;
	text-decoration: underline;
}

.voltar {
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 1rem;
	margin-bottom: 1rem;
}

.voltar span{
	font-size: 14px;
	color: #404040;
}

.voltar:hover span{
	text-decoration: underline;
}

.login p {
	font-size: 14px;
	color: #737373;
}
</style>