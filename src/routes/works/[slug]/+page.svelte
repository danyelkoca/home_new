<script>
  export let data;
  import { works } from "$stores/works";
  import Navbar from "$components/Navbar.svelte";

  const work = $works.filter((work) => work.id == data.work_id)[0];
</script>

<Navbar />

<h1>{work.title.en}</h1>
