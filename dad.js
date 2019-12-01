'use strict';

function randDO() {
    return Math.floor(Math.random() * 100) + 1;
}

function getDogImage() {
  const myHeaders = new Headers({
    "Accept": "application/json"
  })
  fetch('https://icanhazdadjoke.com/', {
  headers: myHeaders
})
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
}

function getGif() {
  fetch('https://api.giphy.com/v1/gifs/search?api_key=GNtNZ4D3l9PPKcgigRRToharJZPjAoYV&q=laughing&limit=100&offset=0&rating=PG-13&lang=en')
    .then(response => response.json())
    .then(responseJson2 => 
      displayResults2(responseJson2))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  $('.results').append(
    `<p class="joke">${responseJson.joke}</p>`
  )
  $('.results').removeClass('hidden');
}

function displayResults2(responseJson2) {
      setTimeout(() => { 
        $('.results').append( 
            `<img src = ${responseJson2.data[randDO()].images.downsized_large.url} alt="laughing .GIF"</img>`
        )
      }, 500);
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
    getGif();
    $('.results').empty();
  });
}

$(function() {
  watchForm();
});