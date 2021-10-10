import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _706394b2 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _4d290a12 = () => interopDefault(import('..\\pages\\coming.vue' /* webpackChunkName: "pages/coming" */))
const _32886fea = () => interopDefault(import('..\\pages\\Confirmation.vue' /* webpackChunkName: "pages/Confirmation" */))
const _0f943c3a = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _4aa0a2fa = () => interopDefault(import('..\\pages\\form.vue' /* webpackChunkName: "pages/form" */))
const _960a5304 = () => interopDefault(import('..\\pages\\Search.vue' /* webpackChunkName: "pages/Search" */))
const _b8722514 = () => interopDefault(import('..\\pages\\uuuu.vue' /* webpackChunkName: "pages/uuuu" */))
const _26ea028d = () => interopDefault(import('..\\pages\\profile\\_profile.vue' /* webpackChunkName: "pages/profile/_profile" */))
const _7013f08c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _706394b2,
    name: "About"
  }, {
    path: "/coming",
    component: _4d290a12,
    name: "coming"
  }, {
    path: "/Confirmation",
    component: _32886fea,
    name: "Confirmation"
  }, {
    path: "/Contact",
    component: _0f943c3a,
    name: "Contact"
  }, {
    path: "/form",
    component: _4aa0a2fa,
    name: "form"
  }, {
    path: "/Search",
    component: _960a5304,
    name: "Search"
  }, {
    path: "/uuuu",
    component: _b8722514,
    name: "uuuu"
  }, {
    path: "/profile/:profile?",
    component: _26ea028d,
    name: "profile-profile"
  }, {
    path: "/",
    component: _7013f08c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
