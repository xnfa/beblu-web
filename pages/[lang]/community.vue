<template>
  <app-not-found v-if="p.notFound"></app-not-found>
  <div v-else>
    <div class="mx-auto text-normal mb-[2.5rem]">
      <div
        class="relative bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg flex items-center justify-center"
        :style="`background-image: url('${
          config.CDN_BASE + p('cover').filename_disk
        }'); background-color: rgba(0, 0, 0, 0.1);`"
      >
        <h1
          class="text-white text-center md:text-left text-[3.375rem] md:text-[4rem] font-black"
        >
          {{ p("title") }}
        </h1>
      </div>
    </div>
    <section class="mb-20 text-normal">
      <div
        class="flex gap-3 md:gap-[1.25rem] px-5 md:px-0 container xl:max-w-[70.25rem] mx-auto mb-16 flex-wrap"
      >
        <app-link
          to="lang-blog-id"
          :params="{ id: blog.id }"
          v-for="blog in blogs"
          :key="blog.id"
          class="block rounded-2xl shadow-md bg-white overflow-hidden w-[calc(50%-0.375rem)] md:w-[calc(25%-0.938rem)]"
        >
          <div
            class="bg-cover bg-center h-[9.625rem] md:h-[16rem]"
            :style="`background-image: url('${
              config.CDN_BASE + blog.cover.filename_disk
            }');`"
          ></div>
          <div class="pt-4 px-6 pb-5">
            <h2
              class="overflow-hidden text-[1.375rem] md:text-2xl font-bold mb-[0.625rem] leading-none"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              "
            >
              {{ blog.title }}
            </h2>
            <p
              class="overflow-hidden text-[#707070] mb-[0.625rem] leading-5"
              style="
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              "
            >
              {{ blog.content.replace(/<[^>]+>/g, "") }}
            </p>
            <div class="text-sm text-[#37C0BA]">
              By Beblu Communications Team
            </div>
          </div>
        </app-link>
      </div>

      <div class="text-center">
        <button
          type="button"
          class="rounded-full p-3 text-[1.375rem] leading-none flex-1 bg-white font-bold w-[10.75rem] border hover:bg-black hover:text-white border-black disabled:bg-transparent disabled:border-[#BFBFBF] disabled:text-[#BFBFBF]"
          @click="loadMoreBlogs"
          v-if="blogs.length >= BLOGS_PAGE_SIZE"
          :disabled="!blogsHasMore || blogsFetching"
        >
          {{ blogsHasMore || blogsFetching ? l("read_more") : l("no_more") }}
        </button>
      </div>
    </section>
    <section
      class="bg-[#F4F6FA] text-normal py-[5rem] px-[1.875rem] md:px-0"
      id="events"
    >
      <h2 class="text-center text-[3rem] md:text-[4rem] font-black mb-10">
        {{ l("upcoming_events") }}
      </h2>
      <form
        class="group relative md:w-[33.375rem] mx-auto md:mb-16 mb-8"
        @submit.prevent="searchEvents"
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-[37C0BA]"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <button
          type="button"
          class="absolute right-3 top-1/2 -mt-4 bg-[#37C0BA] active:bg-[#00938C] text-white leading-8 font-medium px-4 rounded-lg"
          @click="searchEvents"
        >
          {{ l("search") }}
        </button>
        <input
          class="focus:ring-2 focus:ring-[37C0BA] focus:outline-none appearance-none w-full text-lg leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm pr-[5.5rem]"
          type="text"
          :aria-label="l('search_events')"
          :placeholder="l('search_events')"
          :value="eventsKeyword"
          @input="setEventsKeyword"
        />
      </form>
      <div
        v-if="
          events.length === 0 &&
          !eventsFetching &&
          eventsKeyword.trim().length > 0
        "
        class="text-center flex flex-col gap-8 items-center justify-center container mx-auto"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_493_2599)">
            <rect x="26" y="14" width="67" height="84" rx="12" fill="#D7DEE5" />
            <rect
              x="3.29822"
              y="17.48"
              width="67.9872"
              height="84.984"
              rx="12"
              transform="rotate(-15 3.29822 17.48)"
              fill="#D7DEE5"
              fill-opacity="0.5"
            />
            <rect x="36" y="30" width="47" height="7" rx="3.5" fill="white" />
            <rect x="36" y="45" width="47" height="7" rx="3.5" fill="white" />
            <rect x="36" y="60" width="47" height="7" rx="3.5" fill="white" />
            <rect x="36" y="75" width="37" height="7" rx="3.5" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_493_2599">
              <rect width="100" height="100" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p class="text-[2rem]">
          {{ l("no_search_content", { keyword: eventsKeyword }) }}
        </p>
      </div>
      <div class="flex gap-[1.25rem] container mx-auto mb-16 flex-wrap">
        <app-link
          to="lang-event-id"
          :params="{ id: event.id }"
          v-for="event in events"
          :key="event.event_id.id"
          class="block rounded-2xl shadow-md bg-white overflow-hidden w-[calc(50%-0.625rem)] md:w-[calc(33.33%-1.25rem)]"
        >
          <div
            class="bg-cover bg-center h-[6.375rem] md:h-[16rem]"
            :style="`background-image: url('${
              config.CDN_BASE + event.cover.filename_disk
            }');`"
          ></div>
          <div class="p-[0.875rem] md:pt-4 md:pb-6 md:px-6">
            <div class="text-[#707070] mb-1">
              {{
                moment(event.date).format(
                  lang === "cn" ? "YYYY年MM月DD日" : "DD MMM YYYY"
                )
              }}<span v-if="event.endDate">
                -
                {{
                  moment(event.endDate).format(
                    lang === "cn" ? "YYYY年MM月DD日" : "DD MMM YYYY"
                  )
                }}</span
              >
            </div>
            <div class="flex flex-col md:flex-row md:items-center">
              <h2
                class="font-bold text-[1.375rem] md:text-2xl flex-1 leading-none whitespace-nowrap overflow-hidden text-ellipsis mb-6 md:mb-0"
              >
                {{ event.title }}
              </h2>
              <button
                class="rounded-full p-1 leading-none font-bold w-full md:w-[6.25rem] border-black border hover:bg-black hover:text-white text-center"
              >
                {{ l("sign_up") }}
              </button>
            </div>
          </div>
        </app-link>
      </div>
      <div v-if="events.length > 0" class="text-center">
        <button
          type="button"
          class="rounded-full p-3 text-[1.375rem] leading-none flex-1 font-bold w-[172px] border border-black hover:bg-black hover:text-white disabled:bg-transparent disabled:border-[#BFBFBF] disabled:text-[#BFBFBF]"
          @click="loadMoreEvents"
          v-if="events.length >= EVENTS_PAGE_SIZE"
          :disabled="!eventsHasMore || eventsFetching"
        >
          {{ eventsHasMore || eventsFetching ? l("view_more") : l("no_more") }}
        </button>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import { useRoute, useRouter } from "vue-router";
  import { useQuery } from "@urql/vue";
  import { computed } from "vue";
  import moment from "moment";
  import { useRuntimeConfig } from "#app";
  import { useTitle } from "~~/composables/useTitle";
  useMeta({
    title: `${useTitle("community")} | Beblu`,
  });

  const l = await useLabels();
  const p = await usePageLabels("community", [
    `cover {
      filename_disk
    }`,
    "title",
  ]);
  const route = useRoute();
  const lang = route.params.lang || "en";
  const config = useRuntimeConfig();

  const BLOGS_PAGE_SIZE = 4;
  const blogsLimit = ref(BLOGS_PAGE_SIZE);
  const { data: blogsResponse, fetching: blogsFetching } = await useQuery({
    query: `
      query ($limit: Int!) {
        blog_translations(filter: {status: {_eq: "published"}, languages_code: {code: {_eq: "${lang}"}}}, sort: "-id", limit: $limit) {
          content
          cover {
            filename_disk
          }
          title
          id
          blog_id {
            id
          }
        }
      }
    `,
    variables: { limit: blogsLimit },
  });

  const blogs = computed(() => blogsResponse.value?.blog_translations || []);
  const blogsHasMore = computed(() => blogs.value.length >= blogsLimit.value);

  function loadMoreBlogs() {
    blogsLimit.value = blogsLimit.value + BLOGS_PAGE_SIZE;
  }

  const EVENTS_PAGE_SIZE = 6;
  const eventsLimit = ref(EVENTS_PAGE_SIZE);
  const eventsKeyword = ref("");

  const { data: eventsResponse, fetching: eventsFetching } = await useQuery({
    query: `
      query ($limit: Int!, $keyword: String!) {
        event_translations(filter: {status: {_eq: "published"}, languages_code: {code: {_eq: "${lang}"}}}, sort: "-id", search: $keyword, limit: $limit) {
          cover {
            filename_disk
          }
          date
          description
          end
          endDate
          location
          organizer
          price
          start
          title
          id
          event_id {
            id
          }
        }
      }
    `,
    variables: { limit: eventsLimit, keyword: eventsKeyword },
  });
  const events = computed(() => eventsResponse.value?.event_translations || []);
  const eventsHasMore = computed(
    () => events.value.length >= eventsLimit.value
  );

  function loadMoreEvents() {
    eventsLimit.value = eventsLimit.value + EVENTS_PAGE_SIZE;
  }

  let eventsTempKeyword = "";
  function setEventsKeyword(e: any) {
    eventsTempKeyword = e.target.value;
  }

  function searchEvents() {
    eventsKeyword.value = eventsTempKeyword;
    eventsLimit.value = EVENTS_PAGE_SIZE;
  }
</script>

<script lang="ts">
  import { gsap } from "gsap";
  export default {
    data() {
      return {
        blogs: [],
        blogsPage: 1,
        blogsLimit: 5,
        events: [],
        eventsPage: 1,
        eventsLimit: 5,
      };
    },
    async mounted() {
      setTimeout(() => {
        gsap.to(window, { duration: 0.3, scrollTo: this.$route.hash });
      }, 600);
    },
    methods: {
      async fetch() {},
    },
  };
</script>
