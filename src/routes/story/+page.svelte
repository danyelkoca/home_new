<script>
  import Navbar from "$components/Navbar.svelte";
  import { story } from "$stores/story";
  import { base } from "$app/paths";
</script>

<Navbar />

<h1>Story</h1>

<ul>
  {#each $story as episode}
    <li>
      <a href="{base}/story/{episode.id}">
        <img src={episode.img} alt={episode.id} /></a
      >
    </li>
  {/each}
</ul>
