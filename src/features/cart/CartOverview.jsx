import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQunatity } from './cartSlice';
import { formatCurrency } from '../../utilities/helpers';

function CartOverview() {
  const totalCartQunatity=useSelector(getTotalCartQunatity);
  const totalCartPrice=useSelector(getTotalCartPrice);

  if(!totalCartQunatity) return null

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{totalCartQunatity} pizzas </span>
        <span>{
          formatCurrency(totalCartPrice) }</span>
      </p>

      <Link to="/cart">Open cart</Link>
    </div>
  );
}

export default CartOverview;
