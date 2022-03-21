import styled from 'styled-components';

import HomePage from './Pages/Home/HomePage';
import PropertPage from './Pages/ProperyPage/PropertPage';
import ProductItem from './Pages/ProductItem/ProductItem';
import ClassifiedPage from './Pages/Classified/ClassifiedPage';
import MyAccountPage from './Pages/MyAccount/MyAccountPage';
import AllJobsPage from './Pages/AllJobs/AllJobsPage';
import AllBuissness from './Pages/AllBuissness/AllBuissness';
import AllResturantPage from './Pages/AllResturant/AllResturant';
import SingleResturantPage from './Pages/SingleResturant/SingleResturant';
import SingleBuissnessPage from './Pages/SingleBuissness/SingleBuissnessPage';


import NavBar from './Components/Nav/NavBar';
import ScrollWindowTop from './Functions/DOM/ScrollWindowTop';
import ScrollIndicator from './Components/UI/ScrollIndicator/ScrollIndicator';

import Login from './Pages/Login/Login';
import MobielNavBar from './Components/Nav/MobileNavBar/MobielNavBar';
import Footer from './Components/Footer/Footer';


import RegisterPage from './Pages/Register/Register';

import OverlayFull from './Components/Overlay/OverlayFull';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectClicks, SetCurrentScrollYFN } from './Redux/slices/clickSlice';
import { useEffect ,useState} from 'react';


function App() {

  const clicks=useSelector(selectClicks);
  const dispatch=useDispatch();



  useEffect(()=>{

    // scroll to top
    window.scroll(0, 0);

    // turn off scroling opend mobile nav bar
  const html=document.querySelector('html');
  html.style.overflowY=`${clicks.showOverlay?'hidden':'initial'}`;

  },[clicks.showOverlay]);


  const handleScroll=()=>{

    console.log(`scroling `);


  const  winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const  height = document.documentElement.scrollHeight - 		   
  
   document.documentElement.clientHeight;
  
  const  scrolled = (winScroll / height) * 100;
  console.log( scrolled + "%");

  //  dispatch( SetCurrentScrollYFN(scrolled + "%"));
  };



  // Add and remove event listner scrolling 

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //     window.removeEventListener("scroll", handleScroll);
    // }
}, []);
  





  return (

    
    
    <DIV className="App">

         <div className="app-wrapper">
          <BrowserRouter>

                <div className="app-content">
                          <div className="clear"></div>
                        <Routes>

                                    {/* Home */}
                                    <Route path="/" element={ 
                                      <>
                                      <NavBar></NavBar>
                                      <MobielNavBar></MobielNavBar>

                                      <HomePage></HomePage>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                    {/* Properties */}
                                    <Route path="/properties" element={ 
                                      <>
                                       <NavBar></NavBar>
                                      <MobielNavBar></MobielNavBar>

                                      <PropertPage></PropertPage>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                      {/* single produts */}
                                    <Route path="/product-item/:prodcuctId" element={ 
                                      <>
                                      <NavBar></NavBar>
                                      <MobielNavBar></MobielNavBar>

                                      <ProductItem></ProductItem>
                                      <Footer className=''></Footer>

                                      </>
                                    } />


                                    {/* classifiesd */}
                                    <Route path="/classified" element={ 
                                      <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <ClassifiedPage></ClassifiedPage>
                                        <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                      {/* My Account */}
                                    <Route path="/myaccount/*" element={ 
                                      <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <MyAccountPage></MyAccountPage>
                                        <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                            {/* ALL buissness */}
                                            <Route path="/allBusiness" element={ 
                                             <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <AllBuissness></AllBuissness>
                                        <Footer className='mt-6'></Footer>

                                          </>
                                         } />



                                            {/* Single buissness */}
                                            <Route path="/singleBuissness" element={ 

                                             <div onScroll={handleScroll}>

                                                    <ScrollIndicator className='' width={clicks.currentScrollY}></ScrollIndicator>
                                                    <NavBar></NavBar>
                                                    <MobielNavBar></MobielNavBar>

                                                <SingleBuissnessPage></SingleBuissnessPage>
                                                <Footer className='mt-6'></Footer>

                                          </div>
                                         } />


                                            {/* ALL Jobs */}
                                            <Route path="/allJobs" element={ 
                                      <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <AllJobsPage></AllJobsPage>
                                        <Footer className='mt-6'></Footer>

                                      </>
                                         } />


                                            {/* ALL Resturant Page*/}
                                            <Route path="/allResturant/" element={ 
                                      <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <AllResturantPage></AllResturantPage>
                                        <Footer className='mt-6'></Footer>

                                      </>
                                         } />


                                            {/* Single Resturant Page*/}
                                            <Route path="/single-resturant/*" element={ 
                                      <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <SingleResturantPage></SingleResturantPage>
                                        <Footer className='mt-6'></Footer>

                                      </>
                                         } />


                                    {/* Register */}
                                    <Route path="/register" element={ 
                                      <> 

                                            <RegisterPage></RegisterPage>

                                      </>
                                    } />


                                    {/* Login */}
                                    <Route path="/login" element={ 
                                      <> 

                                            <Login></Login>

                                      </>
                                    } />


                                    



                        </Routes>

                </div>

                       { clicks.showOverlay &&  <OverlayFull></OverlayFull>}
          </BrowserRouter>





         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .app-wrapper{
      
      width: 100%;
      position: relative; 
      
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
