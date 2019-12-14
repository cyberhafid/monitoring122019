import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';

import { IndiceActiv } from '../../components/IndiceActiv';

export class IndiceAll extends Component {

    constructor() {
        super();
        this.state = {
            brandshh: null,
            brand: null,
            services :[],
            logsall: []
            
        };
        this.serviceactiv = new IndiceActiv();
        this.onBrandChange = this.onBrandChange.bind(this);

    }

    componentDidMount() {
        this.serviceactiv.getServices().then(data => this.setState({ services: data }));
        this.serviceactiv.getLogServices().then(data => this.setState({ logsall: data }));
    }

    onBrandChange(event) {
        this.dt.filter(event.value, '_source.process.name', 'equals');
        this.setState({brands: event.value});
    }

   
    handleChange(value) {this.setState({ selected: value });}

    //we are creating the options 


    render() {


            //let brands = this.state.services;
            let brands = this.state.services.map((icon) => {
                return { label: icon.key, value: icon.key };
              });

                let brandFilter = <Dropdown style={{width: '100%'}}
                value={this.state.logsall} options={brands} onChange={this.onBrandChange}/>
       

           
 
        return (
        

                <div className="content-section implementation" >
                    <DataTable ref={(el) => this.dt = el} value={this.state.logsall} paginator={true} rows={10}
                   emptyMessage="No records found" >
                                
                        <Column field="_source.@timestamp" header="Date"  filter={true}  style={{width:'20%', fontWeight:'bold'}}/>
                        <Column field="_source.process.name" header="Service"  filter={true} filterElement={brandFilter} style={{width:'20%'}} />
                        <Column field="_source.message" header="Message"  filter={true} style={{width:'60%'}} />
                    </DataTable>
                </div>

           
        );
    }
}
