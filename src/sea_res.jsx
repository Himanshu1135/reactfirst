import React from 'react'

export default function Sea_res(props) {
    const img = `http://source.unsplash.com/400x300/?${props.ip}`
  return (
    <div>
        <img src={img} alt="pic"/>
    </div>
  )
}
