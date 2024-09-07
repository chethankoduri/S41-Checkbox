import React, { useRef } from 'react'

function SignupForm() {
    let selectStateRef = useRef();
    let msgLabelRef = useRef();
    let firstNameRef = useRef();
    let lastNameRef = useRef();
    let MaleRBRef = useRef();
    let FemaleRBRef = useRef();
    let ageInputRef = useRef();


    let selectedGender;
    let salutation;
    let maritalStatus;

    let LanguagesKnown ={
        eng:false,
        hin:false,
        tel:false,
        urd:false,
    }

    let onClickAccount = ()=>{
        if(selectedGender =="Male"){
             salutation ="Mr."
        }else{
            if(maritalStatus =="single"){
            salutation ="Miss."
            }else{
                salutation = "Mrs."
            }
        }
        
        console.log(LanguagesKnown);
        msgLabelRef.current.innerHTML = `${salutation} ${firstNameRef.current.value} ${lastNameRef.current.value} 
    from ${selectStateRef.current.value} 
    your account has been created sucessfully and you know ${LanguagesKnown.eng==true ?"English":" "} 
    ${LanguagesKnown.hin==true ?"Hindi":" "} ${LanguagesKnown.tel==true ?"Telugu":" "} ${LanguagesKnown.urd==true ?"Urdu":" "}`
    }
  return (
    <div>
        <h2>Signup Form</h2>
        <form>
            <div>
                <label>First Name</label>
                <input ref={firstNameRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameRef}></input>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name='gender' ref={MaleRBRef} onChange={()=>{
                    if(MaleRBRef.current.checked == true){
                    selectedGender ="Male"
                 }
                }}></input>
                <label className="innerlable">Male</label>
                <input type="radio" name='gender' ref={FemaleRBRef} onChange={()=>{
                    if(FemaleRBRef.current.checked == true){
                        selectedGender ="Female"
                    }
                }}></input>
                <lable className="innerlable">Female</lable>

            </div>
            <div>
                <label>Marital Status</label>
                <input type='radio' name='Miss' onChange={(eventobj)=>{
                   console.log(eventobj);
                   if(eventobj.target.checked == true){
                    maritalStatus ="single"
                   }
                }}></input>
                <label className="innerlable">Single</label>
                <input type='radio' name='Miss' onChange={(e)=>{
                   console.log(e);
                   if(e.target.checked == true){
                    maritalStatus = "Married"
                   }
                }}></input>
                <label className="innerlable">Married</label>
                

            </div>
            <div>
                <label>State</label>
                <select ref={selectStateRef}>
                    <option>Telangana</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option>Tamil Nadu</option>
                    <option>Karnataka</option>
                    <option>Maharastra</option>
                    
                </select>
            </div>

              <label>Languages:</label>
              <input type='checkbox' onChange={(eo)=>{
                LanguagesKnown.eng= eo.target.checked;

              }}></input>
              <label className='innerLabel'>English</label>

              <input type='checkbox' onChange={(eo)=>{
                LanguagesKnown.hin= eo.target.checked; 
            }}></input>

              <label className='innerLabel'>Hindi</label>

              <input type='checkbox' onChange={(eo)=>{
                LanguagesKnown.tel= eo.target.checked; 
            }}></input>
              <label className='innerLabel'>Telugu</label>

              <input type='checkbox' onChange={(eo)=>{
                LanguagesKnown.urd= eo.target.checked; 
            }}></input>
              <label className='innerLabel'>Urdu</label>
              
             <div>
                <label>Age</label>
                <input ref={ageInputRef} onChange={()=>{
                    let age = Number(ageInputRef.current.value);
                    if(age <5){
                        console.log(`Infant`)
                    }else if(age >5 && age<=10){
                        console.log(`Kid`)
                    }else if(age >10 && age<=18){
                        console.log(`Teenage`)
                    }else if(age>18 && age <=30){
                        console.log(`Youth`)
                    }else if(age>30 && age<=50){
                        console.log(`Middle-Aged`)
                    }else{
                        console.log(`Null`)
                    }
                }}></input>
             </div>
            <div>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <label>Mobile Number</label>
                <input></input>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    onClickAccount();
                }}>Submit</button>
            </div>
            <label ref={msgLabelRef} style={{width:"500px"}}></label>
        </form>
    </div>
  )
}

export default SignupForm