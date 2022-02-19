<template>
  <div
    :class="[
      'relative bg-black flex items-center justify-center bg-cover bg-center w-full h-full',
      $attrs.class,
    ]"
  >
    <video
      ref="videoPlayer"
      class="absolute top-0 left-0 w-full h-full"
      :controls="controls"
      preload="auto"
      :poster="coverUrl"
    >
      <source :src="videoUrl" type="video/mp4" />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
          >supports HTML5 video</a
        >
      </p>
    </video>

    <button
      @click="play"
      class="block relative group border-white hover:bg-white text-white hover:text-black text-center border rounded-full p-3 text-lg leading-none w-[10.75rem]"
      target="_blank"
      v-if="!controls"
    >
      <svg
        class="absolute top-1/2 -translate-y-1/2 group-hover:text-black"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_173_2246)">
          <path
            d="M2.65355 2.8265C2.65355 1.82901 3.76448 1.23334 4.5953 1.78536L10.8767 5.95886C11.6211 6.4534 11.6211 7.5466 10.8767 8.04114L4.5953 12.2146C3.76448 12.7667 2.65355 12.171 2.65355 11.1735L2.65355 2.8265Z"
            stroke="currentColor"
            stroke-width="1.5"
          />
        </g>
        <defs>
          <clipPath id="clip0_173_2246">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>
      {{ l("watch_video") }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  const l = await useLabels();
</script>

<script lang="ts">
  export default {
    props: ["videoUrl", "coverUrl"],
    data() {
      return {
        controls: false,
      };
    },
    methods: {
      play() {
        this.controls = true;
        this.$refs.videoPlayer.play();
      },
    },
  };
</script>
