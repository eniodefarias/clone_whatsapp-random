window.addEventListener('load', () => {
  fetchUsers();
});

function fetchUsers() {
  fetch('https://whatsapp-random-web.herokuapp.com/', {
    method: 'POST',
  })
    .then(function (response) {
      if (response.status == 404) {
        console.log('User not found, code ' + response.status);
        return;
      }
      response.json().then(function (data) {
        const user = data.users.find((user) => (user.index = 1));

        window.location.href = user.url;
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
