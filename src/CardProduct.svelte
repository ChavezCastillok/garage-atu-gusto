<script>
  export let product;
</script>

<div class="columns is-mobile is-multiline bg-ghost">
  <div class="column">
    <figure class="image is-1by1">
      <img src="img/gatg-dp11.png" alt="product-img" />
    </figure>
  </div>
  <div class="column ">
    <header>
      <h2 class="title is-5">{product.name}</h2>
    </header>
    <div class="content">
      <p>{product.state}, {product.cant} disponible(s).</p>
      <p class="box">
        $ {product.price} COP*
      </p>
      <span class="help is-info">*Precio por unidad.</span>
    </div>
  </div>
  <div class="column is-full">
    <p>{product.description}</p>
    {#each product.tags as tag}
      {#if product.tags[0] == "hogar"}
        <span class="tag is-link is-light m-1">{tag}</span>
      {:else if product.tags[0] == "repuesto-car"}
        <span class="tag is-warning is-light m-1">{tag}</span>
      {:else if product.tags[0] == "huerto"}
        <span class="tag is-primary is-light m-1">{tag}</span>
      {:else}
        <span class="tag is-light m-1">{tag}</span>
      {/if}
    {/each}
  </div>
</div>

<style>
  .columns {
    width: 440px;
  }
  .bg-ghost {
    background-color: rgba(248, 248, 255, 0.8);
  }
  .column .title.is-5 {
    font-family: "Comfortaa";
    color: darkblue;
    text-shadow: none;
  }

  p {
    color: #7f9dde;
  }

  .content .box {
    font-family: "Linux Biolinum G";
    color: darkblue;
    font-size: 1.2rem;
  }
</style>
