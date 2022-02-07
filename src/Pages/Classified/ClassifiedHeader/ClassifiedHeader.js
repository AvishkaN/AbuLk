import styled from 'styled-components';
import Button from '../../../Components/UI/Button/Button';
import FilterSelect from './CutomizeSelect/FilterSelect';


import CategoryIcon from '@mui/icons-material/Category';
import Location from '@mui/icons-material/FmdGood';


function ClassifiedHeader({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ClassifiedHeader-wrapper p-3">

             <div className="row justify-content-space-between classified-header-row">

                 <div className="search col-5 search ">

                     <div className="display-flex  ps-3">

                        <input type="text" className='input  search-input w-80 ' placeholder='What are you Looking For' />
                        <Button text="Search " className='w-20 search--btn  text-color-white font-1-3'></Button>
                     </div>



                 </div>

                 <div className="col-3  classified-header-input  category cursor-p">
                        <FilterSelect   titleSvg={<CategoryIcon className='font-2-4 me-2  text-color-primary    '></CategoryIcon>}  selectedColor="#80808021" className='filter-select  pt-1'  filterSectionTitle={"Category"} filterList={["Electronics","Essential","Job","Property"]} filterDefaultSelectedText={"Category"}></FilterSelect>
                 </div>

                 <div className="col-4   classified-header-input cursor-p  location">
                        <FilterSelect titleSvg={<Location className='font-2-4  me-2  text-color-primary   '></Location>} selectedColor="#80808021" className='filter-select  pt-1'  filterSectionTitle={"Location"} filterList={["Matara","Galle","Colombo","Hambanthota","Kalutara","Jaffa","Kandy"]} filterDefaultSelectedText={"Location"}></FilterSelect>
                 </div>



             </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ClassifiedHeader */
    
    .ClassifiedHeader-wrapper{

        .classified-header-row{
            flex-direction:row-reverse;  

            @media(max-width:779px){     
                flex-direction: initial;

            }
            .search{
                @media(max-width:779px){     
                        width: 100%; 
                        margin-bottom: 1rem!important;  
                }
                
            }
            
            .classified-header-input{
                @media(max-width:779px){     
                        width: 50%; 
                }

            }

            .category{
                padding-right: 0;
            }
            .location{
                padding-left: 0;
            }


        }

        .filter-select{
            border: 1px solid var(--color-grey);


            .selected-name{
                padding: 0.5rem!important;   
            }
        }

       .search{
           div{
            border: 1px solid var(--color-grey);


               .search-input{

               }
               
               .search--btn{
                   /* border:1px solid var(--color-black); */
                   /* padding: 0.7rem!important; */
                   background: var(--color-primary);  
               }
           }
        }
    }
`;

export default ClassifiedHeader;
