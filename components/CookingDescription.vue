<template>
  <article>
    <v-row>
      <v-col cols="12" lg="8"></v-col>
      <v-col cols="12" lg="4">
        <v-row no-gutters>
          <v-col cols="12" class="title-container">
            <h1>
              {{ t('$vuetify.custom.cookingDescriptionTitle') }}
            </h1>
          </v-col>
          <v-col cols="12">
            <v-divider />
          </v-col>
          <v-col cols="12">
            <p>
              {{ t('$vuetify.custom.cookingDescription') }}
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </article>
</template>

<script setup lang="ts">
import { useLocale } from 'vuetify';

const { t } = useLocale();

defineComponent({
  name: 'CookingDescription',
});
</script>

<style scoped>
.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-transform: uppercase;
}
</style>
