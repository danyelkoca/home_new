<script>
  export let data;
  import { story } from "$stores/story";
  import Navbar from "$components/Navbar.svelte";

  const episode = $story.filter((episode) => episode.id == data.episode_id)[0];
  console.log(episode);
</script>

<Navbar />

<h1>{episode.id}</h1>
<img src={episode.img} alt={episode.img} />
