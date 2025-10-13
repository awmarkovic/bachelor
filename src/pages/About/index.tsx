import { Fragment, useState } from "react";
import "./styles.css";
import { Modal } from "../../components/modal";
import { BusinessCard } from "../../components/business-card";

export function About() {
  const [openMemberId, setOpenMemberId] = useState<string | null>(null);

  const members = [
    {
      id: "sebastian",
      name: "Sebastian Thangen-Eriksen",
      img: `${import.meta.env.BASE_URL}sebastian.jpeg`,
      text: "BLA BLA BLA",
    },
    {
      id: "nelly",
      name: "Nelly Skokowska-Rakoczy",
      img: `${import.meta.env.BASE_URL}Animal3.png`,
      text: "Nelly trives godt med webteknologier og hun liker å jobbe med mennesker. Dette er grunnen til at hun valgte å jobbe som studentassistent i faget Webutvikling. Denne stillingen går ut på å gi veiledning innen HTML, CSS og JavaScript med bruk av moderne rammeverk og biblioteker. Rollen har gitt henne god erfaring innen disse teknologiene som hun tror vil være relevant for prosjektet. ",
    },
    {
      id: "anneli",
      name: "Anneli Lirhus Evertsen",
      img: `${import.meta.env.BASE_URL}Animal4.png`,
      text: "BLA BLA BLA",
    },
    {
      id: "amanda",
      name: "Amanda Woldseth Markovic",
      img: `${import.meta.env.BASE_URL}amanda.jpeg`,
      text: "Amanda har særlig interesse for webutvikling og liker spesielt å utvikle nettsider med React og TypeScript. Med tiden har hun også blitt mer nysgjerrig på apputvikling og syns det er spennende å utforske hvordan løsninger kan bygges - både med Swift og Kotlin. Amanda har på fritiden utviklet en egen hjemmeside med Github Pages, hvor hun per idag har en digital CV. Planen er å på sikt utvide hjemmesiden med mer nyttig info. Høsten 2025 deltar hun på Bouvet’s mentorprogram “BouMentor” hvor hun får god veiledning fra en mentor. ",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="hero-image">
          <img src={`${import.meta.env.BASE_URL}hero-image.png`} />
        </div>

        <div className="hero-text">
          <h1>Bachelor 2026</h1>
          <h2>Vi vil jobbe med deg!</h2>
          <p>
            Vi er en gruppe på fire bachelorstudenter ved Høyskolen Kristiania
            som studerer Informasjonsteknologi – frontend og mobilutvikling. Som
            gruppe jobber vi godt sammen og har høye ambisjoner om å få til en
            gjennomført løsning som både er funksjonell og estetisk fin. Vi
            leter nå etter en bedrift å jobbe sammens med, og vi håper at det
            kan være dere!
          </p>
        </div>
      </section>

      <section className="members">
        {members.map((member) => (
          <Fragment key={member.id}>
            <BusinessCard
              onClick={() => {
                setOpenMemberId(member.id);
              }}
              name={member.name}
              img={member.img}
              text={member.text}
              teaser
            />

            <Modal
              isOpen={openMemberId === member.id}
              onClose={() => setOpenMemberId(null)}
            >
              <BusinessCard
                name={member.name}
                img={member.img}
                text={member.text}
              />
            </Modal>
          </Fragment>
        ))}
      </section>
    </>
  );
}
