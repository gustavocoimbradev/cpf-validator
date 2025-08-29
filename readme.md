# 📑 CPF Válido API

Uma API simples e leve para validar números de CPF brasileiros.
Ela retorna respostas em JSON, limpas e fáceis de integrar em qualquer sistema.

---

## ✨ Funcionalidades

- Valida números de CPF brasileiros
- Limpa a entrada automaticamente (remove pontos, traços, etc.)
- Retorna o resultado em JSON
- Endpoint público, pronto para uso

---

## 🚀 Como usar

### 🔗 Requisição
```http
GET https://cpfvalido.vercel.app/?cpf=08133638001
```

### ✅ Resposta (CPF válido)
```json
{
  "cpf": "08133638001",
  "valid": true
}
```

### ❌ Resposta (CPF inválido)
```json
{
  "cpf": "12345678900",
  "valid": false
}
```

### ⚠️ Resposta (CPF não informado)
```json
{
  "error": "CPF é obrigatório. Use ?cpf=XXXXXXXXXXX"
}
```

---
