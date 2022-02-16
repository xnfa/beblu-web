import { useRoute, useRouter } from "vue-router";

const titleMap = {
  portfolio: {
    en: "Portfolio",
    cn: "产品组合",
    ms: "Portfolio",
    id: "Portfolio",
  },
  our_story: {
    en: "Our Story",
    cn: "品牌介绍",
    ms: "Kisah kami",
    id: "Cerita Kami",
  },
  download: {
    en: "Our Story",
    cn: "下载",
    ms: "Muat turun",
    id: "Unduh",
  },
  contact_us: {
    en: "Contact Us",
    cn: "联系我们",
    ms: "Hubungi kami",
    id: "Hubungi kami",
  },
  community: {
    en: "Community",
    cn: "社区",
    ms: "Komuniti",
    id: "Komunitas",
  },
  careers: {
    en: "Careers",
    cn: "加入我们",
    ms: "Kerjaya",
    id: "Karier",
  },
  solution: {
    en: "Solution",
    cn: "解决方案",
    ms: "Solusi",
    id: "Solusi",
  },
  event: {
    en: "Event",
    cn: "活动",
    ms: "Peristiwa",
    id: "Acara",
  },
  blog: {
    en: "Research & Insights",
    cn: "研究 & 洞察",
    ms: "Penyelidikan & Wawasan",
    id: "Riset & Wawasan",
  },
};

export const useTitle = (page: string): string => {
  const route = useRoute();
  const lang = route.params.lang || "en";

  return titleMap[page][lang];
};
