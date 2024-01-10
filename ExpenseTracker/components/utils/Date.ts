export const getFormattedDate = (date: Date | undefined) => {
    if (date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    } else {
        return 'Invalid Date';
    }
};

export const getDateMinusDay = (date: Date, days: number) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
