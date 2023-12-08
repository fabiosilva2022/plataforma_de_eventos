import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import styles from "./styles.module.css"

export default function ListCard(){

    const [eventos, setEventos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3020/eventos')
            .then(resultado => setEventos(resultado.data))
    }, [])

function formatarData(data){
    const[dia,mes,ano] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}
function limparCampos() {
    setEvento({
        titulo: "",
        descricao: "",
        dataInicio: "",
        dataFim: "",
        local: "",
        imagem: ""
    })
}

    return(
        <>
            <div className={styles.listCard}>
            {eventos.map(e => (
                <Card
                id={e.id}
                titulo={e.titulo}
                dataInicio={e.dataInicio}
                dataFim={e.dataFim}
                Image={e.image}/>
            ))
            }    
            </div>
        </>
    )
}