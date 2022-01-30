<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Disclosure as="nav" class="bg-white shadow-[0_1px_0_#E7E7E7] relative bg-whit z-10" v-slot="{ open, close }">
    <div class="relative container mx-auto px-6 lg:px-8 bg-white z-10">
      <div class="relative flex items-center justify-between bg-white h-16">
        <transition
          enter-active-class="transition ease-out duration-300"
          enter-from-class="transform opacity-0 scale-0"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-300"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-0"
        >
          <div v-if="!open" class="absolute inset-y-0 right-0 flex items-center md:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton @click="openMenu" class="inline-flex items-center justify-center p-2 rounded-md text-black">
              <span class="sr-only">Open main menu</span>
              <img src="/images/icons/close.svg" class="block h-6 w-6" alt="">
            </DisclosureButton>
          </div>
          <div v-else class="absolute inset-y-0 right-0 flex items-center md:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton @click="closeMenu" class="inline-flex items-center justify-center p-2 rounded-md text-black">
              <span class="sr-only">Open main menu</span>
              <XIcon class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </transition>
        <div class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
          <NuxtLink to="/" class="inline-block" @click="close(); closeMenu()">
            <img class="block h-7 w-auto" src="/images/logo.svg" alt="Workflow" @click=""/>
          </NuxtLink>
          <div class="hidden items-center justify-center md:flex md:ml-6 flex-1">
            <div class="space-x-8 text-normal">
              <NuxtLink to="/download" class="inline-block hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md">
                Our Story
              </NuxtLink>
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="inline-flex relative items-center hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md box-border"
                >
                  <span>Solutions</span>
                  <ChevronUpIcon
                    :class="open ? 'transform rotate-180' : ''"
                    class="ml-1 w-4 h-4 text-[#A5B3C1]"
                  />
                  <DisclosurePanel class="origin-top-right absolute left-[-2rem] top-8 mt-2 w-36 rounded-md bg-white shadow-lg py-1 flex flex-col">
                    <NuxtLink to="/download" class="p-2 hover:text-[#37C0BA]">
                      Product 1
                    </NuxtLink>
                    <NuxtLink to="/download" class="p-2 hover:text-[#37C0BA]">
                      Product 1
                    </NuxtLink>
                  </DisclosurePanel>
                </DisclosureButton>
              </Disclosure>
              <NuxtLink to="/download" class="inline-block hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md">
                Portfolio
              </NuxtLink>
              <NuxtLink to="/download" class="inline-block hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md">
                Community
              </NuxtLink>
              <NuxtLink to="/download" class="inline-block hover:bg-[#ECFCFE] h-8 px-2 py-1 rounded-md">
                Contact us
              </NuxtLink>
              <!-- <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-normal" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a> -->
            </div>
          </div>
        </div>
        <!-- <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> -->
        <div class="relative items-center pr-2 hidden md:flex">
          <NuxtLink class="text-normal" to="/download">
            Download
          </NuxtLink>

          <!-- Profile dropdown -->
          <Menu as="div" class="ml-3 relative text-normal z-50">
            <div>
              <MenuButton class="bg-[#E4E9ED] flex text-sm rounded-full items-center justify-center px-2 space-x-1">
                <img src="/images/icons/global.svg" alt="">
                <span>English</span>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute -left-16 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }" v-for="name in languages">
                  <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-normal']">{{name}}</a>
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
      <DisclosurePanel class="absolute w-full bg-[#F4F6FA] z-0 h-[100vh]" v-slot="{ close }">
        <div class="px-2 pt-[5.375rem] pb-3 flex flex-col">
          <!-- <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton> -->
          <NuxtLink to="/download" class="text-[2rem] font-light text-center p-5 rounded-md leading-none" @click="close(); closeMenu()">
            Our Story
          </NuxtLink>
          <NuxtLink to="/download" class="text-[2rem] font-light text-center p-5 rounded-md leading-none" @click="close(); closeMenu()">
            Beblu Suite
          </NuxtLink>
          <NuxtLink to="/download" class="text-[2rem] font-light text-center p-5 rounded-md leading-none" @click="close(); closeMenu()">
            Smart Sensors
          </NuxtLink>
          <NuxtLink to="/download" class="text-[2rem] font-light text-center p-5 rounded-md leading-none" @click="close(); closeMenu()">
            Portfolio
          </NuxtLink>
          <NuxtLink to="/download" class="text-[2rem] font-light text-center p-5 rounded-md leading-none" @click="close(); closeMenu()">
            Community
          </NuxtLink>
          <NuxtLink to="/download" class="text-[2rem] font-light text-center p-5 rounded-md leading-none" @click="close(); closeMenu()">
            Contact us
          </NuxtLink>
          <div class="flex items-center justify-center mt-[4rem]">
            <button class="bg-[#E4E9ED] flex text-xl rounded-full items-center justify-center p-2 space-x-1 leading-none">
              <img src="/images/icons/global.svg" alt="">
              <span>English</span>
            </button>
          </div>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon, GlobeAltIcon, ChevronUpIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Our Story', href: '#', current: true },
  { name: 'Solutions', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Community', href: '#', current: false },
  { name: 'Contact us', href: '#', current: false },
]

const languages = [
  'English',
  'Chinese',
  'Malay',
  'Indonesia'
]

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
  setup() {
    return {
      navigation,
      languages,
    }
  },
  methods: {
    openMenu() {
      document.body.style.overflowY = 'hidden';
    },
    closeMenu() {
      document.body.style.overflowY = 'scroll';
    }
  }
}
</script>