import styled from 'styled-components';
import Button from '../../../Components/UI/Button/Button';
import FilterSelect from '../../../Components/UI/SelectJs/FilterSelect';



function ClassifiedHeader({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ClassifiedHeader-wrapper p-3">

             <div className="row justify-content-space-between">

                 <div className="col-4">
                        <FilterSelect selectedColor="#80808021" className='filter-select'  filterSectionTitle={"Select Location"} filterList={["Matara","Galle","Colombo","Hambanthota","Kalutara","Jaffa","Kandy"]} filterDefaultSelectedText={"Location"}></FilterSelect>
                 </div>

                 <div className="col-3">
                        <FilterSelect selectedColor="#80808021" className='filter-select'  filterSectionTitle={"Select Category"} filterList={["Jobs","News"]} filterDefaultSelectedText={"Category"}></FilterSelect>
                 </div>

                 <div className="col-5 search ">

                     <div className="display-flex  ps-3">

                        <input type="text" className='input  search-input w-80 ' placeholder='What are you Looking For' />
                        <Button text="Search " className='w-20 search--btn  text-color-white font-1-3'></Button>
                     </div>



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
      /* width: var(--ClassifiedHeader-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .filter-select{
            border:1px solid var(--color-black);

            .selected-name{
                padding: 0.5rem!important;   
            }
        }

       .search{
           div{
               border:1px solid var(--color-black);

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
