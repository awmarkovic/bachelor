import styles from "./styles.module.css";

interface Props {
  name: string;
  age: number;
  description: string;
  image: string;
}

export function TeaserMemberLayout(props: Props) {
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
    </div>
  );
}
