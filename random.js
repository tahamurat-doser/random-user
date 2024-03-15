const containerDiv = document.querySelector(".container");

const getUsers = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/");

    console.log(res);

    if (!res.ok) {
      throw new Error(`Something went wrong ${res.status}`);
    }

    const dataUsers = await res.json();
    console.log(dataUsers.results);
    showUsers(dataUsers.results)
  } catch (error) {
    containerDiv.innerHTML = `<h5> ${error} </h5>`;
  }
};

const showUsers = (user) => {
  const defaultImg = "./error.gif";
  const cardDiv = document.querySelector(".card");
  user.forEach(({ picture, name, email, phone, gender }) => {


    if(gender == "male"){
        containerDiv.classList.add("male")
        btn.classList.add("btn-male")

    }else {
        containerDiv.classList.add("female")
        btn.classList.add("btn-female")
        cardDiv.classList.add("female-color")
    }



    cardDiv.innerHTML = `
        <img src="${
          picture.large || defaultImg }" class="card-image-top" alt="picture">
        <div class ="card-body">
        <h5 class"card-title">${Object.values(name).join(" ")}</h5>
        <p>${email}</P>
        <p>${phone}</P>
        <a href="${email}" class="btn btn-primary">Send Message</a>  
        `;
  });
};

const btn = document.querySelector("button")

btn.addEventListener("click", () => window.location.reload())

getUsers();
