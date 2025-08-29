export default function handler(req, res) {
    function generateCPF() {
        const base = Array.from({ length: 9 }, () => Math.floor(Math.random() * 9))
        function calcDigit(numbers, factor) {
            const sum = numbers.reduce((acc, v, i) => acc + v * (factor - i), 0)
            const result = 11 - (sum % 11)
            return result >= 10 ? 0 : result
        }
        const d1 = calcDigit(base, 10)
        const d2 = calcDigit([...base, d1], 11)
        return [...base, d1, d2].join("")
    }

    const cpf = generateCPF()
    return res.status(200).json({ cpf, valid: true })
}
