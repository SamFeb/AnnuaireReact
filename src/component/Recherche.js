import React, {Component} from 'react';
import {Button, Select} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


class Recherche extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        dpt : "",
        type : ""
    }

    }
    ondptChange = (e,data) =>{
        //console.log(data);
        this.setState({
            dpt : data.value
        });
    }

    ontypeChange = (e,data) =>{
        //console.log(data);
        this.setState({
            type : data.value
        });
    }

    render(){

        //console.log(this.state);
        const optionsDpt = [
            { key: '95', value: '95', text: 'Val d\'Oise' },
            { key: '60', value: '60', text: 'Oise' },
            { key: '75', value: '75', text: 'Ile-de-France' },
            { key: '93', value: '93', text: 'Seine-Saint-Denis' },
            { key: '77', value: '77', text: 'Seine-et-Marne' }
        ];
        const optionsType = [
            { key: 'banque_de_france', value: 'banque_de_france', text: 'Banque de France, succursale' },
            { key: 'civi', value: 'civi', text: 'Commission d\'indemnisation des victimes d\'infraction' },
            { key: 'commissariat_police', value: 'commissariat_police', text: 'Commissariat de police' },
            { key: 'cour_appel', value: 'cour_appel', text: 'Cour d’appel' },
            { key: 'dir_meteo', value: 'dir_meteo', text: 'Météo France, direction interrégionale' },
        ]
        return(
        <div className="recherche">
        <h1> Annuaire React API 💻 </h1>
        <Select placeholder='Choissisez un département' onChange = {this.ondptChange} options={optionsDpt} />
        <Select placeholder='Choissisez une administration' onChange = {this.ontypeChange} options={optionsType} />

        <div>
        <span className="spaceBtn"></span>
        <Button primary onClick={()=> this.props.onSearch(this.state.dpt, this.state.type)}>Lancer la recherche</Button>
        <Button secondary onClick={this.props.onEmpty}>Supprimer la recherche</Button>
        </div>
        <span className="spaceContainer"></span>
        </div>
        
        )
    }



}

export default Recherche;