<template>
  <section>
    <div class="container">
      <div class="logo">
        <img
          src="~/assets/images/logon.png"
          alt=""
          srcset=""
          class="logo_img"
        />
        <h2 class="text-center">Créez un compte pour commencer!</h2>
      </div>
      <div class="form">
        <div class="col-md-3">
          <div class="mb-3">
            <select class="form-select" aria-label="Formule">
              <option selected>Basique</option>
              <option value="1">Standart</option>
              <option value="2">Premium</option>
            </select>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-6">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="name"
                placeholder="Nom *"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="surname"
                aria-describedby="surname"
                placeholder="Prénom *"
              />
            </div>
          </div>
        </div>

        <div class="row my-5">
          <div class="col-md-4">
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                aria-describedby="name"
                placeholder="Email *"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <input
                type="tel"
                class="form-control"
                id="telephone"
                aria-describedby="telephone"
                placeholder="Téléphone *"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="status"
                aria-describedby="Profession"
                placeholder="Profession"
              />
            </div>
          </div>
        </div>

        <div class="row my-5">
          <div class="col-md-3">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="address"
                aria-describedby="address"
                placeholder="Adresse *"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="city"
                aria-describedby="city"
                placeholder="Ville *"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="codePostal"
                aria-describedby="codePostal"
                placeholder="Code Postal *"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="">
              <select class="form-select" aria-label="Pays">
                <option selected>Pays</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="">
            <label for="biography" class="form-label">Biographie *</label>
            <textarea class="form-control" id="biography" rows="3"></textarea>
          </div>
        </div>

        <button type="submit" class="btn btn-primary mb-3 btn-submit">
          Créez un compte
        </button>
        <p class="text-center">
          En cliquant sur Créez un compte, j’accepte les
          <a href="#" class="term">Conditions d’utilisation</a> et la
          <a href="#" class="term"> Politique d’utilisation acceptable.</a>
        </p>
      </div>
    </div>
  </section>
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
  margin: 3rem auto 1rem;
}
h2 {
  font-weight: 200;
  margin-bottom: 3rem;
}
.form-control {
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 0.9rem;
}

.form-control:focus {
  box-shadow: none !important;
  border-bottom: 2px solid #ec595a;
}

.form-select {
  border-top: none;
  border-right: none;
  border-left: none;
  padding: 0.9rem;
}

select option {
  margin: 40px;
  background: rgba(255, 255, 255, 0.3);
  color: #ccc;
}

.form-select:focus {
  box-shadow: none !important;
  border-bottom: 2px solid #ec595a;
}

.btn-submit {
  background-color: #ec595a !important;
  margin: 0 auto;
  display: block;
}

.term {
  color: #ec595a;
  text-decoration: #ec595a;
}
</style>