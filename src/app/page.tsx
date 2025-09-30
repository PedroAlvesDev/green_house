import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./Menu/page";
import { SignNewsletter } from "./Newsletter/page";

export default function Home() {
  return (
    <main>
      <Menu />
      <SignNewsletter />
    </main>
  );
}
