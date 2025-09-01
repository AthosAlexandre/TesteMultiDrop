<!-- src/components/Header/HeaderComponent.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Select from 'primevue/select'
import { useLangSwitcher } from '@/components/language-switch/LanguageSwitch'

type Locale = 'pt-BR' | 'en' | 'de'

const route = useRoute()
const { setLang } = useLangSwitcher()
const { locale } = useI18n()

const options = [
  { label: 'Português (Brasil)', value: 'pt-BR', flag: '🇧🇷' },
  { label: 'English',            value: 'en',    flag: '🇺🇸' },
  { label: 'Deutsch',            value: 'de',    flag: '🇩🇪' },
] as const

const selected = ref<Locale>((route.params.lang as Locale) || (locale.value as Locale))

watch(() => route.params.lang, (l) => {
  if (l) selected.value = l as Locale
})

watch(selected, (val) => {
  if (val) setLang(val, true)
})
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo-multidrop.avif" alt="MultiDrop" />
    </div>

    <div class="lang-switch">
      <Select
        v-model="selected"
        :options="options"
        optionLabel="label"
        optionValue="value"
        class="lang-select"
        :pt="{ root: { style: { width:'56px' } } }"
      >

        <template #value="{ value, placeholder }">
          <span v-if="value" class="flag">{{ options.find(o => o.value === value)?.flag }}</span>
          <span v-else>{{ placeholder }}</span>
        </template>
>
        <template #option="{ option }">
          <div class="opt">
            <span class="flag">{{ option.flag }}</span>
          </div>
        </template>
      </Select>
    </div>
  </header>
</template>

<style scoped>
.header{
  position: fixed;
  inset: 0 0 auto 0;
  height: 65px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #E5E8EB;
  display: flex;
  justify-content: center; 
  align-items: center;
  z-index: 1000;
}
.logo img{
  width: 89px;
  height: 32px;
}

.lang-switch{
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}

:deep(.lang-select .p-select-label){
  justify-content: center;
}
.flag{ font-size: 18px; line-height: 1; }
.opt{ display: flex; align-items: center; gap: .5rem; }
</style>
