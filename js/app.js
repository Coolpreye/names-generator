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

    // Ajax call
    const xhr = new XMLHttpRequest();

    // open the connection
    xhr.open('GET', url, true);

    // execute the function
    xhr.onload = function() {
        if(this.status === 200) {
            const names = JSON.parse(this.responseText);

            // insert into the html
            html = `<h1>Generated Names</h1>`;
            html += `<ul class="list">`;
            names.forEach(function(name) {
                html += ` <li>${name.name}`;
            });

            html += `</ul>`;

            document.querySelector('#result').innerHTML = html;

        }
    }

    // send request
    xhr.send();
}