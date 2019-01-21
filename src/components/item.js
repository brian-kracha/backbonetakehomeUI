import React from 'react'

const Item = ({ key, name, code, price, creator, modified }) => {

let time =timeConverter(modified)
  return(
    <tr className="my-2 py-2 blue">
      <td >{ key }</td>
      <td>{ name }</td>
      <td>${ price }</td>
      <td>{ code }</td>
      <td>{ creator }</td>
      <td>{ time }</td>
    </tr>
  )
}
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year
  return time;
}


const styles = {
  rowStyle : {
    color:'green'
  }
}

export default Item
