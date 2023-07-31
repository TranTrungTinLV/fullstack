// JavaScript code
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
let clearData = [];
const bntWhereAmI = document.querySelector('#btn')
const imgContainer = document.querySelector('.image')

function render(data, className = ' ') {
    // Get the UTC offset and create a Luxon DateTime object
    const utcOffset = data.timezones && data.timezones.length > 0 ? data.timezones[0] : 'N/A';
    const currentTime = luxon.DateTime.utc();
    const localTime = currentTime.setZone(utcOffset);

    // Access specific values from the arrays
    const fgr = data.languages ? Object.values(data.languages)[0] : 'N/A';
    const fqr = data.currencies ? Object.values(data.currencies)[0].name : 'N/A';
    let flagTag;

    function clearCountriesContainer(countries) {
        return clearData.includes(countries);
    }
    // Format the local time as desired
    const localTimeString = localTime.toFormat('dd/MM/yyyy, hh:mm:ss a');
    const html = `<div class="country card ${className}">
                <img src="${flagTag ? data.flags.png : data.flags.svg}" class="county_img card-img-top" alt="">
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
    // countriesContainer.style.opacity = 1;
    document.querySelector('.form-control').value = '';

}

function renderError(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

// function getCountryandNeightboor(inputCountry) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${inputCountry}`);
//     request.send();

//     request.addEventListener('load', function () {
//         try {
//             const countriesData = JSON.parse(this.responseText);
//             if (countriesData) {
//                 // Render each country separately
//                 countriesData.forEach((country) => {
//                     console.log(country);
//                     // Render the main country
//                     render(country);

//                     // Render neighboring countries
//                     const [neighbors] = country.borders;
//                     if (neighbors && neighbors.length > 0) {
//                         // AJAX call to fetch neighboring countries
//                         const request2 = new XMLHttpRequest();
//                         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbors}`);
//                         request2.send();
//                         request2.addEventListener('load', function () {
//                             const neighborCountriesData = JSON.parse(this.responseText);
//                             neighborCountriesData.forEach((neighborCountry) => {
//                                 console.log(neighborCountry);
//                                 render(neighborCountry, 'neighbour');
//                             });
//                         });
//                     }
//                 });
//             } else {
//                 // Country not found, show an error message
//                 alert('Country not found. Please enter a valid country name.');
//             }
//         } catch (error) {
//             // Log the actual error for debugging purposes
//             console.error(error);
//             alert('An error occurred while processing the response. Please try again later.');
//         }
//     });
// }

function getJson(url, errorMsg = 'Something went wrong') {
    return fetch(url)
        .then(response => {
            if (!response.ok)
                throw new Error(`${errorMsg}(${response.status})`);
            return response.json();
        })
};

// function getCountryandNeightboor(inputCountry) {
//     fetch(`https://restcountries.com/v3.1/name/${inputCountry}`)
//         .then(response => {
//             if (!response.ok)
//                 throw new Error(`Country not found (${response.status})`);
//             return response.json();
//         }).then(data => {
//             console.log(data[0]);
//             render(data[0]);
//             data.forEach(country => {
//                 console.log(country);
//                 country.borders.map(
//                     e => fetch(`https://restcountries.com/v3.1/alpha/${e}`).then(response => response.json()).then(data => {
//                         render(data[0], 'neighbour')
//                     })).join('');
//             })
//         }).catch(error => (
//             renderError(`Somthing Error ${error.message}`)
//         )).finally(() => {
//             countriesContainer.style.opacity = 1
//         });

// }



function getCountryandNeightboor(inputCountry) {
    getJson(`https://restcountries.com/v3.1/name/${inputCountry}`, 'Could not found').then(data => {
        console.log(data[0]);
        render(data[0]);

        data.forEach(country => {
            console.log(country);
            if (!country.borders) throw new Error('No country found')
            country.borders.map(

                function (e) {
                    if (!e) throw new Error('No country found');
                    getJson(`https://restcountries.com/v3.1/alpha/${e}`)
                        .then(data => {
                            render(data[0], 'neighbour')
                        })
                }


            ).join('');
        })
    }).catch(error => (
        renderError(`Somthing Error ${error.message}`)
    )).finally(() => {
        countriesContainer.style.opacity = 1
    });

}





const getPosition = function () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
// getPosition().then(position => console.log(position))
const whereAmI = () => {
    getPosition()
        .then(pos => {
            const {
                latitude: lat,
                longitude: lon
            } = pos.coords;
            console.log(lat);
            console.log(lon);
            return fetch(`https://geocode.xyz/${lat},${lon}?geoit=json&auth=197747802245300204863x16402`);
        })
        .then(res => {
            if (!res.ok)
                throw new Error('Problem with');
            return res.json();
        })
        // .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(`You are in: ${data.city},${data.country}`);

            return getCountryandNeightboor(data.country)
        })
        .then(response => {
            if (!response.ok);
            return response.json()
        })
        .then(data => render(data[0]))

}
// whereAmI(10.716570, 106.738490);

const createImage = function (imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;
        img.addEventListener('load', function (e) {
            // e.preventDefault();
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error', function () {
            reject(new Error('Img not found: '))
        });
    })
}

//ASYNC/AWAIT
// const loadPause = async () => {
//     try {
//         let img = await createImage('./img/img-1.jpg');
//         // alert('Successfully');
//         await wait(2); //đợi xử lý sau 2s;
//         img.style.display = 'none';
//         img = await createImage('./img/img-2.jpg');
//         // alert('Successfully');
//         await wait(2); //đợi xử lý sau 2s;
//         img.style.display = 'none';

//         img = await createImage('./img/img-3.jpg');
//         // alert('Successfully');
//         await wait(2); //đợi xử lý sau 2s;
//         img.style.display = 'none';
//     } catch (err) {
//         console.log('Error: ' + err.message)
//     }
// }

//loadAll convert to Array and async/await
const loaddAll = async function (imgArr) {
    try {
        const imgs = await imgArr.map(async e => await createImage(e));
        console.log(imgs);
    } catch (err) {
        console.error(err)
    }
}

// loadPause()
loaddAll(['./img/img-1.jpg', './img/img-3.jpg', './img/img-2.jpg'])


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


bntWhereAmI.addEventListener('click', function (e) {
    e.preventDefault();
    whereAmI();

})