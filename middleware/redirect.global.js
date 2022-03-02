export default defineNuxtRouteMiddleware((to, from) => {
  if (
    to.params.lang &&
    ["cn", "en", "ms", "id"].indexOf(to.params.lang) === -1
  ) {
    return navigateTo("/_404");
  }
});
