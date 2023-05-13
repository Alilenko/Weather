import './button.scss';

const Button = ({type, children}) => {
  return (
      <button className='button__main' type={type}>{children}</button>
  )
};

export default Button;
