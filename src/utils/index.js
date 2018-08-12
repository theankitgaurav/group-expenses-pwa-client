import moment from 'moment';
export default {
    getFormattedDate (date) {
        return moment(date).format("ddd, DD/MMM/YY");
    }
}