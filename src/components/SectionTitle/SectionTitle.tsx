import styles from './SectionTitle.module.css';

function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className={styles.title}>
            {children}
        </h2>
    );
}
export default SectionTitle;