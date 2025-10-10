import styles from "./styles.module.css";

interface Props {
  name: string;
  img: string;
  text: string;
  onClick?: () => void;
  teaser?: boolean;
}

export function BusinessCard(props: Props) {
  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        props.onClick?.();
      }}
    >
      <img src={props.img} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.text}</p>
      {props.teaser ? <div className={styles.textFade} /> : null}
    </div>
  );
}
