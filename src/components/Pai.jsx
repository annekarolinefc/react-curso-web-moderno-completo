import Filho from './Filho'
export default props => 
    <>
        <h1> { props.nome } { props.sobrenome }</h1>
        <Filho nome="Greice Kelly" sobrenome="Fortunado do Carmo"/>
        <Filho nome="Luiz Fernando" sobrenome="Fortunado do Carmo"/>
        <Filho nome="Anne Karoline" sobrenome="Fortunado do Carmo"/>

        {/* PROPRIEDADE SPREAD */}
        
        {/*MESMA PROPRIEDADE DO PAI*/}
        <Filho {...props} />
        {/* APROVEITANDO SOBRENOME */}
        <Filho {...props} nome="Greice" />
    </>