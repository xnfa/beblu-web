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
          class="absolute translate-x-[-50%] opacity-0 scale-50"
          :src="pop.url"
          :ref="setSection1PopRefs"
          alt=""
        />
      </div>
      <img
        class="absolute w-[310px] bottom-0"
        src="/images/sections/home-section-1/screenshot.png"
        alt=""
      />
      <div
        class="text-5xl md:text-[4.75rem] md:mt-[112px] mt-[56px] font-bold text-normal text-center leading-none px-[1.875rem] md:px-0"
      >
        {{ p("section_1_title") }}
      </div>
      <div class="pt-6 md:pt-10 mb-6 leading-none text-light text-[1.375rem]">
        {{ p("section_1_content") }}
      </div>
      <app-link
        to="lang-download"
        class="block md:absolute md:right-[5%] md:bottom-[61px]"
      >
        <button
          type="button"
          class="rounded-full p-3 text-lg text-normal hover:text-white leading-none flex-1 bg-white hover:bg-[#28DAD2] shadow-[0_2px_10px_rgba(104,252,252,0.25)] hover:shadow-[0_2px_10px_#68FCFC] font-bold w-[172px]"
        >
          {{ l("download").toUpperCase() }}
        </button>
      </app-link>
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
            class="absolute bottom-0 w-full whitespace-nowrap text-[3rem] md:text-[4.75rem] font-black leading-none opacity-0"
            ref="section2Text1"
          >
            {{ p("section_2_text_1") }}
          </h2>
          <h2
            class="absolute bottom-0 w-full whitespace-nowrap text-[3rem] md:text-[4.75rem] font-black leading-none opacity-0"
            ref="section2Text2"
          >
            {{ p("section_2_text_2") }}
          </h2>
          <h2
            class="absolute bottom-0 w-full whitespace-nowrap text-[3rem] md:text-[4.75rem] font-black leading-none opacity-0"
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
    <section class="overflow-hidden h-[100vh] bg-[#768797]" ref="section_3">
      <div class="flex flex-col md:flex-row container mx-auto w-full h-[100vh]">
        <div
          class="w-full md:w-[50%] md:max-w-[660px] flex-1 md:h-full flex justify-center items-end relative overflow-hidden order-6 md:order-1 mx-auto"
        >
          <div
            ref="canvas_3"
            class="h-full md:h-auto md:w-full aspect-[375/471] mx-auto"
          ></div>
        </div>
        <div
          class="w-full md:w-[50%] h-[20rem] order-5 text-white flex flex-col md:justify-center p-[3rem]"
        >
          <div class="relative">
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.75rem] font-black leading-none opacity-0"
                ref="section3Header1"
              >
                {{ p("section_3_title_1") }}
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[1.25rem] md:mt-[2.5rem] opacity-0"
                ref="section3Text1"
              >
                {{ p("section_3_content_1") }}
              </p>
            </div>
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.75rem] font-black leading-none opacity-0"
                ref="section3Header2"
              >
                {{ p("section_3_title_2") }}
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[1.25rem] md:mt-[2.5rem] opacity-0"
                ref="section3Text2"
              >
                {{ p("section_3_content_2") }}
              </p>
            </div>
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.75rem] font-black leading-none opacity-0"
                ref="section3Header3"
              >
                {{ p("section_3_title_3") }}
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[1.25rem] md:mt-[2.5rem] opacity-0"
                ref="section3Text3"
              >
                {{ p("section_3_content_3") }}
              </p>
            </div>
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.75rem] font-black leading-none opacity-0"
                ref="section3Header4"
              >
                {{ p("section_3_title_4") }}
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[1.25rem] md:mt-[2.5rem] opacity-0"
                ref="section3Text4"
              >
                {{ p("section_3_content_4") }}
              </p>
            </div>
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.75rem] font-black leading-none opacity-0"
                ref="section3Header5"
              >
                {{ p("section_3_title_5") }}
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[1.25rem] md:mt-[2.5rem] opacity-0"
                ref="section3Text5"
              >
                {{ p("section_3_content_5") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      class="overflow-hidden relative h-[100vh] bg-[#000000]"
      ref="section_4"
    >
      <div class="md:h-full md:absolute w-full opacity-0" ref="section4Cover">
        <img
          class="hidden md:block w-full"
          src="/images/sections/home-section-4/img_events.png"
        />
        <img
          class="block md:hidden w-full"
          src="/images/sections/home-section-4/img_events-sm.png"
        />
      </div>
      <div
        class="absolute md:absolute bottom-[8%] md:bottom-[5rem] xl:bottom-[7.5rem] w-full text-white flex items-center justify-center"
      >
        <div
          class="mx-auto md:w-[37rem] px-[1.875rem] md:px-0 opacity-0"
          ref="section4Text"
        >
          <h2
            class="text-[3rem] md:text-[4.75rem] font-black leading-none text-center md:text-left"
          >
            {{ p("section_4_title") }}
          </h2>
          <p class="text-[1.375rem] font-light mt-[2.5rem]">
            {{ p("section_4_content") }}
          </p>
          <div class="flex flex-col md:flex-row gap-6 md:gap-10 mt-6">
            <app-link
              to="lang-community"
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
      <div class="text-black text-center">
        <div
          class="mx-auto px-6 md:px-0 md:w-[37rem] w-full opacity-0 absolute top-1/2 left-1/2"
          ref="section5Text"
        >
          <h2 class="text-[3rem] md:text-[4.75rem] font-black leading-none">
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
      class="overflow-hidden relative min-h-[100vh] bg-cover bg-center bg-[#F4F6FA] flex items-center justify-center"
      ref="section_6"
    >
      <app-contact-us></app-contact-us>
    </section>
  </div>
</template>

<script lang="ts" setup>
  import { useLabels } from "~~/composables/useLabels";
  import { usePageLabels } from "~~/composables/usePageLabels";
  const l = await useLabels();
  const p = await usePageLabels("home", [
    "section_1_content",
    "section_1_title",
    "section_2_text_1",
    "section_2_text_2",
    "section_2_text_3",
    "section_3_content_1",
    "section_3_content_2",
    "section_3_content_3",
    "section_3_content_4",
    "section_3_content_5",
    "section_3_title_1",
    "section_3_title_2",
    "section_3_title_3",
    "section_3_title_4",
    "section_3_title_5",
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
      url: "/images/sections/home-section-1/04.svg",
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
          path: "/lottie/home-section-2/data.json", // the path to the animation json
        });

        const tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: section_2,
            scrub: 1,
            pin: true,
            start: "top top",
            end: "+=6000",
            // pinSpacing: false,
            anticipatePin: 1,
            snap: {
              snapTo: "labelsDirectional", // snap to the closest label in the timeline
              duration: { min: 0.2, max: 2 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: "none", // the ease of the snap animation ("power3" by default)
            },
            onUpdate: (e) => {
              handle.goToAndStop(e.progress * 655, true);
            },
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
            duration: 1,
            ease: "power3",
          },
          0
        )
          .addLabel("1", 2)
          .to(
            section2Text1,
            {
              rotateX: "-90deg",
              opacity: 0,
              duration: 1,
              ease: "power3",
            },
            2
          )
          .fromTo(
            section2Text2,
            {
              rotateX: "90deg",
            },
            {
              rotateX: "0deg",
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            3
          )
          .addLabel("2", 6)
          .to(
            section2Text2,
            {
              rotateX: "-90deg",
              opacity: 0,
              duration: 1,
              ease: "power3",
            },
            6
          )
          .fromTo(
            section2Text3,
            {
              rotateX: "90deg",
            },
            {
              rotateX: "0deg",
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            7
          )
          .to(section2Text3, { duration: 0 }, 21.8)
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
      section3Animate() {
        const {
          section_3,
          canvas_3,
          section3Header1,
          section3Text1,
          section3Header2,
          section3Text2,
          section3Header3,
          section3Text3,
          section3Header4,
          section3Text4,
          section3Header5,
          section3Text5,
        } = this.$refs;
        const handle = lottie.loadAnimation({
          container: canvas_3, // the dom element that will contain the animation
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: "/lottie/home-section-3/data.json", // the path to the animation json
        });
        const tl = gsap.timeline({
          paused: true,
          ease: "none",
          scrollTrigger: {
            trigger: section_3,
            pin: true,
            start: "top top",
            end: "+=8000",
            // pinSpacing: false,
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            snap: {
              snapTo: "labelsDirectional", // snap to the closest label in the timeline
              duration: { min: 0.2, max: 0.4 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 0.1, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: "none", // the ease of the snap animation ("power3" by default)
            },
            onUpdate: (e) => {
              handle.goToAndStop(e.progress * 100, true);
            },
          },
        });

        // part 1
        tl.fromTo(
          section3Header1,
          {
            y: 50,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power3",
          },
          0
        )
          .fromTo(
            section3Text1,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            0.1
          )
          .addLabel("1")
          .to(
            [section3Header1, section3Text1],
            {
              y: -50,
              opacity: 0,
              duration: 0.3,
              ease: "power3",
            },
            0.5
          )
          // part 2
          .fromTo(
            section3Header2,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            0.8
          )
          .fromTo(
            section3Text2,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            0.9
          )
          .addLabel("2")
          .to(
            [section3Header2, section3Text2],
            {
              y: -50,
              opacity: 0,
              duration: 0.3,
              ease: "power3",
            },
            1.3
          )
          // part 3
          .fromTo(
            section3Header3,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            1.6
          )
          .fromTo(
            section3Text3,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            1.7
          )
          .addLabel("3")
          .to(
            [section3Header3, section3Text3],
            {
              y: -50,
              opacity: 0,
              duration: 0.3,
              ease: "power3",
            },
            2.1
          )
          // part 4
          .fromTo(
            section3Header4,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            2.4
          )
          .fromTo(
            section3Text4,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            2.5
          )
          .addLabel("4")
          .to(
            [section3Header4, section3Text4],
            {
              y: -50,
              opacity: 0,
              duration: 0.3,
              ease: "power3",
            },
            2.9
          )
          // part 5
          .fromTo(
            section3Header5,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            3.2
          )
          .fromTo(
            section3Text5,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              ease: "power3",
            },
            3.3
          )
          .addLabel("5");

        // const progress = { frame: 0 };
        // gsap.to(tl, {
        //   frame: 1000,
        //   snap: "frame",
        //   scrollTrigger: {
        //     trigger: section_3,
        //     scrub: true,
        //     pin: true,
        //     start: "top top",
        //     end: "+=800%",
        //     snap: [0.45 / 4, 1.25 / 4],
        //   },
        //   onUpdate: () => {
        //     tl.seek(progress.frame / 250);
        //     handle.goToAndStop(progress.frame / 10, true);
        //   },
        // });

        // ScrollTrigger.create({
        //   trigger: section_3,
        //   start: "top bottom",
        //   onToggle: (self) => {
        //     if (self.isActive) {
        //       handle.play();
        //       tl.play();
        //     } else {
        //       handle.pause();
        //       tl.pause();
        //     }
        //   },
        // });
      },
      section4Animate() {
        const { section_4, section4Text, section4Cover } = this.$refs;
        gsap.to(section4Cover, {
          opacity: 1,
          duration: 0.3,
          scrollTrigger: {
            trigger: section_4,
            start: "center bottom",
            end: "center top",
          },
        });
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
              trigger: section_4,
              start: "center bottom",
              end: "center top",
            },
          }
        );
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
              trigger: section_5,
              start: "center bottom",
              end: "center top",
            },
          }
        );
        ScrollTrigger.create({
          trigger: section_5,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      },
    },
    beforeUpdate() {
      this.section1PopRefs = [];
    },
    async mounted() {
      setTimeout(() => {
        this.section1Animate();
        this.section2Animate();
        this.section3Animate();
        this.section4Animate();
        this.section5Animate();
      }, 600);
    },
    beforeUnmount() {
      // this.trigger1.kill();
      const triggers = ScrollTrigger.getAll();
      for (let i = 0; i < triggers.length; i++) {
        triggers[i].kill(true);
      }
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
