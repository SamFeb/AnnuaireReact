import logo from './logo.svg';
import './App.css';
import './component/Recherche.css';
import Recherche from './component/Recherche.js';
import Etablissement from './component/Etablissement.js';
import React, {Component} from 'react';
import {Card, Message, Button, Icon} from 'semantic-ui-react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data : '',
      error : ''
    }

  }

    onEmpty = () =>{
      this.setState({
        data: [],
        error: ""
      })
    }

    renderResults = () => {
      return(
        this.state.data.map((etablissement) => {
          return(
            <Etablissement
            key={etablissement.properties.id}
            properties={etablissement.properties}
            />
          )
        })
      )
    }
    
    onSearch = async (dpt,type) => {
      console.log(dpt,type);
      if (dpt && type) {
        try {
          let response = await fetch('https://etablissements-publics.api.gouv.fr/v3/departements/' + dpt + "/" + type);
          let data = await response.json();
          console.log(data);
          this.setState({
            data: data.features,
            error: ''
          });
        } catch (e) {
          this.setState({
            error: "Erreur lors de la recherche"
          });
        }
      } else {
        this.setState({
          error: "Merci de choisir un département et/ou une administration"
        });
      }
    }

    render(){
      return (
        <div className="App">
          <header className="App-header">
          <ButtonExampleSocial />
            <img src={logo} className="App-logo" alt="logo" />
            <Recherche onSearch={this.onSearch} onEmpty={this.onEmpty}/>
            {this.state.error ? (
              <Message warning>{this.state.error}</Message>
            ) : undefined}
            {this.state.data ? (
              <Card.Group>{this.renderResults()}</Card.Group>
            ) : undefined}
          </header>
        </div>
      );
    }
}



const ButtonExampleSocial = () => (
  <div>
    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='google plus'>
      <Icon name='google plus' /> Google Plus
    </Button>
    <Button color='vk'>
      <Icon name='vk' /> VK
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
    </Button>
  </div>
)

export default App;

