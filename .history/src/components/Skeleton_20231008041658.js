import classNames from "classnames"

function Skeleton({times}) {
    const boxes=Array(times).fill(0).map((_,i)=>{
        return <div key={i} />
    });
    
  return (
    <div>
      
    </div>
  )
}

export default Skeleton
