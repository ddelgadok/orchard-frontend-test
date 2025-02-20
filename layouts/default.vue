<template>
  <div>
    <v-app>
      <v-container>
        <v-main>
          <slot />
        </v-main>
      </v-container>
    </v-app>
  </div>
</template>

<script setup lang="ts">
defineComponent({
  name: 'DefaultLayout',
})
</script>
