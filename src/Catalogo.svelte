<script>
  import { products } from "./stores.js";
  import CardProduct from "./CardProduct.svelte";
</script>

<section>
  <h1 class="title">Catalogo de productos</h1>
  <div class="columns is-multiline">
    {#each $products.sort() as product}
      <div class="column m-1">
        <CardProduct {product} />
      </div>
    {/each}
  </div>
</section>

<style>
  .title {
    font-family: "Fredoka One", "Andika";
    color: ghostwhite;
    text-shadow: 1px 1px #7f9dde;
  }
  .column {
    display: flex;
    justify-content: center;
  }
</style>
