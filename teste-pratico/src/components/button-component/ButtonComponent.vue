<script setup lang="ts">
import Button from 'primevue/button'
import { computed, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  label?: string
  icon?: string | null
  iconRight?: boolean
  type?: 'button' | 'submit' | 'reset'
	maxWidth?: string | number
	marginTop?: string | number
	marginBottom?: string | number
}>(), {
  label: '',
  icon: null,
  iconRight: false,
  type: 'button',
	maxWidth: '200px',
	marginTop: undefined,
  marginBottom: undefined
})

const styleBind = computed(() => {
  const toCss = (v: string | number | undefined) =>
    v == null ? undefined : (typeof v === 'number' ? `${v}px` : v)

  const s: Record<string, string | undefined> = {
    maxWidth: toCss(props.maxWidth),
    marginTop: toCss(props.marginTop),
    marginBottom: toCss(props.marginBottom)
  }
  return s
})

// Emite o clique (cada tela trata seu handler)
const emit = defineEmits<{
  (e: 'click', ev: MouseEvent): void
}>()
</script>

<template>
  <Button
		class="buttton"
    v-bind="$attrs"                       
    :label="label"
    :icon="icon || undefined"
    :iconPos="iconRight ? 'right' : 'left'"
    :type="type"
		:style="styleBind" 
    @click="(e) => emit('click', e)"
  >
  </Button>
</template>

<style scoped>
	.buttton{
	width: 100%;
	max-width: 390px;
	height: 42px;
	background-color: #367C50;
	color: #FFFFFF;
}

.buttton:hover{
	background-color: #2E6B42;
	color: #FFFFFF;
}
</style>