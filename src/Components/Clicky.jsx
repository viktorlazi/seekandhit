import {observer} from 'mobx-react';

function Clicky({store}) {
  return <p onClick={()=>{store.fetchColour()}} style={{color:store.colourHex}}>
    {store.content}
  </p>;
}
export default observer(Clicky);