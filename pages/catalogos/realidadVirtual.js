import styles from "./catalogos.module.css";
import { useState } from "react";
import Layout from "@/components/layout";
import { createClient } from "contentful";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeaderCard from "@/components/headercard";

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  let data = await client.getEntries({ content_type: "catalogo" });
  return {
    props: {
      games: data,
    },
  };
};

export default function Catalogo({ games }) {
  const aux = JSON.parse(JSON.stringify(games.items));
  const ind = [0];
  for (let i = 0; i < 9; i++) {
    aux.push(JSON.parse(JSON.stringify(games.items[0])));
    aux[i].fields.titulo += "" + i;
    ind.push(i + 1);
  }
  const [indexes, setIndexes] = useState(ind);

  console.log(games);
  let img_url = "https:" + games.items[0].fields.media[0].fields.file.url;
  let img_width =
    games.items[0].fields.media[0].fields.file.details.image.width;
  let img_height =
    games.items[0].fields.media[0].fields.file.details.image.height;
  return (
    <Layout>
      <header>
        <Navbar />
        <HeaderCard
          title="Realidad Virtual"
          linkText="Carreras"
          link="./carreras"
          games={aux}
          setState={setIndexes}
        />
      </header>
      <main className={`${styles.main}`}>
        <div class="row row-cols-1 row-cols-md-2 justify-content-center my-5 py-3 px-3">
          {indexes.map((index) => {
            return (
              <>
                <div class={`${styles.column} col`}>
                  <div
                    className={`${styles.card} text-light border-3 border-dark card p-2 h-100`}
                  >
                    <fieldset className={`${styles.card_rb} rounded-top`}>
                      <legend
                        className={`${styles.text_red} float-none w-auto ps-2 pe-3`}
                      >
                        Videogame
                      </legend>
                      <Image
                        src={img_url}
                        className="card-img-top px-3"
                        width={300}
                        height={200}
                        alt="image"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{aux[index].fields.titulo}</h5>
                        <p class="card-text">{aux[index].fields.descripcion}</p>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <Footer />
      </main>
    </Layout>
  );
}
