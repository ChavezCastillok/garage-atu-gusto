<script>
  export let HTMLcontent = "Sin contenido";
  export let activeModal = false;

  const closeModal = () => (activeModal = false);
</script>

<div class="modal {activeModal ? 'is-active' : ''} ">
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

<style>
  .modal-content {
    color: black;
  }
</style>
