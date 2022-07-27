const priceSwitch = document.querySelector('#priceSwitch')
const basicPrice = document.querySelector('#basic')
const professionalPrice = document.querySelector('#professional')
const masterPrice = document.querySelector('#master')

function changeBasicPrice() {
	if (basicPrice.innerHTML === '199.99') {
		basicPrice.innerHTML = '19.99'
	} else if (basicPrice.innerHTML === '19.99') {
		basicPrice.innerHTML = '199.99'
	}
}

function changeProfessionalPrice() {
	if (professionalPrice.innerHTML === '249.99') {
		professionalPrice.innerHTML = '24.99'
	} else if (professionalPrice.innerHTML === '24.99') {
		professionalPrice.innerHTML = '249.99'
	}
}

function changeMasterPrice() {
	if (masterPrice.innerHTML === '399.99') {
		masterPrice.innerHTML = '39.99'
	} else if (masterPrice.innerHTML === '39.99') {
		masterPrice.innerHTML = '399.99'
	}
}

priceSwitch.addEventListener('click', e => {
	changeBasicPrice()
	changeProfessionalPrice()
	changeMasterPrice()
})
