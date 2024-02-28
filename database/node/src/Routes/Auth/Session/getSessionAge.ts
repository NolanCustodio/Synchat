
export function getSessionAge(inputDate: Date): number{
    const currentDate = new Date();

    const differenceInMS = (currentDate.getTime() - inputDate.getTime());
    const differenceInDays = differenceInMS / (1000 * 60 * 60 * 24);

    return differenceInDays;
}

