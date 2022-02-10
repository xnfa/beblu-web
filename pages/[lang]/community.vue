<template>
  <div>
    <div class="mx-auto text-normal mb-[2.5rem]">
      <div
        class="relative bg-cover bg-center h-[40rem] md:h-[25rem] lg:h-[37.5rem] md:container md:mx-auto md:mt-8 md:rounded-lg flex items-center justify-center"
        :style="`background-image: url('${
          'http://localhost:8055/assets/' + p('cover').filename_disk
        }'); background-color: rgba(0, 0, 0, 0.1);`"
      >
        <h1 class="text-white text-[4rem] font-black">{{ p("title") }}</h1>
      </div>
    </div>
    <section class="mb-20 text-normal">
      <div class="flex gap-[1.25rem] container mx-auto mb-16 flex-wrap">
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="h-[26.5rem] rounded-2xl shadow-lg bg-white overflow-hidden"
          style="width: calc(25% - 1.25rem)"
        >
          <div
            class="bg-cover bg-center h-[16rem]"
            :style="`background-image: url('${
              'http://localhost:8055/assets/' + blog.cover.filename_disk
            }');`"
          ></div>
          <div class="pt-4 px-6 pb-5">
            <h2
              class="overflow-hidden text-2xl font-bold mb-[0.625rem] leading-none"
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
            <div>By Beblu Communications Team</div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button
          type="button"
          class="rounded-full p-3 text-[1.375rem] leading-none flex-1 bg-white font-bold w-[172px] border border-[#353535]"
          @click="loadMoreBlogs"
          v-if="blogsHasMore"
        >
          Read More
        </button>
      </div>
    </section>
    <section class="bg-[#F4F6FA] text-normal py-[5rem]">
      <h2 class="text-center text-[4rem] font-black mb-10">Upcoming Events</h2>
      <form class="group relative w-[33.375rem] mx-auto mb-16">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
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
          class="absolute right-3 top-1/2 -mt-4 bg-[#37C0BA] text-white text-sm leading-8 font-medium px-4 rounded-lg"
        >
          Search
        </button>
        <input
          class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-3 pl-10 ring-1 ring-slate-200 shadow-sm"
          type="text"
          aria-label="Search events"
          placeholder="Search events"
        />
      </form>

      <div class="flex gap-[1.25rem] container mx-auto mb-16 flex-wrap">
        <div
          v-for="event in events"
          :key="event.id"
          class="rounded-2xl shadow-lg bg-white overflow-hidden"
          style="width: calc(33.33% - 1.25rem)"
        >
          <div
            class="bg-cover bg-center h-[16rem]"
            :style="`background-image: url('${
              'http://localhost:8055/assets/' + event.cover.filename_disk
            }');`"
          ></div>
          <div class="pt-4 pb-6 px-6">
            <div class="text-[#707070] mb-1">
              {{ moment(event.date).format("DD MMM YYYY")
              }}<span v-if="event.endDate">
                - {{ moment(event.endDate).format("DD MMM YYYY") }}</span
              >
            </div>
            <div class="flex items-center">
              <h2
                class="font-bold text-2xl flex-1 leading-none whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {{ event.title }}
              </h2>
              <button
                type="button"
                class="rounded-full p-1 leading-none font-bold w-[6.25rem] border border-[#353535]"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          type="button"
          class="rounded-full p-3 text-[1.375rem] leading-none flex-1 font-bold w-[172px] border border-[#353535]"
          @click="loadMoreEvents"
          v-if="eventsHasMore"
        >
          View More
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
  const { data: blogsResponse, error: blogsError } = useQuery({
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

  const { data: eventsResponse, error: eventsError } = useQuery({
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
