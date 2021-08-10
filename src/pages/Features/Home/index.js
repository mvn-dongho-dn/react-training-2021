import React, {useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeroBanner from '../../../components/HeroBanner';
import { useDispatch } from 'react-redux';
import { toggle } from '../../../store/favSlice';
import { apiService } from '../../../core/services/api/api-service';

const Home = () => {
  const dispatch = useDispatch();

  const [prods, setProds] = useState([
    {
      id: 1,
      favs: false
    },
    {
      id: 2,
      favs: false
    },
    {
      id: 3,
      favs: false
    },
    {
      id: 4,
      favs: false
    }
  ]);

  const handleFav = (e, id) => {
    e.preventDefault();
    const newProds = prods.map(e => {
      if (e.id === id) {
        e.favs = !e.favs;
      }
      return e;
    });
    setProds(newProds);
    dispatch(toggle(id));
  }

  useEffect(() => {
    apiService.get('/api/users').then(e => console.log(e));
  }, []);

  return (
    <div>
      <HeroBanner />
      <div className="container">
        <h2>Product Latest</h2>
        <ul className="product-list row">
          {
            prods.map(e => (
              <li key={e.id} className="product-item col-medium-3">
                <Link to={`/products/${e.id}`} className="product-img">
                  <img src="https://picsum.photos/id/237/300/300" alt="product" />
                  <span className={`product-fav ${e.favs ? 'active' : ''}`} onClick={(event) => handleFav(event, e.id)}><FaHeart /></span>
                </Link>
                <h4 className="product-name"><Link to={`/products/${e.id}`}>Product 1</Link></h4>
                <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button type="button">Add to cart</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Home;
