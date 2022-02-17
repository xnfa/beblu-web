<template>
  <div id="form" class="px-8 py-[3.75rem] md:py-[5rem]">
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform opacity-0"
      enter-to-class="transform opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="transform opacity-100"
      leave-to-class="transform opacity-0"
    >
      <div
        class="px-4 md:px-2 py-3 text-xl md:text-base fixed top-24 left-1/2 -translate-x-1/2 rounded text-white"
        style="background-color: rgba(0, 0, 0, 0.8)"
        v-if="toastShow"
      >
        Your information has been submitted
      </div>
    </transition>
    <h2
      class="text-[2.75rem] md:text-[4rem] font-black leading-none text-normal text-center mb-8"
      v-html="l('contact_us_title')"
    ></h2>
    <form class="max-w-[33.75rem] mx-auto" @submit.prevent="submit">
      <input
        required
        type="text"
        name="name"
        v-model.trim="name"
        :placeholder="l('contact_us_name')"
        :class="[
          isSubmitted
            ? 'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            : '',
          'mb-4 leading-none text-xl md:text-base block w-full px-4 py-[0.625rem] md:py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ',
        ]"
      />
      <input
        type="text"
        name="company"
        v-model.trim="company"
        :placeholder="l('contact_us_company')"
        :class="[
          isSubmitted
            ? 'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            : '',
          'mb-4 leading-none text-xl md:text-base block w-full px-4 py-[0.625rem] md:py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ',
        ]"
      />
      <input
        required
        type="email"
        name="email"
        v-model.trim="email"
        :placeholder="l('contact_us_email')"
        :class="[
          isSubmitted
            ? 'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            : '',
          'mb-4 leading-none text-xl md:text-base block w-full px-4 py-[0.625rem] md:py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ',
        ]"
      />
      <input
        type="tel"
        name="phone"
        pattern="[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*"
        v-model.trim="phone"
        :placeholder="l('contact_us_phone')"
        :class="[
          isSubmitted
            ? 'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            : '',
          'mb-4 leading-none text-xl md:text-base block w-full px-4 py-[0.625rem] md:py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ',
        ]"
      />
      <textarea
        required
        minlength="1"
        maxlength="10000"
        name="content"
        id=""
        cols="30"
        rows="5"
        v-model.trim="content"
        :placeholder="l('contact_us_message')"
        :class="[
          isSubmitted
            ? 'invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
            : '',
          'mb-4 leading-none text-xl md:text-base block w-full px-4 py-[0.625rem] md:py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none ',
        ]"
      ></textarea>
      <p class="text-[#37C0BA] text-xs">
        {{ l("contact_us_required") }}
      </p>
      <div class="text-center pt-5">
        <button
          type="submit"
          class="border-black border hover:bg-black hover:text-white rounded-full p-3 text-lg leading-none flex-1 font-bold w-[10.75rem]"
          @click="isSubmitted = true"
        >
          {{ l("contact_us_submit") }}
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import { useLabels } from "~~/composables/useLabels";
  const l = await useLabels();
  const config = useRuntimeConfig();
</script>

<script lang="ts">
  import axios from "axios";
  export default {
    data() {
      return {
        name: "",
        company: "",
        email: "",
        phone: "",
        content: "",
        toastShow: false,
        isSubmitted: false,
      };
    },
    methods: {
      async submit() {
        await axios.post(`${this.config.API_BASE}/items/message`, {
          name: this.name,
          company: this.company,
          email: this.email,
          phone: this.phone,
          content: this.content,
        });
        this.toastShow = true;
        setTimeout(() => {
          this.toastShow = false;
        }, 5000);
      },
    },
  };
</script>
