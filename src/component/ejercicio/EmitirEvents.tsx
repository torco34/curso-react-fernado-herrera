import React from 'react'

export const ElmitirEvents = () => {
  return (
    <div>
      <Categoris />
    </div>
  )
}
export const Categoris = () => {
  const handlenOnchonge = () => {

  }
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" onChange={handlenOnchonge} />
      </form>
    </>
  )
}