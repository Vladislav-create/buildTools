const resultTag = document.getElementById('result')

export const printOutput = (text) => {
    resultTag.innerHTML = text
}

export const printDatesDiff = ({years, months, days}) => {
    printOutput(`
        Дни: ${days},
        Месяцы: ${months},
        Годы: ${years},
    `)
}