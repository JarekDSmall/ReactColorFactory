import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewColorForm({ setColors }) {
  const [formData, setFormData] = useState({ name: '', hex: '#000000' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setColors(colors => [formData, ...colors]);
    navigate('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Color Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} required />
      <label htmlFor="hex">Color Value:</label>
      <input type="color" id="hex" name="hex" onChange={handleChange} value={formData.hex} />
      <button type="submit">Add Color</button>
    </form>
  );
}

export default NewColorForm;
