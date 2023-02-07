export const getInitCelsius = (temp: number) => (
    { f: temp, c: Math.floor((temp - 32) * 5 / 9) }
)