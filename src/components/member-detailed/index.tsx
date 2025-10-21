import styles from "./styles.module.css";

interface Props {
  name: string;
  age: number;
  description: string;
  github?: string;
  image: string;
}

export function DetailedMemberLayout(props: Props) {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={props.image}
        alt={`Picture of ${props.name}`}
      />
      <h2 className={styles.name}>
        {props.name}({props.age})
      </h2>
      <p className={styles.description}>{props.description}</p>
      {props.github && (
        <a
          className={styles.github}
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.github.replace(/^https?:\/\//, "")}
        </a>
      )}{" "}
    </div>
  );
}
