<script>
  export let product;
  let wh;
</script>

<div
  class="card"
  bind:clientWidth={wh}
  style="background-image: url({product.photo != ''
    ? product.photo
    : './img/not-photo-gatugusto.png'}); height: {wh}px;"
>
  <header>
    <p class="card-header-title">{product.name}</p>
  </header>
  <div class="card-content">
    <p class="box num">
      Precio: {product.price == 2021 ? "consultar" : product.price} COP
    </p>
  </div>
</div>

<style>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-repeat: no-repeat;
    background-size: cover;
  }
  header {
    background-color: #7f9ddebb;
  }
  .card-header-title {
    display: block;
    text-align: center;
    color: ghostwhite;
    text-shadow: 0 0 0.5rem darkblue;
  }
  .num {
    font-family: "Linux Biolinum G", "Linux Biolinum";
  }
</style>
