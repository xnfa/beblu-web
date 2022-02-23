<template>
  <app-not-found v-if="!event"></app-not-found>
  <div v-else class="mx-auto text-normal">
    <div
      class="bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg"
      :style="`background-image: url('${
        config.CDN_BASE + event.cover?.filename_disk
      }')`"
    >
      <div
        class="relative container flex items-center justify-center md:justify-start px-8 xl:px-0 lg:w-[64rem] mx-auto h-full"
      >
        <div class="py-8 px-6 w-[16.875rem] bg-white rounded-2xl">
          <h1 class="text-[2rem] mb-8 leading-none font-bold">
            {{ event.title }}
          </h1>
          <div class="flex items-center mb-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <rect
                x="0.75"
                y="2.75"
                width="14.5"
                height="12.5"
                rx="2.25"
                stroke="#353535"
                stroke-width="1.5"
              />
              <path
                d="M4.61536 1V2.5"
                stroke="#353535"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M11.3846 1V2.5"
                stroke="#353535"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M0.727295 7.1543H15.2727"
                stroke="#353535"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <div class="text-[#707070] flex-1">{{ l("date") }}</div>
            <div>
              {{
                moment(event.date).format(
                  lang === "cn" ? "YYYY.MM.DD" : "DD MMM YYYY"
                )
              }}<span v-if="event.endDate">
                -
                {{
                  moment(event.endDate).format(
                    lang === "cn" ? "YYYY.MM.DD" : "DD MMM YYYY"
                  )
                }}</span
              >
            </div>
          </div>
          <div class="flex items-center mb-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <circle
                cx="8"
                cy="8"
                r="7.25"
                stroke="#353535"
                stroke-width="1.5"
              />
              <path d="M8 3.5V8H12" stroke="#353535" stroke-width="1.5" />
            </svg>

            <div class="text-[#707070] flex-1">{{ l("time") }}</div>
            <div>
              {{ moment(event.start, "HH:mm").format("HH:mm") }} -
              {{ moment(event.end, "HH:mm").format("HH:mm") }}
            </div>
          </div>
          <div class="flex items-center mb-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <path
                d="M2.75 6.04573C2.75 4.0303 3.52662 2.73652 4.53171 1.93052C5.56351 1.1031 6.88918 0.75 8 0.75C9.11082 0.75 10.4365 1.1031 11.4683 1.93052C12.4733 2.73652 13.25 4.0303 13.25 6.04574C13.25 8.27765 12.0689 10.4826 10.7543 12.2154C10.1054 13.0706 9.4433 13.7855 8.92031 14.3C8.65905 14.557 8.43476 14.7618 8.267 14.907C8.1297 15.0259 8.05091 15.0868 8.02396 15.1077C8.01428 15.1152 8.01129 15.1175 8.01468 15.1154L8 15.1243L7.9852 15.1154C7.99266 15.1199 7.98897 15.1169 7.97324 15.1045C7.94348 15.0809 7.8706 15.0231 7.74839 14.9167C7.58338 14.773 7.36078 14.5692 7.10042 14.3127C6.57919 13.7991 5.91529 13.0829 5.26327 12.2256C3.94165 10.4878 2.75 8.27618 2.75 6.04573Z"
                stroke="#353535"
                stroke-width="1.5"
              />
              <circle cx="8" cy="6" r="2" stroke="#353535" stroke-width="1.5" />
            </svg>

            <div class="text-[#707070] flex-1">{{ l("location") }}</div>
            <div>{{ event.location }}</div>
          </div>
          <div class="flex items-center mb-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <circle
                cx="8"
                cy="5"
                r="3.25"
                stroke="#353535"
                stroke-width="1.5"
              />
              <path
                d="M14 16C14 12.134 11.3137 9 8 9C4.68629 9 2 12.134 2 16"
                stroke="#353535"
                stroke-width="1.5"
              />
            </svg>

            <div class="text-[#707070] flex-1">{{ l("organizer") }}</div>
            <div>{{ event.organizer }}</div>
          </div>
          <div class="flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-3"
            >
              <g clip-path="url(#clip0_111_1703)">
                <mask id="path-1-inside-1_111_1703" fill="white">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.40512 9.44689C-0.147164 8.49031 0.180587 7.26713 1.13717 6.71484L9.79743 1.71484C10.754 1.16256 11.9772 1.49031 12.5295 2.44689L13.2795 3.746L13.2795 3.74601C12.7215 4.06818 12.5303 4.7817 12.8525 5.33971C13.1746 5.89772 13.8881 6.0889 14.4462 5.76674L14.4462 5.76672L15.1961 7.0657C15.7484 8.02228 15.4207 9.24546 14.4641 9.79775L5.80384 14.7977C4.84725 15.35 3.62407 15.0223 3.07179 14.0657L2.32182 12.7667C2.87981 12.4445 3.07098 11.731 2.74882 11.173C2.42666 10.615 1.71316 10.4239 1.15516 10.746L0.40512 9.44689Z"
                  />
                </mask>
                <path
                  d="M13.2795 3.746L14.0295 5.04504L15.3286 4.29504L14.5786 2.996L13.2795 3.746ZM13.2795 3.74601L12.5295 2.44697L13.2795 3.74601ZM14.4462 5.76672L15.7452 5.01672L14.9952 3.71769L13.6962 4.46769L14.4462 5.76672ZM14.4641 9.79775L15.2141 11.0968L14.4641 9.79775ZM5.80384 14.7977L5.05384 13.4987L5.80384 14.7977ZM3.07179 14.0657L4.37083 13.3157L3.07179 14.0657ZM2.32182 12.7667L1.57179 11.4677L0.272807 12.2177L1.02279 13.5167L2.32182 12.7667ZM1.15516 10.746L-0.143881 11.496L0.606097 12.795L1.90512 12.0451L1.15516 10.746ZM0.387172 5.41581C-1.28685 6.3823 -1.86042 8.52287 -0.893918 10.1969L1.70416 8.69689C1.56609 8.45775 1.64802 8.15195 1.88717 8.01388L0.387172 5.41581ZM9.04743 0.415806L0.387172 5.41581L1.88717 8.01388L10.5474 3.01388L9.04743 0.415806ZM13.8285 1.69689C12.862 0.0228701 10.7214 -0.550693 9.04743 0.415806L10.5474 3.01388C10.7866 2.87581 11.0924 2.95775 11.2304 3.19689L13.8285 1.69689ZM14.5786 2.996L13.8285 1.69689L11.2304 3.19689L11.9805 4.496L14.5786 2.996ZM14.0295 5.04505L14.0295 5.04504L12.5295 2.44696L12.5295 2.44697L14.0295 5.04505ZM14.1515 4.58971C14.2435 4.74914 14.1889 4.953 14.0295 5.04505L12.5295 2.44697C11.254 3.18335 10.817 4.81426 11.5534 6.08971L14.1515 4.58971ZM13.6962 4.4677C13.8556 4.37565 14.0595 4.43028 14.1515 4.58971L11.5534 6.08971C12.2898 7.36516 13.9207 7.80216 15.1962 7.06578L13.6962 4.4677ZM13.6962 4.46769L13.6962 4.4677L15.1962 7.06578L15.1962 7.06576L13.6962 4.46769ZM16.4952 6.3157L15.7452 5.01672L13.1471 6.51672L13.8971 7.8157L16.4952 6.3157ZM15.2141 11.0968C16.8881 10.1303 17.4617 7.98972 16.4952 6.3157L13.8971 7.8157C14.0352 8.05484 13.9532 8.36064 13.7141 8.49871L15.2141 11.0968ZM6.55384 16.0968L15.2141 11.0968L13.7141 8.49871L5.05384 13.4987L6.55384 16.0968ZM1.77275 14.8157C2.73925 16.4897 4.87981 17.0633 6.55384 16.0968L5.05384 13.4987C4.81469 13.6368 4.5089 13.5548 4.37083 13.3157L1.77275 14.8157ZM1.02279 13.5167L1.77275 14.8157L4.37083 13.3157L3.62086 12.0167L1.02279 13.5167ZM1.44979 11.923C1.35774 11.7636 1.41236 11.5598 1.57179 11.4677L3.07186 14.0657C4.34726 13.3293 4.78423 11.6985 4.04786 10.423L1.44979 11.923ZM1.90512 12.0451C1.74569 12.1371 1.54183 12.0825 1.44979 11.923L4.04786 10.423C3.31149 9.14762 1.68063 8.71061 0.405194 9.44694L1.90512 12.0451ZM-0.893918 10.1969L-0.143881 11.496L2.4542 9.996L1.70416 8.69689L-0.893918 10.1969Z"
                  fill="#353535"
                  mask="url(#path-1-inside-1_111_1703)"
                />
                <path
                  d="M4.56509 8.77686L9.8695 5.71436"
                  stroke="#353535"
                  stroke-width="1.5"
                />
                <path
                  d="M5.87759 11.0508L11.182 7.98828"
                  stroke="#353535"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_111_1703">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div class="text-[#707070] flex-1">{{ l("price") }}</div>
            <div>{{ event.price }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="article container py-20 px-8 xl:px-0 lg:w-[64rem] mx-auto">
      <div v-html="event.description"></div>
    </div>

    <div class="bg-[#F4F6FA] py-[4rem]">
      <h2 class="text-center text-[2rem] mb-[2.5rem] leading-none font-bold">
        {{ l("scan_register") }}
      </h2>
      <div
        class="flex mt-[3.125rem] md:mt-[2.5rem] flex-col md:flex-row justify-center"
      >
        <div class="flex flex-col items-center">
          <img
            class="block w-[7.5rem] md:w-[10rem]"
            src="/images/sections/download/google-play-qrcode.jpg"
            alt=""
          />
          <a :href="s.settings.play_store" target="_blank">
            <img
              class="block w-[7.5rem] mt-[0.875rem]"
              src="/images/sections/download/google-play.png"
              alt=""
            />
          </a>
        </div>
        <div
          class="mt-[2.375rem] md:mt-0 flex flex-col items-center md:ml-[3.75rem]"
        >
          <img
            class="block w-[7.5rem] md:w-[10rem]"
            src="/images/sections/download/app-store-qrcode.jpg"
            alt=""
          />
          <a :href="s.settings.app_store" target="_blank">
            <img
              class="block w-[7.5rem] mt-[0.875rem]"
              src="/images/sections/download/app-store.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { useQuery } from "@urql/vue";
  import moment from "moment";
  import { useTitle } from "~~/composables/useTitle";

  const route = useRoute();
  const lang = route.params.lang || "en";
  const id = route.params.id;
  const l = await useLabels();
  const config = useRuntimeConfig();

  const { data, error } = await useQuery({
    query: `
      {
        event_translations_by_id(id: "${id}") {
          cover {
            filename_disk
          }
          start
          title
          price
          organizer
          location
          id
          end
          description
          date
          endDate
        }
      }
    `,
  });
  const event = data.value.event_translations_by_id;
  const { data: s } = await useQuery({
    query: `
    {
      settings {
        app_store
        play_store
      }
    }
  `,
  });
  useMeta({
    title: `${event?.title || "Page not found"} | ${useTitle("event")} | Beblu`,
  });
</script>
