import { useEffect, useContext } from 'react';
import { ShopContext } from '../context';

function Alert() {
  const { alertName: name = '', cloaseAlert = Function.prototype } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(cloaseAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div className="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}

export default Alert;
