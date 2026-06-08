import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AppPage } from "./pages/AppPage";
import { Contact } from "./pages/Contact";
import { Resources } from "./pages/Resources";
import { ResourceArticle } from "./pages/ResourceArticle";
import { Privacy } from "./pages/Privacy";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "app", Component: AppPage },
      { path: "contact", Component: Contact },
      { path: "resources", Component: Resources },
      { path: "resources/:id", Component: ResourceArticle },
      { path: "privacy", Component: Privacy },
    ],
  },
]);
