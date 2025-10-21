import { Fragment, useState } from "react";
import "./styles.css";
import { Modal } from "../../components/modal";
import { DetailedMemberLayout } from "../../components/member-detailed";
import { TeaserMemberLayout } from "../../components/member-teaser";

export function About() {
  const [openMemberId, setOpenMemberId] = useState<string | null>(null);

  const members = [
    {
      id: "sebastian",
      name: "Sebastian Thangen-Eriksen",
      age: 22,
      image: `${import.meta.env.BASE_URL}sebastian.jpeg`,
      description:
        "Sebastian har en sterk interesse for webutvikling og liker spesielt å jobbe med moderne teknologier som React, TypeScript og Swift. Han trives med å utforske hvordan ulike rammeverk og språk kan kombineres for å skape funksjonelle og visuelt gjennomførte løsninger. \n\nSebastian er nysgjerrig og lærevillig, og motiveres av å tilegne seg ny kunnskap og utvikle seg faglig. Han setter pris på å arbeide i miljøer hvor han får mulighet til å lære av andre, samtidig som han selv bidrar med engasjement og initiativ.",
      github: "https://github.com/Fowlee",
    },
    {
      id: "nelly",
      name: "Nelly Skokowska",
      age: 21,
      image: `${import.meta.env.BASE_URL}nelly.jpg`,
      description:
        "Nelly trives godt med webteknologier og hun liker å jobbe med mennesker. Dette er grunnen til at hun valgte å jobbe som studentassistent i faget Webutvikling. Denne stillingen går ut på å gi veiledning innen HTML, CSS og JavaScript med bruk av moderne rammeverk og biblioteker. Rollen har gitt henne god erfaring innen disse teknologiene som hun tror vil være relevant for prosjektet. ",
      github: "https://github.com/Nelly1611",
    },
    {
      id: "anneli",
      name: "Anneli Lirhus Evertsen",
      age: 32,
      image: `${import.meta.env.BASE_URL}anneli.jpeg`,
      description:
        "Anneli er tannlege i bunn, men har bestemt seg for å ta en ny retning i livet innenfor informasjonsteknologi. Anneli har alltid hatt en interesse for data, og trives for tiden best med app-utvikling i Kotlin og Swift, men synes også det er gøy å lage nettsider med React og Typescript.",
      github: "https://github.com/Cuupcaake93",
    },
    {
      id: "amanda",
      name: "Amanda Woldseth Markovic",
      age: 28,
      image: `${import.meta.env.BASE_URL}amanda.jpeg`,
      description:
        "Amanda har særlig interesse for webutvikling og liker spesielt å utvikle nettsider med React og TypeScript. Med tiden har hun også blitt mer nysgjerrig på apputvikling og syns det er spennende å utforske hvordan løsninger kan bygges - både med Swift og Kotlin. \n\nAmanda har på fritiden utviklet en egen hjemmeside med Github Pages, hvor hun per idag har en digital CV. Planen er å på sikt utvide hjemmesiden med mer nyttig info. Høsten 2025 deltar hun på Bouvet’s mentorprogram “BouMentor” hvor hun får god veiledning fra en mentor. ",
      github: "https://github.com/awmarkovic",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}hero-image.jpeg`} />
        </div>

        <div className="hero-text">
          <h1>Bachelor 2026</h1>
          <h2>Vi vil jobbe med deg!</h2>
          <p>
            Vi er fire bachelorstudenter ved Høyskolen Kristiania som studerer
            Informasjonsteknologi - Frontend- og mobilutvikling. Vi trives med å
            jobbe sammen og deler et felles ønske om å utvikle løsninger som
            kombinerer funksjonalitet, design og brukervennlighet. Vi leter nå
            etter en bedrift å jobbe sammen med til vårt bachelor-prosjekt, og
            vi håper at det kan være
            <strong> dere!</strong>
          </p>
        </div>
      </section>

      <section className="members">
        {members.map((member) => (
          <Fragment key={member.id}>
            <button onClick={() => setOpenMemberId(member.id)}>
              <TeaserMemberLayout
                name={member.name}
                age={member.age}
                description={member.description}
                image={member.image}
              />
            </button>

            <Modal
              isOpen={openMemberId === member.id}
              onClose={() => setOpenMemberId(null)}
            >
              <DetailedMemberLayout
                name={member.name}
                age={member.age}
                image={member.image}
                description={member.description}
                github={member.github}
              />
            </Modal>
          </Fragment>
        ))}
      </section>
    </>
  );
}
