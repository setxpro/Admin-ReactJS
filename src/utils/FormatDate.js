const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();

export const FormatDate = `${day <= 9 ? `0${day}` : `${day}`}/${month <= 9 ? `0${month}` : `${month}`}/${year}`;