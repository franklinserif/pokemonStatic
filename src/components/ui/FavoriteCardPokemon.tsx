import { FC } from "react";
import { Grid, Card } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const handleFavoriteClick = () => {
    router.push(`/pokemon/${pokemon}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} onClick={handleFavoriteClick}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
