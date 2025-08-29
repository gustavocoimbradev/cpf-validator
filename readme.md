## About the project

This is a simple **CPF Validator API**.  
It provides a public endpoint to validate Brazilian CPF numbers and returns a JSON response that can be integrated into any system.

#### Features

- Validates Brazilian CPF numbers  
- Cleans input automatically (removes dots, dashes, etc.)  
- Returns result as JSON  
- Free to use, ready for integration  

## Usage

### Request

GET https://cpfvalido.vercel.app/?cpf=08133638001

### Response (valid CPF)

{
  "cpf": "08133638001",
  "valid": true
}

### Response (invalid CPF)

{
  "cpf": "12345678900",
  "valid": false
}

### Response (no CPF provided)

{
  "error": "CPF é obrigatório. Use ?cpf=XXXXXXXXXXX"
}
