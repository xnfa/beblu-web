<template>
  <div ref="container">
    <section
      class="relative overflow-hidden h-[100vh] hero flex flex-col items-center"
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
          alt
        />
      </div>
      <img
        class="absolute w-[310px] bottom-0"
        src="/images/sections/home-section-1/screenshot.png"
        alt
      />
      <div
        class="text-5xl md:text-[4.875rem] md:mt-[112px] mt-[56px] font-bold text-normal text-center leading-none"
      >
        One App is Enough
      </div>
      <div class="pt-6 md:pt-10 mb-6 leading-none text-light text-[1.375rem]">
        AI for your workspace
      </div>
      <app-link
        to="lang-download"
        class="block md:absolute md:right-[5%] md:bottom-[61px]"
      >
        <button
          type="button"
          class="rounded-full p-3 text-[1.375rem] leading-none flex-1 bg-white font-bold w-[172px]"
          style="box-shadow: 0px 2px 10px rgba(104, 252, 252, 0.25)"
        >
          DOWNLOAD
        </button>
      </app-link>
    </section>
    <section
      class="relative flex justify-center overflow-hidden h-[100vh]"
      ref="section_2"
    >
      <div class="fixed -z-10 top-0 left-0 h-[100vh] w-[100vw]">
        <img
          class="absolute top-[75px] left-[-45px] w-[178px]"
          src="/images/sections/home-section-2/ball.png"
          alt
          ref="ball_0"
        />
        <img
          class="absolute bottom-[-85px] left-[148px] w-[249px]"
          src="/images/sections/home-section-2/ball.png"
          alt
          ref="ball_1"
        />
        <img
          class="absolute top-[125px] right-[-90px] w-[293px]"
          src="/images/sections/home-section-2/ball.png"
          alt
          ref="ball_2"
        />
      </div>
      <div ref="canvas_2" class="absolute bottom-0 w-[1080px]"></div>
    </section>
    <section class="overflow-hidden h-[100vh] bg-[#768797]" ref="section_3">
      <div class="flex flex-col md:flex-row container mx-auto w-full h-full">
        <div
          class="w-full md:w-[50%] flex-1 md:h-full relative overflow-hidden order-6 md:order-1 mx-auto"
        >
          <div ref="canvas_3" class="absolute bottom-0"></div>
        </div>
        <div
          class="w-full md:w-[50%] h-[300px] order-5 text-white flex flex-col md:justify-center p-[3rem]"
        >
          <div class="relative">
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.875rem] font-black leading-none opacity-0"
                ref="section3Header1"
              >
                Take control of your surroundings
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[2.5rem] opacity-0"
                ref="section3Text1"
              >
                Thanks to advanced and intuitive features, Beblu allows you to
                control your office’s Smart features at the ease and comfort of
                your desk.
              </p>
            </div>
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.875rem] font-black leading-none opacity-0"
                ref="section3Header2"
              >
                2
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[2.5rem] opacity-0"
                ref="section3Text2"
              >
                123123
              </p>
            </div>
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.875rem] font-black leading-none opacity-0"
                ref="section3Header3"
              >
                3
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[2.5rem] opacity-0"
                ref="section3Text3"
              >
                123123
              </p>
            </div>
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.875rem] font-black leading-none opacity-0"
                ref="section3Header4"
              >
                4
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[2.5rem] opacity-0"
                ref="section3Text4"
              >
                123123
              </p>
            </div>
            <div class="absolute">
              <h2
                class="text-[3rem] md:text-[4.875rem] font-black leading-none opacity-0"
                ref="section3Header5"
              >
                5
              </h2>
              <p
                class="text-[1.375rem] font-light mt-[2.5rem] opacity-0"
                ref="section3Text5"
              >
                123123
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
      <div class="h-full">
        <img
          class="hidden md:block w-full"
          src="/images/sections/home-section-4/img_events.png"
        />
        <img
          class="block md:hidden w-full"
          src="/images/sections/home-section-4/img_events-sm.png"
        />
      </div>
      <div class="absolute bottom-0 w-full text-white">
        <div
          class="mx-auto md:w-[37rem] px-[1.875rem] md:px-0 opacity-0"
          ref="section4Text"
        >
          <h2
            class="text-[3rem] md:text-[4.875rem] font-black leading-none text-center md:text-left"
          >
            Meet. Learn. Play.
          </h2>
          <p class="text-[1.375rem] font-light mt-[2.5rem]">
            Want to network with like-minded people but not sure how to? With
            Beblu, you can explore and sign up for events or even promote your
            events.
          </p>
          <div class="flex flex-col md:flex-row gap-6 md:gap-10 mt-6">
            <button
              type="button"
              class="border-white border-2 rounded-full p-3 text-[1.375rem] leading-none flex-1"
            >
              Upcoming Events
            </button>
            <button
              type="button"
              class="border-white border-2 rounded-full p-3 text-[1.375rem] leading-none flex-1"
            >
              Blog
            </button>
          </div>
        </div>
      </div>
    </section>
    <section
      class="overflow-hidden relative h-[100vh] bg-cover bg-center"
      ref="section_5"
      style="background-image: url('/images/sections/download/bg.jpg')"
    >
      <div class="absolute bottom-0 w-full text-black text-center">
        <div class="mx-auto md:w-[37rem] opacity-0" ref="section5Text">
          <h2 class="text-[3rem] md:text-[4.875rem] font-black leading-none">
            Work Smart Now.
          </h2>
          <p class="text-[1.375rem] mt-5">
            Live, work, play and connect with Beblu
          </p>
          <div class="mt-10">
            <button
              type="button"
              class="rounded-full p-3 text-[1.375rem] leading-none flex-1 bg-white font-bold w-[172px]"
              style="box-shadow: 0px 2px 10px rgba(104, 252, 252, 0.25)"
            >
              DOWNLOAD
            </button>
          </div>
        </div>
      </div>
    </section>
    <section
      class="overflow-hidden relative h-[100vh] bg-cover bg-center bg-[#F4F6FA] flex items-center justify-center"
      ref="section_6"
    >
      <div id="form">
        <h2
          class="text-[3rem] md:text-[4rem] font-black leading-none text-normal text-center mb-8"
        >
          Want to know more?<br />Talk to us!
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          class="mb-4 block w-full px-3 py-2 bg-white border border-[#EBEDF0] rounded-md text-sm shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          class="mb-4 block w-full px-3 py-2 bg-white border border-[#EBEDF0] rounded-md text-sm shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          class="mb-4 block w-full px-3 py-2 bg-white border border-[#EBEDF0] rounded-md text-sm shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          class="mb-4 block w-full px-3 py-2 bg-white border border-[#EBEDF0] rounded-md text-sm shadow-sm placeholder-[#BFBFBF] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
        <p class="text-[#37C0BA] text-xs">*required field</p>
        <div class="text-center pt-5">
          <button
            type="button"
            class="border-black border-2 rounded-full p-3 text-lg leading-none flex-1 font-bold w-[172px]"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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
</script>

<script>
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
        const { section_2, ball_0, ball_1, ball_2, canvas_2 } = this.$refs;
        const handle = lottie.loadAnimation({
          container: canvas_2, // the dom element that will contain the animation
          renderer: "svg",
          loop: true,
          autoplay: false,
          path: "lottie/home-section-2/data.json", // the path to the animation json
        });

        ScrollTrigger.create({
          trigger: section_2,
          start: "top bottom",
          onToggle: (self) => {
            if (self.isActive) {
              handle.play();
            } else {
              handle.stop();
            }
          },
        });

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
          loop: true,
          autoplay: false,
          path: "lottie/home-section-3/data.json", // the path to the animation json
        });
        const tl = gsap.timeline({
          repeat: -1,
          paused: true,
        });

        tl.fromTo(
          section3Header1,
          {
            y: 50,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3",
          },
          "<+=2"
        )
          .fromTo(
            section3Text1,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=0.3"
          )
          .to(
            [section3Header1, section3Text1],
            {
              y: -50,
              opacity: 0,
              duration: 1,
              ease: "power3",
            },
            5
          )
          .fromTo(
            section3Header2,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=2"
          )
          .fromTo(
            section3Text2,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=0.3"
          )
          .to(
            [section3Header2, section3Text2],
            {
              y: -50,
              opacity: 0,
              duration: 1,
              ease: "power3",
            },
            10
          )
          .fromTo(
            section3Header3,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=2"
          )
          .fromTo(
            section3Text3,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=0.3"
          )
          .to(
            [section3Header3, section3Text3],
            {
              y: -50,
              opacity: 0,
              duration: 1,
              ease: "power3",
            },
            16
          )
          .fromTo(
            section3Header4,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=2"
          )
          .fromTo(
            section3Text4,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=0.3"
          )
          .to(
            [section3Header4, section3Text4],
            {
              y: -50,
              opacity: 0,
              duration: 1,
              ease: "power3",
            },
            20.5
          )
          .fromTo(
            section3Header5,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=2"
          )
          .fromTo(
            section3Text5,
            {
              y: 50,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3",
            },
            "<+=0.3"
          )
          .to(
            [section3Header5, section3Text5],
            {
              y: -50,
              opacity: 0,
              duration: 0,
              ease: "power3",
            },
            28
          );

        ScrollTrigger.create({
          trigger: section_3,
          start: "top bottom",
          onToggle: (self) => {
            if (self.isActive) {
              handle.play();
              tl.play();
            } else {
              handle.pause();
              tl.pause();
            }
          },
        });
      },
      section4Animate() {
        const { section_4, section4Text } = this.$refs;
        gsap.to(section4Text, {
          opacity: 1,
          duration: 2,
          y: -100,
          repeatRefresh: true,
          scrollTrigger: {
            trigger: section_4,
            start: "center bottom",
            end: "center top",
          },
        });
      },
      section5Animate() {
        const { section_5, section5Text } = this.$refs;
        gsap.to(section5Text, {
          opacity: 1,
          duration: 2,
          y: "-50vh",
          repeatRefresh: true,
          scrollTrigger: {
            trigger: section_5,
            start: "center bottom",
            end: "center top",
          },
        });
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
      }, 1000);
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
