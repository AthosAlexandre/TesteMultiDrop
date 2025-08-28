<script setup lang="ts">
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputOtp from 'primevue/inputotp';
import { useI18n } from 'vue-i18n'
import { ref } from 'vue';
import ButtonComponent from '../../../components/button-component/ButtonComponent.vue';

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
</script>

<template>
  <Dialog class="dialog" v-model:visible="visible" modal :draggable="false" :dismissableMask="true"
    :style="{ width: '28rem' }" header=" "
    :pt="{
    header:  { class: 'py-1 px-3' },
    content: { class: 'pt-2 pb-4 px-3'}
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
          @click="() => { close(); emit('confirm') }"
          type="button"
        />
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
.dialog {
  width: 100%;
  max-width: 480px;
  height: 302px;
}

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
