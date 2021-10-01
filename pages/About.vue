<template>
  <div>
    <Header />
    <section id="hero-16" class="hero-section division banners">
      <div class="container p-5">
        <h2 class="text-center fs-2">Notre Mission</h2>
        <p class="text-center">
          Nous visons à aider les gens à renforcer leurs relations et à
          amplifier la puissance de leur réseau.
        </p>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>
    <div class="container about">
      <h3 class="fw-bolder">Un peu d'histoire</h3>
      <p class="tex">
        Sans doute vous voulez savoir ce qu’on fait, pourquoi on le fait, ou
        peut être découvrir qui on est, histoire d’être sûr de ne pas vous faire
        avoir. Bon réflexe. On va commencer par faire court ! B-carte a été
        créée en septembre 2021 par trois étudiants avec l’envie de digitaliser
        les cartes de visites et de resauter plus facilement. Chez b-carte, on
        s’est fixé une mission : Faire de notre produit, l’un des meilleurs en
        termes de qualité et d’impact environnemental. Concrètement, on essaye
        de proposer un service de réseautage facile, durable et accessible. Et
        pour ça, notre principale arme est le rapport qualité prix. C’est ça qui
        nous permet de couper tous les coûts qui ne concernent pas la qualité et
        de mettre tout le bénéfice dans ce qui compte pour nous : le matériau de
        conception des cartes, une livraison gratuite et la gestion de votre
        carnet d’adresse. Dans un univers où le réseautage devient un facteur
        déterminant dans l’acquisition de partenaires pour tout entrepreneur,
        son processus doit être facilité et sécurisé. L’équipe a mis sa
        compétence et toute son énergie en mettant en place ce produit à fort
        impact environnemental afin de lutter contre l’usage excessif du papier
        et du pvc provenant respectivement de la plante et du pétrole.
      </p>
    </div>
    <div class="container teams">
      <h3 class="fw-bolder text-center">Notre Equipe</h3>
      <div class="d-flex justify-content-center pt-5">
        <div class="team p-3">
          <img src="~/assets/images/user.jpg" alt="" srcset="" class="imgs" />
          <h5 class="mt-2 ms-3">Mohamed Amine</h5>
        <i class="fab fa-linkedin-in mx-3 fs-2 text-primary"></i>

        </div>
        <div class="team p-3">
          <img src="~/assets/images/user.jpg" alt="" srcset="" class="imgs" />
          <h5 class="mt-2 ms-3">Mohamed Amine</h5>
        </div>
        <div class="team p-3">
          <img src="~/assets/images/user.jpg" alt="" srcset="" class="imgs" />
          <h5 class="mt-2 ms-3">Mohamed Amine</h5>
        </div>
        <div class="team p-3">
          <img src="~/assets/images/user.jpg" alt="" srcset="" class="imgs" />
          <h5 class="mt-2 ms-3">Mohamed Amine</h5>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
        },
      ],
      script: [
        { src: "/js/jquery-3.6.0.min.js" },
        { src: "/js/bootstrap.min.js" },
        { src: "/js/modernizr.custom.js" },
        { src: "/js/jquery.easing.js" },
        { src: "/js/jquery.appear.js" },
        { src: "/js/jquery.scrollto.js" },
        { src: "/js/menu.js" },
        { src: "/js/owl.carousel.min.js" },
        { src: "/js/jquery.magnific-popup.min.js" },
        { src: "/js/quick-form.js" },
        { src: "/js/request-form.js" },
        { src: "/js/jquery.validate.min.js" },
        { src: "/js/jquery.ajaxchimp.min.js" },
        { src: "/js/wow.js" },
        { src: "/js/custom.js" },
      ],
    };
  },


};
</script>

<style>
.about {
  margin-top: 3rem;
}
.teams {
  margin-top: 2rem;
}
.imgs {
  width: 200px;
}
</style>