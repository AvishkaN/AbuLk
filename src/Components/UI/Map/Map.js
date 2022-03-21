import styled from 'styled-components';



function Map({
          className="",
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.84209766242!2d80.74584141627449!3d6.951364907956469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae380434e1554c7%3A0x291608404c937d9c!2sNuwara%20Eliya!5e0!3m2!1sen!2slk!4v1647614910224!5m2!1sen!2slk",
          height=""
        }) {
  
  
          return (
            <DIV height={height}>
                <iframe className={`w-100  border-radius-5  ${className}`}  src={src}  style={{border: 0}} allowFullScreen loading="lazy" />
            </DIV>
   
  );
}


const DIV=styled.div`
    width: 100%;
    

        iframe{   
          height:${props => props.height};

        }

`;

export default Map;
