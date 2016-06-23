import React from 'react';

require('../../sass/sowCalendar/_sowCalendar.scss');

export default class SowTable extends React.Component {
  render () {
    return <fieldset className="sowCalendars">

            <legend>Units</legend>

            <div className="sowCalendar">
                <input type="hidden" id="sep06wk11" value="[moduleId]"/>
                <input type="hidden" id="sep06wk12" value="[moduleId]"/>
                <input type="hidden" id="sep06wk21" value="[moduleId]"/>
                <input type="hidden" id="sep06wk22" value="[moduleId]"/>
                <input type="hidden" id="sep06wk31" value="[moduleId]"/>
                <input type="hidden" id="sep06wk32" value="[moduleId]"/>
                <input type="hidden" id="sep06wk41" value="[moduleId]"/>
                <input type="hidden" id="sep06wk42" value="[moduleId]"/>

            	<table>
            	   <caption>September 2016</caption>
           		   <tbody>        	
            			<tr className="weekNumber">
            				<th className="wk1first" >
            					<span className="wk">Wk 1</span> <span className="sr-only"> 1st half</span>
            					<p className="date">1 - 7</p>
            				</th>
            				<th className="wk1second">
            					<span className="wk">Wk 1</span> <span className="sr-only"> 2nd half</span>
            					<p className="date"></p>
            				</th>

            				<th className="wk2first">
            					<span className="wk">Wk 2</span> <span className="sr-only"> 1st half</span>
            					<p className="date">8 - 14</p>
            				</th>
            				<th className="wk2second ">
            					<span className="wk">Wk 2</span> <span className="sr-only"> 2nd half</span>
            					<p className="date"></p>
            				</th>

            				<th className="wk3first">
            					<span className="wk">Wk 3</span> <span className="sr-only"> 1st half</span>
            					<p className="date">15 - 21</p>
            				</th>
            				<th className="wk3second " >
            					<span className="wk">Wk 3</span> <span className="sr-only"> 2nd half</span>
            					<p className="date"></p>
            				</th>

            				<th className="wk4first " >
            					<span className="wk">Wk 4</span> <span className="sr-only"> 1st half</span>
            					<p className="date">22 - 28</p>
            				</th>
            				<th className="wk4second" >
            					<span className="wk">Wk 4</span> <span className="sr-only"> 2nd half</span>
            					<p className="date"></p>
            				</th>
            			</tr>
                        <tr className="topicUnitDesc">

                            <td className="wk1first unitB" >

                                <span className="topicUnit">R..</span>
                            </td>
                            <td className="wk1second ">
                                &nbsp;
                            </td>  
                            <td className="wk2first">
                                &nbsp;
                            </td>
                            <td className="wk2second unitY">
                                <span className="topicUnit">R..</span>
                            </td>

                            <td className="wk3first unitG" colSpan="4">
                                <span className="topicUnit">Ratio - Estimation with rounding</span>
                            </td>
                        </tr>                    
                    </tbody>
            	</table>
            </div>

            <div className="sowCalendar">
                <input type="hidden" id="sep06wk11" value="[moduleId]"/>
                <input type="hidden" id="sep06wk12" value="[moduleId]"/>
                <input type="hidden" id="sep06wk21" value="[moduleId]"/>
                <input type="hidden" id="sep06wk22" value="[moduleId]"/>
                <input type="hidden" id="sep06wk31" value="[moduleId]"/>
                <input type="hidden" id="sep06wk32" value="[moduleId]"/>
                <input type="hidden" id="sep06wk41" value="[moduleId]"/>
                <input type="hidden" id="sep06wk42" value="[moduleId]"/>


                <table>
                   <caption>October 2016</caption>
                   <tbody>            
                        <tr className="weekNumber">
                            <th className="wk1first" >
                                <span className="wk">Wk 1</span> <span className="sr-only"> 1st half</span>
                                <p className="date">1 - 7</p>
                            </th>
                            <th className="wk1second">
                                <span className="wk">Wk 1</span> <span className="sr-only"> 2nd half</span>
                                <p className="date"></p>
                            </th>

                            <th className="wk2first">
                                <span className="wk">Wk 2</span> <span className="sr-only"> 1st half</span>
                                <p className="date">8 - 14</p>
                            </th>
                            <th className="wk2second ">
                                <span className="wk">Wk 2</span> <span className="sr-only"> 2nd half</span>
                                <p className="date"></p>
                            </th>

                            <th className="wk3first">
                                <span className="wk">Wk 3</span> <span className="sr-only"> 1st half</span>
                                <p className="date">15 - 21</p>
                            </th>
                            <th className="wk3second " >
                                <span className="wk">Wk 3</span> <span className="sr-only"> 2nd half</span>
                                <p className="date"></p>
                            </th>

                            <th className="wk4first " >
                                <span className="wk">Wk 4</span> <span className="sr-only"> 1st half</span>
                                <p className="date">22 - 28</p>
                            </th>
                            <th className="wk4second" >
                                <span className="wk">Wk 4</span> <span className="sr-only"> 2nd half</span>
                                <p className="date"></p>
                            </th>
                        </tr>
                        <tr className="topicUnitDesc">

                            <td className="wk1first unitB" >

                                <span className="topicUnit">R..</span>
                            </td>
                            <td className="wk1second ">
                                &nbsp;
                            </td>  
                            <td className="wk2first">
                                &nbsp;
                            </td>
                            <td className="wk2second unitY">
                                <span className="topicUnit">R..</span>
                            </td>

                            <td className="wk3first unitG" colSpan="4">
                                <span className="topicUnit">Ratio - Estimation with rounding</span>
                            </td>
                        </tr>                    
                    </tbody>
                </table> 
            </div>           
        </fieldset>
  }
}
