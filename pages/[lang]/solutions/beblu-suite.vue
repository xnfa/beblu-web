<template>
  <app-not-found v-if="p.notFound"></app-not-found>
  <div v-else class="text-normal">
    <div class="mx-auto">
      <div
        class="flex items-center justify-center bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg px-[1.875rem] md:px-0"
        :style="`background-image: url('${
          config.CDN_BASE + p('section_1_cover').filename_disk
        }')`"
      >
        <h1
          class="text-white text-center font-black text-[3.375rem] md:text-[4rem]"
        >
          {{ p("section_1_title") }}
        </h1>
      </div>
    </div>
    <section class="bg-white py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center md:text-left mb-6 md:mb-8"
          >
            {{ p("section_2_title") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_2_content") }}
          </p>
        </div>
        <div class="flex-1 relative">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_2_cover').filename_disk"
            alt=""
          />
          <div
            class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/10"
          >
            <a
              :href="p('section_2_video_url')"
              target="_blank"
              class="block relative group border-white hover:bg-white text-white hover:text-black text-center border rounded-full p-3 text-lg leading-none w-[10.75rem]"
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
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-[#F4F6FA] py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <h2
        class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center mb-8 md:mb-10 md:max-w-[34rem] mx-auto"
      >
        {{ p("section_3_title") }}
      </h2>
      <div
        class="flex flex-row gap-6 md:gap-5 flex-wrap container mx-auto px-[1.375rem] md:px-0 md:max-w-[47.25rem]"
      >
        <div
          class="w-full bg-white rounded-2xl md:w-[calc(33.33%-0.834rem)] flex flex-col items-center text-center gap-3 px-[1.875rem] py-8"
          v-for="card in p('section_3_cards')"
        >
          <img
            class="block w-12 h-12 overflow-hidden"
            :src="config.CDN_BASE + card.item.cover.filename_disk"
            alt=""
          />
          <h3
            class="text-black font-bold text-[2rem] text-center leading-[1.15]"
          >
            {{ card.item.title }}
          </h3>
          <div
            class="text-center text-light text-xl md:text-base highlight-bold"
            v-html="card.item.content"
          ></div>
        </div>
      </div>
    </section>
    <section class="bg-white py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center md:text-left mb-[2.125rem] md:mb-8"
          >
            {{ p("section_4_title") }}
          </h2>
          <div>
            <div class="flex gap-[0.625rem] items-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="9.12"
                  y="12.24"
                  width="5.76"
                  height="11.76"
                  rx="2.4"
                  fill="#CADAD9"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.804 4.32C21.804 2.72942 20.5146 1.44 18.924 1.44H4.55999C2.96941 1.44 1.67999 2.72943 1.67999 4.32001V17.28C1.67999 18.8706 2.96942 20.16 4.56 20.16V20.16C6.15058 20.16 7.44 18.8706 7.44 17.28V15.0363C7.44 13.4457 8.72942 12.1563 10.32 12.1563H13.68C15.2706 12.1563 16.56 13.4457 16.56 15.0363V17.538C16.56 18.9861 17.7339 20.16 19.182 20.16V20.16C20.6301 20.16 21.804 18.9861 21.804 17.538V4.32Z"
                  fill="#CADAD9"
                />
                <circle cx="12" cy="12.48" r="7.2" fill="white" />
                <circle cx="12" cy="12.48" r="5.04" fill="#CADAD9" />
                <circle cx="12" cy="12.48" r="3.12" fill="white" />
                <circle cx="4.80001" cy="4.55999" r="1.2" fill="white" />
                <circle cx="12" cy="12.48" r="2.16" fill="#CADAD9" />
              </svg>

              <div class="text-xl md:text-base text-light">
                {{ section4Lines[0] }}
              </div>
            </div>
            <div class="flex gap-[0.625rem] items-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.625 11.3125C21.2125 6.5 17.5 2.7875 12.6875 2.375V4.96635C12.6875 5.37885 12.4125 5.65385 12 5.65385C11.5875 5.65385 11.3125 5.37885 11.3125 4.96635V2.375C6.5 2.7875 2.7875 6.5 2.375 11.3125H4.96635C5.37885 11.3125 5.65385 11.5875 5.65385 12C5.65385 12.4125 5.37885 12.6875 4.96635 12.6875H2.375C2.7875 17.5 6.5 21.2125 11.3125 21.625V19.0337C11.3125 18.6212 11.5875 18.3462 12 18.3462C12.4125 18.3462 12.6875 18.6212 12.6875 19.0337V21.625C17.5 21.35 21.2125 17.5 21.625 12.6875H19.0337C18.6212 12.6875 18.3462 12.4125 18.3462 12C18.3462 11.5875 18.6212 11.3125 19.0337 11.3125H21.625ZM12 23C5.95 23 1 18.05 1 12C1 5.95 5.95 1 12 1C18.05 1 23 5.95 23 12C23 18.05 18.05 23 12 23ZM12 14.0625C10.9 14.0625 9.9375 13.1 9.9375 12C9.9375 10.9 10.9 9.9375 12 9.9375C13.1 9.9375 14.0625 10.9 14.0625 12C14.0625 13.1 13.1 14.0625 12 14.0625Z"
                  fill="#CADAD9"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.32692"
                  stroke="#CADAD9"
                  stroke-width="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#CADAD9"
                  stroke-width="2"
                />
              </svg>

              <div class="text-xl md:text-base text-light">
                {{ section4Lines[1] }}
              </div>
            </div>
            <div class="flex gap-[0.625rem] items-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.8494 22C4.59639 22 4.33936 21.9395 4.10241 21.8145C3.89157 21.7012 3.71285 21.5469 3.57028 21.3555C3.19679 20.8477 3 20.25 3 19.627V4.98437C3 3.33789 4.3755 2 6.06626 2H17.9317C19.6225 2 21 3.33789 21 4.98437V19.627C21 20.2324 20.8133 20.8164 20.4598 21.3145C20.4478 21.332 20.4357 21.3477 20.4237 21.3633C20.1024 21.7812 19.5884 22.0098 19.0482 21.9727C18.5 21.9355 18.0161 21.6328 17.753 21.1641L16.7972 19.4609L15.757 21.2188C15.492 21.6777 14.998 21.9746 14.4679 21.9941C14.4257 21.9961 14.3835 21.9961 14.3434 21.9941C13.8133 21.9746 13.3193 21.6777 13.0542 21.2188L12 19.4414L10.9578 21.207C10.6807 21.6855 10.1647 21.9844 9.61044 21.9863C9.58835 21.9863 9.56627 21.9863 9.54418 21.9844C9.01406 21.9648 8.52008 21.668 8.25502 21.207L7.22289 19.4609L6.24699 21.1914C5.95783 21.707 5.41165 22 4.8494 22Z"
                  fill="#CADAD9"
                />
                <path
                  d="M12.7517 7.40656H6.98861C6.59486 7.40656 6.27271 7.09156 6.27271 6.70656V6.7C6.27271 6.315 6.59486 6 6.98861 6H12.7517C13.1454 6 13.4676 6.315 13.4676 6.7V6.70656C13.4676 7.09156 13.1454 7.40656 12.7517 7.40656ZM17.0829 11.6416H6.98861C6.59486 11.6416 6.27271 11.3266 6.27271 10.9416V10.935C6.27271 10.55 6.59486 10.235 6.98861 10.235H17.0829C17.4767 10.235 17.7988 10.55 17.7988 10.935V10.9416C17.7988 11.3266 17.4767 11.6416 17.0829 11.6416ZM12.7517 15.9159H6.98861C6.59486 15.9159 6.27271 15.6009 6.27271 15.2159V15.2094C6.27271 14.8244 6.59486 14.5094 6.98861 14.5094H12.7517C13.1454 14.5094 13.4676 14.8244 13.4676 15.2094V15.2159C13.4676 15.6009 13.1454 15.9159 12.7517 15.9159Z"
                  fill="white"
                />
              </svg>

              <div class="text-xl md:text-base text-light">
                {{ section4Lines[2] }}
              </div>
            </div>
            <div class="flex gap-[0.625rem] items-center mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 7C21 5.34314 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7V18.5224C3 19.3155 3.87915 19.793 4.54444 19.3612L7.30435 17.5698H18C19.6569 17.5698 21 16.2267 21 14.5698V7Z"
                  fill="#CADAD9"
                />
                <path
                  d="M8.03517 10.9174C10.2913 13.1735 13.9496 13.1735 16.2058 10.9174C16.4701 10.653 16.4701 10.2245 16.2058 9.96012C15.9415 9.69579 15.5129 9.69579 15.2485 9.96012C13.5211 11.6876 10.7199 11.6876 8.99242 9.96012C8.72808 9.69579 8.2995 9.69579 8.03517 9.96012C7.77083 10.2245 7.77083 10.653 8.03517 10.9174Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>

              <div class="text-xl md:text-base text-light">
                {{ section4Lines[3] }}
              </div>
            </div>
            <div class="flex gap-[0.625rem] items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.0625 3.3244H9.1875C9.73451 3.3244 10.2591 3.5417 10.6459 3.9285C11.0327 4.31529 11.25 4.83989 11.25 5.3869V9.5119C11.25 10.0589 11.0327 10.5835 10.6459 10.9703C10.2591 11.3571 9.73451 11.5744 9.1875 11.5744H5.0625C4.51549 11.5744 3.99089 11.3571 3.60409 10.9703C3.2173 10.5835 3 10.0589 3 9.5119V5.3869C3 4.83989 3.2173 4.31529 3.60409 3.9285C3.99089 3.5417 4.51549 3.3244 5.0625 3.3244ZM5.0625 12.9494H9.1875C9.73451 12.9494 10.2591 13.1667 10.6459 13.5535C11.0327 13.9403 11.25 14.4649 11.25 15.0119V19.1369C11.25 19.6839 11.0327 20.2085 10.6459 20.5953C10.2591 20.9821 9.73451 21.1994 9.1875 21.1994H5.0625C4.51549 21.1994 3.99089 20.9821 3.60409 20.5953C3.2173 20.2085 3 19.6839 3 19.1369V15.0119C3 14.4649 3.2173 13.9403 3.60409 13.5535C3.99089 13.1667 4.51549 12.9494 5.0625 12.9494ZM14.6875 12.9494H18.8125C19.3595 12.9494 19.8841 13.1667 20.2709 13.5535C20.6577 13.9403 20.875 14.4649 20.875 15.0119V19.1369C20.875 19.6839 20.6577 20.2085 20.2709 20.5953C19.8841 20.9821 19.3595 21.1994 18.8125 21.1994H14.6875C14.1405 21.1994 13.6159 20.9821 13.2291 20.5953C12.8423 20.2085 12.625 19.6839 12.625 19.1369V15.0119C12.625 14.4649 12.8423 13.9403 13.2291 13.5535C13.6159 13.1667 14.1405 12.9494 14.6875 12.9494ZM12.9048 6.01047L15.3111 3.60422C15.5026 3.41266 15.73 3.2607 15.9802 3.15703C16.2305 3.05336 16.4987 3 16.7696 3C17.0405 3 17.3087 3.05336 17.559 3.15703C17.8092 3.2607 18.0366 3.41266 18.2281 3.60422L20.6344 6.01047C20.8259 6.20199 20.9779 6.42938 21.0816 6.67963C21.1852 6.92989 21.2386 7.19812 21.2386 7.469C21.2386 7.73988 21.1852 8.00811 21.0816 8.25836C20.9779 8.50862 20.8259 8.736 20.6344 8.92753L18.2281 11.3338C18.0366 11.5253 17.8092 11.6773 17.559 11.781C17.3087 11.8846 17.0405 11.938 16.7696 11.938C16.4987 11.938 16.2305 11.8846 15.9802 11.781C15.73 11.6773 15.5026 11.5253 15.3111 11.3338L12.9048 8.92753C12.7133 8.736 12.5613 8.50862 12.4576 8.25836C12.354 8.00811 12.3006 7.73988 12.3006 7.469C12.3006 7.19812 12.354 6.92989 12.4576 6.67963C12.5613 6.42938 12.7133 6.20199 12.9048 6.01047Z"
                  fill="#CADAD9"
                />
              </svg>

              <div class="text-xl md:text-base text-light">
                {{ section4Lines[4] }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_4_cover').filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="bg-[#F4F6FA] py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <h2
        class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center mb-8 md:mb-10 md:max-w-[34rem] mx-auto"
      >
        {{ p("section_5_title") }}
      </h2>
      <div
        class="flex flex-row gap-6 md:gap-5 flex-wrap container mx-auto px-[1.375rem] md:px-0 md:max-w-[68rem]"
      >
        <div
          class="w-full bg-white rounded-2xl overflow-hidden md:w-[calc(25%-0.938rem)]"
          v-for="card in p('section_5_cards')"
        >
          <img
            class="block w-full overflow-hidden"
            :src="config.CDN_BASE + card.item.cover.filename_disk"
            alt=""
          />
          <div class="px-6 pt-4 pb-5">
            <h3 class="font-bold text-2xl leading-[1.15] mb-2">
              {{ card.item.title }}
            </h3>
            <p class="text-light text-xl md:text-base">
              {{ card.item.content }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center md:text-left mb-6 md:mb-8"
          >
            {{ p("section_6_title") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_6_content") }}
          </p>
        </div>
        <div class="flex-1">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_6_cover').filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="bg-[#F4F6FA] py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <h2
        class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center mb-6 md:mb-12"
      >
        {{ p("section_7_title") }}
      </h2>
      <div
        class="flex flex-col-reverse md:flex-row gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2 class="text-4xl font-bold leading-[1.15] text-left mb-4 md:mb-8">
            {{ p("section_7_subtitle") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_7_content") }}
          </p>
        </div>
        <div class="flex-1">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_7_cover').filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="bg-white py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center md:text-left mb-6 md:mb-8"
          >
            {{ p("section_8_title") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_8_content") }}
          </p>
        </div>
        <div class="flex-1">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_8_cover').filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="bg-[#F4F6FA] py-[3.75rem] md:py-20 px-[1.875rem] md:px-0">
      <div
        class="flex flex-col md:flex-row-reverse gap-8 md:gap-16 md:max-w-[56.5rem] container mx-auto"
      >
        <div class="md:w-[21.25rem] flex flex-col md:justify-center">
          <h2
            class="text-[3rem] md:text-[4rem] font-black leading-[1.15] text-center md:text-left mb-6 md:mb-8"
          >
            {{ p("section_9_title") }}
          </h2>
          <p class="text-xl md:text-base text-light">
            {{ p("section_9_content") }}
          </p>
        </div>
        <div class="flex-1">
          <img
            class="rounded-2xl"
            :src="config.CDN_BASE + p('section_9_cover').filename_disk"
            alt=""
          />
        </div>
      </div>
    </section>
    <section class="bg-white py-[3.75rem] md:py-20 md:px-0">
      <app-contact-us></app-contact-us>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import { useTitle } from "~~/composables/useTitle";

  useMeta({
    title: `Beblu Suite | ${useTitle("solution")} | Beblu`,
  });

  const config = useRuntimeConfig();

  const l = await useLabels();
  const p = await usePageLabels("suite", [
    "section_1_title",
    `section_1_cover {
      filename_disk
    }`,
    "section_2_content",
    `section_2_cover {
      filename_disk
    }`,
    "section_2_title",
    "section_2_video_url",
    `section_3_cards {
      item {
        ... on suite_section_3_card {
          id
          cover {
            filename_disk
          }
          content
          title
        }
      }
    }`,
    "section_3_title",
    "section_4_content",
    `section_4_cover {
      filename_disk
    }`,
    "section_4_title",
    `section_5_cards {
      item {
        ... on suite_section_5_card {
          id
          content
          cover {
            filename_disk
          }
          title
        }
      }
    }`,
    "section_5_title",
    "section_6_content",
    `section_6_cover {
      filename_disk
    }`,
    "section_6_title",
    "section_7_content",
    `section_7_cover {
      filename_disk
    }`,
    "section_7_subtitle",
    "section_7_title",
    "section_8_content",
    `section_8_cover {
      filename_disk
    }`,
    "section_8_title",
    "section_9_content",
    `section_9_cover {
      filename_disk
    }`,
    "section_9_title",
  ]);
  const section4Lines = p("section_4_content")?.split("\n") || [];
</script>

<style>
  .highlight-bold strong {
    color: #37c0ba;
  }
</style>
