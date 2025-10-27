const movieContainer = document.getElementById("movie-container");
const trendingContainer = document.getElementById("trending-container");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const featured = document.getElementById("featured");
const featuredTitle = document.getElementById("featured-title");
const featuredDesc = document.getElementById("featured-desc");
const playFeatured = document.getElementById("play-featured");

let movies = [];

async function loadMovies() {
  const res = await fetch("movies.json");
  movies = await res.json();

  // Featured movie = first one
  const featuredMovie = movies[0];
  featured.style.backgroundImage = `url(${featuredMovie.poster})`;
  featuredTitle.textContent = featuredMovie.title;
  featuredDesc.textContent = featuredMovie.description;

  playFeatured.onclick = () => {
    window.open(featuredMovie.url, "_blank");
  };

  // Trending carousel
  const trending = movies.filter(m => m.trending);
  trendingContainer.innerHTML = trending
    .map(
      m => `<img src="${m.poster}" alt="${m.title}" title="${m.title}" onclick="window.open('${m.url}','_blank')" />`
    )
    .join("");

  displayMovies(movies);
}

function displayMovies(list) {
  movieContainer.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie");
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
    `;
    card.addEventListener("click", () => {
      window.open(movie.url, "_blank");
    });
    movieContainer.appendChild(card);
  });
}

// Filter logic
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(query));
  displayMovies(filtered);
});

categorySelect.addEventListener("change", () => {
  const category = categorySelect.value;
  const filtered =
    category === "all"
      ? movies
      : movies.filter(m => m.category === category);
  displayMovies(filtered);
});

loadMovies();
