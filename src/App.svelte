<script>
  import { onMount } from "svelte";
  import { products } from "./stores.js";

  import Cardy from "./Cardy.svelte";
  import CardProduct from "./CardProduct.svelte";
  import Footer from "./Footer.svelte";
  import ModalContent from "./ModalContent.svelte";
  import ModalProducts from "./ModalProducts.svelte";
  import SocialMediaIcons from "./SocialMediaIcons.svelte";

  let exchangeRateBCV;

  let inputSearch = "";
  let search_results = [];
  function search_product(input = "") {
    let results = [];
    if (input !== "") {
      $products.forEach((product) => {
        if (product.name.toLowerCase().includes(input.toLowerCase())) {
          results.push(product);
        }
      });
    }
    return results;
  }
  function searching() {
    if (inputSearch.length > 1) {
      search_results = search_product(inputSearch);
    } else {
      search_results = [];
    }
  }

  function search_reset() {
    inputSearch = "";
    search_results = [];
  }

  let modalHogar = false;
  let modalRepuestos = false;
  let modalHuerto = false;
  let modalMore = false;

  const gatg_on_fb = "https://fb.me/garageatugusto";
  const gatg_on_wa = "https://wa.me/584247556983";
  const logo_src = "img/gatg.png";

  let modalMoreContent = `
  <div class="columns is-mobile">
  <div class="column is-one-third">
    <figure class="image is-128x128">
      <img src="${logo_src}" alt="logo-garageatugusto" />
    </figure>
  </div>
  <div class="column has-text-left">
    <h1>Contactanos</h1>
    <p>
      Nos puedes encontrar en Facebook como
      <a href="${gatg_on_fb}">Garage a tu Gusto</a>
    </p>
    <p>
      O escribenos directamente via
      <a href="${gatg_on_wa}">Whatsapp</a>
    </p>
    <SocialMediaIcons size="large" />
  </div>
</div>
              `;

  const activeModalHogar = () => (modalHogar = true);
  const activeModalRepuestos = () => (modalRepuestos = true);
  const activemodalHuerto = () => (modalHuerto = true);
  const activeModalMore = () => (modalMore = true);

  async function dolarBCV() {
    await fetch("https://api-divisas-ve.herokuapp.com/v1/")
      .then((res) => res.json())
      .then((json) => {
        exchangeRateBCV = parseFloat(json.data.dollar.value);
      })
      .catch((error) => console.log(error));
  }

  onMount(() => {
    dolarBCV();
  });
</script>

<main class="container">
  <div class="columns is-multiline">
    <div class="column is-full-tablet is-half-desktop">
      <!-- header -->
      <header class="is-flex is-align-items-center is-justify-content-center">
        <figure class="image is-128x128 mr-2">
          <img src="img/gatg.png" alt="logo-garageatugusto" />
        </figure>
        <article class="has-text-left">
          <SocialMediaIcons size="large" />
          <h1 class="title">Garage a tu Gusto</h1>
          <h2 class="subtitle">Productos nuevos y usados + Servicios</h2>
        </article>
      </header>
    </div>
    <div class="column is-flex is-align-items-center is-justify-content-center">
      <section class="is-flex">
        <!-- products menu by category -->
        <div class="dropdown is-hoverable mr-2">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu3"
            >
              <span>Productos </span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu3" role="menu">
            <div class="dropdown-content">
              <a
                class="dropdown-item"
                id="list_repuestos"
                on:click={activeModalRepuestos}
                >Car Repuestos
              </a>
              <a
                class="dropdown-item"
                id="house-products"
                on:click={activeModalHogar}
                >Para el Hogar
              </a>
              <a
                class="dropdown-item"
                id="other-products"
                on:click={activemodalHuerto}
              >
                Para el huerto
              </a>
              <hr class="dropdown-divider" />
              <a class="dropdown-item" id="more" on:click={activeModalMore}>
                Saber más
              </a>
            </div>
          </div>
        </div>
        <!-- field of search -->
        <div class="field has-addons">
          <p class="control">
            <input
              class="input"
              type="text"
              bind:value={inputSearch}
              on:input={searching}
              on:click={search_reset}
              placeholder=":producto"
            />
          </p>
          <p class="control">
            <button class="button"> Buscar </button>
          </p>
        </div>
      </section>
    </div>
  </div>
  <!-- modales -->
  <section>
    <!-- Respuestos para vehiculo -->
    <ModalProducts
      title="Repuestos para el vehiculo"
      products={$products.filter((p) => {
        return p.tags[0] == "repuesto-car";
      })}
      bind:activemodal={modalRepuestos}
    />
    <!-- house products -->
    <ModalProducts
      title="Productos para el hogar"
      products={$products.filter((p) => {
        return p.tags[0] == "hogar";
      })}
      bind:activemodal={modalHogar}
    />
    <!-- huerto products -->
    <ModalProducts
      bind:activemodal={modalHuerto}
      title="Plantas y semillas"
      products={$products.filter((p) => {
        return p.tags[0] == "huerto";
      })}
    />

    <ModalContent bind:activemodal={modalMore} HTMLcontent={modalMoreContent} />
  </section>

  <section
    class="columns is-mobile is-multiline section is-justify-content-center"
  >
    {#if search_results.length >= 1}
      <div class="column is-full">
        <h1 class="title">Resultados de su busqueda</h1>
        <h2 class="subtitle">
          {search_results.length} productos coinciden con: "{inputSearch}".
        </h2>
      </div>
      {#each search_results as product}
        <div class="column is-flex is-justify-content-center m-1">
          <CardProduct {product} {exchangeRateBCV} />
        </div>
      {/each}
    {:else}
      <p>
        Explora todos los productos y servicios que tenemos disponibles para ti
        y no dudes en contactarnos si requieres más información.
      </p>
      <p>
        Los precios publicados son al detal, para precios al mayor consultar
        directamente.
      </p>
    {/if}
  </section>

  <section class="section">
    <div class="columns is-multiline">
      <!-- area destacados -->
      <div class="column is-8 is-9-desktop">
        <header>
          <h1 class="title">Productos destacados</h1>
          <h2 class="subtitle">Al mayor y detal.</h2>
        </header>
        <div class="columns is-multiline">
          <div class="column is-half-tablet is-one-third-desktop">
            <article class="block">
              <Cardy
                title="Resistencia Electrica"
                img_src="img/destacados/rce-gatg.png"
                description="Resistencia, hornilla de cocina electrica de 1000W 110v, tambien el termostato regulador."
                tags={["mayor", "detal"]}
              />
            </article>
            <article class="block">
              <Cardy
                title="Balanza digital"
                img_src="img/destacados/balanza.png"
                description="Balanza digital de cocina con capacidad hasta 7kg, especial
              para reposteria, hogar."
              />
            </article>
          </div>
          <div class="column is-half-tablet is-one-third-desktop">
            <article class="block">
              <Cardy
                title="Bombillos LED"
                img_src="img/destacados/bombillo.png"
                description="Bombillos LED de excelente iluminacion y bajo consumo de 5, 9, 12, 15, 18, 21, 30, 40W. Y más, tambien recargables."
                tags={["mayor", "detal"]}
              />
            </article>
          </div>
          <div class="column is-half-tablet is-one-third-desktop">
            <article class="block">
              <Cardy
                title="Repuestos para licuadoras Oster"
                img_src="img/destacados/kit-licuadora.png"
                description="Kit de repuestos para licuadoras marca Oster, cuadrante, base, acople, vaso, cuchilla, entre otros."
                tags={["mayor", "detal"]}
              />
            </article>
          </div>
        </div>
      </div>
      <!-- area servicios -->
      <aside class="column  is-4 is-3-desktop">
        <header>
          <h1 class="title">Servicios locales</h1>
        </header>
        <div class="columns is-multiline is-mobile">
          <div class="column">
            <article class="block">
              <Cardy
                title="Suspiros y dulces"
                img_src="img/destacados/suspinay.png"
                description="Contacte al num que apacere en la imagen o en su IG:
        <a href='https://www.instagram.com/suspirosnaybeth/'>
          @suspirosnaybeth
        </a>"
              />
            </article>
          </div>
          <div class="column">
            <article class="block">
              <Cardy
                title="Anuncio Servicio y productos"
                description="Anuncie sus servicios o productos aquí."
              />
            </article>
          </div>
        </div>
      </aside>
    </div>
  </section>
  <Footer />
</main>

<style>
  main {
    font-family: "Comfortaa";
    color: ghostwhite;
    text-align: center;
  }

  img {
    border-radius: 50%;
    box-shadow: -5px -5px 10px 5px skyblue;
  }

  .title,
  .subtitle {
    color: ghostwhite;
    text-shadow: 1px 1px #7f9dde;
    font-family: "Fredoka One", "Andika";
  }

  .button {
    background-color: #7f9ddece;
    text-transform: uppercase;
    font-weight: bold;
    color: ghostwhite;
  }
  .button:hover {
    background-color: black;
    color: yellow;
  }

  .section .content p {
    padding: 1rem;
    background-color: #7f9ddece;
  }

  .section header:first-child {
    margin: 1rem;
    padding: 0.5rem;
  }
</style>
