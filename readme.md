# 📑 CPF Válido API

Uma API simples e leve para validar números de CPF brasileiros.  
Ela retorna respostas em JSON, limpas e fáceis de integrar em qualquer sistema.

---

## ✨ Funcionalidades

- Valida números de CPF brasileiros  
- Limpa a entrada automaticamente (remove pontos, traços, etc.)  
- Retorna o resultado em JSON  
- Gera CPFs válidos para testes  
- Endpoints públicos, prontos para uso  

---

## 🚀 Como usar

### 🔍 Validar CPF

#### Requisição
```http
GET https://cpfvalido.vercel.app/api/validate?cpf=08133638001
```

#### ✅ Resposta (CPF válido)
```json
{
  "cpf": "08133638001",
  "valid": true
}
```

#### ❌ Resposta (CPF inválido)
```json
{
  "cpf": "12345678900",
  "valid": false
}
```

#### ⚠️ Resposta (nenhum CPF informado)
```json
{
  "error": "CPF é obrigatório. Use ?cpf=XXXXXXXXXXX"
}
```

---

### 🆕 Gerar CPF válido

#### Requisição
```http
GET https://cpfvalido.vercel.app/api/generate
```

#### 🔄 Resposta
```json
{
  "cpf": "12345678909"
}
```
