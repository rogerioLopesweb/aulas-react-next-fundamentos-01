import Navegador from "../components/Navegador";
/*https://www.youtube.com/watch?v=PHKaJlAeNLk&t=71s Aula */
export default function Inicio(){
    return (
           <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height:'100vh' 
        }}>
            <Navegador destino="/" texto="Home"  />
            <Navegador destino="/estiloso" texto="Estiloso" cor="crimson"/>
            <Navegador destino="/teste" texto="Teste" cor="darkviolet" />
            <Navegador destino="/exemplo" texto="Exemplo"  cor="red" />
            <Navegador destino="/navegacao" texto="Navegação #1"  cor="green" />
            <Navegador destino="/cliente/filial-01/123" texto="Navegação #2"  cor="darkturquoise" />
            <Navegador destino="/estado" texto="Estado"  cor="pink" />
            <Navegador destino="/integracao" texto="Integração"  cor="orange" />
        </div>
    )
}