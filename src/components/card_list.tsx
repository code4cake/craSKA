import React, { useState, useEffect } from 'react'

interface Education {
  city:	string;
  current:	boolean;
  description:	string;
  educationType:	[number | string];
  fieldOfStudy:	string;
  from:	Date;
  id:	number;
  schoolName:	string;
  to:	Date;
}

export default function CardList() {

  const [educationData, setData] = useState({ })

  async function fetchData() {
    // const API: string = `https://frontend-1-dot-lab900-exercises.appspot.com/api/v1/user/1/education/0`
    const res = await fetch(`https://frontend-1-dot-lab900-exercises.appspot.com/api/v1/user/1/education/`)
    const data = await res.json()

    console.log(`This is the res: ${JSON.stringify(res, null, 2)}`)
    console.log(`This is the data: ${JSON.stringify(data, null, 2)}`)

    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
      <ul> Education
        {/* {data.educations.map(item => (
          <li key={item.id}>{educationData.city}</li>  
        ))}
        <li>{educationData.city}</li>
        <li>{educationData.current}</li>
        <li>{educationData.description}</li>
        <li>{educationData.educationType}</li>
        <li>{educationData.fieldOfStudy}</li>
        <li>{educationData.schoolName}</li>
        <div>
          <li>{educationData.from}</li>
          <li>{educationData.to}</li>
        </div> */}
      </ul> 
    </div>
  )
}