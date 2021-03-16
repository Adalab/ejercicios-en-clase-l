//RESET BUTTON
resetButton.addEventListener('click', handleReset);
const linkCont = document.querySelector('.customize-share__link-cont');
function sendRequest() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}
const linkTwitCont = document.querySelector('.js-twitter-url');
function showURL(result) {
  if (result.success) {
    linkTwitCont.href = result.cardURL;
    linkTwitCont.innerHTML = result.cardURL;
  } else {
    linkTwitCont.innerHTML = 'ERROR:' + result.error;
  }
}
const buttonTwitter = document.querySelector(
  '.customize-share__twitter--hidden'
);
function createTwitterLink(result) {
  const twitterText = encodeURIComponent(
    '¡He creado mi tarjeta con Awesome Profile Cards de <em>y</em>! Puedes verla en: '
  );
  const twitterURL = linkTwitCont.href;
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterURL}`;
}
buttonTwitter.addEventListener('click', createTwitterLink);
