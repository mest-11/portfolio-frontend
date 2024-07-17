import React from 'react'

const AddAchievement = () => {
  return (
    <div>
      <h2>Add New Achievement</h2>
      <form>
        <label htmlFor='awards'>
          Awards
          <input
            type="text"/>
        </label>
        <label>
          Description:
          <textarea
            value={description}
            // onChange={(e) => setDescription(e.target.value)}
            rows={4} />
        </label>
        <button type="submit">Submit</button>
      </form></div>
  )
}

export default AddAchievement