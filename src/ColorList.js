import { Link } from 'react-router-dom';

function ColorList({ colors }) {
    return (
      <div>
        <h1>Welcome to the Color Factory</h1>
        <Link to="/colors/new">Add a color</Link>
        <ul>
          {/* Check if colors is defined and has a length greater than 0 before mapping */}
          {colors && colors.length > 0 ? (
            colors.map(color => (
              <li key={color.name}>
                <Link to={`/colors/${color.name}`}>{color.name}</Link>
              </li>
            ))
          ) : (
            <p>No colors available.</p>
          )}
        </ul>
      </div>
    );
  }

export default ColorList;
