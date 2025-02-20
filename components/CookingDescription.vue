<template>
  <article class="mt-12">
    <v-row>
      <v-col cols="12" lg="4" order-lg="2" class="pa-8 main-content-container">
        <section>
          <v-row no-gutters>
            <v-col cols="12" class="title-container">
              <h1>
                {{ t('$vuetify.custom.cookingDescriptionTitle') }}
              </h1>
            </v-col>
            <v-col cols="12" class="my-6">
              <v-divider thickness="1" opacity="1" />
            </v-col>
            <v-col cols="12">
              <p class="cooking-description">
                {{ t('$vuetify.custom.cookingDescription') }}
              </p>
            </v-col>
          </v-row>
        </section>
        <section class="mt-8">
          <v-row no-gutters>
            <v-col cols="12">
              <h3 class="the-perfect-egg-title">
                {{ t('$vuetify.custom.cookingDescriptionSubtitle') }}
              </h3>
            </v-col>
            <v-col cols="12">
              <p class="the-perfect-egg-description">
                {{ t('$vuetify.custom.cookingDescriptionSubdescription') }}
              </p>
            </v-col>
          </v-row>
        </section>
      </v-col>
      <v-col cols="12" lg="8" order-lg="1">
        <v-row no-gutters>
          <v-col cols="12" lg="6">
            <div class="custom-image-container">
              <v-img
                src="/images/first-image.png"
                class="custom-image"
                @click="HandleImageClick('/images/first-image.png')"
              />
            </div>
          </v-col>
          <v-col cols="12" lg="6" class="a">
            <div class="b custom-image-container">
              <v-img
                src="/images/second-image.png"
                class="custom-image"
                @click="HandleImageClick('/images/second-image.png')"
              />
            </div>
            <div class="c custom-image-container">
              <v-img
                src="/images/third-image.png"
                class="custom-image"
                @click="HandleImageClick('/images/third-image.png')"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog v-model="showModal" max-width="600">
      <v-card clas="pa-8">
        <v-img :src="modalImagePath" />
      </v-card>
    </v-dialog>
  </article>
</template>

<script setup lang="ts">
import { useLocale } from 'vuetify';

const { t } = useLocale();

const showModal = ref(false);

const modalImagePath = ref('');

function HandleImageClick(path: string) {
  showModal.value = true;
  modalImagePath.value = path;
}

defineComponent({
  name: 'CookingDescription',
});
</script>

<style scoped>
.main-content-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-transform: uppercase;
}

.cooking-description {
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
}

.the-perfect-egg-title {
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #cf1430;
  text-transform: uppercase;
}

.the-perfect-egg-description {
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
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

.custom-image-container {
  overflow: hidden;
}

.custom-image {
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.custom-image:hover {
  transform: scale(1.1);
}
</style>
