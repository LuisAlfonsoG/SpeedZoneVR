import { useRef, useEffect } from "react";
import styles from "./promotions.module.css";
import Image from "next/image";

const promociones = [
  "/promociones/promocion_1.jpg",
  "/promociones/promocion_2.jpg",
  "/promociones/promocion_3.jpg",
  "/promociones/promocion_4.jpg",
  "/promociones/promocion_5.jpg"
]

export default function Promotions({}) {
  const scrollRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  const promotions = promociones

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    const scroll = scrollRef.current;

    const handleLeftClick = () => {
      if (scroll) {
        scroll.scrollTo({
          left: scroll.scrollLeft - 200,
          behavior: "smooth",
        });
      }
    };

    const handleRightClick = () => {
      if (scroll) {
        scroll.scrollTo({
          left: scroll.scrollLeft + 200,
          behavior: "smooth",
        });
      }
    };

    left.addEventListener("click", handleLeftClick);
    right.addEventListener("click", handleRightClick);

    return () => {
      left.removeEventListener("click", handleLeftClick);
      right.removeEventListener("click", handleRightClick);
    };
  }, []);

  return (
    <>
      <div>
        <div className={styles.btns_container}>
          <button ref={leftRef} className={styles.scroll_btn_left}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button ref={rightRef} className={styles.scroll_btn_right}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div ref={scrollRef} className={`${styles.scroll_container}`}>
          {promotions.map((promotion) => {
            return (
              <>
                <div className={styles.card}>
                  <Image
                    src={promotion}
                    layout="fill"
                    objectFit="cover"
                    alt="Image"
                  ></Image>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
