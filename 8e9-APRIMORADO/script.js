/* 
  Crie uma lista de pacientes

  Escolha as opções:
      1. Inserir um paciente na lista
      2. Visualizar lista de nomes dos pacientes
      3. Visualizar a lista de pacientes
      4. Finalizar programa

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes e calcule seu IMC apresentando na tela a mensagem:

  
  "Paciente X possui o IMC de: Y"

*/

let patientsList = []
let input
let indexA = 1
let patient = {}

function fIMC(peso, altura) {
  let IMC = (peso/(altura**2)).toFixed(2)
  return IMC
}

while(input != 5){
  input = Number(prompt(`
    Escolha as opções:
      1. Inserir um paciente na lista
      2. Visualizar lista de nomes dos pacientes
      3. Visualizar a lista de pacientes todos os dados
      4. Cálculo do IMC
      5. Finalizar programa
  `))

  switch(input){
    case 1:

      alert('Agora vamos inserir os dados do(a) paciente ' + indexA)
      patient = {
        nome: prompt(`Insira o nome do(a) paciente ${indexA}:`),
        idade: Number(prompt(`Insira a idade do(a) paciente ${indexA}:`)),
        peso: Number(prompt(`Insira o peso do(a) paciente ${indexA}:`)),
        altura: Number(prompt(`Insira a altura do(a) paciente ${indexA}:`)),
      }
      patientsList.push(patient);
      indexA++
      break

    case 2:
      let patientName = []
      for(let patient of patientsList){
        patientName.push(patient.nome)
      }
      alert(patientName.join(", "))
      break

    case 3:
      let patientData = []
      let indexB = 1
      for(let patient of patientsList){
        for(let data in patient){
          patientData.push(`${data} ${indexB}: ${patient[data]}`)
        }
        indexB++
      }
      alert(patientData.join(`, `))
      break

    case 4:
      if(patientsList.length == 1){
        alert(`Paciente ${patientsList[0].nome} possui o IMC de: ${fIMC(patientsList[0].peso , patientsList[0].altura)}`)
      }
      else{
        for(let person of patientsList){
          alert(`Paciente ${person.nome} possui o IMC de: ${fIMC(person.peso , person.altura)}`)
        }
      }
      break

    case 5:
      break

    default:
      alert('Essa opção não existe, tente novamente.')
      break
  }
}



