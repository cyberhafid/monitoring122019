import React, { Component } from 'react';
import { IndiceActiv } from '../../components/IndiceActiv';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {FileUpload} from 'primereact/fileupload';

export default class SourceJson extends Component {
  constructor() {
    super();
    this.state = {
      services: []
         };
    this.serviceactiv = new IndiceActiv();
  }

  componentDidMount() {

  this.serviceactiv.getServices().then(data => this.setState({ services: data }));
  //this.setState({ services });  
}

onBrandChange(event) {
  this.dt.filter(event.value, 'key', 'equals');
  this.setState({brand: event.value});
}


  render() {
    console.log('ddddddd'+JSON.stringify(this.state.services))
   // console.log('hhhh'+JSON.stringify(this.serviceactiv.getServices()))


  // <Dropdown style={{width: '100%'}}
  // value={this.state.services} options={this.state.services.map((team ) => { label=team.key, value=team.doc_count })} onChange={this.onBrandChange}/>



    return (
      <div>
   

            <InputText value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
 
<FileUpload name="demo[]" url="c:/" multiple={true} accept="image/*" />


<input type="file" id="input"></input>

</div>
    
    );
  }
}
