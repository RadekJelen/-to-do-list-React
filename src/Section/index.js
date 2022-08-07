import "./style.css"

const Section = ({ title, body, headerButtons }) => (
  <section className="section">
    <header className="section__header section__header--grid">
      <h2 className="section__title">{title}</h2>
      {headerButtons}
    </header>
    {body}
  </section>
);

export default Section;