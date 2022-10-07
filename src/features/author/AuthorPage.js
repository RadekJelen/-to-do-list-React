import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledParagraf } from "./styled";


const AuthorPage = () => {

  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Radosław Jeleń"
        body={
          <>
            <StyledParagraf>
            Mam 27 lat. Mieszkam w Gdańsku. Studiowałem dietetykę i zarządzanie, a z zawodu jestem kucharzem. Bardzo lubię gotować i zawsze to ze mną zostanie, lecz postanowiłem dokonać zmiany zawodu. 
            </StyledParagraf>
            <StyledParagraf last>
            Padło na IT - zapewne nikogo to tutaj nie dziwi 😉
            </StyledParagraf>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;