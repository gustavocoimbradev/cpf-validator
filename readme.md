<img height="100" alt="cpf-validator-hero" src="https://github.com/user-attachments/assets/75fa5e93-d016-436a-bc47-4b80c2e3bf30" />

## About the project

This is a simple **CPF validator** built with plain JavaScript.  
It was created for learning and portfolio purposes, focusing on basic class design, digit calculation logic, and cross-environment input handling (browser `prompt` or Node.js `readline`).  

#### Features

- Validates Brazilian CPF numbers  
- Removes any non-numeric characters automatically  
- Calculates and compares verification digits  
- Works both in browser (via `prompt`) and in Node.js (via `readline`)  
- Colored output in terminal (green for valid, red for invalid)  

#### Technologies

- JavaScript (no dependencies)  
- Node.js (for CLI usage, using native `readline`)  

## Main Files

#### Core

- [`index.js`](index.js) – Contains the `CPF` class, validation logic, and CLI/browser input handling  
