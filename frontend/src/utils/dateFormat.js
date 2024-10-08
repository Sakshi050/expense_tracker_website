import moment from 'moment'


export const dateFormat = (data) => {
    return moment(data).format('DD/MM/YYYY');
}