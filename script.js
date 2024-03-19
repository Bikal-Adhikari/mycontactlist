const api = "https://randomuser.me/api/";

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
  const response = await fetch(api);
  console.log(response);

  const data = await response.json();
  console.log(data.results);
};

fetchUsers();
