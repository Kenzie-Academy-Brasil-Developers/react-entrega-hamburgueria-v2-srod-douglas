import { PacmanLoader } from "react-spinners";
import { Container } from "./styles";

export const LoaderDash = () => {
    return(
        <Container>
            <PacmanLoader
                color="#d6c136"
                cssOverride={{}}
                loading
                margin={-10}
                size={300}
                speedMultiplier={2}
            />
        </Container>
    )
}