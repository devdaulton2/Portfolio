var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

var popover = new bootstrap.Popover(document.querySelector('.contact-popover'), {
    trigger: 'focus'
  })


fetch(`https://api.giphy.com/v1/gifs/search?api_key=nACFCo5axVIb7SIZu8310DznGc3ZEC7m&q=thank you&limit=1&offset=0&rating=g&lang=en`).then(response => response.json()).then(json => displayThanks(json));

function displayThanks(gif) {
  let myGif = gif.data[0].url;
  console.log(myGif);
}