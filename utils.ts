export const randArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)