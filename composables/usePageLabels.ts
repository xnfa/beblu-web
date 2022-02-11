import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@urql/vue";

interface F {
  (key: string): any;
  notFound: boolean;
}

export const usePageLabels = async (
  page: string,
  fields: string[]
): Promise<F> => {
  const route = useRoute();
  const lang = route.params.lang || "en";
  const { data, error } = await useQuery({
    query: `
      {
        ${page} {
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            id
            ${fields.join("\n")}
          }
        }
      }
    `,
  });
  if (
    !data.value ||
    !data.value[page] ||
    data.value[page].translations.length === 0
  ) {
    const fn = () => "";
    fn.notFound = true;
    return fn;
  }

  const fn = (key: string) => {
    const labels = data.value && data.value[page].translations[0];
    return labels ? labels[key] : "";
  };
  fn.notFound = false;
  return fn;
};
