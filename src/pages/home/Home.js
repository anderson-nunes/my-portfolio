import styles from "../home/Home.module.css";
import { Navbar } from "../../components/layout/navbar/Navbar";
import { Footer } from "../../components/layout/footer/Footer";
import { Content } from "../../components/layout/section/Content";

export function Home() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
