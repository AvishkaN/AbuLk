import React from 'react'
import styled from 'styled-components';






function Comp({className,tableData=[],borderColor}) {
    return (
        <DIV className={`${className} `} borderColor={borderColor}>
            
            <table id="specs-table">

                {
                        tableData.map(tableObj=>(
                        //     <div  key={Math.random()}  className="">{"txt"}</div>
                                        <tr key={Math.random()}  className="">
                                                <td>{tableObj.td}</td>
                                                <td>{tableObj.tr}</td>
                                        </tr>

                        ))
                 }

            </table>
        </DIV>
    )
}

const DIV=styled.div`
      .icon{ 
         width: 25px;
         height: 25px;
         //margin-right: 10px;  
         cursor: pointer;
	   }


                table {
                width: 100%;
                }

                 td,th{
                                /* border: 1px solid #ddd; */
                                /* padding: 8px; */
                                border:1px solid ${props => props.borderColor? props.borderColor:` #ddd`};

                }


            
`;



export default Comp;
