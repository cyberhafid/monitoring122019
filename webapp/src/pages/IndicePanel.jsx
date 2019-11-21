import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import SelectList from './Indices/SelectList';
import { SearchIndice } from './Indices/SearchIndice';
import TypeTest from './Indices/TypeTest';
import { IndiceAll } from './Indices/IndiceAll';


export default class IndicePanel extends Component {
  render() {
    return (
        <div>
        <div className="content-section introduction">

          <div className="feature-intro">
            <h1>Les Indices</h1>
            <p>Mise en place d'un texte de présentation...</p>
          </div>
        </div>

        <div className="content-section implementation">
          <TabView >


          <TabPanel id="4" header="IndiceALL tous les indices">
              <div>
                <Fieldset legend="Remplir les champs suivants">
             <IndiceAll />
                </Fieldset>
              </div>
            </TabPanel>

          <TabPanel header="TypeTest ">
              <div>
                <Fieldset legend="En cours">
                <TypeTest  />  
                </Fieldset>
              </div>
            </TabPanel>

            <TabPanel header="SearchService ">
              <div>
                <Fieldset legend="En cours">
                <SearchIndice />  
                </Fieldset>
              </div>
            </TabPanel>



            <TabPanel header="SelectList Liste des services+ bouton">
     <SelectList />
            </TabPanel>
  

          </TabView>
        </div>
      </div>
    );
  }
}