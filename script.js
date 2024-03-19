let userList = [];
const api = "https://randomuser.me/api/?results=6";

const userListELm = document.getElementById("list");

const fetchUsers = async () => {
  // const fetchUsers = () => {
  //   const user = fetch(api);
  //   promise method
  //   fetch(api)
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //async&await

  try {
    const response = await fetch(api);
    const data = await response.json();
    userList = data.results;

    display(userList);
  } catch (error) {
    console.log(error);
  }
};

fetchUsers();

const display = (userList) => {
  let usrCard = "";
  console.log(userList);
  userList.forEach((usr) => {
    usrCard += `<div class="card flex-grow-1" style="width: 18rem">
<img
  class="card-img-top"
  src="${usr.picture.large}"
  alt="Card image cap"
/>
<div class="card-body">
  <h5 class="card-title">${usr.name.title} ${usr.name.first} ${usr.name.last}</h5>
  <ul class="list-unstyled">
    <li>${usr.cell}</li>
    <li>${usr.email}</li>
    <li>${usr.location.street.number} ${usr.location.street.name} ${usr.location.city} ${usr.location.country} ${usr.location.postcode}</li>
  </ul>
</div>
</div>`;
  });
  userListELm.innerHTML = usrCard;
  document.getElementById("userCount").innerText = userList.length;
};
