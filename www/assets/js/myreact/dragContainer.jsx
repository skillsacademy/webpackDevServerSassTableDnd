
require('../../sass/drag/_drag.scss');

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import SowTable from './sowTable.jsx'


const LEFT_BUTTON = 0;
const DRAG_THRESHOLD = 3;


function getEvtXY(event){
	var eventCursor = event;
	if(event.targetTouches || event.changedTouches){
		eventCursor = (typeof event.targetTouches.length > 0)?event.targetTouches[0]:event.changedTouches[0];
	}		
	return {
		evtX:eventCursor.pageX,
		evtY:eventCursor.pageY
	}	
}

function getLeftTop(evtXY, startEvtX, startEvtY, elementX, elementY){

	var deltaX, deltaY, distance, left, top

	var evtX = evtXY.evtX;
	var evtY = evtXY.evtY;

	deltaX = evtX - startEvtX;
	deltaY = evtY - startEvtY;
	distance = Math.abs(deltaX) + Math.abs(deltaY);

	if (distance > DRAG_THRESHOLD) {			
		var left = elementX + deltaX + document.body.scrollLeft;
		var top = elementY + deltaY + document.body.scrollTop;

		//left = (left > 0)?left:0;		
		//top = (top > 0)?top:0;	
	}

	return {
		left:left,
		top:top
	}
}

function getDirectionXY(evtXY, startEvtX, startEvtY){
	return {
		directionX:(startEvtX > evtXY.evtX)?'left':'right',
		directionY:(startEvtY > evtXY.evtY)?'top':'bottom'
	}
}

function getDropElements(left, top, width, height){


	var elemTopLeft = document.elementFromPoint(left,top);
	var elemTopRight = document.elementFromPoint(left + width,top);
	var elemBottomRight = document.elementFromPoint(left + width,top + height);
	var elemBottomLeft = document.elementFromPoint(left, top + height);


	var arrDroppedElems = [elemTopLeft];

	if(elemTopRight !== elemTopLeft){
		arrDroppedElems.push(elemTopRight);
	}
	if(elemBottomRight !== elemTopRight && elemBottomRight !== elemTopLeft){
		arrDroppedElems.push(elemBottomRight);
	}
	if(elemBottomLeft !== elemBottomRight && elemBottomLeft !== elemTopRight && elemBottomLeft !== elemTopLeft){
		arrDroppedElems.push(elemBottomLeft);
	}

	var arrDroppedElemsAndChildren = [], elemDroppedOnto, nodeListDescendants, arrDescendants;
	for(var i=0, intLen = arrDroppedElems.length; i < intLen; ++i){
		elemDroppedOnto = arrDroppedElems[i];


		if(elemDroppedOnto && elemDroppedOnto.nodeName !=='HTML'){			

			arrDroppedElemsAndChildren.push(elemDroppedOnto);

			var nodeListDescendants = elemDroppedOnto.querySelectorAll("*");	


			var arrDescendants = Array.prototype.slice.call(nodeListDescendants);

			arrDescendants = filterElementsInsideDrop(arrDescendants, left, top, width, height);

			arrDroppedElemsAndChildren = arrDroppedElemsAndChildren.concat(arrDescendants);
		}
		
	}

	return arrDroppedElemsAndChildren;	
}

function filterElementsInsideDrop(arrDescendants, left, top, width, height){
	var arr = [];
	for(var i=0, intLen = arrDescendants.length; i < intLen; ++i){
		var elem = arrDescendants[i];


		var dropOffset = ReactDOM.findDOMNode(elem).getBoundingClientRect();
		var dropLeft = dropOffset.left;
		var dropTop = dropOffset.top;
		var dropHeight = elem.offsetHeight;
		var dropWidth = elem.offsetWidth;

//console.log('dropLeft',dropLeft);
//console.log('dropTop',dropTop);
//console.log('dropWidth',dropWidth);
//console.log('dropHeight',dropHeight);

		if(top >= dropTop && left >= dropLeft && ((left + width) <= (dropLeft + dropWidth)) && ((top + height) <= (dropTop + dropHeight)) ){
			arr.push(elem);
		}
	}
	return arr;
}


function drag(event){
	console.log('drag');
}
class AppDragContainer extends Component{

/*
	actions: 'move' || 'stretch' || 'squash'
	properties: 
		steps: ( each step represents a half week. ie a unit)
		isForwardInTime: true || false 
			( 
				true means move, squash, or strech forward in time by amount of steps. 
				false means move, squash or stretch backwards in time by amount of steps.
			)
*/


	constructor /* function */ (props) {
		super(props);	

		this.state = {
			currentState: 'default',
			left: null,
			top: null,					
			useful:{
				startEvtX:null,
				startEvtY:null,
				elementX: null,
				elementY: null
			}
		}

	}

	_onDragStart (event){
		console.log('start ');
		
		// firefox fix 
		if(event.dataTransfer){
			event.dataTransfer.setData('text/plain', 'node');	
		}
		var evtXY = getEvtXY(event);
		var elemClickedOn = document.elementFromPoint(evtXY.evtX, evtXY.evtY);

		console.log('elemDrag = ' +  elemClickedOn);
	}


	_onDrag(event){
		console.log('drag');		
	}

	_onDragEnd (event){
		console.log('end ');
	
	}		

	render /*function*/ () {    

		return (

			<div className="dragContainer"

				draggable="true"
				onDragStart={this._onDragStart.bind(this)}
				onTouchStart={this._onDragStart.bind(this)}

				onTouchMove={this._onDrag.bind(this)}
				onDrag={this._onDrag.bind(this)}

				onTouchEnd={this._onDragEnd.bind(this)}
				onDragEnd={this._onDragEnd.bind(this)}
				 >
				

				<SowTable/> 
				
			</div>	
		
    	)
  	} 	
};




export default AppDragContainer;