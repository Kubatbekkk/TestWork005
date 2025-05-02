import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      Weather
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Test Bootstrap
      </button>
    </div>
  );
}
