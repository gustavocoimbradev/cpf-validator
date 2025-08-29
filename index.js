class CPF {
    constructor(id) {
        this.id = id.replace(/\D/g, ``);
    }

    getFirstNumbers(amount = null) {
        const numbers = this.id.split('')
        numbers.splice(amount)
        return numbers
    }

    getDigit(position = null) {
        try {
            let i
            let sum
            let result
            if (position === 1) {
                i = 10
                sum = this.getFirstNumbers(9).map((value) => {
                    return value * i--
                }).reduce((acc, value) => acc + value)
            }
            if (position === 2) {
                i = 11
                sum = this.getFirstNumbers(10).map((value) => {
                    return value * i--
                }).reduce((acc, value) => acc + value)
            }
            result = 11 - (sum % 11)
            result = result > 9 ? 0 : 11 - (sum % 11)
            return result
        } catch (e) {
            return false
        }
    }

    isValid() {
        const firstDigitTyped = parseInt(this.id[this.id.length - 2])
        const secondDigitTyped = parseInt(this.id[this.id.length - 1])
        return this.getDigit(1) === firstDigitTyped && this.getDigit(2) === secondDigitTyped
    }
}

function validateCPF(input) {
    const cpf = new CPF(input)
    if (cpf.isValid()) {
        console.log(`
\x1b[32m================================
= ✅ O CPF informado é válido! =
================================\x1b[0m
`)
} else {
    console.log(`
\x1b[31m===================================
= ❌ O CPF informado NÃO é válido =
===================================\x1b[0m
    `)
    }
}

if (typeof prompt !== `undefined`) {
    const cpfInput = prompt("Digite o CPF: ")
    validateCPF(cpfInput)
} else {
    const readline = require(`readline`)
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question("Digite o CPF: ", (cpfInput) => {
        validateCPF(cpfInput)
        rl.close()
    })
}

