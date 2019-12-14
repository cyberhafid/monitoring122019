import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';
import {Card} from 'primereact/card';

import { SystemActiv } from '../../components/SystemActiv';

export class SystemAll extends Component {

    constructor() {
        super();
        this.state = {
            brandshh: null,
            brand: null,
            services :[],
            logsall: []
            
        };
        this.serviceactiv = new SystemActiv();
        this.onBrandChange = this.onBrandChange.bind(this);

    }

    componentDidMount() {
        this.serviceactiv.getServices().then(data => this.setState({ services: data }));
       // this.serviceactiv.getLogServices().then(data => this.setState({ logsall: data }));
    }

    onBrandChange(event) {
        this.dt.filter(event.value, '_source.process.name', 'equals');
        this.setState({brands: event.value});
    }

   
    handleChange(value) {this.setState({ selected: value });}

    //we are creating the options 


    render() {


          // let brands = this.state.services;
            //let brands = this.state.services.map((icon) => {
              //  return { label: icon[0], value: icon[0] };
              //});

                //let brandFilter = <Dropdown style={{width: '100%'}}
               // value={this.state.logsall} options={brands} onChange={this.onBrandChange}/>
       

                console.log('aaaaaa'+JSON.stringify(this.state.services))
 
        return (
        

            <div>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>CPU</h1>
                    <p>{this.state.services.cores}</p>
                </div>
            </div>
            </div>


    

           
        );
    }
}
