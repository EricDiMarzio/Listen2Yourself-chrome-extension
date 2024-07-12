
window.addEventListener('load', function (e) {
    chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {file: 'payload.js'})
})


chrome.runtime.onMessage.addListener(function (message) {
   
    document.getElementById('page-title').innerHTML = message;
})

const testBtn = document.querySelector('#test-btn');
















// function getData(){
//     // const TEST_URL = 'http://cohort-calendars.us-west-2.elasticbeanstalk.com/calendar/FTRI/49'
//     // const COUNTRIES = 'https://restcountries.com/v3.1/all'

//     const URL = "https://bored-api.appbrewery.com/random"

//     fetch(URL, {
//         // mode: 'no-cors',
//           method: 'GET',
//           headers: {
//               'Content-Type' : 'application/x-www-form-urlencoded'
//           }
//       }
//     )
//       .then(response => {
//           if (!response.ok) {
//               throw new Error(response.statusText);
//           }
//           return response.json();
//       })
//       .then(data => {
//           console.log(data)
//       })
//       .catch(error => {
//           console.log('Something went wrong', error)
//       })
// }

// testBtn.addEventListener('click', getData)