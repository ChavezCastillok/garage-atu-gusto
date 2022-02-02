<script>
  export let title = "Default product";
  export let img_src = "img/Garage a tu Gusto.png";
  export let description = "Default description";
  export let link = "";
  export let tags = [];
</script>

<div class="card">
  <header class="card-header">
    <p class="card-header-title">{title}</p>
  </header>
  <a href={link} target="_blank">
    <div class="card-image">
      <figure class="image is-1by1">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={img_src} alt="Placeholder image" />
      </figure>
    </div>
  </a>
  <div class="card-content">
    <p>
      {description}
    </p>
    <p>
      {#each tags as tag}
        {#if tag == "repuesto-car"}
          <span class="tag is-warning mr-1">{tag}</span>
        {:else if tag == "huerto"}
          <span class="tag is-success mr-1">{tag}</span>
        {:else if tag == "hogar"}
          <span class="tag is-link mr-1">{tag}</span>
        {:else}
          <span class="tag is-info mr-1">{tag}</span>
        {/if}
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
