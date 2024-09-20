import Titulo3 from "@/components/atoms/Text/Titulo3";
import Price from "@/components/atoms/Text/Price";
import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ img, title, price, button }) {
    return (
        <>
            <div className={styles.cardComponent}>
                <div className={styles.card}>
                    <Image src={img} alt="Sunset in the mountains" width={640} height={360} />
                    <Titulo3>{title}</Titulo3>
                    <Price>{price}</Price>
                    <Button>{button}</Button>
                </div>
            </div>
        </>
    );
}