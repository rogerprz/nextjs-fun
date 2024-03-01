// import Image from "next/image";
// import ourStoryPic from "../../images/home-image-1.jpg";
import styles from "./home.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        {/* <Image
          src={ourStoryPic}
          alt="Out story pic"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          fill
          style={{
            objectFit: "cover",
          }}
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
      <p className={styles.bgText}>
        How we became the farmers of the future, tilling the technology of
        tomorrow today.
      </p>
    </>
  );
}
