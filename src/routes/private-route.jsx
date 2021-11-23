import { HomePage, ReadingListPage } from "../pages";

export const routes = [
    {
      path: "/home-page",
      component: HomePage,
      layout: "/private",
    },
    {
      path: "/reading-list",
      component: ReadingListPage,
      layout: "/private",
    },
    ];