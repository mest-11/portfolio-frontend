import React from 'react'

const AddAchievement = () => {
  return (
    <div>
      <h2>Add New Achievement</h2>
      <form>
        <label htmlFor='awards'> Awards</label>
        <input type="text" />

        <label>
          Description:
          <textarea
            placeholder=''
            rows={4} />
        </label>
        <button type="submit">Submit</button>
      </form></div>
  )
}

export default AddAchievement