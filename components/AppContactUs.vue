<template>
  <div id="form" class="px-8">
    <h2
      class="text-[3rem] md:text-[4rem] font-black leading-none text-normal text-center mb-8"
    >
      {{ l("contact_us_title") }}
    </h2>
    <div class="max-w-[33.75rem] mx-auto">
      <input
        type="text"
        name="name"
        :placeholder="l('contact_us_name')"
        class="mb-4 block w-full px-4 py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        type="text"
        name="company"
        :placeholder="l('contact_us_company')"
        class="mb-4 block w-full px-4 py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        type="email"
        name="email"
        :placeholder="l('contact_us_email')"
        class="mb-4 block w-full px-4 py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <input
        type="text"
        name="phone"
        :placeholder="l('contact_us_phone')"
        class="mb-4 block w-full px-4 py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      />
      <textarea
        name="message"
        id=""
        cols="30"
        rows="5"
        :placeholder="l('contact_us_message')"
        class="mb-4 block w-full px-4 py-[0.8rem] bg-white border border-[#EBEDF0] rounded-md shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-[#37C0BA] focus:ring-1 focus:ring-[#37C0BA] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      ></textarea>
      <p class="text-[#37C0BA] text-xs">
        {{ l("contact_us_required") }}
      </p>
      <div class="text-center pt-5">
        <button
          type="button"
          class="border-black border hover:bg-black hover:text-white rounded-full p-3 text-lg leading-none flex-1 font-bold w-[172px]"
        >
          {{ l("contact_us_submit") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useLabels } from "~~/composables/useLabels";
  const l = await useLabels();
</script>
