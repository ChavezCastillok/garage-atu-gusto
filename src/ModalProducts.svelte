<script>
  import ModalProduct from "./ModalProduct.svelte";

  export let title;
  export let activeModal;
  export let products;
  export let exchangeRateBCV;

  let fullDateTime = new Date();
  let today = `${fullDateTime.getDate()}/${
    fullDateTime.getMonth() + 1
  }/${fullDateTime.getFullYear()}`;
  let exchangeRateVEStoCOP =
    3500 / (isNaN(exchangeRateBCV) ? 0 : exchangeRateBCV);

  const closeModal = () => (activeModal = false);
</script>

<div class="modal {activeModal ? 'is-active' : ''}">
  <div class="modal-background" on:click={closeModal} />
  <div class="modal-content">
    <section class="content section has-background-white">
      <table class="table">
        <caption class="title">
          {title}
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Descripción</th>
            <th>Condición</th>
            <th>Precio COP</th>
          </tr>
        </thead>
        <tbody id="list-repuestos">
          {#each products as product, index}
            <tr>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.state}</td>
              <td
                class="num"
                title="{today} Bs.{(
                  (product.price / exchangeRateVEStoCOP) *
                  1.16
                ).toFixed(2)}"
              >
                {product.price}
              </td>
            </tr>
          {/each}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">
              Si te interesa alguno(s) de estos productos contactenos.
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

<style>
  .modal ion-icon {
    color: #7f9dde;
  }
  .modal-content .section .title {
    color: #7f9dde;
    text-shadow: 1px 1px yellow;
  }

  .num {
    font-size: 1.1rem;
    font-weight: bold;
    color: darkgreen;
    font-family: "Linux Biolinum G" !important;
    text-align: right;
  }
</style>
