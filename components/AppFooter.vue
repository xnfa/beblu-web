<template>
  <footer
    class="bg-white body-font text-normal text-xl md:text-sm px-8 border-t-[#E9E9E9] border-t"
  >
    <div class="container mx-auto">
      <div
        class="py-10 md:py-24 flex items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
      >
        <div class="flex items-start flex-col md:flex-row md:mx-0">
          <img
            class="block h-14 w-auto mr-16 mb-6"
            src="/images/logo.svg"
            alt="Workflow"
          />
          <p class="">
            7 Harvey Road, #10-01, Lebond Singapore 369613<br />Email:
            hello@beblu.com<br />Contact: +65 69803921
          </p>
        </div>
        <div
          class="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 text-left md:justify-end"
        >
          <div class="lg:w-1/4 md:w-1/3 w-1/2">
            <nav class="list-none">
              <li class="mb-4">
                <a class="" href="#">{{ l("our_story") }}</a>
              </li>
              <li class="mb-4">
                <a class="" href="#">{{ l("our_story") }}</a>
              </li>
              <li>
                <a class="" href="#">{{ l("portfolio") }}</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/3 w-1/2">
            <nav class="list-none">
              <li class="mb-4">
                <a class="" href="#">{{ l("community") }}</a>
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
        class="flex flex-col md:flex-row border-t border-[#E9E9E9] items-center md:justify-between -mx-8 px-8"
      >
        <div
          class="md:order-2 flex justify-center items-center mt-8 md:mt-0 flex-1 w-72 md:w-1/3 text-black"
        >
          <app-link class="block mr-10" to="lang-privacy">
            {{ l("privacy") }}
          </app-link>
          <app-link class="block mr-10" to="lang-terms">
            {{ l("terms") }}
          </app-link>
          <a class="block" href="#">{{ l("sitemap") }}</a>
        </div>
        <div
          class="md:order-3 py-4 flex justify-center md:justify-end items-center w-72 md:w-1/3"
        >
          <a class="block md:w-5" href="#">
            <img src="/images/icons/facebook.svg" alt="" />
          </a>
          <a class="block md:w-5 ml-4" href="#">
            <img src="/images/icons/instagram.svg" alt="" />
          </a>
          <a class="block md:w-5 ml-4" href="#">
            <img src="/images/icons/linkedin.svg" alt="" />
          </a>
          <a class="block md:w-5 ml-4" href="#">
            <img src="/images/icons/youtube.svg" alt="" />
          </a>
          <a class="block md:w-5 ml-4" href="#">
            <img src="/images/icons/medium.svg" alt="" />
          </a>
        </div>
        <div class="md:order-1 my-6 w-72 md:w-1/3">
          <p class="text-center md:text-left font-normal md:font-medium">
            Copyright © 2021 Beblu. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  const l = await useLabels();
</script>
