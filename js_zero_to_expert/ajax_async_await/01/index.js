// JavaScript code
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function render(data, className = ' ') {
    // Get the UTC offset and create a Luxon DateTime object
    const utcOffset = data.timezones && data.timezones.length > 0 ? data.timezones[0] : 'N/A';
    const currentTime = luxon.DateTime.utc();
    const localTime = currentTime.setZone(utcOffset);

    // Access specific values from the arrays
    const fgr = data.languages ? Object.values(data.languages)[0] : 'N/A';
    const fqr = data.currencies ? Object.values(data.currencies)[0].name : 'N/A';

    // Format the local time as desired
    const localTimeString = localTime.toFormat('dd/MM/yyyy, hh:mm:ss a');
    const html = `<div class="country card ${className}">
                <img src="${data.flags.png}" class="county_img card-img-top" alt="">
                <div class="country_data card-body">
                    <h5 class="card-title" style="margin-bottom: 0;">${data.name.common}</h5>
                    <span class="country_region">${data.region}</span>
                    <p class="country_row card-text mt-3 mb-3"><span>👫</span>${(data.population / 1000000).toFixed(1)} people</p>
                    <p class="country_row card-text mt-3 mb-3"><span>🗣️</span>${fgr}</p>
                    <p class="country_row card-text mt-3 mb-3"><span>💰</span>${fqr}</p>
                    <p class="country_row card-text mt-3 mb-3"><span>⌚️</span><span class="country_time" style="font-size:18px">${localTimeString}</span></p>
                </div>
            </div>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
    document.querySelector('.form-control').value = '';
}

function getCountryandNeightboor(inputCountry) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${inputCountry}`);
    request.send();

    request.addEventListener('load', function () {
        try {
            const countriesData = JSON.parse(this.responseText);
            if (countriesData) {
                // Render each country separately
                countriesData.forEach((country) => {
                    console.log(country);
                    // Render the main country
                    render(country);

                    // Render neighboring countries
                    const [neighbors] = country.borders;
                    if (neighbors && neighbors.length > 0) {
                        // AJAX call to fetch neighboring countries
                        const request2 = new XMLHttpRequest();
                        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbors}`);
                        request2.send();
                        request2.addEventListener('load', function () {
                            const neighborCountriesData = JSON.parse(this.responseText);
                            neighborCountriesData.forEach((neighborCountry) => {
                                console.log(neighborCountry);
                                render(neighborCountry, 'neighbour');
                            });
                        });
                    }
                });
            } else {
                // Country not found, show an error message
                alert('Country not found. Please enter a valid country name.');
            }
        } catch (error) {
            // Log the actual error for debugging purposes
            console.error(error);
            alert('An error occurred while processing the response. Please try again later.');
        }
    });
}

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const inputCountry = document.querySelector('.form-control').value.trim();
    if (inputCountry) {
        // Add a cache-busting parameter to the URL
        getCountryandNeightboor(inputCountry);
    } else {
        alert('Please enter a country name.');
    }
});










