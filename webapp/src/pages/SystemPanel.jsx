import React, { Component } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import {SystemAll } from './System/SystemAll';

export default class SystemPanel extends Component {
  render() {
    return (
        <div>
        <div className="content-section introduction">

          <div className="feature-intro">
            <h1>Les blocs d'enregistrements</h1>
            <p>Mise en place d'un texte de présentation...</p>
          </div>
        </div>

        <div className="content-section implementation">
          <TabView >
            <TabPanel header="Liste des services">
            <div>
                <Fieldset legend="En cours">
                  <SystemAll />
                </Fieldset>
              </div>
            </TabPanel>

          </TabView>
        </div>
      </div>
    );
  }
}