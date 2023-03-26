<script>
  import Navbar from "$components/Navbar.svelte";
  import { blog } from "$stores/blog";
  import { base } from "$app/paths";
</script>

<Navbar />

<h1>blog</h1>

<ul>
  {#each $blog as article}
    <li>
      <a href="{base}/blog/{article.id}">
        <h3>{article.title}</h3>
        <img src={article.img} alt={article.title} /></a
      >
    </li>
  {/each}
</ul>
