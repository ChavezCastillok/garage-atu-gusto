<script>
  export let product;
  export let activemodal = false;

  const closeModal = () => (activemodal = false);
</script>

{#if activemodal}
  <div class="modal is-active">
    <div class="modal-background" on:click={closeModal} />
    <div class="modal-content">
      <article class="section content has-background-white">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
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

        <figure class="image is-1by1">
          <img
            src={product.photo == "" ? "./img/gatg-dp11.png" : product.photo}
            alt="fotografia del producto."
          />
        </figure>
        <p class="box">
          1x $ <span class="num">{product.price}</span> COP*
        </p>
      </article>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={closeModal}
    />
  </div>
{/if}

<style>
  .modal-content {
    color: black;
  }

  .num {
    font-family: "Linux Biolinum G", "Linux Biolinum";
  }
</style>
