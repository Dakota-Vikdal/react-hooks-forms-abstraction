import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName:'John',
    lastName: 'Doe'
  })

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value
    });
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value
    });
  }

  console.log(formData.firstName, formData.lastName)

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={formData.firstName} />
      <input type="text" onChange={handleLastNameChange} value={formData.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
