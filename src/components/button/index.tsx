import styles from '../../styles/components/button.module.scss';

export default function Button() {
  return (
    <button className={styles.button}>
      <span className={styles.button__label}>Span</span>
    </button>
  );
}
