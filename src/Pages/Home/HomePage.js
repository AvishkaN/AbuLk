import styled from 'styled-components';
import SearchSectionComp from '././SearchSection/SearchSectionComp';
import PopularSection from '././PopularCategoriesSection/PopularSection';
import RentPopularSection from '././RentSectionPopular/RentPopularSection';
import AppdownloadBar from '././AppDownloadBarSection/AppdownloadBar';


const data=[
  {
  nameTag:"RS. 750", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InZ6cDczYTZ3b3ExMDEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.Zy-2-01WxmW2EO4LHNi-vdrvCUbjMR2kYzpDVy5fsOQ/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InM0cTNvMWt4MDl1MS1EVUJJWlpMRSIsInciOlt7ImZuIjoiNWpldWk3cWZ6aWU2MS1EVUJJWlpMRSIsInMiOjAsInAiOiJjZW50ZXIsMSIsImEiOjEwMH1dfQ.uwDeOT6f0NXfjzQD9VpPtCdGXgQw5JH-sc0tiqscWhc/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Ink3bzcxcmFhc2s0LURVQklaWkxFIiwidyI6W3siZm4iOiI1amV1aTdxZnppZTYxLURVQklaWkxFIiwicyI6MCwicCI6ImNlbnRlciwxIiwiYSI6MTAwfV19.3bMIfwvBO3rRrcWF9zdVvX5jA8U1byIQgga_nWN1uDo/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Im12ZjhlNWUzOGhxcTItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjowLCJwIjoiY2VudGVyLDEiLCJhIjoxMDB9XX0.NRIhRXwmAoV8ZLK7JU0uSwVXV1vr7SUWwJusmqMAVEg/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InVpdDlsMTl4Y3J3MDItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjozMCwicCI6ImNlbnRlciwxIiwiYSI6ODB9XX0.VTv3YSgCTYbOGlPzMZTUfYDsUG3I23a7-hB7vHcoNUY/image;p=main",
  nameOrYear:"Al jimi"
  },

  // {
  // nameTag:"RS. 7500", 
  // list:['5 Beds','5 Baths'], 
  // imgSrc:"",
  // nameOrYear:"Al jimi"
  // },
]
const data2=[


  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6ImsyOXV1YndzODQ0bzItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.fWzZyN-J_g-S4rQM1GRVuHo-mCbifpnCcaEEGj80XmI/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6IjBnZWg5Ym03M3MxNjEtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.HXxv6aO_Jpvghe44NVZONSi3hehbBG3QN-ocx31uCB4/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Ind1MWZubTJ4cWlrZC1EVUJJWlpMRSIsInciOlt7ImZuIjoiNWpldWk3cWZ6aWU2MS1EVUJJWlpMRSIsInMiOjUwLCJwIjoiY2VudGVyLGNlbnRlciIsImEiOjgwfV19.XP2TNMK8UUbOjF30wwCwZ3D5i-XVXtoAafiThdCtA4I/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Ijg1cWpiYmhseXpmMDMtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.uYSP-SVgSl31YozGDFbQ-fU1z5wSBzK6jopaqNZdZbo/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6ImF1YTJ5cTRsY3lwZzItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.1UPjDDPVAnSKMe7iJ7Gy9s1SsnUM28To5dQ-mOkYN_k/image;p=main",
  nameOrYear:"Al jimi"
  },
  // {
  // nameTag:"RS. 7500", 
  // list:['5 Beds','5 Baths'], 
  // imgSrc:"",
  // nameOrYear:"Al jimi"
  // },
]
const data3=[


  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6InN2cGp5aTM0cmJjcDItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.cpGMT9q07v7Fria20svofC3xE_K1PUP1XSYJVmHXC3E/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Im1rdzBwaDhqZWQ0dDItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.yjDx4O10DrTttbnzqIZDRnT2e_yrePZTQ2D30JLnTR4/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Inl1aG5vZzUybjA1bjMtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.Ukq-mgPfFFdVF2L7e0WhkQyOVZinJ-pNUakeUYMVwDk/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6Inl1NHlmNGkzMHN2NjItRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.0ppH_FOpdu_ioR5tGgM4uv4yWmsetcaZDH5rgPw3u_c/image;p=main",
  nameOrYear:"Al jimi"
  },
  {
  nameTag:"RS. 7500", 
  list:['5 Beds','5 Baths'], 
  imgSrc:"https://images.dubizzle.com/v1/files/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmbiI6ImNjZ3p4ODl0bWc5bjMtRFVCSVpaTEUiLCJ3IjpbeyJmbiI6IjVqZXVpN3FmemllNjEtRFVCSVpaTEUiLCJzIjo1MCwicCI6ImNlbnRlcixjZW50ZXIiLCJhIjo4MH1dfQ.CJMeqnDQxZvbJWD3dawYs4Ky4Dvgue13fKGU_oekHyM/image;p=main",
  nameOrYear:"Al jimi"
  },
  // {
  // nameTag:"RS. 7500", 
  // list:['5 Beds','5 Baths'], 
  // imgSrc:"",
  // nameOrYear:"Al jimi"
  // },
]


function HomePage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="HomePage-wrapper">
         <SearchSectionComp className='mt-5'></SearchSectionComp>
         <PopularSection className='mt-5'></PopularSection>

          <RentPopularSection className="mt-5" title={"Popular in Residential for Rent"} data={data}></RentPopularSection>
          <RentPopularSection className="mt-5" title={"Popular in Used Cars for Sale"} data={data2}></RentPopularSection>
          <RentPopularSection className="mt-5" title={"Popular in Residential for Rent"} data={data3}></RentPopularSection>
      

          <AppdownloadBar className='mt-6'></AppdownloadBar>
      
      
      
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);   only HomePage */
    margin-top: 12rem;   /*only HomePage */ 
    
    .HomePage-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default HomePage;
