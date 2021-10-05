import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0632dcc4 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _475e9de0 = () => interopDefault(import('../pages/coming.vue' /* webpackChunkName: "pages/coming" */))
const _e84d4f98 = () => interopDefault(import('../pages/Confirmation.vue' /* webpackChunkName: "pages/Confirmation" */))
const _60057671 = () => interopDefault(import('../pages/Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _75a16c23 = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _04c3479a = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _22edf967 = () => interopDefault(import('../pages/Search.vue' /* webpackChunkName: "pages/Search" */))
const _b5a766fa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0632dcc4,
    name: "About"
  }, {
    path: "/coming",
    component: _475e9de0,
    name: "coming"
  }, {
    path: "/Confirmation",
    component: _e84d4f98,
    name: "Confirmation"
  }, {
    path: "/Contact",
    component: _60057671,
    name: "Contact"
  }, {
    path: "/form",
    component: _75a16c23,
    name: "form"
  }, {
    path: "/profile",
    component: _04c3479a,
    name: "profile"
  }, {
    path: "/Search",
    component: _22edf967,
    name: "Search"
  }, {
    path: "/",
    component: _b5a766fa,
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
