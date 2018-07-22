import moment from 'moment';
export default {
    getFormattedDate (date) {
        return moment(date).format("dddd, MMMM Do");
    }
}