import axios from 'axios'
import { useCustomerLoginStore } from 'stores/customerLogin'
export default async ({ store, router }) => {
  const setAuthorization = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
  }
  router.beforeEach((to, from, next) => {
    // verify at store ( Pinia ), if has - meta: { requiresAuth: true }
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    // verify the user in Pinia , if the useCustomerLoginStore.currentUser has value
    const currentCustomerUser = useCustomerLoginStore(store).currentUser
    // if has user
    if (currentCustomerUser) {
      setAuthorization(currentCustomerUser.token)
    }
    // if does need auth but does not has user
    if (requiresAuth && !currentCustomerUser) {
      next('/')
    } else if (to.path === '/' && requiresAuth) {
      next()
    } else {
      next()
    }
  })
  axios.interceptors.response.use(null, (error) => {
    //  || error.response.status === 401
    if (error.response.status === 403) {
      router.push('/')
    }

    return Promise.reject(error)
  })
}
