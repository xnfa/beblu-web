import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@urql/vue";

export const usePageLabels = async (page: string, fields: string[]) => {
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

  return (key: string) => {
    const labels = data.value && data.value[page].translations[0];
    return labels ? labels[key] : "";
  };
};
