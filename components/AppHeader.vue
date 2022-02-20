<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure
    as="nav"
    class="navbar fixed top-0 w-full bg-white shadow-[0_1px_0_#E7E7E7] z-10"
    v-slot="{ open, close }"
  >
    <div class="relative container mx-auto bg-white z-10 px-8 md:px-6 lg:p-0">
      <div class="relative flex items-center justify-between bg-white h-16">
        <transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="transform opacity-0 scale-0"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-300"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-0"
        >
          <div
            v-if="!open"
            class="absolute inset-y-0 right-0 flex items-center md:hidden"
          >
            <!-- Mobile menu button-->
            <DisclosureButton
              @click="openMenu"
              class="inline-flex items-center justify-center rounded-md text-black"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 8C6 7.44772 6.44772 7 7 7H25C25.5523 7 26 7.44772 26 8C26 8.55229 25.5523 9 25 9H7C6.44772 9 6 8.55229 6 8ZM6 16C6 15.4477 6.44772 15 7 15H20C20.5523 15 21 15.4477 21 16C21 16.5523 20.5523 17 20 17H7C6.44772 17 6 16.5523 6 16ZM7 23C6.44772 23 6 23.4477 6 24C6 24.5523 6.44772 25 7 25H20C20.5523 25 21 24.5523 21 24C21 23.4477 20.5523 23 20 23H7Z"
                  fill="#353535"
                />
              </svg>
            </DisclosureButton>
          </div>
          <div
            v-else
            class="absolute inset-y-0 right-0 flex items-center md:hidden"
          >
            <!-- Mobile menu button-->
            <DisclosureButton
              @click="closeMenu"
              class="inline-flex items-center justify-center rounded-md text-black"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="block h-8 w-8"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_163_1198)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.92879 7.51472C8.53827 7.12419 7.9051 7.12419 7.51458 7.51472C7.12405 7.90524 7.12405 8.53841 7.51458 8.92893L14.5856 16L7.51458 23.0711C7.12405 23.4616 7.12405 24.0948 7.51458 24.4853C7.9051 24.8758 8.53827 24.8758 8.92879 24.4853L15.9999 17.4142L23.0709 24.4853C23.4614 24.8758 24.0946 24.8758 24.4851 24.4853C24.8757 24.0948 24.8757 23.4616 24.4851 23.0711L17.4141 16L24.4851 8.92893C24.8757 8.53841 24.8757 7.90524 24.4851 7.51472C24.0946 7.12419 23.4615 7.12419 23.0709 7.51472L15.9999 14.5858L8.92879 7.51472Z"
                    fill="#353535"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_163_1198">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </DisclosureButton>
          </div>
        </transition>
        <div
          class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start"
        >
          <app-link
            to="lang"
            class="inline-block"
            @click="
              close();
              closeMenu();
            "
          >
            <img
              class="block h-7 w-auto"
              :src="config.CDN_BASE + s.settings.logo.filename_disk"
              alt="Workflow"
              @click=""
            />
          </app-link>
          <div
            class="hidden items-center justify-center md:flex md:ml-6 flex-1"
          >
            <div class="md:space-x-6 lg:space-x-8 text-normal">
              <app-link
                to="lang-our-story"
                class="inline-block hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md"
              >
                {{ l("our_story") }}
              </app-link>
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  :class="[
                    open ? 'bg-[#ECFCFE]' : '',
                    'inline-flex relative items-center hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md box-border',
                  ]"
                >
                  <router-link
                    :to="{
                      name: 'lang-solutions',
                      params: { lang },
                    }"
                    custom
                    v-slot="{ isActive }"
                  >
                    <span
                      :class="isActive ? 'text-[#37C0BA] font-semibold' : ''"
                      >{{ l("solution") }}</span
                    >
                  </router-link>
                  <ChevronUpIcon
                    :class="open ? 'transform rotate-180' : ''"
                    class="ml-1 w-4 h-4 text-[#A5B3C1] transition-all"
                  />
                  <transition
                    enter-active-class="transition ease-out duration-300"
                    enter-from-class="transform opacity-0 scale-0"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-300"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-0"
                  >
                    <DisclosurePanel
                      class="absolute left-[-2rem] top-8 mt-2 w-36 rounded-md bg-white shadow-lg py-1 flex flex-col"
                    >
                      <app-link
                        to="lang-solutions-beblu-suite"
                        class="p-2 hover:text-[#37C0BA]"
                      >
                        Beblu Suite
                      </app-link>
                      <app-link
                        to="lang-solutions-smart-sensors"
                        class="p-2 hover:text-[#37C0BA]"
                      >
                        Smart Sensors
                      </app-link>
                    </DisclosurePanel>
                  </transition>
                </DisclosureButton>
              </Disclosure>
              <app-link
                to="lang-portfolio"
                class="inline-block hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md"
              >
                {{ l("portfolio") }}
              </app-link>
              <app-link
                to="lang-community"
                class="inline-block hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md"
              >
                {{ l("community") }}
              </app-link>
              <app-link
                to="lang-contact-us"
                class="inline-block hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md"
              >
                {{ l("contact_us") }}
              </app-link>
            </div>
          </div>
        </div>
        <div class="relative items-center pr-2 hidden md:flex">
          <app-link class="text-normal md:mr-4 lg:mr-6" to="lang-download">
            {{ l("download") }}
          </app-link>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative text-normal z-50">
            <div>
              <MenuButton
                class="bg-[#E4E9ED] flex text-sm rounded-full items-center justify-center px-2 py-1 space-x-1"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3916 6.3H8.3976C8.3544 8.454 7.8576 10.3086 7.1418 11.2794C8.29747 11.0288 9.33902 10.4061 10.1067 9.50661C10.8744 8.60715 11.3257 7.48068 11.3916 6.3ZM11.3916 5.7C11.3257 4.51932 10.8744 3.39285 10.1067 2.49339C9.33902 1.59393 8.29747 0.971157 7.1418 0.7206C7.8582 1.6914 8.3544 3.5466 8.397 5.7H11.3916ZM0.6084 5.7H3.6024C3.6456 3.546 4.1424 1.6914 4.8582 0.7206C3.70253 0.971157 2.66098 1.59393 1.89331 2.49339C1.12565 3.39285 0.674261 4.51932 0.6084 5.7ZM0.6084 6.3C0.674261 7.48068 1.12565 8.60715 1.89331 9.50661C2.66098 10.4061 3.70253 11.0288 4.8582 11.2794C4.1418 10.3086 3.6456 8.4534 3.603 6.3H0.6084ZM7.7964 6.3H4.2036C4.2636 9.1668 5.1846 11.4 6 11.4C6.816 11.4 7.7364 9.1668 7.797 6.3H7.7964ZM7.7964 5.7C7.737 2.8332 6.816 0.6 6 0.6C5.184 0.6 4.2636 2.8332 4.203 5.7H7.797H7.7964ZM6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12Z"
                    fill="#353535"
                  />
                </svg>

                <span>{{ langName }}</span>
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute -left-16 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-for="l in languages">
                  <a
                    :href="'/' + l.code"
                    :class="[
                      lang === l.code ? 'text-[#37C0BA] font-semibold' : '',
                      'block px-4 py-2 text-normal',
                    ]"
                  >
                    {{ l.name }}
                  </a>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="transform -translate-y-full"
      enter-to-class="transform translate-y-0"
      leave-active-class="transition duration-500 ease-out"
      leave-from-class="transform translate-y-0"
      leave-to-class="transform -translate-y-full"
    >
      <DisclosurePanel
        class="absolute w-full bg-[#F4F6FA] z-0 h-[calc(100vh-4rem)]"
        v-slot="{ close }"
      >
        <div class="px-2 pt-8 pb-3 h-full overflow-y-scroll flex flex-col">
          <app-link
            to="lang-our-story"
            class="text-[2rem] font-light text-center p-5 rounded-md leading-none"
            @click="
              close();
              closeMenu();
            "
          >
            {{ l("our_story") }}
          </app-link>
          <app-link
            to="lang-solutions-beblu-suite"
            class="text-[2rem] font-light text-center p-5 rounded-md leading-none"
            @click="
              close();
              closeMenu();
            "
          >
            Beblu Suite
          </app-link>
          <app-link
            to="lang-solutions-smart-sensors"
            class="text-[2rem] font-light text-center p-5 rounded-md leading-none"
            @click="
              close();
              closeMenu();
            "
          >
            Smart Sensors
          </app-link>
          <app-link
            to="lang-portfolio"
            class="text-[2rem] font-light text-center p-5 rounded-md leading-none"
            @click="
              close();
              closeMenu();
            "
          >
            {{ l("portfolio") }}
          </app-link>
          <app-link
            to="lang-community"
            class="text-[2rem] font-light text-center p-5 rounded-md leading-none"
            @click="
              close();
              closeMenu();
            "
          >
            {{ l("community") }}
          </app-link>
          <app-link
            to="lang-contact-us"
            class="text-[2rem] font-light text-center p-5 rounded-md leading-none"
            @click="
              close();
              closeMenu();
            "
          >
            {{ l("contact_us") }}
          </app-link>
          <div class="flex items-center justify-center mt-[4rem]">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="bg-[#E4E9ED] flex text-xl rounded-full items-center justify-center px-4 py-3 space-x-1 leading-none"
              >
                <img src="/images/icons/global_small.svg" alt="" />
                <span>{{ langName }}</span>
              </DisclosureButton>
              <transition
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="transform -translate-y-full"
                enter-to-class="transform translate-y-0"
                leave-active-class="transition duration-500 ease-out"
                leave-from-class="transform translate-y-0"
                leave-to-class="transform -translate-y-full"
              >
                <DisclosurePanel
                  class="absolute w-full bg-white z-0 h-[calc(100vh-4rem)] top-0"
                >
                  <div
                    class="px-2 pt-8 pb-3 h-full overflow-y-scroll flex flex-col"
                  >
                    <h2
                      class="text-[2rem] text-black font-bold text-center p-5 rounded-md leading-none"
                    >
                      Choose a language
                    </h2>
                    <a
                      :href="'/' + l.code"
                      :class="[
                        lang === l.code ? 'text-[#37C0BA]' : '',
                        'text-[2rem] font-light text-center p-5 rounded-md leading-none',
                      ]"
                      v-for="l in languages"
                    >
                      {{ l.name }}
                    </a>
                  </div>
                </DisclosurePanel>
              </transition>
            </Disclosure>
          </div>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { useQuery } from "@urql/vue";
  import { useLabels } from "~~/composables/useLabels";
  const route = useRoute();
  const lang = route.params.lang || "en";
  const config = useRuntimeConfig();
  const { data, error } = await useQuery({
    query: `
    {
      languages(sort: "order") {
        name
        code
      }
    }
  `,
  });
  const { data: s } = await useQuery({
    query: `
    {
      settings {
        facebook
        instagram
        linkedin
        logo {
          filename_disk
        }
        medium
        youtube
      }
    }
  `,
  });
  const l = await useLabels();
  const languages = data.value.languages;
  const langName = data.value.languages.filter((v) => v.code === lang)[0]?.name;
</script>
<script lang="ts">
  import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from "@headlessui/vue/dist/index.esm";
  import { ChevronUpIcon } from "@heroicons/vue/outline";
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      ChevronUpIcon,
    },
    methods: {
      openMenu() {
        document.body.style.overflowY = "hidden";
      },
      closeMenu() {
        document.body.style.overflowY = "scroll";
      },
    },
    mounted() {
      const showAnim = gsap
        .from(".navbar", {
          yPercent: -105,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "+=100px top",
        end: 99999,
        onUpdate: (self) => {
          if (!self.isActive) {
            showAnim.play();
          }
          if (self.direction === -1) {
            if (self.getVelocity() < -1000) {
              showAnim.play();
            }
          } else {
            showAnim.reverse();
          }
        },
      });
    },
  };
</script>
