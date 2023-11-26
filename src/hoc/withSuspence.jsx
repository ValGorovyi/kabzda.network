import React, {Suspense} from 'react';



export function withSuspense(Component) {
  return(props) => {
    return <Suspense fallback={<div>suka</div>}><Component {...props}/></Suspense>
  } 
}