<template>
  <body>
    <section>
      <div class="container">
        <div class="logo">
          <img
            src="~/assets/images/logon.png"
            alt=""
            srcset=""
            class="logo_img"
          />
          <div class="profile">
            <img
              src="~/assets/images/user.jpg"
              alt=""
              srcset=""
              class="profile_img"
            />
            <h3 class="text-center fs-2">User User</h3>
            <h4 class="text-center">Software Engineer - 1337</h4>
            <p class="text-center w-50 m-auto">
              Cela permet d'ajouter un titre et une description par défaut pour
              le référencement ou bien définir la fenêtre d'affichage ou ajouter
              la favicon.
            </p>
            <div class="c mt-5 top-m">
              <a href="#" class="btn btn-success btn-profile w-50 mt-5">
                <i class="far fa-envelope "></i>
                <span class="text-center ">user@gmail.com</span></a
              >
            </div>
            <div class="c">
              <a href="#" class="btn btn-success btn-profile w-50 mt-2">
                <i class="fas fa-phone-alt"></i>
                <span class="text-center"> +212 6967373776</span></a
              >
            </div>
            <div class="d-flex justify-content-center mt-5 re">
              <h4 class="mx-3">Liens</h4>
              <i class="fab fa-linkedin-in mx-3 fs-2 text-primary"></i>
              <i class="fab fa-instagram mx-3 fs-2 text-warning"></i>
              <i class="fab fa-facebook mx-3 fs-2 text-primary"></i>
              <i class="fab fa-whatsapp mx-3 fs-2 text-success"></i>
              <i class="fas fa-link mx-3 fs-2 text-danger"></i>
            </div>
            <div class="d-flex justify-content-center re">
                <a href="#" class="btn btn-success btn-profile w-25 mt-5 register">
                
                Enregistrer</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
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
      ],
    };
  },
};
</script>

<style>
.logo_img {
  width: auto;
  height: 70px;
  display: block;
  margin: 1rem auto 1rem;
}

.profile_img {
  display: block;
  margin: 3rem auto 1rem;
  border-radius: 50%;
  height: 150px;
  width: 145px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  background-color: #fff;
}
h2 {
  font-weight: 200;
  margin-bottom: 3rem;
}

.c {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.top-m {
  margin-top: 2rem !important;
}

.contact {
  padding: 1rem;
}
.btn-profile {
  background-color: #ec595a;
}

.re {
        margin-top: 2rem !important;

}

.register {
    margin-top: 2rem;
    background-color: #ec595a;
}
</style>