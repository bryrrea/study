/* Prática 3 - Faça um algoritmo que, dadas as 3 notas de um aluno em um semestre da faculdade, calcula e imprima a média e mostre a classificação deste aluno. Se a média for menor que 5, o aluno foi reprovado; se a média for entre 5 e 7, o aluno foi para recuperação; finalmente, o aluno foi aprovado se teve média acima de 7. */

const grade01 = 4;
const grade02 = 8;
const grade03 = 10;

let avgGrade = (grade01 + grade02 + grade03)/3;

if (avgGrade < 5) {
    console.log("O estudante foi reprovado no semestre, pois sua nota final foi" + avgGrade.toFixed(2) + ".");
} else if (avgGrade >5 && avgGrade <7) {
    console.log("O estudante ficou em exame neste semestre, pois sua nota final foi " + avgGrade.toFixed(2) + ".");
} else {
    console.log("O estudante foi aprovado no semestre, pois sua nota final foi " + avgGrade.toFixed(2) + ".");
}