<script>
  export let data;
  import { blog } from "$stores/blog";
  import Navbar from "$components/Navbar.svelte";

  const article = $blog.filter((article) => article.id == data.article_id)[0];
</script>

<Navbar />

<h1>{article.title}</h1>
