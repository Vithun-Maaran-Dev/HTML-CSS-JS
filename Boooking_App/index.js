//Create you project here from scratch
const moviesList = [
     { movieName: "Flash", price: 7 },
     { movieName: "Spiderman", price: 5 },
     { movieName: "Batman", price: 4 },
];
let totalPrice = 0;
let singleMoviePrice = 7;
let seatCount = 0;

// Use moviesList array for displaing the Name in the dropdown menu
const movieDrpDwn = document.getElementById('selectMovie');

for (let movie of moviesList) {
     const newOption = document.createElement("option");
     newOption.value = `${movie.movieName}-${movie.price}`;
     newOption.text = `${movie.movieName} $${movie.price}`
     movieDrpDwn.append(newOption)
}

movieDrpDwn.addEventListener('change', () => {

     const movieName = document.getElementById('movieName');
     const moviePrice = document.getElementById('moviePrice');

     let drpdwnValues = movieDrpDwn.value.split('-');

     movieName.textContent = drpdwnValues[0];
     moviePrice.textContent = `$${drpdwnValues[1]}`;
     singleMoviePrice = parseInt(drpdwnValues[1]);

})


//Add eventLister to each unoccupied seat
const seats = document.querySelectorAll('#seatCont .seat');
let seletedSeats = [];
let totalPriceLbl = document.getElementById('totalPrice');
let seatCountLbl = document.getElementById('numberOfSeat');

let initialSeatValue = 0
seats.forEach(seat => {
     const createSeatID = document.createAttribute('data-seatId')
     createSeatID.value = ++initialSeatValue;
     seat.setAttributeNode(createSeatID);
});

seats.forEach((seat) => {
     seat.addEventListener('click', () => {

          if (!seat.classList.contains('selected') && !seat.classList.contains('occupied')) {
               seat.classList.add('selected');
               seletedSeats.push(seat);

               if (seletedSeats.length > 0) {
                    totalPrice = singleMoviePrice * seletedSeats.length;
                    totalPriceLbl.textContent = `$ ${totalPrice}`

                    seatCount++
                    seatCountLbl.textContent = seatCount;

                    seletedSeatsDisplay(seat);
               }

          }
          else {
               if (!seat.classList.contains('occupied')) {
                    seat.classList.remove('selected')
                    const index = seletedSeats.indexOf(seat);
                    if (index > -1) {
                         seletedSeats.splice(index, 1); // Remove "selected" from the array
                    }

                    totalPrice -= singleMoviePrice;
                    totalPriceLbl.textContent = `$ ${totalPrice}`

                    seatCount--
                    seatCountLbl.textContent = seatCount;

                    seletedSeatsDisplay(seat);

               }
          }
     })
});

//Add eventLsiter to continue Button

const btnContinue = document.getElementById('proceedBtn')
btnContinue.addEventListener('click', () => {
     if (seletedSeats.length == 0) {
          alert('Oops no seat Seleted..!')
     }
     else {
          if (seletedSeats.length > 0) {
               seletedSeats.forEach((seat) => {
                    seat.classList.remove('selected');
                    seat.classList.add('occupied');
               })
          }
          totalPrice = 0;
          seatCount = 0;
          seletedSeats = [];
          totalPriceLbl.textContent = `$ ${totalPrice}`;
          seatCountLbl.textContent = seatCount;

          alert('Yayys! Your Seats have been Booked.')
          selectedSeatsHolderEl.innerHTML = ``;

     }
})

//Add eventListerner to Cancel Button
const btnCancel = document.getElementById('cancelBtn')
btnCancel.addEventListener('click', () => {
     if (seletedSeats.length > 0) {
          seletedSeats.forEach((seat) => {
               seat.classList.remove('selected');
          })
     }
     totalPrice = 0;
     seatCount = 0;
     seletedSeats = [];
     selectedSeatsHolderEl.innerHTML = ``;
     totalPriceLbl.textContent = `$ ${totalPrice}`;
     seatCountLbl.textContent = seatCount;

})

const selectedSeatsHolderEl = document.getElementById("selectedSeatsHolder");
function seletedSeatsDisplay(seat) {

     const isspanTag = document.getElementsByClassName('noSelected')
     if (isspanTag.length > 0) {
          selectedSeatsHolderEl.innerHTML = ``;
     }

     if (seat.classList.contains('selected')) {
          const seatHolder = document.createElement("div");

          seatHolder.classList.add("selectedSeat");
          selectedSeatsHolderEl.appendChild(seatHolder);

          seatHolder.innerHTML = seat.dataset.seatid;
     }
     else {
          // Find and remove the seat if it’s deselected

          //console.log([...selectedSeatsHolderEl.children]);
          const seatToRemove = [...selectedSeatsHolderEl.children].find((el) => {
               return el.innerHTML === seat.dataset.seatid
          });

          if (seatToRemove) seatToRemove.remove();
     }


     if (seletedSeats.length == 0) {
          selectedSeatsHolderEl.innerHTML = ``;
          const spanEl = document.createElement("span");
          spanEl.classList.add("noSelected");
          spanEl.innerHTML = `NO SEAT SELECTED`;
          selectedSeatsHolderEl.appendChild(spanEl);
     }
}






////// this this real soln from course...//////

// const moviesList = [
//      { movieName: "Flash", price: 7 },
//      { movieName: "Spiderman", price: 5 },
//      { movieName: "Batman", price: 4 },
// ];

// const selectMovieEl = document.getElementById("selectMovie");

// const allSeatCont = document.querySelectorAll("#seatCont .seat");
// console.log(allSeatCont)

// const selectedSeatsHolderEl = document.getElementById("selectedSeatsHolder");

// const moviePriceEl = document.getElementById("moviePrice");

// const cancelBtnEL = document.getElementById("cancelBtn");

// const proceedBtnEl = document.getElementById("proceedBtn");

// moviesList.forEach((movie) => {
//      const optionEl = document.createElement("option");
//      optionEl.innerHTML = `${movie.movieName} $${movie.price}`;
//      selectMovieEl.appendChild(optionEl);
// });

// let moviePrice = 7;
// let currentMovieName = `Tom and Jerry 2021`;

// selectMovieEl.addEventListener("input", (e) => {
//      let movieName = e.target.value.split("");
//      let dollarIndex = movieName.indexOf("$");
//      let movie = movieName.splice(0, dollarIndex - 1).join("");
//      currentMovieName = movie;
//      moviePrice = JSON.parse(movieName.splice(2, dollarIndex).join(""));

//      updatMovieName(movie, moviePrice);
//      updatePrice(moviePrice, takenSeats.length);
// });
// //
// let initialSeatValue = 0;
// allSeatCont.forEach((seat) => {
//      const attr = document.createAttribute("data-seatid");
//      attr.value = ++initialSeatValue;
//      seat.setAttributeNode(attr);
// });

// let seatContEl = document.querySelectorAll("#seatCont .seat:not(.occupied)");
// console.log(seatContEl);

// // console.log(seatContEl);
// let takenSeats = [];

// seatContEl.forEach((seat) => {
//      seat.addEventListener("click", (e) => {

//           console.log(seat);

//           let isSelected = seat.classList.contains("selected");

//           let seatId = JSON.parse(seat.dataset.seatid);


//           if (!isSelected) {
//                seat.classList.add("selected");
//                takenSeats.push(seatId);
//                takenSeats = [...new Set(takenSeats)];
//                console.log(takenSeats);


//           } else if (isSelected) {
//                seat.classList.remove("selected");

//                takenSeats = takenSeats.filter((seat) => {
//                     // console.log(seat,seatId)
//                     if (seat !== seatId) {
//                          return seat;
//                     }
//                });
//           }
//           updateSeats();
//           updatePrice(moviePrice, takenSeats.length);
//      }, { once: true });
// });

// function updateSeats() {
//      selectedSeatsHolderEl.innerHTML = ``;

//      takenSeats.forEach((seat) => {

//           console.log(seat);


//           const seatHolder = document.createElement("div");
//           seatHolder.classList.add("selectedSeat");
//           selectedSeatsHolderEl.appendChild(seatHolder);

//           seatHolder.innerHTML = seat;
//      });

//      if (!takenSeats.length) {
//           const spanEl = document.createElement("span");
//           spanEl.classList.add("noSelected");
//           spanEl.innerHTML = `NO SEAT SELECTED`;
//           selectedSeatsHolderEl.appendChild(spanEl);
//      }

//      seatCount();
// }

// function seatCount() {
//      const numberOfSeatEl = document.getElementById("numberOfSeat");
//      numberOfSeatEl.innerHTML = takenSeats.length;
// }

// function updatMovieName(movieName, price) {
//      const movieNameEl = document.getElementById("movieName");
//      const moviePriceEl = document.getElementById("moviePrice");
//      movieNameEl.innerHTML = movieName;
//      moviePriceEl.innerHTML = `$ ${price}`;

// }

// function updatePrice(price, seats) {
//      const totalPriceEl = document.getElementById("totalPrice");
//      let total = seats * price;
//      totalPriceEl.innerHTML = `$ ${total}`;
// }

// cancelBtn.addEventListener("click", (e) => {
//      cancelSeats();
// });

// function cancelSeats() {
//      takenSeats = [];
//      seatContEl.forEach((seat) => {
//           seat.classList.remove("selected");
//      });
//      updatePrice(0, 0);
//      updateSeats();
// }

// proceedBtnEl.addEventListener("click", (e) => {
//      if (takenSeats.length) {
//           alert("Yayy! Your Seats has been booked");
//           uncancelSeats();
//      } else {
//           alert("Oops no seat Selected");
//      }
// });

// function uncancelSeats() {
//      takenSeats = [];
//      console.log(seatContEl);
//      seatContEl.forEach((seat) => {
//           if (seat.classList.contains("selected")) {
//                console.log(seat);
//                seat.classList.remove("selected");
//                seat.classList.add("seat")
//                seat.classList.add("occupied");
//           }
//      });
//      updatePrice(0, 0);
//      updateSeats();
// }
