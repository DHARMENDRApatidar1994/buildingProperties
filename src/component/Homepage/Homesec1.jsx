import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Homesec1 = () => {
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };
  return (
    <div>
        <div className='homesec1'>
          <div className='homesecoverlay'>
            <div className='homesec1img'></div>
            {/* <img className='homesec1img' src="Vector.png" alt="" /> */}
            </div>
            <h1>Discover Your Dream Home</h1>
            <p>Your one-stop real estate destination for buying, 
                renting, and selling properties.</p>
            <div className='homesecsale'>
              <h6 onClick={()=>{navigate("/forsale")}}><i class="ri-price-tag-fill me-1"></i>For Sale</h6>
              <h6 onClick={()=>{navigate("/forrent")}}><i class="ri-price-tag-2-line me-1"></i>For Rent</h6>
              <h6 onClick={()=>{navigate("/forinvestment")}}><i class="ri-parent-fill me-1"></i>For Investment</h6>
              <div>
              <input className='border border-warning rounded' type="text" placeholder='London..'  value={inputValue}
              onChange={handleInputChange} list="programmingLanguages" />
              <i class="ri-close-line" onClick={handleClearInput} style={{marginLeft:"-22px"}}></i>
              <datalist id="programmingLanguages" className=''> 
                <option value="Objective C">Objective C</option> 
                <option value="C++">C++</option> 
                <option value="C#">C#</option> 
                <option value="Cobol">Cobol</option> 
                <option value="Go">Go</option> 
                <option value="Java">Java</option> 
                <option value="JavaScript">JavaScript</option> 
                <option value="Python">Python</option> 
                <option value="PHP">PHP</option> 
                <option value="Pascal">Pascal</option> 
                <option value="Perl">Perl</option> 
                <option value="R">R</option> 
                <option value="Swift">Swift</option> 
            </datalist> 
              </div>
              <button onClick={()=>{navigate("/searchforsale")}}><i class="ri-search-line me-2"></i>Search</button>
            </div>
            </div>
        
    </div>
  )
}

export default Homesec1