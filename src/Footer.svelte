<script>
  let size = "small";
</script>

<footer class="footer">
  <article class="content has-text-centered">
    <p>
      <span class="icon-text">
        <span class="icon">
          <ion-icon name="location-outline" size="large" />
        </span>
        <span>Santa Teresa, San Cristobal, Táchira.</span>
      </span>
      <a href="tel:+584141755444">
        <span class="icon-text">
          <span class="icon">
            <ion-icon name="call-outline" />
          </span>
          <span>+58 414 175 54 44</span>
        </span>
      </a>
      <a href="https://wa.me/584141755444" target="_blank">
        <span class="icon-text">
          <span class="icon">
            <ion-icon name="logo-whatsapp" {size} />
          </span>
          <span>Julio Chavez</span>
        </span>
      </a>
    </p>
    <hr />
    <p>
      <span class="icon-text">
        <span class="icon">
          <ion-icon name="code-slash-outline" />
        </span>
        <span>
          Dev:
          <a href="https://chavezcastillok.github.io/" target="_blank">
            <small>@chavezcastillok</small>
          </a>
        </span>
      </span>
    </p>
  </article>
</footer>

<style>
  footer {
    border-radius: 0.3rem;
    background-color: #7f9ddece;
  }
  a {
    color: gold;
  }
  ion-icon {
    color: ghostwhite;
  }
  @media screen and (max-width: 768px) {
    .footer article:first-child {
      margin-bottom: 1rem;
    }
  }
</style>
