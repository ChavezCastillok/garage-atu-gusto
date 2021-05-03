<script>
  import { books, products } from "./stores.js";

  import Cardy from "./Cardy.svelte";
  import CardProduct from "./CardProduct.svelte";
  import Footer from "./Footer.svelte";
  import ModalContent from "./ModalContent.svelte";
  import ModalProducts from "./ModalProducts.svelte";
  import ModalBooks from "./ModalBooks.svelte";
  import SocialMediaIcons from "./SocialMediaIcons.svelte";

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
  let modalBooks = false;
  let modalMore = false;

  let modalMoreContent = `
  <div class="columns is-mobile">
  <div class="column is-one-third">
    <figure class="image is-128x128">
      <img src="img/gatg.png" alt="logo-garageatugusto" />
    </figure>
  </div>
  <div class="column has-text-left">
    <h1>Contactanos</h1>
    <p>
      Nos puedes encontrar en Facebook como
      <a href="https://fb.me/garageatugusto">Garage a tu Gusto</a>
    </p>
    <p>
      O escribenos directamente via
      <a href="https://wa.me/584247556983">Whatsapp</a>
    </p>
    <SocialMediaIcons size="large" />
  </div>
</div>
              `;

  const activeModalHogar = () => (modalHogar = true);
  const activeModalRepuestos = () => (modalRepuestos = true);
  const activemodalHuerto = () => (modalHuerto = true);
  const activeModalBooks = () => (modalBooks = true);
  const activeModalMore = () => (modalMore = true);
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
              >
                Repuestos
              </a>
              <a
                class="dropdown-item"
                id="list_books"
                on:click={activeModalBooks}
              >
                Libros
              </a>
              <a
                class="dropdown-item"
                id="house-products"
                on:click={activeModalHogar}
              >
                Hogar
              </a>
              <a
                class="dropdown-item"
                id="other-products"
                on:click={activemodalHuerto}
              >
                Del huerto
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
      title="Lista de Repuestos para el vehiculo"
      products={$products.filter((p) => {
        return p.tags[0] == "repuesto-car";
      })}
      bind:activemodal={modalRepuestos}
    />
    <!-- books list -->
    <ModalBooks books={$books} bind:activemodal={modalBooks} />
    <!-- house products -->
    <ModalProducts
      title="Lista de Productos para el hogar"
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
          <CardProduct {product} />
        </div>
      {/each}
    {:else}
      <p>
        Explora todos los productos y servicios que tenemos disponibles para ti
        y no dudes en contactarnos si requieres más información.
      </p>
    {/if}
  </section>

  <section class="section">
    <div class="columns is-multiline">
      <!-- area destacados -->
      <div class="column is-8 is-9-desktop">
        <header>
          <h1 class="title">Productos destacados</h1>
          <p>
            De nuestro
            <a href="catalogo.html"><em>Catalago de productos en venta,</em></a>
            Su sitio favorito para compras en linea. Ubicados en San Cristobal, Estado
            Tachira. Ofrecemos servicio de entrega a domicilio en la ciudad, también
            Tariba y Palmira.
          </p>
        </header>
        <div class="columns is-multiline is-mobile">
          <div class="column  is-half-tablet is-one-third-desktop">
            <article class="block">
              <Cardy
                title="Resistencia Electrica"
                img_src="img/destacados/rce-gatg.png"
                description="Resistencia, hornilla de cocina electrica de 1000W 110v, al mayor
            y detal."
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
                description="Bombillo de excelente iluminacion LED y bajo consumo de 9, 12 y 15W, al mayor y detal"
              />
            </article>
            <article class="block">
              <Cardy />
            </article>
          </div>
          <div class="column is-half-tablet is-one-third-desktop">
            <article class="block">
              <Cardy
                title="Repuestos para licuadoras Oster"
                img_src="img/destacados/kit-licuadora.png"
                description="Kit de repuestos para licuadoras marca Oster, cuadrante, base, acople, vaso, cuchilla, entre otros."
              />
            </article>

            <article class="block">
              <Cardy />
            </article>
          </div>
        </div>
      </div>
      <!-- area servicios -->
      <div class="column  is-4 is-3-desktop">
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
      </div>
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

  a > em {
    text-shadow: 1px 1px #3298dc;
    color: yellow;
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
