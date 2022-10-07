import Section from "../../common/Section";
import { Content } from "./styled";

const AuthorPage = () => {

  return (
    <>
      <h1>O autorze</h1>
      <Section
        title="Radosław Jeleń"
        body={
          <>
            <Content>
            Mam 27 lat. Mieszkam w Gdańsku. Studiowałem dietetykę i zarządzanie, a z zawodu jestem kucharzem. Bardzo lubię gotować i zawsze to ze mną zostanie, lecz postanowiłem dokonać zmiany zawodu. 
            </Content>
            <Content last>
            Padło na IT - zapewne nikogo to tutaj nie dziwi 😉
            </Content>
          </>
        }
      />
    </>
  );
}

export default AuthorPage;