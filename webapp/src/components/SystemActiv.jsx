 
import axios from 'axios';

export class SystemActiv {


async getServices() {
   return  await axios
  .get('http://localhost:5000/system/cpu')
.then(res => res.data)
.catch((error) => {console.log('heeeere',error);
})
;
}


async getLogServices() {
  return  await axios
 .get('http://localhost:5000/system/system')
.then(res => res.data)
.catch((error) => {console.log('heeeere',error);})
;
}
}


