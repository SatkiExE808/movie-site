const container = document.getElementById("movie-container");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

async function loadMovies() {
  const res = await fetch("movies.json");
  const movies = await res.json();
  displayMovies(movies);

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = movies.filter(m => m.title.toLowerCase().includes(query));
    displayMovies(filtered);
  });

  categorySelect.addEventListener("change", () => {
    const category = categorySelect.value;
    const filtered = category === "all"
      ? movies
      : movies.filter(m => m.category === category);
    displayMovies(filtered);
  });
}

function displayMovies(list) {
  container.innerHTML = "";
  list.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie");
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
    `;
    card.addEventListener("click", () => {
      window.location.href = `movie.html?id=${movie.id}`;
    });
    container.appendChild(card);
  });
}

loadMovies();
