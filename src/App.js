import styled from 'styled-components';
import HomePage from './Pages/Home/HomePage';
import NavBar from './Components/Nav/NavBar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {




  return (

    
    
    <DIV className="App">

         <div className="app-wrapper">
          <BrowserRouter>

                <div className="app-content">
                          <NavBar></NavBar>
                          <div className="clear"></div>
                        <Routes>
                                    <Route path="/" element={ 
                                      <HomePage></HomePage>
                                    } />
                        </Routes>

                        <Footer className='mt-6'></Footer>
                </div>

          </BrowserRouter>





         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .app-wrapper{
      position: relative; 

      width: 100%;
      
      .app-content{
        width: var(--nav-footer-width);
        margin: 0 auto; 
      }
    }

    .clear{
      /* &:after{
        content: '';
        width: 100%;
        height: 200px;
        background: #f44336;
        display: block;
        transition: 0.45s;
    } */
    }

`;

export default App;
