const movieContainer = document.getElementById("movie-container");
const trendingContainer = document.getElementById("trending-container");
const featured = document.getElementById("featured");
const featuredTitle = document.getElementById("featured-title");
const featuredDesc = document.getElementById("featured-desc");
const playFeatured = document.getElementById("play-featured");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const videoPlayer = document.getElementById("video-player");

let movies = [];

async function loadMovies() {
  const res = await fetch("movies.json");
  movies = await res.json();

  const featuredMovie = movies[0];
  featured.style.backgroundImage = `url(${featuredMovie.poster})`;
  featuredTitle.textContent = featuredMovie.title;
  featuredDesc.textContent = featuredMovie.description;

  playFeatured.onclick = () => openPlayer(featuredMovie.url);

  const trending = movies.filter(m => m.trending);
  trendingContainer.innerHTML = trending.map(
    m => `<img src="${m.poster}" alt="${m.title}" onclick="openPlayer('${m.url}')">`
  ).join("");

  displayMovies(movies);
}

function displayMovies(list) {
  movieContainer.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie");
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    card.onclick = () => openPlayer(movie.url);
    movieContainer.appendChild(card);
  });
}

// modal player
function openPlayer(url) {
  modal.style.display = "flex";
  videoPlayer.src = url;
}
closeModal.onclick = () => {
  modal.style.display = "none";
  videoPlayer.src = "";
};
window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
    videoPlayer.src = "";
  }
};

function scrollCarousel(dir) {
  trendingContainer.scrollBy({ left: dir * 400, behavior: "smooth" });
}

loadMovies();
