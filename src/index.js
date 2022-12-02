const init = () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", getMovie)
};

// render movie details
function renderMovie(movie) {
  const movieDetails = document.querySelector("#movieDetails");
  const header = movieDetails.querySelector("h4");
  const summary = movieDetails.querySelector("p");
  header.innerHTML = movie.title;
  summary.innerHTML = movie.summary;
}


// get movie data
function getMovie(e) {
  e.preventDefault();
  const id = document.querySelector("#searchByID").value;
  if(id > 0 && id <= 3){
  fetch(`http://localhost:3000/movies/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderMovie(data);
    });
  }else{
    alert("id not found")
    location.reload()
  }
}

document.addEventListener("DOMContentLoaded", init);
