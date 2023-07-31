'use strict';

const btn = document.querySelector('.country');
const countriesContainer = document.querySelector('.countries');

//AJAX old school
const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    // console.log(request.responseText);

    request.addEventListener('load', function (e) {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const html = ` 

    <div class="countries">
        <img src="${data.flags.png}"
            class="country_img card-img-top" alt="...">
        <div class="country_data card-body">
            <h5 class="country_name card-title" style="margin-bottom:0">${data.name.nativeName.vie.common}</h5>
            <span class="country_region">${data.region}</span>
            <p class="country_row card-text mt-3"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
            <p class="country_row card-text mt-3"><span>👫</span>${data.languages.vie}</p>
            <p class="country_row card-text mt-3"><span>👫</span>${data.currencies.VND.symbol}</p>
        </div>
    </div>
`;
        countriesContainer.insertAdjacentHTML('beforeend', html);
    });
}

getCountryData('vn');
getCountryData('vn');
