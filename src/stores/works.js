import { readable } from "svelte/store";
import aimer from "$assets/works/aimer.jpg";
import bert from "$assets/works/bert.jpg";
import object from "$assets/works/object.jpg";
import real_estate from "$assets/works/real_estate.jpg";
import weather from "$assets/works/weather.jpg";

// Below are obtained from story section
import jdd from "$assets/story/jdd.jpg";
import od from "$assets/story/od.jpg";

export const works = readable([
  {
    id: "object",
    type: ["data"],
    link: "https://www.youtube.com/watch?v=Mfrqjt2-vVU&ab_channel=DanyelKoca",
    img: object,
    title: {
      en: "Moving object detection",
      jp: "移動物体検出",
    },
  },
  {
    id: "weather",
    type: ["data", "web"],
    link: "https://weather-prediction.vercel.app/",
    img: weather,
    title: {
      en: "Predicting atmospheric temperature using landscape images",
      jp: "気色写真を用いて周辺の気温予測",
    },
  },
  {
    id: "real_estate",
    type: ["data"],
    link: "https://medium.com/p/8cc980cbc350",
    img: real_estate,
    title: {
      en: "House price prediction using machine learning",
      jp: "機械学習を用いて東京の賃貸価格予測",
    },
  },
  {
    id: "jdd",
    type: ["web", "health"],
    link: "https://drugs.vercel.app/",
    img: jdd,
    title: {
      en: "Japan Drug Database",
      jp: "日本薬品データベース",
    },
  },
  {
    id: "od",
    type: ["data"],
    link: "https://ieeexplore.ieee.org/document/9529275",
    img: od,
    title: {
      en: "Origin-destination matrix estimation by deep learning using maps with New York case study",
      jp: "地図データとディープラーニングを用いたOD交通量推定・NY実証実験",
    },
  },
  {
    id: "aimer",
    type: ["web", "health"],
    link: "https://aimer-health-app.herokuapp.com/",
    img: aimer,
    title: {
      en: "Aimer: Healthcare Intelligence App",
      jp: "Aimer: 日本医療アプリ",
    },
  },
  {
    type: ["data"],
    link: {
      en: "https://towardsdatascience.com/japanese-multiclass-text-classification-with-97-accuracy-using-bert-11b1fdc7c27e",
      jp: "https://qiita.com/dannyk/items/bee0249af1f77bc416d8",
    },
    img: bert,
    title: {
      en: "Japanese multiclass text classification with 97% accuracy using BERT",
      jp: "BERTを用いてNHK番組のジャンルを97％の精度で予測しましょう",
    },
  },
]);
