export const isOddNumber = number => number % 2 === 1;

export const countEventNumbers = numberList => {
    if (!numberList) return 0;
    return numberList.filter(x => x % 2 === 0).length;
}