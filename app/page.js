import Navbar from "@/components/nav/navbar";
import styles from "./page.module.css";
import Banner from "@/components/banner/banner";
import Card from "@/components/card/card";

export default function Home() {
  return (
    <main>
      <Navbar username="Phillip" />
      <Banner
        title="Clifford the red dog"
        subtitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <Card imgUrl="/static/clifford.webp" size="large" />
      <Card imgUrl="/static/clifford.webp" size="medium" />
      <Card imgUrl="/static/clifford.webp" size="small" />
    </main>
  );
}
