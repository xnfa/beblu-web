<template>
  <footer
    class="bg-white body-font text-normal text-xl md:text-sm border-t-[#E9E9E9] border-t"
  >
    <div class="container mx-auto px-8 md:px-6 lg:px-0">
      <div
        class="py-10 md:py-24 flex items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
      >
        <div class="flex items-start flex-col md:flex-row md:mx-0">
          <app-link to="lang" class="block h-14 w-auto mr-16 mb-6">
            <img src="/images/logo.svg" alt="Workflow" />
          </app-link>
          <p v-html="l('address')"></p>
        </div>
        <div
          class="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 text-left md:justify-end"
        >
          <div class="lg:w-1/4 md:w-1/3 w-1/2">
            <nav class="list-none">
              <li class="mb-4">
                <app-link to="lang-our-story">{{ l("our_story") }}</app-link>
              </li>
              <li class="mb-4">
                <app-link to="lang-solutions-beblu-suite">{{
                  l("solution")
                }}</app-link>
              </li>
              <li>
                <app-link to="lang-portfolio">{{ l("portfolio") }}</app-link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/3 w-1/2">
            <nav class="list-none">
              <li class="mb-4">
                <app-link to="lang-community">{{ l("community") }}</app-link>
              </li>
              <li class="mb-4">
                <app-link to="lang-careers">{{ l("careers") }}</app-link>
              </li>
              <li class="mb-4">
                <app-link to="lang-contact-us">{{ l("contact_us") }}</app-link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/3 w-1/2">
            <nav class="list-none">
              <li class="mb-4">
                <app-link to="lang-download">{{ l("download") }}</app-link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row border-t border-[#E9E9E9] px-4 md:px-0 items-stretch md:justify-between"
      >
        <div
          class="md:order-2 flex justify-between md:justify-center md:gap-10 items-center mt-8 md:mt-0 flex-1 md:w-auto text-black"
        >
          <app-link class="block" to="lang-privacy">
            {{ l("privacy") }}
          </app-link>
          <app-link class="block" to="lang-terms">
            {{ l("terms") }}
          </app-link>
          <app-link class="block" to="lang-sitemap">
            {{ l("sitemap") }}
          </app-link>
        </div>
        <div
          class="md:order-3 py-4 flex justify-between md:justify-end items-center md:w-1/3 md:gap-4"
        >
          <a class="block md:w-5" href="#">
            <img src="/images/icons/facebook.svg" alt="" />
          </a>
          <a class="block md:w-5" href="#">
            <img src="/images/icons/instagram.svg" alt="" />
          </a>
          <a class="block md:w-5" href="#">
            <img src="/images/icons/linkedin.svg" alt="" />
          </a>
          <a class="block md:w-5" href="#">
            <img src="/images/icons/youtube.svg" alt="" />
          </a>
          <a class="block md:w-5" href="#">
            <img src="/images/icons/medium.svg" alt="" />
          </a>
        </div>
        <div class="md:order-1 my-6 md:w-1/3">
          <p class="text-center md:text-left font-normal md:font-medium">
            {{ l("copy_right") }}
          </p>
        </div>
      </div>
    </div>
    <transition
      appear
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div
        class="flex px-[1.25rem] py-4 flex-col md:flex-row md:items-center justify-center fixed bottom-0 w-full"
        style="background: rgba(0, 0, 0, 0.9)"
        v-if="!cookiesPrivacyAgreed"
      >
        <div
          class="text-white text-xs cookie-privacy-text mb-[0.875rem] md:mb-0 md:mr-8"
        >
          {{ l("cookies_privacy") }}
          <NuxtLink to="/cookie-policy" class="underline">{{
            l("learn_more")
          }}</NuxtLink>
        </div>
        <button
          type="button"
          class="border-white hover:bg-white hover:text-black text-center border rounded-full text-white p-2 text-xs leading-none w-[7.125rem] cookie-privacy-btn"
          @click="agreeCookiesPrivacy"
        >
          {{ l("accept") }}
        </button>
      </div>
    </transition>
  </footer>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  const l = await useLabels();

  const cookiesPrivacyAgreed = ref(true);

  if (process.client) {
    cookiesPrivacyAgreed.value =
      localStorage.getItem("cookiesPrivacyAgreed") === "true";
  }

  function agreeCookiesPrivacy() {
    cookiesPrivacyAgreed.value = true;
    localStorage.setItem("cookiesPrivacyAgreed", "true");
  }
</script>
