<script>
  export let activemodal;
  export let books;

  const closeModal = () => (activemodal = false);
</script>

{#if activemodal}
  <div class="modal is-active">
    <div class="modal-background" on:click={closeModal} />
    <div class="modal-content">
      <section class="content section has-background-white ">
        <h1>Libros disponibles</h1>
        <table class="table is-hoverable">
          <thead>
            <tr>
              <td>#</td>
              <td>Titulo y autor</td>
              <td>Categoria</td>
              <td>Precio COP</td>
            </tr>
          </thead>
          <tbody>
            {#each books as book, index}
              <tr>
                <td>{index + 1}</td>
                <td>{book.toString()}</td>
                {#if book.tags[1]}
                  <td>{book.tags[1]}</td>
                {:else}
                  <td>...</td>
                {/if}
                <td class="num">{book.price}</td>
              </tr>
            {/each}
          </tbody>
        </table>
        <p>
          Si te interesa alguno(s) de estos libros escribenos.
          <a href="https://wa.me/584247556983" target="_blank">
            <ion-icon name="logo-whatsapp" size="large" />
          </a>
        </p>
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
  ion-icon {
    color: #7f9dde;
  }
  h1 {
    color: #7f9dde;
    text-shadow: 1px 1px yellow;
  }
  p,
  table {
    text-align: left;
    color: black;
  }

  .num {
    font-size: 1.1rem;
    font-weight: bold;
    color: darkslateblue;
    font-family: "Linux Biolinum G" !important;
    text-align: right;
  }
</style>
