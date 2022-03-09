import styled from 'styled-components';



function CheckboxItem(props) {
  return (
    <DIV className={`${props.className} `}>
                <label className="container overfloy-y-hidden">
                        <div className="ms-4">
                                {props.children}  
                        </div>
                        {/* <div className={` ms-4  ${textClassName} `}>{text}</div> */}
                        <input type="checkbox"  />
                        <span className={`checkmark border-radius-5 ${props.checkmarkClassName}`} />
                </label>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

                            .container {
                        display: block;
                        position: relative;
                        /* padding-left: 3.5rem; */
                        /* margin-bottom: 1.2rem; */
                        cursor: pointer;
                        font-size: 2.2rem;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        }

                        /* Hide the browser's default checkbox */
                        .container input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                        }

                    /* Create a custom checkbox */
                    .checkmark {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    /* height: 2.5rem;
                                    width: 2.5rem; */
                                    background-color: var(--color-grey-2);
                                    /* border: 1px solid red; */
                                
                                }

                /* On mouse-over, add a grey background color */
                .container:hover input ~ .checkmark {
                background-color: #ccc;
                }

                /* When the checkbox is checked, add a blue background */
                .container input:checked ~ .checkmark {
                background-color: var(--color-primary);
                }

                /* Create the checkmark/indicator (hidden when not checked) */
                .checkmark:after {
                content: "";
                position: absolute;
                display: none;
                }

                /* Show the checkmark when checked */
                .container input:checked ~ .checkmark:after {
                display: block;
                }

                /* Style the checkmark/indicator */
                .container .checkmark:after {
                left: 40%;
                top: 33%;
                width: 0.5rem;
                height: 1rem;
                border: solid var(--color-white);
                border-width: 0 0.3rem 0.3rem 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                }
    
`;

export default CheckboxItem;
