<template>
  <app-not-found v-if="p.notFound"></app-not-found>
  <div v-else class="text-normal">
    <div class="mx-auto">
      <div
        class="flex flex-col items-center justify-center bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg py-[3.75rem] md:py-20 px-[1.875rem] md:px-0"
        :style="`background-image: url('${
          config.CDN_BASE + p('cover')?.filename_disk
        }')`"
      >
        <h1
          class="text-white text-center font-black text-[3.375rem] md:text-[4rem]"
        >
          {{ p("title") }}
        </h1>
        <p class="text-xl md:text-base text-white text-center">
          {{ p("content") }}
        </p>
      </div>
    </div>

    <section class="py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col-reverse md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto last:mb-0 mb-20"
        v-for="product in products"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-none mb-6 md:mb-8"
          >
            {{ product.title }}
          </h2>
          <div class="product" v-html="product.description"></div>
          <div class="flex flex-col gap-6 px-8 md:px-0 md:max-w-[14.75rem]">
            <a
              :href="product.spec_url"
              class="block text-center border-black border hover:bg-black hover:text-white rounded-full p-3 text-lg leading-none flex-1 font-bold w-[full]"
              target="_blank"
            >
              {{ l("spec_sheet") }}
            </a>
            <app-link
              to="lang-contact-us"
              class="block text-center border-black border hover:bg-black hover:text-white rounded-full p-3 text-lg leading-none flex-1 font-bold w-[full]"
            >
              {{ l("contact_us") }}
            </app-link>
          </div>
        </div>
        <div class="flex-1 rounded-2xl overflow-hidden">
          <Splide
            :options="{
              rewind: true,
              type: 'slide',
              arrows: false,
              cover: true,
              heightRatio: 1,
            }"
            ref="splide"
          >
            <SplideSlide v-for="image in product.images">
              <img
                :src="config.CDN_BASE + image.directus_files_id?.filename_disk"
                alt="smart sensors"
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import { useQuery } from "@urql/vue";
  import { useTitle } from "~~/composables/useTitle";

  useMeta({
    title: `Smart Sensor | ${useTitle("solution")} | Beblu`,
  });

  const config = useRuntimeConfig();

  const l = await useLabels();
  const p = await usePageLabels("smart_sensor", [
    "title",
    `cover {
        filename_disk
      }`,
    "content",
  ]);
  const route = useRoute();
  const lang = route.params.lang || "en";

  const { data, error } = await useQuery({
    query: `
      {
        product {
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            title
            spec_url
            images {
              directus_files_id {
                filename_disk
              }
            }
            description
          }
        }
      }
    `,
  });
  const products = data.value.product
    .filter((v) => v.translations.length > 0)
    .map((v) => v.translations[0]);
</script>

<script lang="ts">
  import { Splide, SplideSlide } from "@splidejs/vue-splide";
  export default {
    components: { Splide, SplideSlide },
    mounted() {
      for (let i = 0; i < this.$refs.splide?.length; i++) {
        const h = this.$refs.splide[i];
        setTimeout(() => {
          h.splide.emit("resize");
        }, 800);
      }
    },
  };
</script>

<style>
  .product h2 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    line-height: 1;
  }
  .product p {
    font-size: 1.25rem;
    color: #707070;
    margin-bottom: 2rem;
  }
  .product ul {
    margin-bottom: 2.5rem;
  }
  .product ul li {
    font-size: 1.125rem;
    list-style-type: disc;
    margin-left: 2rem;
    color: #707070;
  }
  @media (min-width: 768px) {
    .product p {
      font-size: 1rem;
    }
    .product ul li {
      font-size: 1rem;
      list-style-type: disc;
      margin-left: 1rem;
      color: #707070;
    }
  }
  .splide__pagination__page {
    background: #c4c4c4;
    width: 6px;
    height: 6px;
    border-radius: 6px;
  }
  .splide__pagination__page.is-active {
    background: #37c0ba;
    width: 12px;
    transform: scale(1);
  }
</style>
