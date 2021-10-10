import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f5c8042 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _f8b2f888 = () => interopDefault(import('../pages/coming.vue' /* webpackChunkName: "pages/coming" */))
const _c0872de0 = () => interopDefault(import('../pages/Confirmation.vue' /* webpackChunkName: "pages/Confirmation" */))
const _a68b67d6 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _132118ff = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _5f35df43 = () => interopDefault(import('../pages/Search.vue' /* webpackChunkName: "pages/Search" */))
const _6c47637b = () => interopDefault(import('../pages/uuuu.vue' /* webpackChunkName: "pages/uuuu" */))
const _2bb5ffcb = () => interopDefault(import('../pages/profile/_profile.vue' /* webpackChunkName: "pages/profile/_profile" */))
const _90bb89b2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0f5c8042,
    name: "About"
  }, {
    path: "/coming",
    component: _f8b2f888,
    name: "coming"
  }, {
    path: "/Confirmation",
    component: _c0872de0,
    name: "Confirmation"
  }, {
    path: "/Contact",
    component: _a68b67d6,
    name: "Contact"
  }, {
    path: "/form",
    component: _132118ff,
    name: "form"
  }, {
    path: "/Search",
    component: _5f35df43,
    name: "Search"
  }, {
    path: "/uuuu",
    component: _6c47637b,
    name: "uuuu"
  }, {
    path: "/profile/:profile?",
    component: _2bb5ffcb,
    name: "profile-profile"
  }, {
    path: "/",
    component: _90bb89b2,
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
