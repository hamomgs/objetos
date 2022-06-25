// Crie um objeto que receba ao menos três propriedades sobre você.
// Adicione uma nova propriedade sem alterar seu objeto inicial.
// Remova uma propriedade desse objeto.
// Mostre no console todas as propriedades desse objeto.

const aboutMe = {
	firstName: 'Hamom',
	age: 19,
	state: 'Minas Gerais'
}

aboutMe.height = 1.93
delete aboutMe.state

console.log(aboutMe)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.

const cadastro = [
	{
		nome: 'Charlie',
		idade: 15,
		telefone: 11999999999,
		amigos: ['Elle', 'Tao', 'Isaac', 'Nick', 'Tara', 'Darcy']
	},
	{
		nome: 'Elle',
		idade: 17,
		telefone: 41999999999,
		amigos: ['Tao', 'Charlie', 'Isaac', 'Tara', 'Darcy', 'Nick']
	},
	{
		nome: 'Sherlock',
		idade: 33,
		telefone: 57999999999,
		amigos: ['John', 'Lestrade', 'Molly', 'Sra. Hudson', 'Mary']
	},
	{
		nome: 'William',
		idade: 24,
		telefone: 21999999999,
		amigos: ['Albert', 'Louis', 'Fred', 'Sebastian']
	},
	{
		nome: 'Lelouch',
		idade: 18,
		telefone: 31999999999,
		amigos: ['Suzaku', 'Nunnally', 'Kallen', 'Kaname']
	}
]

console.log(`Um dos amigos de ${cadastro[0].nome} é ${cadastro[0].amigos[3]}.`)
console.log(`Um dos amigos de ${cadastro[1].nome} é ${cadastro[1].amigos[0]}.`)
console.log(`Um dos amigos de ${cadastro[2].nome} é ${cadastro[2].amigos[0]}.`)
console.log(`Um dos amigos de ${cadastro[3].nome} é ${cadastro[3].amigos[1]}.`)
console.log(`Um dos amigos de ${cadastro[4].nome} é ${cadastro[4].amigos[1]}.`)