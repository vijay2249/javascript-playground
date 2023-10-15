const DISPLAY_BLOCK = "block"
const DISPLAY_NONE = "none";

const addBtn = document.querySelector(".add-movie")
const movieList = document.querySelector("#movie-list")
const modal = document.getElementById('add-modal')

addBtn.addEventListener("click", displayModal)

function displayModal(event){
  modal.style.display = 
      modal.style.display===DISPLAY_NONE? DISPLAY_BLOCK: DISPLAY_NONE;


  if(modal.style.display !== DISPLAY_NONE){
    const addNew = document.querySelector(".btn--success")
    addNew.addEventListener("click", addMovieToList)

    
  }
  function addMovieToList(event){
    const title = document.getElementById("title").value
    const url = document.getElementById("image-url").value
    const rating = document.getElementById("rating").value
    // const newChild = `<li class="movie-element">{}<\\li>`
    // movieList.appendChild()
    const newMovie = document.createElement('div')
    newMovie.classList.add("movie-element")
    newMovie.innerHTML = `
      <h2>${title}</h2>
      <p>${url}</p>
    `
    movieList.appendChild(newMovie);
    console.log(title, url, rating)
    modal.style.display = DISPLAY_NONE
  }
}