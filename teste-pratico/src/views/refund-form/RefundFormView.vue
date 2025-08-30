<script setup lang="ts">
import Card from 'primevue/card';
import SubHeader from '../../components/sub-header/SubHeader.vue';
import { useRouter } from 'vue-router'
const navegar = useRouter();

function goBack() {
	navegar.push({ name: 'your-purchases' });
}
</script>

<template>
	<main class="container-refund-form flex flex-column align-items-center">
		<SubHeader title="Solicitar reembolso" v-on:back="goBack" />

		<section class="container-cards" style="max-width: 600px; width: 100%;">

			<div class="card-detalhes-produto">
				<h2 style="font-size: 18px; ">Detalhes do produto</h2>

				<Card :pt="{
					root: {
						style: {
							width: '100%', padding: '1rem', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px',
						}
					}
				}">
					<template #content>

						<div class="container-card flex flex-column justify-content-between" style="width:100%; max-width:600px; height: 100%; min-height: 359px;">

							<div class="nome">
								<h3>Nome do produto</h3>
								<span>Wireless Noise-Canceling Headphones</span>
							</div>

							<div class="valor">
								<h3>Valor da compra</h3>
								<span>€ 324.00</span>
							</div>

							<div class="data-limite">
								<h3>Data Limite para solicitar reembolso</h3>
								<span>29/05/2025</span>
							</div>

							<div class="metodo-pagamento">
								<h3>Método de pagamento</h3>
								<span>Mastercard 9915</span>
							</div>
							
							<div class="email">
								<h3>E-mail de suporte do vendedor</h3>
								<span>suporte@multidrop.com</span>
							</div>
						</div>
					</template>
				</Card>
			</div>

			<div class="card-motivo-reembolso">

			</div>

			<div class="button">

			</div>

		</section>
	</main>
</template>

<style scoped>
.container-refund-form {
	background-color: #FAFAFA;
}
</style>