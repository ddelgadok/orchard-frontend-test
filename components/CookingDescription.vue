<template>
  <article>
    <v-row>
      <v-col cols="12" lg="4" order-lg="2">
        <section>
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
        </section>
        <section>
          <v-row no-gutters>
            <v-col cols="12">
              <h2>
                {{ t('$vuetify.custom.cookingDescriptionSubtitle') }}
              </h2>
            </v-col>
            <v-col cols="12">
              <p>
                {{ t('$vuetify.custom.cookingDescriptionSubdescription') }}
              </p>
            </v-col>
          </v-row>
        </section>
      </v-col>
      <v-col cols="12" lg="8" order-lg="1">
        <v-row no-gutters>
          <v-col cols="6">
            <v-img
              src="/images/first-image.png"
            />
          </v-col>
          <v-col cols="6" class="a">
            <div class="b">
              <v-img
                src="/images/second-image.png"
              />
            </div>
            <div class="c">
              <v-img
                src="/images/third-image.png"
              />
            </div>
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

.a {
  background-color: lightcoral;
  display: flex;
  flex-direction: column;
}

.b {
  background-color: lightblue;
  flex: 0.5;
}

.c {
  background-color: lightgreen;
  flex: 0.5;
}
</style>
