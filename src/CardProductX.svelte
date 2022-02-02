<script>
  import ModalProduct from "./ModalProduct.svelte";

  export let product, exchangeRateBCV;
  let activemodal = false;

  let fullDateTime = new Date();
  let today = `${fullDateTime.getDate()}/${
    fullDateTime.getMonth() + 1
  }/${fullDateTime.getFullYear()}`;
  let exchangeRateVEStoCOP =
    3500 / (isNaN(exchangeRateBCV) ? 0 : exchangeRateBCV);
</script>

<ModalProduct {product} {activemodal} imgSRC={product.photo} />
<article
  class="columns is-mobile is-multiline bg-ghost"
  on:click={() => (activemodal = true)}
>
  <div class="column">
    <figure class="image is-1by1">
      <img
        src={product.photo != "" ? product.photo : "./img/gatg-dp11.png"}
        alt="product-img"
      />
    </figure>
  </div>
  <section class="column">
    <header>
      <h2 class="title is-5 mb-1">{product.name}</h2>
    </header>
    <div class="content">
      {#if product.available}
        <p>
          <span
            class="tag is-light {product.state == 'nuevo'
              ? 'is-success'
              : 'is-warning'}">{product.state}</span
          >
          <span class="tag is-success">Disponible</span>
        </p>
      {:else}
        <p><span class="tag is-warning">No disponible</span></p>
      {/if}
      <p
        class="box"
        title="{today} Bs.{(
          (product.price / exchangeRateVEStoCOP) *
          1.16
        ).toFixed(2)}"
      >
        $ <span class="num"
          >{product.price == 0 ? "Consultar" : product.price}</span
        > COP*
      </p>
      <span class="help is-info">*Precio por unidad.</span>
    </div>
  </section>
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
</article>

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

  .num {
    font-family: "Linux Biolinum G", "Linux Biolinum";
  }
</style>
