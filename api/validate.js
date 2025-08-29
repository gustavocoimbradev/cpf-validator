export default function handler(req, res) {
  class CPF {
    constructor(id) {
      this.id = id.replace(/\D/g, ``)
    }

    getFirstNumbers(amount = null) {
      const numbers = this.id.split('').map(Number)
      if (amount != null) numbers.splice(amount)
      return numbers
    }

    getDigit(position = null) {
      const base = position === 1 ? this.getFirstNumbers(9) : this.getFirstNumbers(10)
      const weightStart = position === 1 ? 10 : 11
      const sum = base.reduce((acc, v, idx) => acc + v * (weightStart - idx), 0)
      let result = 11 - (sum % 11)
      return result >= 10 ? 0 : result
    }

    isValid() {
      if (!this.id || this.id.length !== 11) return false
      if (/^(\d)\1{10}$/.test(this.id)) return false
      const d1 = Number(this.id[9])
      const d2 = Number(this.id[10])
      return this.getDigit(1) === d1 && this.getDigit(2) === d2
    }
  }

  const { cpf } = req.query
  if (!cpf) {
    return res.status(400).json({ error: "CPF é obrigatório. Use ?cpf=XXXXXXXXXXX" })
  }

  const validator = new CPF(cpf)
  return res.status(200).json({ cpf, valid: validator.isValid() })
}