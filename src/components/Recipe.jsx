import React from 'react'

function Recipe({recipe}) {
  return (
    <>
        <li>
            {recipe.text}<br/>
            {recipe.complete
            ? <>is complete</>
            : <>is incomplete</>}
            </li>
            </>
  )
}

export default Recipe