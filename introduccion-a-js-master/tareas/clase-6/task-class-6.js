const $body = document.querySelector('body');
const $buttonFamilyMembers = document.querySelector('#button-family-members');

$buttonFamilyMembers.onclick = () => {
	const $familyMembers = document.querySelector('#members-in-family').value;

	const title = document.createElement('h3');
	title.innerText = 'Enter the ages of family members';
	$body.appendChild(title);

	const familyAgeForm = createForm($familyMembers);
	$body.appendChild(familyAgeForm);

	const buttonCalculateValues = document.querySelector('#get-ages');
	console.log(buttonCalculateValues);
};

console.log(buttonCalculateValues);

function createForm(inputQuantity) {
	const $form = document.createElement('form');

	$form.appendChild(addFamilyInputs(inputQuantity));

	const $formButton = createButtonForm('get-ages');
	$form.appendChild($formButton);

	return $form;
}

function addFamilyInputs(quantity) {
	const $inputsContainer = document.createElement('div');

	for (let i = 0; i < quantity; i++) {
		const $familyMember = createFamilyInput(i);

		$inputsContainer.appendChild($familyMember);
	}
}

function createButtonForm(id, innerTextContent) {
	const $button = document.createElement('button');
	$button.id = id || 'form-family-button';
	$button.textContent = innerTextContent || 'Calculate';

	return $button;
}

function createFamilyInput(id) {
	const $familyInputContainer = document.createElement('div');

	const $label = document.createElement('label');
	$label.htmlFor = 'family-members';
	$label.innerText = `Member ${id + 1}: `;

	const $input = document.createElement('input');
	$input.classList.add = 'family-members';
	$input.id = 'family-members';

	$familyInputContainer.appendChild($label);
	$familyInputContainer.appendChild($input);

	return $familyInputContainer;
}


/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
