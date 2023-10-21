import { useState } from "react";
import { GoChevronDown,GoChevronLeft } from "react-icons/go";

function ExpandablePanel({header,children}){
  const [expanded,setExpanded]=useState(false);

  return(
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className='flex flex-row items-center justify-between'>
            {header}
        </div>
        {expanded? <GoChevronDown /> : <GoChevronLeft/>}
      </div>
      <div className="p-2 border-t">
        {children}
      </div>
    </div>
  );
}

export {ExpandablePanel}