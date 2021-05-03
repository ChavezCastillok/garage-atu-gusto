<script>
  export let title;
  export let activemodal;
  export let products;

  const closeModal = () => (activemodal = false);
</script>

{#if activemodal}
  <div class="modal is-active">
    <div class="modal-background" on:click={closeModal} />
    <div class="modal-content">
      <section class="content section has-background-white">
        <table class="table">
          <caption class="title">
            {title}
          </caption>
          <thead>
            <tr>
              <th>Cant</th>
              <th>Descripción</th>
              <th>Condición</th>
              <th>Precio COP</th>
            </tr>
          </thead>
          <tbody id="list-repuestos">
            {#each products as product}
              <tr>
                <td>{product.cant}</td>
                <td>{product.name}</td>
                <td>{product.state}</td>
                <td>{product.price}</td>
              </tr>
            {/each}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">
                Si te interesa alguno(s) de estos productos escribenos.
                <a href="https://wa.me/584247556983" target="_blank">
                  <ion-icon name="logo-whatsapp" size="large" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </section>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={closeModal}
    />
  </div>
{/if}

<style>
  .modal ion-icon {
    color: #7f9dde;
  }
  .modal-content .section .title {
    color: #7f9dde;
    text-shadow: 1px 1px yellow;
  }
</style>
