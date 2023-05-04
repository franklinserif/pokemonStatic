import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import NextLink from "next/link";
import { useTheme, Text, Spacer } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      className={styles["navbar-wrapper"]}
      style={{ backgroundColor: theme?.colors.gray100.value }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />
      <NextLink href="/">
        <div style={{ display: "flex" }}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3 css={{ marginTop: "13px" }}>
            okemon
          </Text>
        </div>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favoritos">
        <Text color="white" h3>
          Favoritos
        </Text>
      </NextLink>
    </div>
  );
};
