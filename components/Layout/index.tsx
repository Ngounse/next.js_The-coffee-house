import Footer from "../Footer";
import Navbar from "../NavBar";
import styles from "../../styles/Home.module.css";

const Layout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
