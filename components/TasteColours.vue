<template>
  <article class="article-container">
    <v-row no-gutters>
      <v-col cols="12" class="mb-12">
        <h2>
          {{ t('$vuetify.custom.tasteColoursTitle') }}
        </h2>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" lg="4" class="color-container">
            <div class="custom-image-container">
              <v-img
                src="/images/red-image.png"
                alt="Red"
                class="custom-image"
              />
            </div>
            <h3>
              {{ t('$vuetify.custom.red') }}
            </h3>
            <p>
              {{ t('$vuetify.custom.redDescription') }}
            </p>
          </v-col>
          <v-col cols="12" lg="4" class="color-container">
            <div class="custom-image-container">
              <v-img
                src="/images/green-image.png"
                alt="Green"
                class="custom-image"
              />
            </div>
            <h3>
              {{ t('$vuetify.custom.green') }}
            </h3>
            <p>
              {{ t('$vuetify.custom.greenDescription') }}
            </p>
          </v-col>
          <v-col cols="12" lg="4" class="color-container">
            <div class="custom-image-container">
              <v-img
                src="/images/white-image.png"
                alt="Red"
                class="custom-image"
              />
            </div>
            <h3>
              {{ t('$vuetify.custom.white') }}
            </h3>
            <p>
              {{ t('$vuetify.custom.whiteDescription') }}
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
  name: 'TasteColours',
});
</script>

<style scoped>
.article-container {
  margin-top: 10rem;
}

h2 {
  text-align: center;
  text-transform: uppercase;
}

.color-container {
  text-align: center;
  padding: 1rem;
}

.custom-image-container {
  overflow: hidden;
}

.custom-image {
  transition: all .2s ease-in-out;
}

.custom-image:hover {
  transform: scale(1.1);
}
</style>
