import baseApi from '@/services/baseApi'

export default {
    register (credentials) {
        return baseApi().post('api/signup', credentials);
    },
    login (credentials) {
        return baseApi().post('api/signin', credentials);
    }
}