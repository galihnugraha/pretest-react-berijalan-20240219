import dataUser from "./data.js"

const showContainer = (dataUser) => {
  return `<div class="row">
              <div class="col-md-4">
                  <p>Name : ${dataUser.name}</p>
                  <p>Phone : ${dataUser.phone}</p>
                  <p>Address : ${dataUser.address}</p>
              </div>
              <div class="col-md-4">
                  <p>Age : ${dataUser.age}</p>
                  <p>Education : ${dataUser.education}</p>
                  <p>Mail : ${dataUser.mail}</p>
              </div>
          </div>`
}

const showCards = (dataUser, i) => {
  return `<div class="col-md-4 my-3">
              <div class="card" style="min-height: 500px">
                  <div class="card-body">
                  <img class="card-img-top" src="${dataUser.charts[i].thumbnail}" alt="poster film ${dataUser.Title}">
                      <h5 class="card-title">${dataUser.charts[i].title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">Price : $${dataUser.charts[i].price}</h6>
                      <h6 class="card-subtitle mb-2 text-muted">Discount : $${dataUser.charts[i].discountPercentage}</h6>
                      <br>
                      <h6 class="card-subtitle mb-2 text-muted">${dataUser.charts[i].description}</h6>
                  </div>
              </div>
          </div>`
}

const container = showContainer(dataUser)
const modalContainer = document.querySelector('#container')
modalContainer.innerHTML = container

const modalCharts = document.querySelector('#cards')
let cards = ``
for (let i = 0; i < dataUser.charts.length; i++) {
  cards += showCards(dataUser, i)
}
modalCharts.innerHTML = cards
