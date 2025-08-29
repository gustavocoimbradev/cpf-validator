# 📑 CPF Validator API

A lightweight API to validate **Brazilian CPF numbers**.  
It returns clean and simple **JSON responses**, ready for integration into any system.

---

## ✨ Features

✔️ Validates Brazilian CPF numbers  
✔️ Cleans input automatically (removes dots, dashes, etc.)  
✔️ Returns result as JSON  
✔️ Public endpoint, free to use  

---

## 🚀 Usage

### 🔗 Request
```http
GET https://cpfvalido.vercel.app/?cpf=08133638001
```

### ✅ Response (valid CPF)
```json
{
  "cpf": "08133638001",
  "valid": true
}
```

### ❌ Response (invalid CPF)
```json
{
  "cpf": "12345678900",
  "valid": false
}
```

### ⚠️ Response (no CPF provided)
```json
{
  "error": "CPF é obrigatório. Use ?cpf=XXXXXXXXXXX"
}
```

---
