import Image from "next/image";
import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Patrick.png"
          alt="An image showing Patrick"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&#39;m Patrick</h1>
      <p>Blog Blog Blog.......</p>
    </section>
  );
}

export default Hero;
