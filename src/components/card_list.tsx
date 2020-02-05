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

  const [educations, setEducations] = useState({ })
  const [isLoading, setLoading] = useState(true)
  const [hasError, setErrors] = useState(false)

  // function fetchData() {
  //   const data = await res.json()

  //   console.log(`This is the res: ${JSON.stringify(res, null, 2)}`)
  //   console.log(`This is the data: ${JSON.stringify(data, null, 2)}`)

  //   setData(data)
  // }

  useEffect(() => {
    async function fetchData() {
    // const API: string = `https://frontend-1-dot-lab900-exercises.appspot.com/api/v1/user/1/education/0`
    const res = await fetch(`https://frontend-1-dot-lab900-exercises.appspot.com/api/v1/user/1/education/`)
    
    res.json()
    .then(res => setEducations(res))
    .catch(err => setErrors(err))
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <ul> Educations
      <span>Has Errors: {JSON.stringify(hasError)}</span>
      <span>Is Loading: {JSON.stringify(isLoading)}</span>
      
      <code>Educations: {JSON.stringify(educations)}</code> 
        {/* {data.educations.map(item => (
          <li key={item.id}>{educations.city}</li>  
        ))}
        <li>{educations.city}</li>
        <li>{educations.current}</li>
        <li>{educations.description}</li>
        <li>{educations.educationType}</li>
        <li>{educations.fieldOfStudy}</li>
        <li>{educations.schoolName}</li>
        <div>
          <li>{educations.from}</li>
          <li>{educations.to}</li>
        </div> */}
      </ul> 
    </div>
  )
}