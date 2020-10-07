import React from 'react';
import "../css/IconBarHeaderTest.css";
import { TiHome } from 'react-icons/ti';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { GoThreeBars } from 'react-icons/go';

export default function IconBarHeader() {

  return (
    <div>
      <nav class="slidemenu">
        <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
        <a href="/">
        <label for="slide-item-1"><p class="icon"> <TiHome size={30}/> </p><span>Home</span></label>
        </a> 


        <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
        <a href="/">
        <label for="slide-item-1"><p class="icon"> <FaChalkboardTeacher size={30} /> </p><span>Tutoring</span></label>
        </a> 


        <input type="radio" name="slideItem" id="slide-item-1" class="slide-toggle" checked/>
        <a href="/">
        <label for="slide-item-1"><p class="icon"> <GoThreeBars size={30}/> </p><span>More</span></label>
        </a> 

        <div class="clear"></div>

        {/* Bar */}
        <div class="slider">
          <div class="bar"></div>
        </div>

      </nav>
    </div>
  )
}
