import React from 'react'

function Person ({ personInfo }) {
  return (
    <>
      { personInfo.length > 0  ?
        <div>
          <h2>Name: {personInfo[0].name}</h2>
          <p>Age: {personInfo[0].age}</p>
          <p>Gender: {personInfo[0].gender}</p>
        </div> : <h3>Not Found</h3> }
    </>
  )
}

export default Person
