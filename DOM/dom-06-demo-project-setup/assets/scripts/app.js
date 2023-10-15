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

const movies = []

function toggleBackdrop(){
  backdrop.classList.toggle(VISIBLE_DISPLAY)
}

const toggleModal = () =>{
  modal.classList.toggle(VISIBLE_DISPLAY)
  toggleBackdrop()
}

const backdropClickHandler = () =>{
  toggleModal();
}

const updateUI = () =>{
  if(movies.length === 0){
    entryText.style.display= DISPLAY_BLOCK
  }else{
    entryText.style.display = DISPLAY_NONE
  }
}

const deleteMovieElement = (event) =>{
  // console.log(event.target.parentNode);
  // console.log(event.target);
  // console.log(event.target.parentNode.childNode());
  //event is getting called on the inner tags of the element hence deleting the parent element which is the one we are creating
  event.target.parentNode.remove()
  // event.target.remove()
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
  toggleModal()
  renderMovieData(newMovie);
  updateUI()
}

addBtn.addEventListener("click", toggleModal)
backdrop.addEventListener("click", backdropClickHandler)
cancelAddMovie.addEventListener("click", toggleModal)
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