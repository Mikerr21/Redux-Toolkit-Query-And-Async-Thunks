import classNames from "classnames"

function Skeleton({times}) {
    const boxes=Array(times).fill(0).map((_,i)=>{
        return <div><div key={i} /></div>
    });

    return boxes
    
  return (
    <div>
      
    </div>
  )
}

export default Skeleton
