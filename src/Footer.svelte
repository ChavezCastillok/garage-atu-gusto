<script>
  import SocialMediaIcons from "./SocialMediaIcons.svelte";

  let author = "Kevin Chavez";
</script>

<footer class="footer is-flex-tablet is-justify-content-space-evenly">
  <article>
    <p>Ubicación:</p>
    <p>
      <ion-icon name="location-outline" />
      Santa Teresa, San Cristobal, estado Tachira.
    </p>
    <p>Servicio de entrega (condicionado):</p>
    <p>San Cristobal, Tariba y Palmira.</p>
  </article>
  <SocialMediaIcons size="large" />
  <article>
    <p>Autor:</p>
    <p>
      <a href="https://chavezcastillok.github.io">
        <ion-icon name="person-circle-outline" />
        {author}
      </a>
    </p>
  </article>
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
  @media screen and (max-width: 768px) {
    .footer article:first-child {
      margin-bottom: 1rem;
    }
  }
</style>
