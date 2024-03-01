import Link from "next/link";
import Image from "next/image";
import OurStoryPic from "../images/home-image-1.jpg";
import styles from "../styles/Home.module.css";
export default function Page() {
  return (
    <>
      <div styles={styles.bgWrap}>
        <h1>Welcome to home App</h1>

        {/* <Image
        src={OurStoryPic}
        alt="Our Story"
        quality={100}
        placeholder="blur"
        sizes={"100vw"}
        fill
        style={{ objectFit: "cover" }}
      /> */}
      </div>
      <h2>
        <Link href="/home"> Home </Link>
      </h2>
      <h2>
        <Link href="/blog"> blog </Link>
      </h2>
      <h2>
        <Link href="/settings"> settings </Link>
      </h2>
      <h2>
        <Link href="/conference"> conference </Link>
      </h2>
    </>
  );
}
