import { createApp } from './app'

const { app, router, store } = createApp()

// 混合state
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app')
})
