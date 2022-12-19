import { CSSProperties } from "react";
import { PacmanLoader } from "react-spinners";
import { Container } from "./styles";

export const LoaderDash = () => {

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };

    return(
        <Container>
            <PacmanLoader 
                color="##f9b209"
                size="150px"
            />
        </Container>
    )
}