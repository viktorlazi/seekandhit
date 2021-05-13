import {observer} from 'mobx-react';
import {action} from 'mobx';

function UserInput({value, setContent}) {
  return <input type="text" value={value} onChange={action((e)=>{
    setContent(e.target.value);
  })} />
}
export default observer(UserInput);
