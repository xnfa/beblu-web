<template>
  <div ref="container">
    <section
      class="relative overflow-hidden h-[calc(100vh-4rem)] hero flex flex-col items-center"
      ref="section_1"
    >
      <div
        class="absolute hidden md:block left-[50%] top-[50%] w-[50%] h-[50%]"
      >
        <img
          v-for="pop in section1Pops"
          :style="pop.offset"
          class="absolute translate-x-[-50%] opacity-0 scale-50 w-[194px]"
          :src="pop.url"
          :ref="setSection1PopRefs"
          alt=""
        />
      </div>
      <div
        class="text-5xl md:text-[4.75rem] md:mt-[112px] mt-[56px] font-bold text-normal text-center leading-[1.15] px-[1.875rem] md:px-0"
      >
        {{ p("section_1_title") }}
      </div>
      <div
        class="pt-6 md:pt-10 mb-6 md:mb-[3.25rem] leading-none text-light text-[1.375rem]"
      >
        {{ p("section_1_content") }}
      </div>

      <app-link
        to="lang-download"
        class="block mb-10 md:mb-0 md:absolute md:right-[5%] md:bottom-[61px]"
      >
        <button
          type="button"
          class="rounded-full p-3 text-lg text-normal hover:text-white leading-none flex-1 bg-white hover:bg-[#28DAD2] shadow-[0_2px_10px_rgba(104,252,252,0.25)] hover:shadow-[0_2px_10px_#68FCFC] font-bold w-[172px]"
        >
          {{ l("download").toUpperCase() }}
        </button>
      </app-link>
      <div class="flex-1"></div>
      <div class="w-[19.375rem] max-h-[30rem]">
        <img src="/images/sections/home-section-1/screenshot.png" alt="" />
      </div>
    </section>
    <section class="relative overflow-hidden h-[100vh]" ref="section_2">
      <div class="fixed -z-10 top-0 left-0 h-[100vh] w-[100vw]">
        <img
          class="absolute top-[75px] left-[-45px] w-[178px]"
          src="/images/sections/home-section-2/ball.png"
          alt=""
          ref="ball_0"
        />
        <img
          class="absolute bottom-[-85px] left-[148px] w-[249px]"
          src="/images/sections/home-section-2/ball.png"
          alt=""
          ref="ball_1"
        />
        <img
          class="absolute top-[125px] right-[-90px] w-[293px]"
          src="/images/sections/home-section-2/ball.png"
          alt=""
          ref="ball_2"
        />
      </div>
      <div
        class="relative text-normal h-[100vh] flex flex-col pt-[7.25rem] md:pt-[4rem]"
      >
        <div class="relative flex-1 md:h-[20%] w-full text-center">
          <h2
            class="absolute bottom-0 w-full whitespace-nowrap text-[3rem] md:text-[4.75rem] font-black leading-[1.15] opacity-0"
            ref="section2Text1"
          >
            {{ p("section_2_text_1") }}
          </h2>
          <h2
            class="absolute bottom-0 w-full whitespace-nowrap text-[3rem] md:text-[4.75rem] font-black leading-[1.15] opacity-0"
            ref="section2Text2"
          >
            {{ p("section_2_text_2") }}
          </h2>
          <h2
            class="absolute bottom-0 w-full whitespace-nowrap text-[3rem] md:text-[4.75rem] font-black leading-[1.15] opacity-0"
            ref="section2Text3"
          >
            {{ p("section_2_text_3") }}
          </h2>
        </div>

        <div
          ref="canvas_2"
          class="w-full h-auto max-w-[30rem] aspect-[640/858] mx-auto"
        ></div>
      </div>
    </section>
    <section class="hidden md:block h-[100vh] bg-black" ref="section3md">
      <div
        class="overflow-hidden absolute w-full h-full"
        v-for="(card, i) in p('section_3_cards')"
      >
        <div
          class="flex flex-col md:flex-row max-w-[70rem] mx-auto items-center w-full h-full"
        >
          <div
            class="w-full md:w-[32%] md:max-w-[660px] flex-1 md:h-full flex justify-center items-center relative overflow-hidden order-6 md:order-1 mx-auto"
          >
            <div
              class="h-full md:h-auto md:w-full mx-auto px-6 py-[3rem] flex items-center opacity-0"
              ref="section3MdCovers"
            >
              <img
                class="block"
                :src="config.CDN_BASE + card.item.cover_md?.filename_disk"
                alt=""
              />
            </div>
          </div>
          <div
            class="w-full md:w-[68%] order-5 text-white flex flex-col pt-[6rem] md:pl-12 md:pr-6 px-6 md:pb-[9.875rem] md:py-0"
          >
            <div class="relative opacity-0" ref="section3MdTexts">
              <h2
                class="text-[3rem] md:text-[4.75rem] font-black leading-[1.15]"
                ref="section3Header1"
              >
                {{ card.item.title }}
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[1.25rem] md:mt-[2.5rem]"
                ref="section3Text1"
              >
                {{ card.item.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      :class="[
        i === p('section_3_cards').length - 1
          ? 'pb-[8.5rem] md:pb-[6rem]'
          : 'pb-10 md:pb-14',
        i === 0 ? 'md:pt-20' : '',
        'overflow-hidden bg-[#768797] pb-10 md:hidden',
      ]"
      v-for="(card, i) in p('section_3_cards')"
      ref="section_3_cards"
    >
      <div
        :class="[
          i % 2 == 1 ? 'md:flex-row-reverse' : '',
          'flex flex-col md:flex-row container mx-auto items-center w-full',
        ]"
      >
        <div
          class="w-full md:w-[30%] md:max-w-[660px] flex-1 md:h-full flex justify-center items-end relative overflow-hidden order-6 md:order-1 mx-auto"
        >
          <div
            class="h-full md:h-auto md:w-full mx-auto px-6 py-[3rem] flex items-end"
            ref="section_3_covers"
          >
            <img
              class="block"
              :src="config.CDN_BASE + card.item.cover?.filename_disk"
              alt=""
            />
          </div>
        </div>
        <div
          class="w-full md:w-[70%] order-5 text-white flex flex-col pt-[6rem] px-6 md:py-0"
        >
          <div class="relative opacity-0" ref="section_3_texts">
            <h2
              class="text-[3rem] md:text-[4.75rem] font-black leading-[1.15]"
              ref="section3Header1"
            >
              {{ card.item.title }}
            </h2>
            <p
              class="text-[1.375rem] font-light mt-[1.25rem] md:mt-[2.5rem]"
              ref="section3Text1"
            >
              {{ card.item.content }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="overflow-hidden relative h-[100vh] bg-[#000000]"
      ref="section_4"
    >
      <div
        class="md:h-full hidden md:block md:absolute w-full opacity-0 bg-center bg-cover"
        style="
          background-image: url('/images/sections/home-section-4/img_events.png');
        "
        ref="section4Cover1"
      ></div>
      <div
        class="h-[14.25rem] block md:hidden md:absolute w-full opacity-0 bg-center bg-cover"
        style="
          background-image: url('/images/sections/home-section-4/img_events-sm.png');
        "
        ref="section4Cover2"
      ></div>
      <div
        class="absolute md:absolute bottom-[8%] md:bottom-[5rem] xl:bottom-[7.5rem] w-full text-white flex items-center justify-center"
      >
        <div
          class="mx-auto md:w-[37rem] px-[1.875rem] md:px-0 opacity-0"
          ref="section4Text"
        >
          <h2
            class="text-[3rem] md:text-[4.75rem] font-black leading-[1.15] text-center md:text-left"
          >
            {{ p("section_4_title") }}
          </h2>
          <p class="text-[1.375rem] font-light mt-[2.5rem]">
            {{ p("section_4_content") }}
          </p>
          <div class="flex flex-col md:flex-row gap-6 md:gap-10 mt-6">
            <app-link
              to="lang-community"
              hash="#events"
              class="border-white hover:bg-white hover:text-black text-center border rounded-full p-3 text-[1.375rem] leading-none flex-1"
            >
              {{ p("section_4_btn_events") }}
            </app-link>
            <app-link
              to="lang-community"
              class="border-white hover:bg-white hover:text-black text-center border rounded-full p-3 text-[1.375rem] leading-none flex-1"
            >
              {{ p("section_4_btn_blog") }}
            </app-link>
          </div>
        </div>
      </div>
    </section>
    <section
      class="overflow-hidden relative h-[100vh] bg-cover bg-center"
      ref="section_5"
      style="background-image: url('/images/sections/download/bg.jpg')"
    >
      <div class="text-black text-center" ref="section_5_container">
        <div
          class="mx-auto px-6 md:px-0 md:w-[37rem] w-full opacity-0 absolute top-1/2 left-1/2"
          ref="section5Text"
        >
          <h2 class="text-[3rem] md:text-[4.75rem] font-black leading-[1.15]">
            {{ p("section_5_title") }}
          </h2>
          <p class="text-[1.375rem] mt-5">
            {{ p("section_5_content") }}
          </p>
          <div class="mt-10">
            <app-link to="lang-download">
              <button
                type="button"
                class="rounded-full p-3 text-lg text-normal hover:text-white leading-none flex-1 bg-white hover:bg-[#28DAD2] shadow-[0_2px_10px_rgba(104,252,252,0.25)] hover:shadow-[0_2px_10px_#68FCFC] font-bold w-[10.75rem]"
              >
                {{ l("download").toUpperCase() }}
              </button>
            </app-link>
          </div>
        </div>
      </div>
    </section>
    <section
      class="overflow-hidden relative min-h-[100vh] bg-cover bg-center bg-[#F4F6FA]"
      ref="section_6"
    >
      <app-contact-us></app-contact-us>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";

  useMeta({
    title: `Beblu`,
  });
  const config = useRuntimeConfig();

  const l = await useLabels();
  const p = await usePageLabels("home", [
    "section_1_content",
    "section_1_title",
    `
      section_1_cover {
        filename_disk
      }
    `,
    "section_2_text_1",
    "section_2_text_2",
    "section_2_text_3",
    `section_3_cards {
      item {
        ... on home_section_3_card {
          id
          title
          content
          cover {
            filename_disk
          }
          cover_md {
            filename_disk
          }
        }
      }
    }`,
    "section_4_btn_blog",
    "section_4_btn_events",
    "section_4_content",
    "section_4_title",
    "section_5_content",
    "section_5_title",
  ]);

  const section1Pops = [
    {
      url: "/images/sections/home-section-1/01.svg",
      offset: {
        top: "-214px",
        left: "-386px",
      },
    },
    {
      url: "/images/sections/home-section-1/02.svg",
      offset: {
        top: "40px",
        left: "-466px",
      },
    },
    {
      url: "/images/sections/home-section-1/03.svg",
      offset: {
        top: "-50px",
        left: "-244px",
      },
    },
    {
      url: "/images/sections/home-section-1/04.png",
      offset: {
        top: "-50px",
        left: "244px",
      },
    },
    {
      url: "/images/sections/home-section-1/05.svg",
      offset: {
        top: "-214px",
        left: "386px",
      },
    },
    {
      url: "/images/sections/home-section-1/06.svg",
      offset: {
        top: "40px",
        left: "466px",
      },
    },
  ];
  definePageMeta({
    layout: "default",
  });
</script>

<script lang="ts">
  import { gsap } from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import lottie from "lottie-web";

  export default {
    data() {
      return {
        section1PopRefs: [],
      };
    },
    methods: {
      setSection1PopRefs(el) {
        if (el) {
          this.section1PopRefs.push(el);
        }
      },
      section1Animate() {
        const section1PopRefs = this.section1PopRefs;
        const section1PopTl = gsap.timeline({
          repeat: -1,
        });

        section1PopTl.to(section1PopRefs, {
          opacity: 1,
          scale: 1,
          duration: 1.3,
          ease: "power3",
          stagger: {
            grid: [3, 2],
            from: "random",
            amount: 1.5,
          },
        });
        section1PopTl.to(section1PopRefs, {
          scale: 0.5,
          opacity: 0,
          duration: 1.3,
          ease: "power3",
          stagger: {
            grid: [3, 2],
            from: "random",
            amount: 1.5,
          },
        });
      },
      section2Animate() {
        const {
          section_2,
          ball_0,
          ball_1,
          ball_2,
          canvas_2,
          section2Text1,
          section2Text2,
          section2Text3,
        } = this.$refs;
        const handle = lottie.loadAnimation({
          container: canvas_2, // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "/lottie/home-section-2/data.json",
        });

        const tl = gsap.timeline({
          paused: true,
          onUpdate: (e) => {
            handle.goToAndStop(tl.progress() * 247, true);
          },
          repeatRefresh: true,
          reversed: true,
          scrollTrigger: {
            toggleActions: "play pause play reset",
            id: "home_section_2",
            trigger: section_2,
            start: "top bottom",
            end: "bottom top",
          },
        });

        tl.fromTo(
          section2Text1,
          {
            rotateX: "90deg",
          },
          {
            rotateX: "0deg",
            opacity: 1,
            duration: 0.4,
            ease: "power3",
          },
          0
        )
          // .addLabel("1", 2)
          .to(
            section2Text1,
            {
              rotateX: "-90deg",
              opacity: 0,
              duration: 0.4,
              ease: "power3",
            },
            1.8
          )
          .fromTo(
            section2Text2,
            {
              rotateX: "90deg",
            },
            {
              rotateX: "0deg",
              opacity: 1,
              duration: 0.4,
              ease: "power3",
            },
            2.2
          )
          // .addLabel("2", 6)
          .to(
            section2Text2,
            {
              rotateX: "-90deg",
              opacity: 0,
              duration: 0.4,
              ease: "power3",
            },
            4.1
          )
          .fromTo(
            section2Text3,
            {
              rotateX: "90deg",
            },
            {
              rotateX: "0deg",
              opacity: 1,
              duration: 0.4,
              ease: "power3",
            },
            4.5
          )
          .to(section2Text3, { duration: 0 }, 9.88)
          .addLabel("3");

        // ball move
        gsap.to(ball_0, {
          x: "random(-20, 300, 5)",
          y: "random(-100, 200, 5)",
          duration: 30,
          repeat: -1,
          repeatRefresh: true,
        });
        gsap.to(ball_1, {
          x: "random(-50, 200, 5)",
          y: "random(-200, 20, 5)",
          duration: 30,
          repeat: -1,
          repeatRefresh: true,
        });
        gsap.to(ball_2, {
          x: "random(-200, 20, 5)",
          y: "random(-100, 100, 5)",
          duration: 30,
          repeat: -1,
          repeatRefresh: true,
        });
      },
      section3MdAnimate() {
        const { section3MdCovers, section3MdTexts, section3md } = this.$refs;

        const tweens = section3MdCovers.map((v, k) => {
          return () => {
            if (k > 0) {
              gsap.to(section3MdCovers[0], { opacity: 0.3, duration: 0.3 });
            }
            if (k > 1) {
              gsap.to(section3MdCovers[k - 1], { opacity: 0, duration: 0.3 });
            }
            if (k < section3MdCovers.length - 1) {
              gsap.to(section3MdCovers[k + 1], { opacity: 0, duration: 0.3 });
            }
            gsap.to(section3MdCovers[k], { opacity: 1, duration: 0.3 });
          };
        });
        const textTl = gsap.timeline({
          paused: true,
          ease: "none",
          scrollTrigger: {
            id: "home_section_3_md",
            trigger: section3md,
            pin: true,
            start: "top top",
            end: "+=4000",
            // pinSpacing: false,
            anticipatePin: 1,
            scrub: true,
            onUpdate: (e) => {
              const current = Math.floor(
                e.progress * (11 / 10) * (section3MdCovers.length - 1)
              );
              tweens[current]();
            },
          },
        });

        for (let i = 0; i < section3MdCovers.length; i++) {
          const text = section3MdTexts[i];

          textTl.fromTo(
            text,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            2 * i
          );

          if (i < section3MdCovers.length - 1) {
            textTl.to(
              text,
              {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3",
              },
              2 * i + 1
            );
          }
        }
      },
      section3Animate() {
        const { section_3_cards, section_3_covers, section_3_texts } =
          this.$refs;
        for (let i = 0; i < section_3_cards.length; i++) {
          const section_3_card = section_3_cards[i];
          const section_3_cover = section_3_covers[i];
          const section_3_text = section_3_texts[i];
          gsap.fromTo(
            section_3_text,
            {
              opacity: 0,
              y: "100px",
            },
            {
              opacity: 1,
              duration: 1,
              y: "0",
              repeatRefresh: true,
              scrollTrigger: {
                toggleActions: "play pause resume reset",
                id: "home_section_3_text" + (i + 1),
                trigger: section_3_card,
                start: "+100px bottom",
                end: "bottom top",
              },
            }
          );
          gsap.fromTo(
            section_3_cover,
            {
              y: "100px",
            },
            {
              duration: 1,
              y: "0",
              repeatRefresh: true,
              scrollTrigger: {
                toggleActions: "play pause resume reset",
                id: "home_section_3_cover" + (i + 1),
                trigger: section_3_cover,
                start: "top bottom",
                end: "bottom top",
              },
            }
          );
        }
      },
      section4Animate() {
        const { section_4, section4Text, section4Cover1, section4Cover2 } =
          this.$refs;
        gsap.fromTo(
          [section4Cover1, section4Cover2],
          {
            opacity: 0,
            y: "100px",
          },
          {
            opacity: 1,
            y: "0",
            duration: 1,
            scrollTrigger: {
              toggleActions: "play pause resume reset",
              id: "home_section_4_1",
              trigger: section_4,
              start: "top bottom",
              end: "bottom top",
            },
          }
        );
        gsap.fromTo(
          section4Text,
          {
            y: "100px",
          },
          {
            opacity: 1,
            duration: 1,
            y: "0",
            repeatRefresh: true,
            scrollTrigger: {
              toggleActions: "play pause resume reset",
              id: "home_section_4_2",
              trigger: section_4,
              start: "top bottom",
              end: "bottom top",
            },
          }
        );
        ScrollTrigger.create({
          id: "home_section_4_3",
          trigger: section_4,
          start: "top top",
          end: "+=100",
          pin: true,
          anticipatePin: 1,
          // pinSpacing: false,
        });
      },
      section5Animate() {
        const { section_5, section5Text } = this.$refs;
        gsap.fromTo(
          section5Text,
          {
            x: "-50%",
          },
          {
            opacity: 1,
            duration: 1,
            ease: "power3",
            y: "-50%",
            repeatRefresh: true,
            scrollTrigger: {
              toggleActions: "play pause resume reset",
              id: "home_section_5_1",
              trigger: section_5,
              start: "top bottom",
              end: "bottom top",
            },
          }
        );
        ScrollTrigger.create({
          id: "home_section_5_2",
          trigger: section_5,
          start: "top top",
          end: "+=100",
          pin: true,
          anticipatePin: 1,
          // pinSpacing: false,
        });
      },
      section6Animate() {
        const { section_6 } = this.$refs;
        ScrollTrigger.create({
          id: "home_section_6",
          trigger: section_6,
          start: "top top",
          end: "+=200",
          pin: true,
          anticipatePin: 1,
          // pinSpacing: false,
        });
      },
    },
    beforeUpdate() {
      this.section1PopRefs = [];
    },
    async mounted() {
      this.section1Animate();
      this.section2Animate();
      this.section3Animate();
      this.section3MdAnimate();
      this.section4Animate();
      this.section5Animate();
      this.section6Animate();
    },
    beforeUnmount() {
      ScrollTrigger.getById("home_section_2").kill(true);
      for (let i = 0; i < this.$refs.section_3_cards.length; i++) {
        ScrollTrigger.getById("home_section_3_text_" + i + 1).kill(true);
        ScrollTrigger.getById("home_section_3_cover_" + i + 1).kill(true);
      }
      ScrollTrigger.getById("home_section_3_md").kill(true);
      ScrollTrigger.getById("home_section_4_1").kill(true);
      ScrollTrigger.getById("home_section_4_2").kill(true);
      ScrollTrigger.getById("home_section_4_3").kill(true);
      ScrollTrigger.getById("home_section_5_1").kill(true);
      ScrollTrigger.getById("home_section_5_2").kill(true);
      ScrollTrigger.getById("home_section_6").kill(true);
    },
  };
</script>

<style scoped>
  .hero {
    background: radial-gradient(
      27.09% 42.81% at 50.39% 57.19%,
      #ffffff 0%,
      #f3f5fa 100%
    );
  }
</style>
