import Link from "next/link"
import styles from "./styles.module.css"

export default function Card({id, titulo, descricao, dataInicio, dataFim, image}){
    
    return(
        <div className={styles.card}>
            
                <Link href={`/eventos/${id}`}>
                
                <h2 className={styles.cardTitulo}> {titulo}</h2>
                <div>Descrição: {descricao}</div>
                <div>Data de início: {dataInicio}</div>
                <div>Data de encerramento: {dataFim}</div>
                </Link>
        </div>
    )
}