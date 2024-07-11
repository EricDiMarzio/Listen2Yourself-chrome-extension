// window.confirm(`Your comment says, "${document.querySelector("#contenteditable-root").innerText}". Are you really sure you want to say that? Y/N`
// document.addEventListener('DOMContentLoaded', () => { //event to listen to button click to get the weather
//     console.log('getting weather')
//     document.getElementById('fetchButton').addEventListener('click', () => {
//         GetWeather();
//     });
// });

//when I click the weather button I want to retrieve the location and build the new fetch link
//base url
//location values
//aqi thing is a no
// const options = {
//   enableHighAccuracy: true,
//   timeout: 1000,
//   maximumAge: 0,
// };

// let locationCords;
// navigator.geolocation.getCurrentPosition(successCallback, error, options); //calling function to get location
// GetWeather();

// console.log("🔥🔥🔥")
// // console.log(locationCords)

// async function GetWeather() { //function to make api call to the weather app
//     try{

//         const apiKey = 'd80ccef6891d4b90ac724253241107'
//         const customURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationCords}&aqi=no`
//         console.log(customURL);

//         const res = await fetch(customURL);
//         const data = await res.json();

// const currentWeatherLocation = data.location.name;
// const currentRegion = data.location.region;
// const currentWeather = data.current.temp_f;
// const currentCondition = data.current.condition.text.toLowerCase();
// const currentWindSpeed = data.current.wind_mph;

// const weatherBox = document.getElementById('weatherBox');
// let string = `It's currently ${currentWeather} degrees Fahrenheit in ${currentWeatherLocation}, ${currentRegion}
// with ${currentCondition} skies and ${currentWindSpeed}mph winds.`;

//         weatherBox.innerHTML = '<div>' + string + '</div>'
//     } catch (error) {
//         console.log('Error getting activity', error)
//     }
// }

//That's so fetch
function getWeather() {
  // let locationCords;
  // navigator.geolocation.getCurrentPosition(successCallback, error, options);

  // let locationCoords = navigator.geolocation.getCurrentPosition(successCallback, error, options);
  // console.log(locationCoords)
  const apiKey = 'd80ccef6891d4b90ac724253241107';
  //     const URL =
  //   `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationCoords}&aqi=no`;
  const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=38.5767432,-121.4930125&aqi=no`;

  fetch(URL)
    .then((response) => {
      if (!response.ok) throw new Error('❌ Network error: ' + response.status);
      return response.json(); /*  */
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.log('Something went wrong. 🙃'));
}
//

// function successCallback(position) { //if able to get location then store the latitude and the longitude
//     console.log("❌")
//     console.log(position.coords.latitude)
//     console.log("❌")
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     // const string = `${latitude}, ${longitude}`;
//     // locationBox.innerHTML = '<div>' + string + '</div>';

//     return `${latitude},%${longitude}`
//     // return [latitude, longitude]
// }

// function error(err) {
//     console.log(`🚗 Error: ${err}`);
// }

////////////////////////////////////
if (navigator.geolocation)
navigator.geolocation.getCurrentPosition(
  function(position){
    const {latitude} = position.coords
    const {longitude} = position.coords
    
const apiKey = 'd80ccef6891d4b90ac724253241107';
//     const URL =
//   `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationCoords}&aqi=no`;
const URL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude || 38.5767432},${longitude || -121.4930125}&aqi=no`;

const weatherData = fetch(URL)
  .then((response) => {
    if (!response.ok) throw new Error('❌ Network error: ' + response.status);
    return response.json(); /*  */
  })
  .then((data) => {
    console.log(data);

    document
      .querySelector('#contenteditable-root')
      .addEventListener('keydown', function (e) {
        const badInputs = ['Shift', 'Backspace', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'Meta', 'CapsLock', 'Tab', 'Control', 'Alt'];
        const body = document.querySelector('body');
        if (body.querySelector('#BACKDROP') != null)
          body.removeChild(body.querySelector('#BACKDROP'));
        if (document.querySelector('#contenteditable-root').innerText === "") body.removeChild(body.querySelector('#BACKDROP'));
        const backdrop = document.createElement('div');
        backdrop.setAttribute('id', 'BACKDROP');
        backdrop.style['min-height'] = '200px';
        backdrop.style.height = 'fit-content';
        backdrop.style.width = '500px';
        backdrop.style['background-color'] = 'rgba(0, 0, 0, .6)';
        backdrop.style.color = 'rgba(255, 255, 255, .8)';
        backdrop.style.position = 'fixed';
        background.style['z-index'] = 100;
        backdrop.style.top = '30%';
        backdrop.style.left = '30%';
        backdrop.style['border-radius'] = '12px 12px 5px 5px';
        backdrop.style.padding = '15px';
        backdrop.style.display = 'flex';
        backdrop.style['flex-direction'] = 'column';
        backdrop.style['justify-content'] = 'space-between';

        const pre = document.createElement('h1');
        pre.style['line-height'] = '1.2';
        pre.style['font-size'] = '2.2rem';
        pre.innerText = 'Are you sure you want to comment:';
        if (backdrop.querySelector('#COMMENT') != null)
          backdrop.removeChild('#COMMENT');
        const comment = document.createElement('h1');
        comment.setAttribute('id', 'COMMENT');
        comment.style['font-size'] = '2.4rem';
        comment.style.color = 'orangered';
        comment.style['line-height'] = '1.2';
        comment.style.padding = '3px';
        comment.innerText =
          document.querySelector('#contenteditable-root').innerText +
          (badInputs.includes(e.key) ? '' : e.key);

        const post = document.createElement('h1');
        post.style['line-height'] = '1.2';
        post.style['font-size'] = '2.2rem';
        post.innerText = `Right now it's ${data.current.temp_f}°F and ${data.current.condition.text.toLowerCase()} skies outside. Maybe just go for a walk?`;

        const buttons = document.createElement('div');
        buttons.style.display = 'flex';
        buttons.style.width = '100%';
        buttons.style.gap = '20px';

        const commentAnyway = document.createElement('div');
        commentAnyway.style['font-size'] = '2.2rem';
        commentAnyway.style['background-color'] = 'rgba(255, 255, 255, .5)';
        commentAnyway.style.color = 'black';
        commentAnyway.style.padding = '6px 12px';
        commentAnyway.style['text-align'] = 'center';
        commentAnyway.style.width = '50%';
        commentAnyway.innerText = "Yes, I'm sure.";
        commentAnyway.addEventListener('click', e =>  body.removeChild(body.querySelector('#BACKDROP')))

        const goOutside = document.createElement('div');
        goOutside.style['font-size'] = '2.2rem';
        goOutside.style['background-color'] = 'rgba(255, 255, 255, .5)';
        goOutside.style.color = 'black';
        goOutside.style.padding = '6px 12px';
        goOutside.style['text-align'] = 'center';
        goOutside.style.width = '50%';
        goOutside.innerText = "No, I'll go for a walk.";
        goOutside.addEventListener('click', e =>  {
          body.removeChild(body.querySelector('#BACKDROP'))
          document.querySelector('#contenteditable-root').innerText = ""
        })


        body.appendChild(backdrop);
        backdrop.appendChild(pre);
        backdrop.appendChild(comment);
        backdrop.appendChild(post);
        backdrop.appendChild(buttons);
        buttons.appendChild(commentAnyway);
        buttons.appendChild(goOutside);
      });

    
  })
  .catch((error) => console.log('Something went wrong. 🙃'));






  }, function(){
    console.alert('❌ Could not get your position')
  });



// const weatherData = getWeather();

// chrome.runtime.sendMessage(
//   document.querySelector('#contenteditable-root').innerText
// );
