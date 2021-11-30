const searchBtn = document.querySelector('.search');
const select = document.querySelector('#Select');
const info = document.querySelector('.info');

searchBtn.addEventListener('click', getInfo);

function getInfo(){
    let selectedCountry = select.value;
    let url = `https://restcountries.com/v2/name/${selectedCountry.toLowerCase()}`;
    let output = ``;
    let div = document.createElement("div");
    let img = document.createElement("img")

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        output = document.createTextNode(` Name: ${data[0].name}.
        Top Level Domain: ${data[0].topLevelDomain}. 
        Country calling code: +${data[0].callingCodes[0]}. 
        Capital of the country: ${data[0].capital}. 
        Region: ${data[0].region}. 
        Subregion: ${data[0].subregion}. 
        Population: ${data[0].population} people. 
        Timezone: ${data[0].timezones[0]}. 
        Language name: ${data[0].languages[0].name} language. 
        Currency: ${data[0].currencies[0].name} - ${data[0].currencies[0].code} - ${data[0].currencies[0].symbol}. 
        Flag: `);
        console.log();
        div.appendChild(output);
        img.src = `${data[0].flags.png}`;
    })

    info.appendChild(div);
    info.appendChild(img);
}