import Button from "react-bootstrap/Button";

function Counter({ counter }) {
  return (
    <div>
      <Button>{counter.title}</Button>
    </div>
  );
}

export default Counter;
