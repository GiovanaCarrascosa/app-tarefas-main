import { useState, useEffect } from "react";
import styles from "./Clock.module.css"

function Clock() {

    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {

        const intervalo = setInterval(() => {

            setHoraAtual(new Date());

        }, 1000);

    return () => clearInterval(intervalo);

    }, []);

    const hora = horaAtual.toLocaleTimeString('pt-br', {

        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'

    });

    const data = horaAtual.toLocaleDateString('pt-br', {

        year: 'numeric',
        month: 'long',
        day: 'numeric',

    });

       return (

            <div className={styles.relogioContainer}>

                <span className={styles.data}>{data}</span>
                
                <span className={styles.hora}>{hora}</span>

            </div>
       );     
}

export default Clock;