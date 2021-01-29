const weather = document.querySelector(".js-weather");

const API_KEY = "aded29028ef8f1c1771b5a145a679f84";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
    });
}

// 좌표 저장
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 좌표가져오기 성공했을 때 부르는 함수
function handleGeoSucces(position) {
  const latitude = position.coords.latitude; // 위도
  const longitude = position.coords.longitude; // 경도
  const coordsObj = {
    latitude, // latitude: latitude -> latitude 같음
    longitude, // longitude: longitude -> longitude 같음
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(position) {
  console.log("Can't access geo location..");
}

// 좌표요청
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

// 좌표로딩
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // getWeather
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

// 기본
function init() {
  loadCoords();
}

init();
