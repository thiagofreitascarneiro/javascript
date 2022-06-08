const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'test.json');

const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'},
];

const json = JSON.stringify(pessoas, '', 2);

fs.writeFile(caminhoArquivo, 'Frase 1', {flag: 'w', encoding: 'utf8'});

fs.writeFile(caminhoArquivo, json, {flag: 'w'});
