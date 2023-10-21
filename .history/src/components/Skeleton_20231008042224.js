import classNames from "classnames"

function Skeleton({times}) {
    const outerClassNames=classNames();
    const innerClassNames=classNames();

    const boxes=Array(times).fill(0).map((_,i)=>{
        return <div className={outerClassNames}><div key={i} className={innerClassNames}  /></div>
    });

    return boxes
    
  return (
    <div>
      
    </div>
  )
}

export default Skeleton
