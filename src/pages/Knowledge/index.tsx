import styles from "./styles.module.css";

export function Knowledge() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.logos}>
          <img
            className={styles.htmlLogo}
            src={`${import.meta.env.BASE_URL}html-logo.png`}
          />
          <img
            className={styles.cssLogo}
            src={`${import.meta.env.BASE_URL}css-logo.png`}
          />
          <img
            className={styles.javascriptLogo}
            src={`${import.meta.env.BASE_URL}javascript-logo.png`}
          />
          <img
            className={styles.typescriptLogo}
            src={`${import.meta.env.BASE_URL}typescript-logo.png`}
          />
          <img src={`${import.meta.env.BASE_URL}vite-logo.png`} />
          <img src={`${import.meta.env.BASE_URL}react-logo.png`} />
          <img
            className={styles.javaLogo}
            src={`${import.meta.env.BASE_URL}java-logo.png`}
          />
          <img src={`${import.meta.env.BASE_URL}kotlin-logo.png`} />
          <img src={`${import.meta.env.BASE_URL}swift-logo.png`} />
          <img
            className={styles.mysqlLogo}
            src={`${import.meta.env.BASE_URL}mysql-logo.png`}
          />
          <img src={`${import.meta.env.BASE_URL}python-logo.png`} />
          <img
            className={styles.csharpLogo}
            src={`${import.meta.env.BASE_URL}csharp-logo.png`}
          />
          <img src={`${import.meta.env.BASE_URL}c-logo.png`} />
          <img
            className={styles.gitLogo}
            src={`${import.meta.env.BASE_URL}git-logo.png`}
          />
          <img
            className={styles.tailwindLogo}
            src={`${import.meta.env.BASE_URL}tailwind-logo.png`}
          />
        </div>
      </section>

      <section className={styles.knowledgeText}>
        <p>
          Gjennom studiet har vi lært å bygge løsninger fra ende til ende - fra
          database til klient. Vi har blant annet satt opp relasjonsdatabaser i
          MySQL og laget REST API-er med både Java og C# for å interagere med
          databasene. Vi har brukt endepunktene for å koble dataene på en rekke
          klienter; native-mobile applikasjoner, web applikasjoner og til og med
          interaktive kommando-linje skript. Gjennom studiet har vi også lært
          Python, C i Linux, JavaScript og Kotlin - og brukt moderne
          webteknologier som Vite, TypeScript og React - samt CSS-rammeverk som
          Tailwind. Vi har også erfaring med gruppearbeid og smidige metoder som
          Agile og Scrum fra studiet. Dette semesteret lærer vi også iOS
          programmering i Swift.
        </p>
      </section>

      <section className={styles.linksSection}>
        <h2 className={styles.linksAmanda}>Sjekk gjerne ut våre Git-repoer</h2>
        <ul className={styles.linkList}>
          <li>
            <strong>Sebastian</strong> <br />
            <a className={styles.link} href="https://github.com/Fowlee">
              https://github.com/Fowlee
            </a>
          </li>
          <li>
            <strong>Amanda</strong> <br />
            <a className={styles.link} href="https://github.com/awmarkovic">
              https://github.com/awmarkovic
            </a>
          </li>
        </ul>
        <h2 className={styles.linksAmanda}>Du finner oss også på LinkedIn</h2>
        <ul className={styles.linkList}>
          <li>
            <strong>Anneli</strong> <br />
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/anneli-evertsen-044bb3b1/"
            >
              https://www.linkedin.com/in/anneli-evertsen-044bb3b1/
            </a>
          </li>
          <li>
            <strong>Amanda</strong> <br />
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/amanda-markovic-542226292/"
            >
              https://www.linkedin.com/in/amanda-markovic-542226292/
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
