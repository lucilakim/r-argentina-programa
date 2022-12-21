const $body = document.querySelector('body');
const $buttonFamilyMembers = document.querySelector('#button-family-members');
const $resetButton = document.querySelector('#reset-button');
const $ageFormContent = document.querySelector('#age-form-content');
const $familyAgeForm = document.querySelector('#family-age-form');
const $buttonCalculateValues = document.querySelector('#calculate-age-values-button');

$buttonFamilyMembers.onclick = () => {
	const $familyMembers = document.querySelector('#members-in-family').value;

	const title = document.createElement('h3');
	title.innerText = 'Enter the ages of family members';
	$body.insertBefore(title, $ageFormContent);

	const $formInputsContent = addFamilyInputs($familyMembers);
	$familyAgeForm.insertBefore($formInputsContent, $buttonCalculateValues);

	$ageFormContent.style.display = "block";
	$buttonFamilyMembers.disabled = "true";
	return false;
};

$resetButton.onclick = () => { }

$buttonCalculateValues.onclick = () => {
	const agesInput = document.querySelectorAll('#family-member-age');
	const ages = getNumbers(agesInput);

	const youngerAge = getSmaller(ages);
	const olderAge = getLargest(ages);
	const averageAge = getAverage(ages);

	const $oldestAgeParagraph = document.querySelector("#oldest-age");
	const $youngestAgeParagraph = document.querySelector("#youngest-age");
	const $averageAgeParagraph = document.querySelector("#average-age");
	$oldestAgeParagraph.innerText = `The oldest age is: ${olderAge}`;
	$youngestAgeParagraph.innerText = `The younger age is: ${youngerAge}`;
	$averageAgeParagraph.innerText = `The average age is: ${averageAge}`;

	return false;
}

function addFamilyInputs(quantity) {
	const fragment = new DocumentFragment();

	for (let i = 0; i < quantity; i++) {
		const $familyMember = createFamilyInput(i);
		fragment.appendChild($familyMember);
	}
	return fragment;
}

function createFamilyInput(id) {
	const fragment = document.createElement('div');
	fragment.classList.add = 'input-fragment';

	const $label = document.createElement('label');
	$label.htmlFor = 'family-members';
	$label.innerText = `Member age ${id + 1}: `;

	const $input = document.createElement('input');
	$input.classList.add = 'family-member-age';
	$input.id = 'family-member-age';

	fragment.appendChild($label);
	fragment.appendChild($input);

	return fragment;
}

function getNumbers(numbers) {
	const totalNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		totalNumbers[i] = Number(numbers[i].value);
	}
	return totalNumbers;
}

function getLargest(numbers) {
	let largestNumber = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > largestNumber) {
			largestNumber = numbers[i];
		}
	}
	return largestNumber;
}

function getSmaller(numbers) {
	let smallerNumber = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < smallerNumber) {
			smallerNumber = numbers[i];
		}
	}
	return smallerNumber;
}

function getAverage(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum / numbers.length;
}


/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

