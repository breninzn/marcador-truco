import React,{Component} from 'react';
import {Button } from 'react-materialize'
import logo from './imgs/resetar.png';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = { contador1: 0, contador2:0, nome1:'Breno', nome2:'Cauã'}
  }

  onPress(acao){
      if(acao == 'pontoTime1'){
          this.setState({
          contador1: this.state.contador1+1
        })
      }else
      if(acao == 'pontoTime2'){
          this.setState({
            contador2: this.state.contador2+1
          })
      }else
      //truco
      if(acao == 'trucoTime1'){
        this.setState({
        contador1: this.state.contador1+3
      })
      }else

      if(acao == 'trucoTime2'){
          this.setState({
            contador2: this.state.contador2+3
          })
      }else
      //Seis
      if(acao == 'seisTime1'){
        this.setState({
        contador1: this.state.contador1+6
      })
      }else

      if(acao == 'seisTime2'){
          this.setState({
            contador2: this.state.contador2+6
          })
      }else
      //Nove
      if(acao == 'noveTime1'){
        this.setState({
        contador1: this.state.contador1+9
      })
      }else

      if(acao == 'noveTime2'){
          this.setState({
            contador2: this.state.contador2+9
          })
      }else
      //Doze
      if(acao == 'dozeTime1'){
        this.setState({
        contador1: this.state.contador1+12
      })
      }else

      if(acao == 'dozeTime2'){
          this.setState({
            contador2: this.state.contador2+12
          })
      }
      
      if(this.state.contador1 >= 11){
        alert(`${this.state.nome1}  Ganhou!`);
        this.setState({
          contador1:0,
          contador2:0
        })
      }else if(this.state.contador2 >= 11){
              alert(`${this.state.nome2}  Ganhou!`);
              this.setState({
                contador1:0,
                contador2:0
              })
      }
      console.log("chegou aqui")
  }

resetar(){
  this.setState({
    contador1:0,
    contador2:0
  })
}

render(){
  return (
    <div className="container">
      <div className="div-left">
        <div className="label-nome"><h3>Nome: {this.state.nome1}</h3></div>
        <div className="pontos">{this.state.contador1 !==0 ? this.state.contador1 : 0}</div>
        <Button onClick={()=>{this.onPress('pontoTime1')}} className="btn-pontos">1</Button>
        <Button onClick={()=>{this.onPress('trucoTime1')}} className="btn-pontos">3</Button>
        <Button onClick={()=>{this.onPress('seisTime1')}} className="btn-pontos">6</Button>
        <Button onClick={()=>{this.onPress('noveTime1')}} className="btn-pontos">9</Button>
        <Button onClick={()=>{this.onPress('dozeTime1')}} className="btn-pontos">12</Button>
      </div>
      <div>
        <Button onClick={()=>{this.resetar()}} className="div-return"><img src={logo} height="100" width="100"/></Button>
      </div>
      <div  className="div-right">
        <div className="label-nome"><h3>Nome:{this.state.nome2}</h3></div>
        <div className="pontos">{this.state.contador2 !==0 ? this.state.contador2 : 0}</div>
        <Button onClick={()=>{this.onPress('pontoTime2')}} className="btn-pontos">1</Button>
        <Button onClick={()=>{this.onPress('trucoTime2')}} className="btn-pontos">3</Button>
        <Button onClick={()=>{this.onPress('seisTime2')}} className="btn-pontos">6</Button>
        <Button onClick={()=>{this.onPress('noveTime2')}} className="btn-pontos">9</Button>
        <Button onClick={()=>{this.onPress('dozeTime2')}} className="btn-pontos">12</Button>
      </div>
    </div>
  );
}
}

