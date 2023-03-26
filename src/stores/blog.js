import { readable } from "svelte/store";

import growth_component from "$components/blog/Growth.svelte";
import growth_img from "$assets/blog/growth.jpg";

import Pickles_component from "$components/blog/Pickles.svelte";
import pickles_img from "$assets/blog/pickles.jpg";

import linkedin_component from "$components/blog/Linkedin.svelte";
import linkedin_img from "$assets/blog/linkedin.jpg";

export const blog = readable([
  {
    id: "growth",
    title: "Growth marketing done right",
    img: growth_img,
    component: growth_component,
  },
  {
    id: "pickles",
    title: "How to make delicious pickles",
    img: pickles_img,
    component: Pickles_component,
  },
  {
    id: "linkedin",
    title: "Why I quit linkedin",
    img: linkedin_img,
    component: linkedin_component,
  },
]);
