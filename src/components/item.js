import React from 'react'
import {Image } from 'react-bootstrap'
const Item = ({ id, name, code, price, creator, modified,image }) => {

  let time =timeConverter(modified)

  return(
    <tr className="my-2 py-2 blue" style= {styles.row}>
      <td style= {styles.rowStyle}><Image src={image[id]} style ={ styles.image }/></td>
      <td style= {styles.rowStyleProduct}>Parby Warker { name }</td>
      <td style= {styles.rowStyle}>${ price }</td>
      <td style= {styles.rowStyle}>{ code }</td>
      <td style= {styles.rowStyle}>{ creator }</td>
      <td style= {styles.rowStyle}>{ time }</td>
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
  rowStyleProduct: {
    textAlign: 'left',
    fontWeight:600,
    fontSize: 9,
    borderRight: '1px solid grey'


  },
  rowStyle : {
    textAlign: 'left',
    fontWeight:600,
    fontSize: 9

  },
  row:{
    margin:'5px'
  },
  image: {
    height:30,
    width:35
  }
}

export default Item
