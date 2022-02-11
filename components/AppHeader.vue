<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure
    as="nav"
    class="bg-white shadow-[0_1px_0_#E7E7E7] relative bg-whit z-10"
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
              class="inline-flex items-center justify-center p-2 rounded-md text-black"
            >
              <span class="sr-only">Open main menu</span>
              <img src="/images/icons/close.svg" class="block h-6 w-6" alt="" />
            </DisclosureButton>
          </div>
          <div
            v-else
            class="absolute inset-y-0 right-0 flex items-center md:hidden"
          >
            <!-- Mobile menu button-->
            <DisclosureButton
              @click="closeMenu"
              class="inline-flex items-center justify-center p-2 rounded-md text-black"
            >
              <span class="sr-only">Open main menu</span>
              <XIcon class="block h-6 w-6" aria-hidden="true" />
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
              src="/images/logo.svg"
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
                    <span :class="isActive ? 'text-[#37C0BA]' : ''">{{
                      l("solution")
                    }}</span>
                  </router-link>
                  <ChevronUpIcon
                    :class="open ? 'transform rotate-180' : ''"
                    class="ml-1 w-4 h-4 text-[#A5B3C1]"
                  />
                  <DisclosurePanel
                    class="origin-top-right absolute left-[-2rem] top-8 mt-2 w-36 rounded-md bg-white shadow-lg py-1 flex flex-col"
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
                <img src="/images/icons/global_small.svg" alt="" />
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
                      lang === l.code ? 'text-[#37C0BA]' : '',
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
        class="absolute w-full bg-[#F4F6FA] z-0 h-[100vh]"
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
                  class="absolute w-full bg-white z-0 h-[100vh] top-0"
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
  const { data, error } = await useQuery({
    query: `
    {
      languages {
        name
        code
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
  import {
    BellIcon,
    MenuIcon,
    XIcon,
    GlobeAltIcon,
    ChevronUpIcon,
  } from "@heroicons/vue/outline";

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      BellIcon,
      MenuIcon,
      XIcon,
      GlobeAltIcon,
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
  };
</script>
