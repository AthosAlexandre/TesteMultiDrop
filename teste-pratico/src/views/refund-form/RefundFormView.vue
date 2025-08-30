<script setup lang="ts">
import Card from 'primevue/card';
import SubHeader from '../../components/sub-header/SubHeader.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import ButtonComponent from '../../components/button-component/ButtonComponent.vue';


const navegar = useRouter();

function goBack() {
	navegar.push({ name: 'your-purchases' });
}

const selectedCategory = ref('Production');
const categories = ref([
	{ name: 'Eu ainda não consegui acessar o produto, mas gostaria de acessar', key: '1' },
	{ name: 'Preciso do dinheiro para outras coisas', key: '2' },
	{ name: 'Recebi o acesso, mas as páginas ou arquivos não abrem', key: '3' },
	{ name: 'A qualidade do produto não atingiu as minhas expectativas', key: '4' },
	{ name: 'O produto está incompleto', key: '5' },
	{ name: 'Compra duplicada', key: '6' },
]);

const value = ref('');

function reembolsoSolicitado() {
	console.log('Reembolso solicitado');
	console.log('Motivo:', selectedCategory.value);
	console.log('Comentário adicional:', value.value);
}

</script>

<template>
	<main class="container-refund-form flex flex-column justify-content-between align-items-center" >
		<SubHeader title="Solicitar reembolso" v-on:back="goBack" />

		<section class="container-cards flex flex-column justify-content-between gap-5" style="max-width: 600px; width: 100%; height: 100%;">

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

						<div class="container-card flex flex-column justify-content-between"
							style="width:100%; max-width:600px; height: 100%; min-height: 359px;">

							<div class="campo-produto nome">
								<h3>Nome do produto</h3>
								<span>Wireless Noise-Canceling Headphones</span>
							</div>

							<div class="campo-produto valor">
								<h3>Valor da compra</h3>
								<span>€ 324.00</span>
							</div>

							<div class="campo-produto data-limite">
								<h3>Data Limite para solicitar reembolso</h3>
								<span>29/05/2025</span>
							</div>

							<div class="campo-produto metodo-pagamento">
								<h3>Método de pagamento</h3>
								<span>Mastercard 9915</span>
							</div>

							<div class="campo-produto email">
								<h3>E-mail de suporte do vendedor</h3>
								<span>suporte@multidrop.com</span>
							</div>
						</div>
					</template>
				</Card>
			</div>

			<div class="card-motivo-reembolso">
				<h2 style="font-size: 18px; ">Motivo do reembolso</h2>

				<Card :pt="{
					root: {
						style: {
							width: '100%', padding: '1rem', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px',
						}
					}
				}">
					<template #content>

						<div class="container-card flex flex-column justify-content-between"
							style="width:100%; max-width:600px; height: 100%; min-height: 359px;">

							<div class="sub-titulo flex flex-column mb-3">
								<h3>Selecione o motivo do reembolso</h3>
								<span class="span-secundario">Obrigatório</span>
							</div>

							<form action="">

								<div class="container-radio flex flex-column justify-content-between" style="height: 258px;">
									<div v-for="category in categories" :key="category.key" class="flex items-center gap-2 "
										style="height: 21px; font-size: 14px; font-weight: 400; align-items: center;">

										<RadioButton :pt="{
											root: {
												style: {
													height: '21px',
												}
											}
										}" v-model="selectedCategory" :inputId="category.key" name="dynamic"
											:value="category.name" />
										<label style="color: #171717; font-size: 14px;" :for="category.key">{{ category.name }}</label>

									</div>
								</div>

								<div class="container-textarea flex flex-column mt-4">
									<h3>Você gostaria de informar mais algo?</h3>
									<Textarea :pt="{
										root: {
											style: {
												width: '100%',
												maxWidth: '536px',
												height: '64px',
											}
										}
									}" v-model="value" rows="5" cols="30" style="resize: none" />
									<span class="span-secundario">Opcional</span>
								</div>

							</form>

						</div>

					</template>
				</Card>
			</div>

			<div class="button flex justify-content-center mb-5">
				<ButtonComponent :label="'Solicitar Reembolso'" text-color="#FFFFFF" bg-color="#367C50"
					:max-width="192" :font-size="15.75" type="button" @click="reembolsoSolicitado" />
			</div>

		</section>
	</main>
</template>

<style scoped>
.container-refund-form {
	background-color: #FAFAFA;
}

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
	color: #171717;
}

.span-secundario {
	font-size: 12px;
	color: #737373;
}
</style>