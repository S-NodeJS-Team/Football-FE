import moment from "moment";

export const dateTimeString = (date: Date) => {
    return moment(date).format('MMMM Do, YYYY')
}