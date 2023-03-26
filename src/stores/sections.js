import { readable } from "svelte/store";
import About from "$components/sections/About.svelte";
import Blog from "$components/sections/Blog.svelte";
import Contact from "$components/sections/Contact.svelte";
import Story from "$components/sections/Story.svelte";
import Works from "$components/sections/Works.svelte";

export const sections = readable([
  {
    id: "about",
    title: "About me",
    component: About,
  },
  {
    id: "works",
    title: "My Works",
    component: Works,
  },
  {
    id: "story",
    title: "My Story",
    component: Story,
  },
  {
    id: "blog",
    title: "Blog",
    component: Blog,
  },
  {
    id: "contact",
    title: "Contact Me",
    component: Contact,
  },
]);
