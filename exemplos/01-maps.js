/**
 * ===================================================================
 * 📌 MÉTODOS: map()
 * ===================================================================
 * Função: Percorre o array e TRANSFORMA cada item, retornando um NOVO array
 * com o mesmo tamanho do original.
 * ===================================================================
 */

console.log("=== 🗺️ EXEMPLOS COM map() ===\n");

// -------------------------------------------------------------------
// Exemplo 1 (Básico): Dobrar valores numéricos
// -------------------------------------------------------------------
console.log("--- Exemplo 1: Dobro de números (Básico) ---");

const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map((num) => {
    return num * 2;
});

console.log("Original:", numeros);
console.log("Dobrados:", dobrados);
console.log("\n");

// -------------------------------------------------------------------
// Exemplo 2 (Intermediário): Extração de propriedades em array de objetos
// -------------------------------------------------------------------
console.log("--- Exemplo 2: Extrair apenas os nomes (Intermediário) ---");

const usuarios = [
    { id: 1, nome: "Ana Silva", idade: 28 },