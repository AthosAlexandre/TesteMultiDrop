<script setup lang="ts">
import Dialog from 'primevue/dialog'
import ButtonComponent from '../../../components/button-component/ButtonComponent.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n();

const visible = defineModel<boolean>('visible', { default: false })

const props = defineProps<{
  title?: string
  message?: string
}>()

// evento opcional para o pai escutar quando fechar
const emit = defineEmits<{ (e: 'close'): void }>()

function close() {
  visible.value = false
  emit('close')
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    :closable="false"
    :dismissable-mask="true"
    :style="{ width: '100%', maxWidth: '480px' }"
    :pt="{ header: { class: 'hidden' }, content: { style: { padding: '12px 24px 20px' } } }"
  >
    <div class="flex flex-column align-items-center justify-content-center p-2 gap-3">
      <i class="pi pi-check-circle" style="font-size: 4rem; color: #41B871;"></i>
      <h2 style="font-size: 23px; font-weight: 700; text-align: center; color: #171717;">
        {{ props.title || t('refund-form-dialog.title') }}
      </h2>
      <p style="font-size: 14px; text-align: center; color: #171717;">
        {{ props.message || t('refund-form-dialog.message')  }}
      </p>

      <div class="botao-fechar">
        <ButtonComponent
          icon="pi pi-times"
          :label="t('refund-form-dialog.button')"
          text-color="#404040"
          bg-color="#FFFFFF"
          :max-width="150"
          :font-size="13"
          type="button"
          @click="close"
        />
      </div>
    </div>
  </Dialog>
</template>
