import styles from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso(){
    return (
            <Layout titulo="Estiloso">
                <div className={styles.roxo}>
                        <h1>Estilo usando CSS Módulos</h1>
                </div>
            </Layout>
    )
}