<script setup lang="ts">
import Dialog from 'primevue/dialog'
import { useRouter } from 'vue-router'
import InputOtp from 'primevue/inputotp';
import { useI18n } from 'vue-i18n'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import ButtonComponent from '../../../components/button-component/ButtonComponent.vue';

const router = useRouter()   
const value = ref('');
const { t } = useI18n();

const visible = defineModel<boolean>('visible', { default: false })

const props = defineProps<{
  email?: string
}>()

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

function close() {
  visible.value = false
}

function navegate() {

  if (value.value.length !== 6) return

  close()
  emit('confirm')
  router.push({ name: 'your-purchases' });
}

const mql = window.matchMedia('(max-width: 640px)');
const isMobile = ref(mql.matches);
const position = computed(() => (isMobile.value ? 'top' : 'center'));

function handleMq(e: MediaQueryListEvent) { isMobile.value = e.matches }
onMounted(() => mql.addEventListener('change', handleMq));
onBeforeUnmount(() => mql.removeEventListener('change', handleMq));

const rootStyle = computed(() => (isMobile.value ? { marginTop: '68px' } : {}));

</script>

<template>
  <Dialog v-model:visible="visible" :position="position" modal :draggable="false" :dismissableMask="true"
    :style="{ width: 'min(480px, calc(100vw - 32px))' }" header=" "
    :pt="{
    header:  { class: 'py-1 px-3' },
    content: { class: 'pt-2 pb-4 px-3'},
    root:    { style: rootStyle }  
  }"
    >
    <div class="container-verify-email flex flex-column align-content-betweenr gap-4">
      <div class="container-texto">
        <h2>{{ t('refund_dialog.title') }}</h2>
        <p class="texto-principal"> {{ t('refund_dialog.text') }}<strong>{{ props.email }}</strong></p>
        <p>{{ t('refund_dialog.resend_code') }}</p>
      </div>

      <div class="container-input flex justify-content-center">
        <div class="card flex justify-center">
          <InputOtp v-model="value" :length="6" class="otp-lg" />
        </div>
      </div>

      <div class="container-botao flex justify-content-center">
        <ButtonComponent
          :label="t('refund_dialog.button')"
          icon="pi pi-arrow-right"
          iconRight="true"
          :max-width="218"
          @click="navegate"
          type="button"
        />
      </div>
    </div>
  </Dialog>
</template>

<style scoped>

h2 {
  text-align: center;
  font-size: 23px;
  color: #171717;
}
p{
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}

.texto-principal{
  color: #171717;
}

.otp-lg {
  display: flex;
  gap: 10px;
}

.otp-lg:deep(.p-inputotp-input) {
  width: 48px;
  height: 48px;
  font-size: 20px;
  text-align: center;
  border: 1px solid #737373;
}

</style>
