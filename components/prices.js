import styles from "./prices.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Prices({ }) {
  const sm = {
    title: "Simulador de Carreras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { price: 60, description: 'Sesión 10 min.' },
      { price: 80, description: 'Sesión 15 min.' },
      { price: 120, description: 'Sesión 30 min.' },
      { price: 200, description: 'Sesión 1 hr.' },
      { price: 350, description: 'Sesión 2 hr.' },
    ],
    img: "/sm.png",
  };
  const rv = {
    title: "Realidad Virtual",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { price: 35, description: 'Sesión 5 min.' },
      { price: 60, description: 'Sesión 10 min.' },
      { price: 80, description: 'Sesión 15 min.' },
      { price: 120, description: 'Sesión 30 min.' },
      { price: 200, description: 'Sesión 1 hr.' },
    ],
    img: "/vr.png",
  };

  return (
    <>
      <div className={styles.main}>
        <Price
          title={sm.title}
          description={sm.description}
          prices={sm.prices}
          img={sm.img}
          link="../catalogo"
        ></Price>
        <Price
          title={rv.title}
          description={rv.description}
          prices={rv.prices}
          img={rv.img}
          link="../catalogo"
        ></Price>
      </div>
    </>
  );
}

function Price({ title, prices, img, link }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <h1 className={styles.header}>{title}</h1>
          <div>
            {prices.map((price, index) => {
              return (
                <>
                  <div className={styles.price_box}>
                    <span className={styles.price}>{"$" + price.price}</span>
                    <span className={styles.session}>
                      {price.description}
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <Link href={link}>
            <button className={styles.btn}>Catálogo de juegos</button>
          </Link>
        </div>
        <div className={styles.img_container}>
          <Image src={img} layout="fill" objectFit="cover" alt="Image"></Image>
        </div>
      </div>
    </>
  );
}
