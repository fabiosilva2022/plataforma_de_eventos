import styles from "./styles.module.css"

export default function Input(props){
    return (
        <div>
            <input className={styles.input}
                type="text"
                titulo={props.titulo}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}