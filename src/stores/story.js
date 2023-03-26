import { readable } from "svelte/store";

import slovenia from "$assets/story/slovenia.jpg";
import toefl from "$assets/story/toefl.jpg";
import sat from "$assets/story/sat.jpg";
import mext from "$assets/story/mext.jpg";
import kyotouniversity from "$assets/story/kyotouniversity.jpg";
import roots from "$assets/story/roots.jpg";
import internship from "$assets/story/internship.jpg";
import gomigo from "$assets/story/gomigo.jpg";
import its from "$assets/story/its.jpg";
import japanese from "$assets/story/japanese.jpg";
import mynexthouse from "$assets/story/mynexthouse.jpg";
import graduation from "$assets/story/graduation.jpg";
import zs from "$assets/story/zs.jpg";
import aimer from "$assets/story/aimer.jpg";
import od from "$assets/story/od.jpg";
import promotion from "$assets/story/promotion.jpg";
import jdd from "$assets/story/jdd.jpg";
import mckinsey from "$assets/story/mckinsey.jpg";

export const story = readable([
  {
    id: "mckinsey",
    img: mckinsey,
  },
  {
    id: "jdd",
    img: jdd,
  },
  {
    id: "promotion",
    img: promotion,
  },
  {
    id: "od",
    img: od,
  },
  {
    id: "aimer",
    img: aimer,
  },
  {
    id: "zs",
    img: zs,
  },
  {
    id: "graduation",
    img: graduation,
  },
  {
    id: "mynexthouse",
    img: mynexthouse,
  },
  {
    id: "japanese",
    img: japanese,
  },
  {
    id: "its",
    img: its,
  },
  {
    id: "gomigo",
    img: gomigo,
  },
  {
    id: "internship",
    img: internship,
  },
  {
    id: "roots",
    img: roots,
  },
  {
    id: "kyotouniversity",
    img: kyotouniversity,
  },
  {
    id: "mext",
    img: mext,
  },
  {
    id: "sat",
    img: sat,
  },
  {
    id: "toefl",
    img: toefl,
  },
  {
    id: "slovenia",
    img: slovenia,
  },
]);
