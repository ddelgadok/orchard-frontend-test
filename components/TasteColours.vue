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
          <v-col
            cols="12"
            lg="4"
            class="color-container"
          >
            <div class="custom-image-container mb-4">
              <v-img
                src="/images/red-image.jpg"
                alt="Red"
                class="custom-image"
                @click="HandleImageClick('/images/red-image.jpg')"
              />
            </div>
            <a @click="HandleItemClick($event, 'red')">
              <h3 class="item-title">
                {{ t('$vuetify.custom.red') }}
              </h3>
              <p class="item-description">
                {{ t('$vuetify.custom.redDescription') }}
              </p>
            </a>
          </v-col>
          <v-col
            cols="12" lg="4"
            class="color-container"
          >
            <div class="custom-image-container mb-4">
              <v-img
                src="/images/green-image.jpg"
                alt="Green"
                class="custom-image"
                @click="HandleImageClick('/images/green-image.jpg')"
              />
            </div>
            <a @click="HandleItemClick($event, 'green')">
              <h3 class="item-title">
                {{ t('$vuetify.custom.green') }}
              </h3>
              <p class="item-description">
                {{ t('$vuetify.custom.greenDescription') }}
              </p>
            </a>       
          </v-col>
          <v-col
            cols="12"
            lg="4"
            class="color-container"
          >
            <div class="custom-image-container">
              <v-img
                src="/images/white-image.jpg"
                alt="White"
                class="custom-image mb-4"
                @click="HandleImageClick('/images/white-image.jpg')"
              />
            </div>
            <a @click="HandleItemClick($event, 'white')">
              <h3 class="item-title">
                {{ t('$vuetify.custom.white') }}
              </h3>
              <p class="item-description">
                {{ t('$vuetify.custom.whiteDescription') }}
              </p>
            </a>
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

function HandleItemClick(e: Event, target: string) {
  console.log(`${target} element has been clicked with the following event: `, e);
}

function HandleImageClick(path: string) {
  showModal.value = true;
  modalImagePath.value = path;
}

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
  cursor: pointer;
}

a {
  cursor: pointer;
}

.item-description {
  font-size: 21px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}

.item-title {
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
}
</style>
