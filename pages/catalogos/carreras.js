import Link from "next/link";
import styles from "./catalogos.module.css";
import { useState } from "react";
import Layout from "@/components/layout";
import { BsArrowUpRight } from "react-icons/bs";
import { ImArrowUpRight2 } from "react-icons/im";
import { createClient } from "contentful";
import Image from "next/image";
import Navbar from "@/components/navbar";

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
  console.log(games);
  let img_url = "https:" + games.items[0].fields.media[0].fields.file.url;
  let img_width =
    games.items[0].fields.media[0].fields.file.details.image.width;
  let img_height =
    games.items[0].fields.media[0].fields.file.details.image.height;
  return (
    <Layout>
      <header>
        <HeaderCard />
      </header>
      <main className={styles.main}>
        <div class="row row-cols-1 row-cols-sm-2 my-5 mx-3 g-4">
          <div class="col">
            <div
              className={`${styles.bg_gray} text-light border-3 border-dark card p-2 h-100`}
            >
              <fieldset className={`${styles.card_rb} rounded-top`}>
                <legend className={`${styles.text_red} float-none w-auto px-1`}>
                  Videogame
                </legend>
                <img src={img_url} className="card-img-top px-3" alt="image" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="col">
            <div
              className={`${styles.bg_gray} text-light border-3 border-dark card p-2 h-100`}
            >
              <fieldset className={`${styles.card_rb} rounded-top`}>
                <legend className={`${styles.text_red} float-none w-auto px-1`}>
                  Videogame
                </legend>
                <img src={img_url} className="card-img-top px-3" alt="image" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="col">
            <div
              className={`${styles.bg_gray} text-light border-3 border-dark card p-2 h-100`}
            >
              <fieldset className={`${styles.card_rb} rounded-top`}>
                <legend className={`${styles.text_red} float-none w-auto px-1`}>
                  Videogame
                </legend>
                <img src={img_url} className="card-img-top px-3" alt="image" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </fieldset>
            </div>
          </div>
          <div class="col">
            <div
              className={`${styles.bg_gray} text-light border-3 border-dark card p-2 h-100`}
            >
              <fieldset className={`${styles.card_rb} rounded-top`}>
                <legend className={`${styles.text_red} float-none w-auto px-1`}>
                  Videogame
                </legend>
                <img src={img_url} className="card-img-top px-3" alt="image" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
        <Image src={img_url} width={200} height={200} />
        {JSON.stringify(games)}
      </main>
    </Layout>
  );
}

function HeaderCard() {
  return (
    <>
      <Navbar />
      <div className={`${styles.apply_variable} container`}>
        <div
          className={`${styles.bg_red} container rounded p-3 mt-5 mb-3 text-center`}
        >
          <h1>Carreras</h1>
        </div>
        <SearchBar find={() => {}} />
        <div className="float-end">
          <Link
            href={"/realidadVirtual"}
            className={`${styles.text_red} text-decoration-none`}
          >
            <span className={`${styles.bg_red} container p-0 m-2 text-dark`}>
              <ImArrowUpRight2 />
            </span>
            realidad virtual
          </Link>
        </div>
      </div>
    </>
  );
}

function SearchBar({ find }) {
  const [input, setInput] = useState("");

  function handleInput(event) {
    find(event.target.value);
    setInput(event.target.value);
  }
  return (
    <>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control rounded"
          placeholder="Introduce el nombre..."
          value={input}
          onChange={handleInput}
        ></input>
        <button className={`${styles.bg_red} btn ms-3 rounded`} type="submit">
          <i class="bi bi-search text-light"></i>
        </button>
      </div>
    </>
  );
}
