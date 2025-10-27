async function loadMovie() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const res = await fetch("movies.json");
  const movies = await res.json();
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    document.getElementById("movie-title").textContent = "Movie not found";
    return;
  }

  document.getElementById("movie-title").textContent = movie.title;

  document.getElementById("movie-detail").innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <div class="movie-info">
      <h2>${movie.title}</h2>
      <p class="rating">⭐ ${movie.rating}/10</p>
      <p>${movie.description}</p>
      <iframe src="${movie.url}" allowfullscreen></iframe>
    </div>
  `;
}

loadMovie();
