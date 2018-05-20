import baseApi from '@/services/baseApi'
import Store from '@/store/store'

export default {
    register (credentials) {
        return baseApi().post('api/signup', credentials);
    },
    login (credentials) {
        return baseApi().post('api/signin', credentials);
    },
    logout () {
        Store.dispatch("setIsLoggedIn", false);
        Store.dispatch("setToken", false);
        Store.dispatch("setUser", false);
    }
}