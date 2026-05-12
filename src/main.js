const output = document.querySelector("#output");
const select = document.querySelector("#sw-select");

select.addEventListener("change", async (event) => {
  const pokemonID = event.target.value;
  if (!pokemonID) return;

  // Loading state
  output.textContent = `Loading ${pokemonID}...`;

  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);

  if (!resp.ok) {
    output.textContent = `Something went wrong. Status: ${resp.status}`;
    return;
  }

  const data = await resp.json();

  const html = data

    .map((item) => `<li>${item.pokemonID ? item.id : item.name}</li>`)
    .join("");

  output.innerHTML = `<ul>${html}</ul>`;
});
