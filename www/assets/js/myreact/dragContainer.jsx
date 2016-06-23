
require('../../sass/drag/_drag.scss');

import React from 'react';

import SowTable from './sowTable.jsx';
import DragTarget from './dragTarget.jsx';

class AppDragContainer extends React.Component {
  render () {
    return (     
	    <div className="wrapAll">  
	    	<h1>Wrap All</h1>           
			<SowTable/> 
			<DragTarget name="dragTarget"/> 
        </div>        
    );
  }
}

export default AppDragContainer;