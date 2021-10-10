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
        <div class="col-md-4">
          <div class="custom-file justify-content-center">
            <input type="file" class="custom-file-input" id="customFile" />
            <label class="custom-file-label" for="customFile"
              >Selectionnez votre photo de profile</label
            >
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-3">
            <div class="mb-3">
              <select
                v-model="formule"
                class="form-select"
                aria-label="Formule"
              >
                <option value="Basique" selected>Basique</option>
                <option value="Standart">Standart</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-6">
            <div class="mb-3">
              <input
                v-model="name"
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
                v-model="surname"
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
                v-model="email"
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
                v-model="telephone"
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
                v-model="prefession"
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
                v-model="address"
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
                v-model="city"
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
                v-model="codePostal"
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
              <select v-model="country" class="form-select" aria-label="Pays">
                <option selected>Pays</option>
                <option
                  v-for="country in this.countries"
                  :key="country"
                  :value="country"
                >
                  {{ country }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row my-5">
          <div class="">
            <label for="biography" class="form-label">Biographie *</label>
            <textarea
              v-model="biography"
              class="form-control"
              id="biography"
              rows="3"
            ></textarea>
          </div>
        </div>
        <span class="text-danger">{{ errors }}</span>
        <button
          type="submit"
          class="btn btn-primary mb-3 btn-submit"
          v-on:click.prevent="submit"
        >
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
  data() {
    return {
      formule: "Basique",
      name: "",
      surname: "",
      email: "",
      telephone: "",
      prefession: "",
      address: "",
      city: "",
      codePostal: "",
      country: "Pays",
      biography: "",
      errors: "",
      countries: [],
    };
  },
  methods: {
    check_all() {
      this.name = this.name.trim();
      this.surname = this.surname.trim();
      this.email = this.email.trim();
      this.telephone = this.telephone.trim();
      this.prefession = this.prefession.trim();
      this.address = this.address.trim();
      this.city = this.city.trim();
      this.codePostal = this.codePostal.trim();
      this.biography = this.biography.trim();
      if (
        this.name === "" ||
        this.surname === "" ||
        this.email === "" ||
        this.telephone === "" ||
        this.prefession === "" ||
        this.address === "" ||
        this.city === "" ||
        codePostal === "" ||
        this.country === "Pays" ||
        this.biography === ""
      ) {
        this.errors = "Remplir tous les champs.";
      } else {
        this.errors = "";
      }
    },
    async submit() {
      this.check_all();
      if (this.errors === "") {
        try {
          const response = await fetch(
            `http://localhost:5000/api/users/signup`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                formule: this.formule,
                name: this.name,
                surname: this.surname,
                email: this.email,
                telephone: this.telephone,
                profession: this.prefession,
                address: this.address,
                city: this.city,
                codePostal: this.codePostal,
                country: this.country,
                password: "0123456789",
                biography: this.biography,
              }),
            }
          );

          const content = await response.json();

          const tokenExpirationTime = new Date(
            new Date().getTime() + 1000 * 60 * 60
          );
          localStorage.setItem(
            "userData",
            JSON.stringify({
              userId: await content.userId,
              token: await content.token,
              expiration: tokenExpirationTime.toISOString(),
            })
          );

          await this.$router.push("/Confirmation");
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
  async mounted() {
    try {
      const response = await fetch(`http://localhost:5000/api/countries`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const content = await response.json();
      this.countries = content.countries.map((country) => country.name);
      this.countries = this.countries.sort();
    } catch (err) {
      console.log(err);
    }
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