const DISPLAY_BLOCK = "block"
const DISPLAY_NONE = "none";
const VISIBLE_DISPLAY = "visible"

const addBtn = document.querySelector(".add-movie")
const movieList = document.querySelector("#movie-list")
const modal = document.getElementById('add-modal')
const backdrop = document.getElementById("backdrop")
const cancelAddMovie = modal.querySelector(".btn--passive")
const addConfirm = cancelAddMovie.nextElementSibling;
const entryText = document.getElementById("entry-text")
const deleteMovieModal = document.getElementById("delete-modal")


const movies = []

function toggleBackdrop(){
  backdrop.classList.toggle(VISIBLE_DISPLAY)
}

const closeMovieModal = () =>{
  modal.classList.remove(VISIBLE_DISPLAY)
  toggleBackdrop()
  clearInputs()
}

const showMovieModal = () =>{
  modal.classList.add(VISIBLE_DISPLAY)
  toggleBackdrop()
}

const backdropClickHandler = () =>{
  closeMovieModal();
  cancelMovieDeletionModal()
  clearInputs();
}

const updateUI = () =>{
  if(movies.length === 0){
    entryText.style.display= DISPLAY_BLOCK
  }else{
    entryText.style.display = DISPLAY_NONE
  }
}

const cancelMovieDeletionModal = () =>{
  toggleBackdrop()
  deleteMovieModal.classList.remove(VISIBLE_DISPLAY)
}

const deleteMovieElement = (event) =>{
  deleteMovieModal.classList.add(VISIBLE_DISPLAY)
  toggleBackdrop()

  deleteMovieModal.querySelector(".btn--passive").addEventListener("click", cancelMovieDeletionModal)
  deleteMovieModal.querySelector(".btn--danger").addEventListener("click", () => {
    event.target.parentNode.remove()
  })
}

const renderMovieData = ({title, url, rating}) =>{
  const element = document.createElement("li")
  element.className = "movie-element"
  element.innerHTML = `
    <div class="movie-element__image">
      <img src="${url}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars </p>
    </div>
  `;
  element.addEventListener("click", deleteMovieElement) 
  //event is getting called on the inner tags of the element hence deleting the parent element which is the one we are creating
  movieList.appendChild(element);
}

const userInput = () =>{
  const title = modal.querySelector("#title").value
  const url = modal.querySelector("#image-url").value
  const rating = modal.querySelector("#rating").value

  return {title, url, rating}
}

const clearInputs = () =>{
  modal.querySelector("#title").value = ""
  modal.querySelector("#image-url").value = ""
  modal.querySelector("#rating").value = ""
}

function userInputHandler(){
  
  const {title, url, rating} = userInput()

  if(title.trim() === "" || url.trim() === "" || rating < 1 || rating > 5){
    alert("Invalid Input ")
    return;
  }
  
  const newMovie = {
    title, url, rating
  }

  movies.push(newMovie)
  console.log(movies);
  clearInputs();
  closeMovieModal()
  toggleBackdrop()
  renderMovieData(newMovie);
  updateUI()
}

addBtn.addEventListener("click", showMovieModal)
backdrop.addEventListener("click", backdropClickHandler)
cancelAddMovie.addEventListener("click", closeMovieModal)
addConfirm.addEventListener("click", userInputHandler)

// function displayModal(event){
//   modal.classList.toggle("visible")


//   if(modal.style.display !== DISPLAY_NONE){
//     const addNew = document.querySelector(".btn--success")
//     addNew.addEventListener("click", addMovieToList)

    
//   }
//   function addMovieToList(event){
//     const title = document.getElementById("title").value
//     const url = document.getElementById("image-url").value
//     const rating = document.getElementById("rating").value
//     // const newChild = `<li class="movie-element">{}<\\li>`
//     // movieList.appendChild()
//     const newMovie = document.createElement('div')
//     newMovie.classList.add("movie-element")
//     newMovie.innerHTML = `
//       <h2>${title}</h2>
//       <p>${url}</p>
//     `
//     movieList.appendChild(newMovie);
//     console.log(title, url, rating)
//     modal.style.display = DISPLAY_NONE
//   }
// }