import React from 'react'

const TeamDetailsPage = async({params}) => {
    const name = (await params).name;
  return (
    <div className='text-white'>Team member DetailsPage {name}</div>
  )
}

export default TeamDetailsPage