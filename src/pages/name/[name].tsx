import { useState } from "react";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { Grid, Card, Text, Button, Container, Image } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { Layout } from "@/components/layouts";
import { pokeApi } from "../../api";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { localFavoritos, getPokemonInfo } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }: Props) => {
  const [isFavorito, setIsFavorito] = useState(
    localFavoritos.existFavorito(pokemon.id)
  );

  const handleToggleFavoritos = () => {
    localFavoritos.toggleFavoritos(pokemon.id);

    setIsFavorito(!isFavorito);

    if (!isFavorito) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  console.log("isFavorito: ", isFavorito);

  return (
    <Layout title={pokemon.name}>
      <div>
        <Grid.Container css={{ marginTop: "5px" }} gap={2}>
          <Grid xs={12} sm={4}>
            <Card isHoverable css={{ padding: "30px" }}>
              <Card.Body>
                <Card.Image
                  src={
                    pokemon.sprites.other?.dream_world.front_default ||
                    "/no-image.png"
                  }
                  alt={pokeApi.name}
                  width="100%"
                  height={200}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header
                css={{ display: "flex", justifyContent: "space-between" }}
              >
                <Text h1 transform="capitalize">
                  {pokemon.name}
                </Text>
                <Button
                  color="gradient"
                  auto
                  bordered={isFavorito}
                  onPress={handleToggleFavoritos}
                >
                  {!isFavorito ? "En Favoritos" : "Guardar en Favoritos"}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction="row" display="flex">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={100}
                    height={100}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);

  return {
    paths: data.results.map((pokemon) => ({ params: { name: pokemon.name } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  return {
    props: { pokemon: await getPokemonInfo(name) },
  };
};

export default PokemonByNamePage;
