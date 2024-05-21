import styles from "./styles.module.css";

export default function Card({ children, href }) {
  return (
    <a className={styles.card} href={href}>
      <div>{children}</div>
    </a>
  );
}
