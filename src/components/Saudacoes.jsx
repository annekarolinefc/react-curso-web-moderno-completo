import { Component } from 'react'

export default class Saudacao extends Component{
    state = {
        tipo: "Fala",
        nome: "Pedro"
    }

    constructor(props){
        super(props)
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e){
        //console.log(e.target.value)
        this.setState(
            {tipo: e.target.value}
        )
    }
    render(){
        //desestrutuaçãp
        //const { tipo, nome } = this.props
        const { tipo, nome } = this.state
        return(
            <div>
                <h1> {tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder='Tipo...' value={tipo} onChange={e => this.setTipo} />
                <input type="text" placeholder='Nome...' value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}