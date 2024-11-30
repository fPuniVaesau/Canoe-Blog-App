import styles from "./OpeningMessage.module.css";

export default function OpeningMessage() {
  return (
    <>
      <div className={styles.openingMessageWrapper}>
        <div className={styles.welcomeQuoteWrapper}>
          <h2>Take courage, lose site of the shores & discover new sea's.</h2>
          <p>what is your journey?</p>
        </div>
      </div>
    </>
  );
}
