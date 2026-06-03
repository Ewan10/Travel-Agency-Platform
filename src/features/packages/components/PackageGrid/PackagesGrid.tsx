import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { packages } from "../../data/packagesData";
import PackageCard from "../PackageCard/PackageCard";
import styles from "./PackagesGrid.module.css";
import layout from "../../../../styles/layout.module.css";

function PackagesGrid() {
    return (
        <div className={`${layout.vertSpacing} ${layout.container}`}>
           <SectionTitle>Available Packages</SectionTitle>
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