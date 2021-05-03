<script>
  export let HTMLcontent = "Sin contenido";
  export let activemodal = false;

  const closeModal = () => (activemodal = false);
</script>

{#if activemodal}
  <div class="modal is-active">
    <div class="modal-background" on:click={closeModal} />
    <div class="modal-content">
      <section class="section content has-background-white">
        {@html HTMLcontent}
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
  .modal-content {
    color: black;
  }
</style>
