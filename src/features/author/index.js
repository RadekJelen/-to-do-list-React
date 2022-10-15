import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { StyledDiv, StyledImg, StyledParagraf } from "./styled";
import image from './RJ.jpg';

const AuthorPage = () => {

  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title={<StyledParagraf header>Cześć! Fajnie, że to czytasz 😄</StyledParagraf>}
        body={
            <StyledDiv>
              <StyledImg width={225} height={225} src={image} alt="Radosław Jeleń - portret" />
              <div>
                <StyledParagraf>
                  Mam 27 lat. Mieszkam w Gdańsku. Studiowałem dietetykę i zarządzanie, a z zawodu jestem kucharzem. Bardzo lubię gotować i zawsze to ze mną zostanie, lecz postanowiłem dokonać zmiany zawodu. Padło na IT.
                </StyledParagraf>
                <StyledParagraf middle>
                  Pisaniem stron internetowych zacząłem interesować się w tym roku. Strona, na której jesteś, jest efektem kursu, którego podjąłem się w celu rozwinięcia swoich umiejętności, poszerzenia wiedzy oraz rozpoczęcia nowej kariery w branży. Liczę, że ten skromny projekt przypadnie Ci do gustu.
                </StyledParagraf>
                <StyledParagraf>
                  Pozdrawiam<br />Radosław Jeleń
                </StyledParagraf>
              </div>
            </StyledDiv>
          }
      />
    </Container>
  );
}

export default AuthorPage;