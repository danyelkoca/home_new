<script>
  import { base } from "$app/paths";
  import { sections } from "$stores/sections";
</script>

<ul class="flex flex-wrap">
  <li>
    <a href="{base}/"> Home </a>
  </li>
  {#each $sections as section}
    <li>
      <a href="{base}/{section.id}">{section.title}</a>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
  }
  li {
    display: flex;
    margin: 0 1rem;
  }
</style>
