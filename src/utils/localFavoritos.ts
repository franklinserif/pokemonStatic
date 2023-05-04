const existFavorito = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  let favoritos: number[] = JSON.parse(
    localStorage.getItem("favoritos") || "[]"
  );
  return favoritos.includes(id);
};

const toggleFavoritos = (id: number) => {
  let favoritos: number[] = JSON.parse(
    localStorage.getItem("favoritos") || "[]"
  );

  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((pokeId) => pokeId !== id);
  } else {
    favoritos.push(id);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favoritos") || "[}");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { toggleFavoritos, existFavorito, pokemons };
