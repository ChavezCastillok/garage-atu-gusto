<script>
  export let imgSRC = "";
  export let activemodal = false;

  const closeModal = () => (activemodal = false);
</script>

{#if activemodal}
  <div class="modal is-active">
    <div class="modal-background" on:click={closeModal} />
    <div class="modal-content">
      <p class="image is-4by3">
        <img src={imgSRC} alt="" />
      </p>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      on:click={closeModal}
    />
  </div>
{/if}
