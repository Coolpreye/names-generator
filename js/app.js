document.querySelector('#generate-names').addEventListener('submit', loadNames);



// execute the function to query the API
function loadNames(e) {
    e.preventDefault();

    // read the values from the form and create the variables
    const origin = document.getElementById('country').value,
            gender = document.getElementById('gender').value,
            amount = document.getElementById('quantity').value;

    // build the url
    let url = 'http://uinames.com/api/?';
    // read the origin and append to the url
    if(origin !== '') {
        url += `region=${origin}&`;
    }

    // read the gender and append to the url
    if(gender !== '') {
        url += `gender=${gender}&`;
    }

    // read the amount and append to the url
    if(amount !== '') {
        url += `amount=${amount}`;
    }

    

    // fetch API
    getNames(url)
    .then(names => {
        let namesResponse = names.names;
        let html = '<h2>Generated Names</h2>';
        html += '<ul class="list">';
        namesResponse.forEach(name => html += `<li>${name.name}</li>`
        )
        html += '<ul>'; 

        document.querySelector('#result').innerHTML = html;
    })
    .catch(error => console.log(error) );

}

async function getNames(url) {
    const res = await fetch(url)
    const names = await res.json() 

    return {
        names
    }
}