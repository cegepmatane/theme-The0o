import Square from './Square.js'
import React,{Component} from 'react';
import { MainFonction } from './Main.js';
import '../index.css'

export default class App extends Component {
  componentDidMount () {
    this.launch()
  }
  launch() {
    new MainFonction()
  }
  render() {
    return (
    <section id='contenaire'>
      <Square />
      <div id="argentJoueur"></div>
    </section>
    )
  }
}