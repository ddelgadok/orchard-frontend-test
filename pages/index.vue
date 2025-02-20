<template>
  <div>
    <CookingDescription />
    <TasteColours />
  </div>
</template>

<script setup lang="ts">
import CookingDescription from '@/components/CookingDescription.vue';
import TasteColours from '@/components/TasteColours.vue';

defineComponent({
  name: 'HomePage',
})
</script>
