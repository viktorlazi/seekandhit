import {observer} from 'mobx-react';

function List({elements}) {
  return (
    <ul>
      {
        elements.map((e)=>{
          return <li style={{color:e}}>{e}</li>
        })
      }
    </ul>
  )
}

export default observer(List);
