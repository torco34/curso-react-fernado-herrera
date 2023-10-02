import React, { useState } from "react"

export const Category = ({ onNewCategory }) => {
  //para sacar el hoos se exporte luego se coloca la e ahi aparece la option
  //los valores de l input son llamado porpe tis
  const [inputValue, setInputValue] = useState("")
  //  usestate sacar slipper
  const handleOnchenge = ({ target }) => {
    setInputValue(target.value)
  }



  const onSubmit = (e: any) => {
    e.preventDefault()
    if (inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text"
          value={inputValue}
          onChange={handleOnchenge}
          placeholder="Buscar lista" />
      </form>

    </>
  )
}
