<template>
  <div class="text-normal">
    <div class="mx-auto">
      <img
        :src="config.CDN_BASE + p('cover')?.filename_disk"
        alt=""
        class="container mx-auto hidden md:block rounded-lg mt-8"
      />
      <img
        :src="config.CDN_BASE + p('cover_sm')?.filename_disk"
        alt=""
        class="block w-full md:hidden"
      />
      <div
        class="article pt-[3.75rem] pb-[2.5rem] md:pt-[5rem] md:pb-[3.75rem] px-[1.875rem]"
      >
        <div class="max-w-[34rem] md:text-center mx-auto">
          <div v-html="p('content')"></div>
        </div>
      </div>
    </div>

    <section class="bg-[#F4F6FA]">
      <div class="container mx-auto py-[3.75rem] md:py-[5rem]">
        <div class="flex flex-col md:flex-row px-[1.875rem]">
          <div class="md:w-[257px] md:mr-[91px] mb-[3.75rem] md:mb-0">
            <h2 class="text-[2rem] font-bold mb-4 hidden md:block">
              {{ l("search") }}
            </h2>
            <form class="group relative mb-4">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-[#37C0BA]"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <!-- <button
                type="button"
                class="absolute right-3 top-1/2 -mt-4 bg-[#37C0BA] text-white text-sm leading-8 font-medium px-4 rounded-lg"
              >
                Search
              </button> -->
              <input
                class="focus:ring-2 focus:ring-[#37C0BA] focus:outline-none appearance-none w-full leading-6 text-normal placeholder-slate-400 rounded-md py-3 pl-10 pr-4 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Job role"
                placeholder="Job role"
                :value="keyword"
                @input="(event) => setKeyword(event)"
              />
            </form>
            <h2 class="text-[2rem] font-bold mb-4">{{ l("filter_by") }}</h2>
            <form>
              <input
                class="focus:ring-2 focus:ring-[#37C0BA] focus:outline-none appearance-none w-full leading-6 text-normal placeholder-slate-400 rounded-md py-3 px-4 ring-1 ring-slate-200 shadow-sm mb-4"
                type="text"
                aria-label="Location"
                placeholder="Location"
                :value="location"
                @input="(event) => setLocation(event)"
              />
              <input
                class="focus:ring-2 focus:ring-[#37C0BA] focus:outline-none appearance-none w-full leading-6 text-normal placeholder-slate-400 rounded-md py-3 px-4 ring-1 ring-slate-200 shadow-sm"
                type="text"
                aria-label="Department"
                placeholder="Department"
                :value="department"
                @input="(event) => setDepartment(event)"
              />
            </form>
          </div>
          <div class="flex-1">
            <h1 class="text-center text-[3rem] md:text-[2rem] font-black">
              {{ p("title") }}
            </h1>
            <p
              class="text-center text-[1.25rem] md:text-xl text-[#37C0BA] mb-[2.5rem] md:mb-[4rem]"
            >
              {{ filteredPositions.length }}
              <span
                v-if="keyword.trim() || location.trim() || department.trim()"
                >{{ p("search_unit") }}</span
              ><span v-else>{{ p("unit") }}</span>
            </p>
            <div
              v-if="filteredPositions.length === 0"
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
                  <rect
                    x="26"
                    y="14"
                    width="67"
                    height="84"
                    rx="12"
                    fill="#D7DEE5"
                  />
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
                  <rect
                    x="36"
                    y="30"
                    width="47"
                    height="7"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="36"
                    y="45"
                    width="47"
                    height="7"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="36"
                    y="60"
                    width="47"
                    height="7"
                    rx="3.5"
                    fill="white"
                  />
                  <rect
                    x="36"
                    y="75"
                    width="37"
                    height="7"
                    rx="3.5"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_493_2599">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="text-2xl">
                {{
                  l("no_search_content", {
                    keyword:
                      keyword.trim() || location.trim() || department.trim(),
                  })
                }}
              </p>
            </div>
            <a
              v-for="(position, index) in filteredPositions"
              :class="[
                index === 0 ? 'border-t' : '',
                'block border-[#E9E9E9] border-b py-4',
              ]"
              :href="position.url"
              target="_blank"
            >
              <h3 class="font-bold text-[2rem]">
                {{ position.title }}
              </h3>
              <p class="text-light">
                {{ position.department }}, {{ position.location }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { usePageLabels } from "~~/composables/usePageLabels";
  import { useQuery } from "@urql/vue";
  import { ref, computed } from "vue";
  import { useTitle } from "~~/composables/useTitle";
  useMeta({
    title: `${useTitle("careers")} | Beblu`,
  });

  const config = useRuntimeConfig();
  const l = await useLabels();
  const p = await usePageLabels("careers", [
    `cover {
      filename_disk
    }`,
    `cover_sm {
      filename_disk
    }`,
    "content",
    "title",
    "unit",
    "search_unit",
  ]);

  const route = useRoute();
  const lang = route.params.lang || "en";
  let keyword = ref("");
  let location = ref("");
  let department = ref("");

  function setKeyword(e) {
    keyword.value = e.target.value;
  }
  function setLocation(e) {
    location.value = e.target.value;
  }
  function setDepartment(e) {
    department.value = e.target.value;
  }

  const { data, error } = await useQuery({
    query: `
      {
        position {
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            id
            department
            location
            title
            url
          }
        }
      }
    `,
  });
  const positions = data.value.position
    .filter((v) => v.translations.length > 0)
    .map((v) => v.translations[0]);

  const filteredPositions = computed(() => {
    return positions.filter((v) => {
      return (
        v.title.toLowerCase().indexOf(keyword.value.trim().toLowerCase()) >
          -1 &&
        v.department
          .toLowerCase()
          .indexOf(department.value.trim().toLowerCase()) > -1 &&
        v.location.toLowerCase().indexOf(location.value.trim().toLowerCase()) >
          -1
      );
    });
  });
</script>
