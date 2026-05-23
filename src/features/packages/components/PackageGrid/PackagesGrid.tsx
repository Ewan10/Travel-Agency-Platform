import { packages } from "../../data/packagesData";
import PackageCard from "../PackageCard/PackageCard";
import styles from "./PackagesGrid.module.css";

function PackagesGrid() {
    return (
        <div className={styles.packagesContainer}>
            <h2 className={styles.packagesTitle}>Available Packages</h2>
            <div className={styles.packagesGrid}>
                { 
                    packages.map((pkg) => (
                        <PackageCard key={pkg.id} travelPackage={pkg} />
                    ))
                }
            </div>
        </div>
    );
}
export default PackagesGrid;