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


  useEffect(() => {
    async function fetchData(): Promise<void> {
    const API: string = `https://frontend-1-dot-lab900-exercises.appspot.com/api/v1/user/1/education/`
    const res = await fetch(API)
    
    res.json()
    .then(res => setEducations(res))
    .then(res => setLoading(false))
    .catch(err => setErrors(err))
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <ul> Educations
      <br />
      <span>Has Errors: {JSON.stringify(hasError)}</span>
      <br />
      <span>Is Loading: {JSON.stringify(isLoading)}</span>
      <br />
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