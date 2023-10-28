import { NavLink } from 'react-router-dom';

const Restaurant = ({ restaurant }) => {
  const { name, img, location, tags, comments } = restaurant;

  // Format opening hours
  const formattedOpeningHours = `${location.opening_hours}`;

  return (
    <div className='my-20'>
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mb-6">
        <NavLink to="/detail">
          <img className="w-full h-40 object-cover object-center hover:opacity-40 transition-all ease-in-out duration-300" src={img} alt={name} />
        </NavLink>
        <div className="p-6">
          <h2 className="font-bold text-xl mb-2">{name}</h2>
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M20 10a10 10 0 11-20 0 10 10 0 0120 0zm-1 0a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
            </svg>
            <span>{location.city}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold">Address:</span> {location.address}
          </div>
          <div className="mb-2">
            <span className="font-bold">Opening Hours:</span> {formattedOpeningHours}
          </div>
          <div className="mb-2">
            <span className="font-bold">Tags:</span> {tags.join(", ")}
          </div>
          <h3 className="text-xl font-bold mt-4 mb-2">Comments:</h3>
          <ul>
            {comments && comments.map((comment, index) => (
              <li key={index} className="mb-2">
                <h4 className="font-bold">{comment.user}</h4>
                <p>{comment.review}</p>
                <div>Rating: {comment.user_rating}/5</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
