function Clicky({content}) {
  return <p onClick={()=>{alert()}}>
    {content}
  </p>;
}
export default Clicky;