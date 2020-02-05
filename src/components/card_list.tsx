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

  const [educations, setEducations] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [hasError, setErrors] = useState(false)


  useEffect(() => {

    async function fetchData(): Promise<void> {

    const API: string = `https://frontend-1-dot-lab900-exercises.appspot.com/api/v1/user/1/education/`
    const res = await fetch(API)

    setLoading(false)

    res.json()
    .then(res => setEducations(res))
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

      <div>
        <>
        {isLoading ? ( `Loading...` ) : (
          <ul>
            {/* [ERROR]: Typescript error on no property map on {} ; maybe because of how I'm using useState({}) ?? */}

              {/* {
                educations.map(education => (
                  <li key={`education.id`}>{education.city}</li>
              ))} */}
          </ul>
        )}
        </>
      </div>
      </ul> 
    </div>
  )
}