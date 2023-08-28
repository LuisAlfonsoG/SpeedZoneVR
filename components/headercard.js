import styles from "./headercard.module.css";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
import { useState } from "react";

export default function HeaderCard({ title, filter, games, setState }) {
  const findTitle = (value) => {
    const aux = new Array();
    games.map((game, index) => {
      if (game.fields.titulo.includes(value)) {
        aux.push(index);
      }
    });
    setState(aux);
  };

  const findType = (value) => {
    const aux = new Array();
    games.map((game, index) => {
      if (game.fields.tipo[0].includes(value)) {
        aux.push(index);
      }
    });
    setState(aux);
  };

  return (
    <>
      <div className={`${styles.apply_variable} container-md mt-5 pt-5 px-0`}>
        <div
          className={`${styles.bg_red} container-fluid rounded py-3 my-3 text-center`}
        >
          <h1>{title}</h1>
        </div>
        <SearchBar find={findTitle} />
        <div className="float-start">
          <button
            onClick={() => findType("Carreras")}
            className={`${styles.filter}`}
          >
            <span className={`${styles.bg_red} container p-0 m-2 text-dark`}>
              <ImArrowUpRight2 />
            </span>
            Carreras
          </button>
        </div>
        <div className="float-end">
          <button
            onClick={() => findType("Realidad Virtual")}
            className={`${styles.filter}`}
          >
            <span className={`${styles.bg_red} container p-0 m-2 text-dark`}>
              <ImArrowUpRight2 />
            </span>
            Realidad Virtual
          </button>
        </div>
      </div>
    </>
  );
}

function SearchBar({ find }) {
  const [input, setInput] = useState("");

  function handleInput(event) {
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
        <button
          className={`${styles.bg_red} btn ms-3 rounded`}
          type="submit"
          onClick={() => find(input)}
        >
          <i class="bi bi-search text-light"></i>
        </button>
      </div>
    </>
  );
}
