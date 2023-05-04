import { useState, useEffect } from "react";
import { Grid, Card } from "@nextui-org/react";
import { Layout } from "@/components/layouts";
import { NoFavoritos, FavoritePokemons } from "@/components/ui";

import { localFavoritos } from "@/utils";

const FavoritosPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavoritos.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavoritos />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritosPage;
