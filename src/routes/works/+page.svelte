<script>
  import Navbar from "$components/Navbar.svelte";
  import { works } from "$stores/works";
  import { base } from "$app/paths";
</script>

<Navbar />

<h1>Works</h1>

<ul>
  {#each $works as work}
    <li>
      <a href="{base}/works/{work.id}">
        <h3>{work.title.en}</h3>
        <img src={work.img} alt={work.id} /></a
      >
    </li>
  {/each}
</ul>
