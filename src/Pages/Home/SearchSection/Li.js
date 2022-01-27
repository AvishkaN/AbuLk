import styled from 'styled-components';



function Page({className="",text,active=false}) {
  return (
    <li  className={` me-3  me-3 pt-2 pb-2 pe-3 ps-3 cursor-p ${className}`}>{text}</li>
  );
}


const Li=styled.li`

`;

export default Page;
