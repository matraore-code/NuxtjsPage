import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c0872de0 = () => interopDefault(import('../pages/Confirmation.vue' /* webpackChunkName: "pages/Confirmation" */))
const _132118ff = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _51781d3e = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
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
    path: "/Confirmation",
    component: _c0872de0,
    name: "Confirmation"
  }, {
    path: "/form",
    component: _132118ff,
    name: "form"
  }, {
    path: "/profile",
    component: _51781d3e,
    name: "profile"
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
