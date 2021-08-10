<script>
  import CardProductY from "./CardProductY.svelte";

  export let listProducts;
  export let interval_seg = 4;

  let product, time;

  function select(i) {
    product = listProducts[i];

    let now = Math.round(Math.random() * listProducts.length);
    while (now == i) {
      now = Math.round(Math.random() * listProducts.length);
    }

    clearTimeout(time);
    time = setTimeout(() => {
      select(now % listProducts.length);
    }, interval_seg * 1000);
  }

  select(0);
</script>

<article class="block">
  <CardProductY {product} />
</article>
