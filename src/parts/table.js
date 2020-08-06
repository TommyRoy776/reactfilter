import React from 'react';

function table(props){
    return( 
    <div>
    <tr key={i}>
      <td>{props.id}</td>
      <td>{props.text}</td>
    </tr>
    </div>
    );
}