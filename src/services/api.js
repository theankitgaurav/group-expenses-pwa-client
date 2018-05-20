import baseApi from '@/services/baseApi';

export default {
  async getEntries() {
    return baseApi().get('/api/group/5aebbc6f4c9a241c70e62372/items');
  },
  async saveEntry(el) {
      console.log(`navigator.isOnline: ${navigator}`);
    // if (navigator.online === true) {
      return baseApi().post('/api/group/5aebbc6f4c9a241c70e62372/items', el);
    // } else {
    //     try {
    //         const items = JSON.parse(localStorage.getItem('items')) || [];
    //         items.push(el);
    //         localStorage.setItem('items', JSON.stringify(items));
    //         return el;
    //       } catch (err) {
    //         throw new Error(err);
    //       }
    // }
  }
}
