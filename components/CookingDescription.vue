<template>
  <article class="mt-12">
    <v-row>
      <v-col cols="12" lg="4" order-lg="2" class="pa-8 main-content-container">
        <section>
          <v-row no-gutters>
            <v-col cols="12">
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
          <v-col cols="12" lg="6" class="fadeInUp-animation">
            <div class="custom-image-container">
              <v-img
                src="/images/first-image.jpg"
                class="custom-image"
                alt="First image of the perfect egg"
                @click="HandleImageClick('/images/first-image.jpg', 'First image of the perfect egg')"
              />
            </div>
          </v-col>
          <v-col cols="12" lg="6" class="side-images-container">
            <div class="half-height-image custom-image-container fadeInUp-animation">
              <v-img
                src="/images/second-image.jpg"
                class="custom-image"
                alt="Second image of the perfect egg"
                @click="HandleImageClick('/images/second-image.jpg', 'Second image of the perfect egg')"
              />
            </div>
            <div class="half-height-image custom-image-container fadeInUp-animation">
              <v-img
                src="/images/third-image.jpg"
                class="custom-image"
                alt="Third image of the perfect egg"
                @click="HandleImageClick('/images/third-image.jpg', 'Third image of the perfect egg')"
              />
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog v-model="showModal" max-width="600">
      <v-card clas="pa-8">
        <v-img :src="modalImagePath" :alt="modalImageAlt" />
      </v-card>
    </v-dialog>
  </article>
</template>

<script setup lang="ts">
import { useLocale } from 'vuetify';

const { t } = useLocale();

const showModal = ref(false);

const modalImagePath = ref('');

const modalImageAlt = ref('');

function HandleImageClick(path: string, alt: string) {
  showModal.value = true;
  modalImagePath.value = path;
  modalImageAlt.value = alt;
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

h1 {
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 1.5px;
  text-align: left;
  color: #fff;
  animation: fadeIn 8s;
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
  animation: fadeIn 8s;
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

.side-images-container {
  display: flex;
  flex-direction: column;
}

.half-height-image {
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

.fadeInUp-animation {
  animation: 1.5s fadeInUp;
}

@keyframes fadeInUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
