import api from '@/services/api'

export default {
    register (credentials) {
        return api().post('api/signup', credentials);
    },
    login (credentials) {
        return api().post('api/signin', credentials);
    }
}