const resultTag = document.getElementById('resultCalc')

export const printOutputCalc = (text) => {
    resultTag.innerHTML = text
}

export const printDatesDiff = ({years, months, days}) => {
    printOutputCalc(`
        Дни: ${days},
        Месяцы: ${months},
        Годы: ${years},
    `)
}