import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@urql/vue";

export const useLabels = async () => {
  const route = useRoute();
  const lang = route.params.lang || "en";

  const { data, error } = await useQuery({
    query: `
      {
        label {
          id
          key
          translations(filter: {languages_code: {code: {_eq: "${lang}"}}}) {
            content
          }
        }
      }
    `,
  });
  const labels = data.value.label
    .filter((v) => v.translations.length > 0)
    .map((v) => ({
      key: v.key,
      content: v.translations[0].content,
    }));

  return (key: string) => {
    const filtered = labels.filter((v) => v.key === key);
    return filtered[0]?.content || "";
  };
};
