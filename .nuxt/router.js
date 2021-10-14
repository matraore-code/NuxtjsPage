import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4eeb8f9b = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _35f95f83 = () => interopDefault(import('../pages/coming.vue' /* webpackChunkName: "pages/coming" */))
const _3f91d8d2 = () => interopDefault(import('../pages/Confirmation.vue' /* webpackChunkName: "pages/Confirmation" */))
const _44c2e92e = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _36363a86 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _1188bb0a = () => interopDefault(import('../pages/Search.vue' /* webpackChunkName: "pages/Search" */))
const _e146f5fc = () => interopDefault(import('../pages/uuuu.vue' /* webpackChunkName: "pages/uuuu" */))
const _023a0ed2 = () => interopDefault(import('../pages/profile/_profile.vue' /* webpackChunkName: "pages/profile/_profile" */))
const _119d6b00 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4eeb8f9b,
    name: "About"
  }, {
    path: "/coming",
    component: _35f95f83,
    name: "coming"
  }, {
    path: "/Confirmation",
    component: _3f91d8d2,
    name: "Confirmation"
  }, {
    path: "/Contact",
    component: _44c2e92e,
    name: "Contact"
  }, {
    path: "/form",
    component: _36363a86,
    name: "form"
  }, {
    path: "/Search",
    component: _1188bb0a,
    name: "Search"
  }, {
    path: "/uuuu",
    component: _e146f5fc,
    name: "uuuu"
  }, {
    path: "/profile/:profile?",
    component: _023a0ed2,
    name: "profile-profile"
  }, {
    path: "/",
    component: _119d6b00,
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
