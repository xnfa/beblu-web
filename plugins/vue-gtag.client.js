import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "UA-221552657-1",
      params: {
        send_page_view: true,
      },
    },
  });
});
