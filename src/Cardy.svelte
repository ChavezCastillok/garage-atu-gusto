<script>
  export let title = "Default product";
  export let img_src = "img/Garage a tu Gusto.png";
  export let description = "Default description";
  export let tags = [];
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">{title}</p>
  </header>
  <div class="card-image">
    <figure class="image is-1by1">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src={img_src} alt="Placeholder image" />
    </figure>
  </div>
  <div class="card-content">
    <p>
      {@html description}
    </p>
    <p>
      {#each tags as tag}
        <span class="tag is-info mr-1">{tag}</span>
      {/each}
    </p>
  </div>
</div>

<style>
  .card-header-title {
    display: block;
    text-align: center;
    color: #3298dc;
  }
</style>
