<script setup lang="ts">
import Image from 'primevue/image';
import ButtonComponent from '../../components/button-component/ButtonComponent.vue';
import Card from 'primevue/card';
import fone from '@/assets/fone-transparente.avif';
/* import fone from '@/assets/fone.png'; */
</script>

<template>
	<main class="container-main flex flex-column align-items-center">
		<section class="cabecalho">
			<div class="voltar" @click="goBack">
				<i class="pi pi-arrow-left mr-2" aria-hidden="true"></i>
				<span>Voltar</span>
			</div>

			<div class="container-texto-cabecalho flex flex-row justify-content-between align-items-center">
				<div class="titulo">
					<h2>Suas Compras</h2>
				</div>

				<div class="login">
					<p>Você está logado(a) como: john@liberttar.com. Não é você? Log out</p>
				</div>
			</div>
		</section>

		<section class="aviso">
			<div class="flex flex-row align-items-center gap-2">
				<i class="pi pi-info-circle"></i>
				<p>Ao solicitar um reembolso, a sua compra será cancelada e você não terá mais acesso ao produto.</p>
			</div>
		</section>

		<section class="cards">
			<div class="container-cards">
				<Card class="mb-3" :style="{ width: '100%', height: '164px' }">
					<template #content>
						<div class="container-card -m-12 flex flex-row justify-content-between align-items-center " >
							<div class="card-texto flex align-items-center flex-row gap-5">
								<div class="img">
									<img class="" :src="fone" alt="Imagem do produto" />
								</div>
								<div class="flex flex-column gap-2 align-content-center">
									<h2>Wireless Noise-Canceling Headphones</h2>
									<span>Valor da compra: € 324.00</span>
									<span>Data da compra: 22/05/2025</span>
									<span>Data limite para solicitar reembolso: 29/05/2025</span>
								</div>
							</div>
							<div class="botao px-4">
								<ButtonComponent 
									label="Solicitar Reembolso" 
									text-color="#404040" 
									bg-color="#E5E5E5"
									:max-width="150"
									:font-size="13" 
									type="button" />
									
							</div>
						</div>
					</template>
				</Card>

				<Card class="mb-3" :style="{ width: '100%', height: '164px' }">
					<template #content>
						<div class="container-card -m-12 flex flex-row justify-content-between align-items-center " >
							<div class="card-texto flex align-items-center flex-row gap-5">
								<div class="img">
									<img class="" :src="fone" alt="Imagem do produto" />
								</div>
								<div class="flex flex-column gap-2 align-content-center">
									<h2>Wireless Noise-Canceling Headphones</h2>
									<span>Valor da compra: € 324.00</span>
									<span>Data da compra: 22/05/2025</span>
									<span>Data limite para solicitar reembolso: 29/05/2025</span>
								</div>
							</div>
						</div>
					</template>
				</Card>

				<Card class="mb-3" :style="{ width: '100%', height: '164px' }">
					<template #content>
						<div class="container-card -m-12 flex flex-row justify-content-between align-items-center " >
							<div class="card-texto flex align-items-center flex-row gap-5">
								<div class="img">
									<img class="" :src="fone" alt="Imagem do produto" />
								</div>
								<div class="flex flex-column gap-2 align-content-center">
									<h2>Wireless Noise-Canceling Headphones</h2>
									<span>Valor da compra: € 324.00</span>
									<span>Data da compra: 22/05/2025</span>
									<span>Data limite para solicitar reembolso: 29/05/2025</span>
								</div>
							</div>
							<div class="botao px-4">
								<ButtonComponent 
									label="Solicitar Reembolso" 
									text-color="#404040" 
									bg-color="#E5E5E5"
									:max-width="150"
									:font-size="13" 
									type="button" />
									
							</div>
						</div>
					</template>
				</Card>
			</div>
		</section>

	</main>
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

.container-texto-cabecalho h2 {
	font-size: 28px;
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

.login p {
	font-size: 12px;
	color: #737373;
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

.cards h2{
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