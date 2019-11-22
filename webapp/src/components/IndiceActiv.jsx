 
import axios from 'axios';

export class IndiceActiv {


async getServices() {
   return  await axios
  .get('http://localhost:5000/indice/indicetri')
.then(res => res.data.aggregations.process.buckets)
.catch((error) => {console.log('heeeere',error);})
;
}


async getLogServices() {
  return  await axios
 .get('http://localhost:5000/indice/indiceall')
.then(res => res.data.hits.hits)
.catch((error) => {console.log('heeeere',error);})
;
}
}


