<script setup lang="ts">
import Button from 'primevue/button'
import { computed, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  label?: string
  icon?: string | null
  iconRight?: boolean
  type?: 'button' | 'submit' | 'reset'

  width?: string | number
  maxWidth?: string | number
  fullWidthMobile?: boolean
  height?: string | number
  marginTop?: string | number
  marginBottom?: string | number
  borderRadius?: string | number

  bgColor?: string       
  hoverBgColor?: string    
  textColor?: string
  
  fontSize?: string | number
}>(), {
  label: '',
  icon: null,
  iconRight: false,
  type: 'button',

  width: '100%',
  maxWidth: '200px',
  fullWidthMobile: true,
  height: '42px',
  marginTop: undefined,
  marginBottom: undefined,
  borderRadius: '8px',

  bgColor: '#367C50',
  hoverBgColor: '#2E6B42',
  textColor: '#FFFFFF',

  fontSize: '16px' 
})

const toCss = (v?: string | number) =>
  v == null ? undefined : (typeof v === 'number' ? `${v}px` : v)

const styleBind = computed(() => ({
  width: toCss(props.width),
  maxWidth: toCss(props.maxWidth),
  height: toCss(props.height),
  marginTop: toCss(props.marginTop),
  marginBottom: toCss(props.marginBottom),
  borderRadius: toCss(props.borderRadius),

  '--btn-bg': props.bgColor,
  '--btn-bg-hover': props.hoverBgColor,
  '--btn-text': props.textColor,
  '--btn-font-size': toCss(props.fontSize) 
} as Record<string, string | undefined>))

const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>()
</script>

<template>
  <Button
    class="buttton"
    :class="{ 'btn-mobile-full': fullWidthMobile }" 
    v-bind="$attrs"
    :label="label"
    :icon="icon || undefined"
    :iconPos="iconRight ? 'right' : 'left'"
    :type="type"
    :style="styleBind"
    @click="(e) => emit('click', e)"
  />
</template>

<style scoped>
.buttton{
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: var(--btn-bg);
  border-color: var(--btn-bg);
  color: var(--btn-text);
  font-size: var(--btn-font-size);
  transition: background-color .15s ease, border-color .15s ease, color .15s ease;
}
.buttton:deep(.p-button-label),
.buttton:deep(.p-button-icon){
  color: var(--btn-text);
  font-size: var(--btn-font-size);
}

.buttton:hover{
  background: var(--btn-bg-hover);
  border-color: var(--btn-bg-hover);
  color: var(--btn-text);
}

@media (max-width: 640px) {
  .btn-mobile-full {
    width: 100% !important;
    max-width: 100% !important;
  }
}

</style>
