<script>
  import Navbar from "$components/Navbar.svelte";
  import { sections } from "$stores/sections";
  import { base } from "$app/paths";
</script>

<Navbar />

<h1>Home</h1>
<ul>
  {#each $sections as section}
    <li>
      <a href="{base}/{section.id}">
        <h3 class="text-3xl font-bold underline">{section.title}</h3>
        <svelte:component this={section.component} /></a
      >
    </li>
  {/each}
</ul>
