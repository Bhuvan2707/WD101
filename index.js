const bringItems = () => {
    if (localStorage.getItem('items')) {
        return JSON.parse(localStorage.getItem('items'))
    } else {
        return []
    }
}

let items = bringItems()

const makeTable = () => {
    let temp = bringItems()
    const table = document.getElementById('table')
    temp.forEach((item) => {
        table.innerHTML += `
        <tr>
            <td class="text-center">${item.name}</td>
            <td class="text-center">${item.email}</td>
            <td class="text-center">${item.password}</td>
             <td class="text-center">${item.dob}</td>
              <td class="text-center">${item.acceptTerms}</td>
        </tr>
        `
    })
}

const submit = document.getElementById('submit')

submit.addEventListener('click', (e) => {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const daEl = document.getElementById('dob')
    const acceptTerms = document.getElementById('acceptTerms')
    let age =
        new Date().setHours(0, 0, 0, 0) - new Date(daEl.value).setHours(0, 0, 0, 0);
    age = Math.ceil(age / 1000 / 60 / 60 / 24 / 365);
    if (age < 18 || age > 55) {
        daEl.setCustomValidity("Please enter a valid date of birth from 18 to 55 years old");
    } else {
        daEl.setCustomValidity("");
        if (name.validity.valid && email.validity.valid && password.validity.valid && dob.validity.valid) {


            const item = {
                name: name.value,
                email: email.value,
                password: password.value,
                dob: dob.value,
                acceptTerms: acceptTerms.value

            }
            items.push(item)
            localStorage.setItem('items', JSON.stringify(items))
            makeTable()
        }
    }
});

makeTable()
