import styles from "./us.module.css";
import Link from "next/link";
import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";
import { AiOutlineDown } from "react-icons/ai";
import { useState, useEffect } from "react";

export default function Us({ }) {
  const [seeMission, setSeeMission] = useState(false);
  const [seeOfferings, setSeeOfferings] = useState(false);

  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className={windowSize[0] > 576 ? styles.apply_variable : styles.mobile}>
        <div clasName={styles.img_container}>
          <div className={styles.square}></div>
          <Image
            src="/Rectangle14.png"
            width={200}
            height={200}
            alt="Image"
            className={styles.image}
          ></Image>
        </div>
        <div className={styles.text_container}>
          <h3>Quiénes somos </h3>
          <p  >
            En Speed Zone VR, somos más que un negocio de simulación de carreras y realidad virtual. Somos un equipo apasionado de entusiastas de la velocidad y la tecnología que se dedica a brindar experiencias únicas y emocionantes a nuestros clientes. Desde nuestra fundación nos hemos comprometido a llevar la emoción de las carreras y la inmersión de la realidad virtual a personas de todas las edades.
          </p>
          <h4>
            Nuestra Misión
            <button className={styles.expand_button} onClick={() => setSeeMission(!seeMission)}>
              <span className={`${styles.icon_bg} ` + (seeMission ? styles.rotate_up: styles.rotate_down)}><AiOutlineDown /></span>
            </button>
          </h4>
          {seeMission ? <p className={styles.expand_section}>
            Proporcionar un escape de la rutina diaria, dando a conocer lo apasionante de la simulación de carreras y la realidad virtual sumergiendo a nuestros clientes en emocionantes aventuras virtuales. Creemos en la importancia de la diversión, la emoción y la competencia. Queremos que cada visita a Speed Zone VR sea una experiencia inolvidable llena de adrenalina y diversión con familia, compañeros o amigos.
          </p> : ''}
          <h4>
            Lo que ofrecemos
            <button className={styles.expand_button} onClick={() => setSeeOfferings(!seeOfferings)}>
              <span className={`${styles.icon_bg} ` + (seeOfferings ? styles.rotate_up: styles.rotate_down)}><AiOutlineDown /></span>
            </button>
          </h4>
          {seeOfferings ?
            <>
              <p>
                <span className={styles.bold_subtitle}>Simuladores de Carreras de última generación:</span> <br />
                En Speed Zone VR, contamos con simuladores de carreras realistas y de calidad para que puedas sentir la emoción de estar al volante de un auto de carreras.
              </p>
              <p>
              <span className={styles.bold_subtitle}>Realidad Virtual:</span> <br />
                Nuestra gama de experiencias de realidad virtual te llevará a mundos increíbles y te permitirá explorar la imaginación sin límites.
              </p>
              <p>
              <span className={styles.bold_subtitle}>Eventos Especiales y Celebraciones:</span> <br />
                Además de experiencias individuales, ofrecemos la oportunidad de organizar cumpleaños, eventos empresariales y mucho más en nuestras instalaciones.
              </p>
            </> : ''}

          {/* <div className="float-end">
            <Link href={"#"} className={`${styles.text_link}`}>
              <span className={`${styles.icon_bg}`}>
                <ImArrowUpRight2 />
              </span>
              Button
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
}
