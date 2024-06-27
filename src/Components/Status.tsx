import React from 'react'

type statusProps = {
    status : "success" | "loading" | "rejected" ;
}

function Status({status}: statusProps) {
let message = ""
  if(status == "loading"){
    message = "Loading..."
  }else if (status == "success"){
    message = "Data Fetched Successfully"
  }else if (status == "rejected") {
    message = "Data Rejected"
  }
  return (
    <div>Status - {message}</div>
  )
}

export default Status