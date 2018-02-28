import React from 'react';
import floatingDuck from '../public/images/floating_duck.jpg';

const CSSPositioning = () => {
  return (
    <div>
      <div
        className="positioning positioning--static">
        This div's position is static (default value)<br/>
        (within the normal document flow)
      </div>

      <div
        className="positioning positioning--relative">
        This div's position is relative (relative to its own position)<br/>
        (within the normal document flow)
      </div>

      <div
        className="positioning positioning--absolute">
        This div's position is absolute (relative to its parent/html)<br/>
        OUT of the document flow<br/>
        Also, though absolutely positioned boxes have MARGINS
      </div>

      <div
        className="positioning positioning--fixed">
        This div's position is fixed (similar to absolute HOWEVER unaffected by scrolling)<br/>
        OUT of the document flow<br/>
        Also, just like absolute positioned boxes, fixed boxes have MARGINS
      </div>

      <div
        className="positioning positioning--sticky">
        This div's position is sticky (behaves like a relative until it reaches a specified threshold, at which it behaves like fixed)<br/>
        (within the normal document flow)
      </div>

      <br/>
      <br/>
      <div
        className="positioning positioning--float">
        This div is a float (float: right)<br/>
        (within the normal document flow)<br/>
        Can be left / right / none / inherit<br/>
        affects the position of other elements<br/>
        </div>
      <br/>

      <div
        className="positioning--float-example-div">
        <img
          className="positioning--floating-duck"
          src={floatingDuck} />
        In its simplest use, the float property can be used to wrap text around images. In this example the floating duck is on the right but it can be moved on the left with float: left.
      </div>

              
      <br/>
      Still to come: <br/>
      - z-index<br/>
      - Box Model<br/>
      - inline vs inline-block<br/>
      - div style="clear:both; / Clearfix method / overflow: auto or overflow: hidden<br/>
    </div>
  );
}

export default CSSPositioning;