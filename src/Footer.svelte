<script>
  import SocialMediaIcons from "./SocialMediaIcons.svelte";

  let size = "small";
</script>

<footer class="footer">
  <div class="columns is-multiline">
    <article class="column is-7">
      <p class="tf">
        <ion-icon name="location-outline" />
        Ubicación para entrega (No tenemos local fisico):
      </p>
      <address>
        Santa Teresa, carrera 2 a media cuadra de 3 esquinas frente al local
        evangelico, San Cristobal, Tachira.
      </address>
      <p class="tf">Servicio de entrega a domicilio (condicionado):</p>
      <p>San Cristobal, Tariba y Palmira.</p>
    </article>
    <article class="column">
      <p class="tf">Contactar con:</p>
      <p>
        <ion-icon name="person-circle-outline" />
        Julio Chavez
        <a href="https://wa.me/584247556983" target="_blank">
          <ion-icon name="logo-whatsapp" {size} />
        </a>
      </p>
      <br />
      <p>
        Garage a tu Gusto en: <SocialMediaIcons size="large" />
      </p>
    </article>
    <article class="column is-full">
      <p>
        <span class="icon">
          <ion-icon name="code-slash-outline" />
        </span>
        Dev:
        <a href="https://chavezcastillok.github.io/"
          ><small>@chavezcastillok</small>
        </a>
      </p>
    </article>
  </div>
</footer>

<style>
  a {
    color: gold;
  }
  ion-icon {
    color: ghostwhite;
  }
  .footer {
    background-color: #7f9ddece;
  }
  .tf {
    font-weight: bold;
    font-size: 1.1rem;
  }
  @media screen and (max-width: 768px) {
    .footer article:first-child {
      margin-bottom: 1rem;
    }
  }
</style>
