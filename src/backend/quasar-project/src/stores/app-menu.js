import { defineStore } from "pinia";
//
export const useAppMenuStore = defineStore("menus", () => {
  const leftMenuList = [
    {
      icon: "bi-columns-gap",
      label: "Dashboard",
      separator: false,
      link: "",
    },
    {
      icon: "bi-info-square",
      label: "Info",
      separator: true,
      link: "",
  },
    {
      icon: "bi-gear",
      label: "Settings",
      separator: false,
      link: "",
    },
    {
      icon: "bi-question-square",
      label: "Help",
      separator: true,
      link: "",
    },
    {
      icon: "bi-app-indicator",
      label: "COMPONENTS",
      separator: false,
      link: "",
    },
    {
      icon: "bi-graph-up",
      label: "GRAPHS",
      separator: false,
      link: "",
    },
    {
      icon: "bi-cloud-sun",
      label: "WEATHER",
      separator: false,
      link: "",
    },
    {
      icon: "bi-gear-wide-connected",
      label: "AXIOS",
      separator: false,
      link: "",
    },
  ];
  const rightMenuList = [
    {
      icon: "bi-list",
      label: "Inbox",
      separator: true,
      link: "",
    },
  ];
  //
  return { leftMenuList, rightMenuList };
});
