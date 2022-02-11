<template>
  <app-not-found v-if="p.notFound"></app-not-found>
  <div v-else>
    <div class="mx-auto text-normal mb-[2.5rem]">
      <div
        class="relative bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg flex items-center justify-center"
        :style="`background-image: url('${
          'http://nathan.local.deansel.com:8055/assets/' +
          p('cover').filename_disk
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
              'http://nathan.local.deansel.com:8055/assets/' +
              blog.cover.filename_disk
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
          :disabled="!blogsHasMore"
        >
          {{ blogsHasMore ? "Read More" : "No More" }}
        </button>
      </div>
    </section>
    <section class="bg-[#F4F6FA] text-normal py-[5rem] px-[1.875rem] md:px-0">
      <h2 class="text-center text-[3rem] md:text-[4rem] font-black mb-10">
        Upcoming Events
      </h2>
      <form class="group relative md:w-[33.375rem] mx-auto md:mb-16 mb-8">
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
        >
          Search
        </button>
        <input
          class="focus:ring-2 focus:ring-[37C0BA] focus:outline-none appearance-none w-full text-lg leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm pr-[5.5rem]"
          type="text"
          aria-label="Search events"
          placeholder="Search events"
        />
      </form>

      <div class="flex gap-[1.25rem] container mx-auto mb-16 flex-wrap">
        <div
          v-for="event in events"
          :key="event.id"
          class="rounded-2xl shadow-md bg-white overflow-hidden w-[calc(50%-0.625rem)] md:w-[calc(33.33%-1.25rem)]"
        >
          <div
            class="bg-cover bg-center h-[6.375rem] md:h-[16rem]"
            :style="`background-image: url('${
              'http://nathan.local.deansel.com:8055/assets/' +
              event.cover.filename_disk
            }');`"
          ></div>
          <div class="p-[0.875rem] md:pt-4 md:pb-6 md:px-6">
            <div class="text-[#707070] mb-1">
              {{ moment(event.date).format("DD MMM YYYY")
              }}<span v-if="event.endDate">
                - {{ moment(event.endDate).format("DD MMM YYYY") }}</span
              >
            </div>
            <div class="flex flex-col md:flex-row md:items-center">
              <h2
                class="font-bold text-[1.375rem] md:text-2xl flex-1 leading-none whitespace-nowrap overflow-hidden text-ellipsis mb-6 md:mb-0"
              >
                {{ event.title }}
              </h2>
              <app-link
                to="lang-event-id"
                :params="{ id: event.id }"
                class="rounded-full p-1 leading-none font-bold w-full md:w-[6.25rem] border-black border hover:bg-black hover:text-white text-center"
              >
                Sign up
              </app-link>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          type="button"
          class="rounded-full p-3 text-[1.375rem] leading-none flex-1 font-bold w-[172px] border border-black hover:bg-black hover:text-white disabled:bg-transparent disabled:border-[#BFBFBF] disabled:text-[#BFBFBF]"
          @click="loadMoreEvents"
          :disabled="!eventsHasMore"
        >
          {{ eventsHasMore ? "View More" : "No More" }}
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
  import moment from "moment";

  const l = await useLabels();
  const p = await usePageLabels("community", [
    `cover {
      filename_disk
    }`,
    "title",
  ]);
  const route = useRoute();
  const lang = route.params.lang || "en";

  const blogs = ref([]);
  const blogsLimit = ref(4);
  const blogsPage = ref(1);
  const blogsHasMore = ref(true);
  const { data: blogsResponse, error: blogsError } = await useQuery({
    query: `
      query ($page: Int!, $limit: Int!) {
        blog(limit: $limit, page: $page, filter: {translations: {languages_code: {code: {_eq: "${lang}"}}}}) {
          id
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            content
            cover {
              filename_disk
            }
            id
            title
          }
        }
      }
    `,
    variables: { page: blogsPage, limit: blogsLimit },
  });

  if (blogsResponse.value.blog.length < blogsLimit.value) {
    blogsHasMore.value = false;
  }
  blogs.value = blogsResponse.value.blog.map((v) => ({
    ...v.translations[0],
    id: v.id,
  }));
  watch(
    () => blogsResponse.value,
    (result) => {
      if (result.blog.length < blogsLimit.value) {
        blogsHasMore.value = false;
      }
      blogs.value = [
        ...blogs.value,
        ...result.blog.map((v) => ({
          ...v.translations[0],
          id: v.id,
        })),
      ];
    }
  );

  function loadMoreBlogs() {
    blogsPage.value++;
  }

  const events = ref([]);
  const eventsLimit = ref(6);
  const eventsPage = ref(1);
  const eventsHasMore = ref(true);

  const { data: eventsResponse, error: eventsError } = await useQuery({
    query: `
      query ($page: Int!, $limit: Int!) {
        event(limit: $limit, page: $page, filter: {translations: {languages_code: {code: {_eq: "${lang}"}}}}) {
          id
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
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
      }
    `,
    variables: { page: eventsPage, limit: eventsLimit },
  });
  events.value = eventsResponse.value.event.map((v) => ({
    ...v.translations[0],
    id: v.id,
  }));
  if (eventsResponse.value.event.length < eventsLimit.value) {
    eventsHasMore.value = false;
  }
  watch(
    () => eventsResponse.value,
    (result) => {
      if (result.event.length < eventsLimit.value) {
        eventsHasMore.value = false;
      }
      events.value = [
        ...events.value,
        ...result.event.map((v) => ({
          ...v.translations[0],
          id: v.id,
        })),
      ];
    }
  );

  function loadMoreEvents() {
    eventsPage.value++;
  }
</script>

<script lang="ts">
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
      // await this.loadMoreBlogs();
      // await this.loadMoreEvents();
    },
    methods: {
      async fetch() {},
    },
  };
</script>
