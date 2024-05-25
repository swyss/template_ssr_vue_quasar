const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") },
      { path: "dashboard", component: () => import("pages/general/DashboardPage.vue")},
      { path: "info", component: () => import("pages/general/InfoPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/errors/ErrorNotFound.vue"),
  },
];

export default routes;
