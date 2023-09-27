import { useParams, Navigate, Link } from 'react-router-dom';

function Color({ colors }) {
  const { color } = useParams();
  const colorObj = colors.find(c => c.name === color);

  if (!colorObj) return <Navigate to="/colors" />;

  return (
    <div style={{ backgroundColor: colorObj.hex }}>
      <h1>This is {colorObj.name}!</h1>
      <h1>Isn't it beautiful?</h1>
      <Link to="/colors">Go back</Link>
    </div>
  );
}

export default Color;
