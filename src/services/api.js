import baseApi from '@/services/baseApi';

export default {
    async getEntries () {
        return baseApi().get('/api/group/5aebbc6f4c9a241c70e62372/items');
    }
}