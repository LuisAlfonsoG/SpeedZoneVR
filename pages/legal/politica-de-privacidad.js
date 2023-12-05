import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./politica.module.css";

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.title}>Política de Privacidad de <br />Speed Zone VR</h1>

        <h3 className={styles.subtitle}>Fecha de entrada en vigencia: 18 de junio 2023</h3>
        <p className={styles.par}>Speed Zone VR opera el sitio web www.speedzonevr.com. Esta página describe cómo recopilamos, usamos, divulgamos y protegemos la información personal que recabamos de los usuarios de nuestro sitio web de acuerdo con la legislación de protección de datos de México.</p>

        <h3 className={styles.subtitle}>Información Recopilada y Uso</h3>

        <p className={styles.par}>Recopilamos información personal identificable que usted nos proporciona voluntariamente al utilizar nuestro sitio web, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de Particulares. Esta información puede incluir su nombre, dirección de correo electrónico, dirección postal y otros datos de contacto. Utilizamos esta información para proporcionar y mejorar nuestros servicios, así como para enviarle comunicaciones relacionadas con nuestros servicios, promociones y eventos especiales.</p>

        <h3 className={styles.subtitle}>Cookies y Tecnologías Similares</h3>

        <p className={styles.par}>Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia en línea. Estas tecnologías pueden incluir cookies, etiquetas de píxel y otras herramientas de seguimiento para recopilar y rastrear información y para mejorar y analizar nuestro servicio, cumpliendo con la Ley Federal de Protección de Datos Personales en Posesión de Particulares y su reglamento.</p>

        <h3 className={styles.subtitle}>Divulgación de Información</h3>

        <p className={styles.par}>No compartiremos su información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios, cumplir con requisitos legales, proteger nuestros derechos o en caso de fusiones o adquisiciones, tal como lo establece la legislación mexicana.</p>

        <h3 className={styles.subtitle}>Protección de Datos</h3>

        <p className={styles.par}>Implementamos medidas de seguridad técnicas, físicas y administrativas para proteger su información personal, cumpliendo con los estándares requeridos por la Ley Federal de Protección de Datos Personales en Posesión de Particulares y su reglamento, aunque no podemos garantizar su seguridad absoluta.</p>

        <h3 className={styles.subtitle}>Enlaces a Otros Sitios</h3>

        <p className={styles.par}>Nuestro sitio web puede contener enlaces a otros sitios web. No tenemos control sobre el contenido o las prácticas de privacidad de estos sitios y no asumimos responsabilidad por sus políticas.</p>

        <h3 className={styles.subtitle}>Cambios a Esta Política de Privacidad</h3>

        <p className={styles.par}>Esta Política de Privacidad está sujeta a cambios. Se notificarán cambios importantes mediante una notificación en nuestro sitio web, de acuerdo con la legislación mexicana aplicable.</p>

        <h3 className={styles.subtitle}>Contacto</h3>

        <p className={styles.par}>Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos a speedzonevr@gmail.com</p>
      </div>

      <Footer />
    </>
  )
}