<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import Dialog from 'primevue/dialog'
import InputOtp from 'primevue/inputotp';
import { useI18n } from 'vue-i18n'
import ButtonComponent from '@/components/button-component/ButtonComponent.vue';

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

const mql = window.matchMedia('(max-width: 640px)');
const isMobile = ref(mql.matches);
const position = computed(() => (isMobile.value ? 'top' : 'center'));

function handleMq(e: MediaQueryListEvent) { isMobile.value = e.matches }
onMounted(() => mql.addEventListener('change', handleMq));
onBeforeUnmount(() => mql.removeEventListener('change', handleMq));

const rootStyle = computed(() => (isMobile.value ? { marginTop: '68px' } : {}));

const otpTouched = ref(false);
const isOtpComplete = computed(() => value.value.trim().length === 6);
const otpErrorText = computed(() =>
  !otpTouched.value || isOtpComplete.value ? '' : (t('refund_dialog.otp_required'))
);

const otpEl = ref<InstanceType<typeof InputOtp> | null>(null);

function focusFirstEmptyOtp() {

  const root = (otpEl.value as any)?.$el as HTMLElement | undefined;
  if (!root) return;
  const inputs = Array.from(root.querySelectorAll('input.p-inputotp-input')) as HTMLInputElement[];
  const firstEmpty = inputs.find(i => !i.value);
  (firstEmpty ?? inputs[0])?.focus();
}

function navegate() {
  otpTouched.value = true;
  if (!isOtpComplete.value) {
    focusFirstEmptyOtp();
    return;
  }
  close();
  emit('confirm');
  router.push({ name: 'your-purchases' });
}

</script>

<template>
  <Dialog v-model:visible="visible" :blockScroll="false" :position="position" modal :draggable="false" :dismissableMask="true"
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
        <p style="color: #737373; font-size: 14px;">{{ t('refund_dialog.resend_code') }}</p>
      </div>

      <div class="container-input flex justify-content-center">
        <div class="card flex flex-column justify-center">
          <InputOtp
            ref="otpEl"
            v-model="value"
            :length="6"
            class="otp-lg"
            :inputProps="{
              'aria-invalid': otpTouched && !isOtpComplete,
              'aria-describedby': otpTouched && !isOtpComplete ? 'otp-error' : undefined
            }"
          />
          <small v-if="otpErrorText" id="otp-error" class="p-error otp-error-msg">{{ otpErrorText }}</small>
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
  font-weight: 700;
  color: #171717;
}
p{
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
}

.texto-principal{
  color: #171717;
  font-size: 14px;
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

.otp-error-msg { margin-top: 8px; color:#DC2626; font-size:12px; text-align:center; }
.otp-lg:deep(.p-inputotp-input[aria-invalid="true"]) {
  border-color:#DC2626 !important;
  box-shadow: 0 0 0 1px rgba(220,38,38,0.08);
}

@media (max-width: 640px) {
  .otp-lg {
  gap: 9px;
}

.otp-lg:deep(.p-inputotp-input) {
  width: 40px;
  height: 40px;
}
}

</style>
