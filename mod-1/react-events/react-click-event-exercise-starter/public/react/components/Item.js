import React, { useState } from "react";

const backgroundImg = item => `img/${item.name}.gif`;

export const Item = props => {
  // add heat hooks here
  const [heat, setHeat] = useState(["🔥"]);
  const [nuts, setNuts] = useState("nut-image-hidden");

  function toggleNuts() {
    if (nuts === "nut-image-hidden") {
      setNuts("nut-image");
    } else {
      setNuts("nut-image-hidden");
    }
  }

  //DEMO
  // add heat function here
  function addHeat() {
    setHeat([...heat, "🔥"]);
    console.log(heat);
  }
  //REMOVE HEAT
  function removeHeat() {
	  let len = heat.length;
	  console.log(len);
	  let newArray = [];
	  for(let i = 0; i < len-1; i++){
		  newArray.push(heat[i])		  
	  }
    setHeat(newArray);
  }
  console.log("Props passed in to item: ", props);
  return (
    <div className="item">
      <div className="item-pics">
        <img className="item-img" src={props.item.image} />
        <br />
        <img className={nuts} src={props.item.nutrition} />
      </div>
      <br />
      <br />
      <div>
        <div className = 'heat'>
        {/* How can we display all the heat icons? */ heat.map(pepper => {
          return pepper;
        })}
        </div>
        <br />
        <br />

        <button onClick={() => addHeat()}>Add Heat</button>
        <button onClick={toggleNuts}>Toggle Nutrition Info View</button>
		<button onClick = {removeHeat}>remove heat</button>
      </div>
    </div>
  );
};
