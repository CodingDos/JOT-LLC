import Button from "react-bootstrap/Button";

function Counter({ counter, handelIncrement }) {
  const { title, count } = counter;
  return (
    <div>
      <Button onDoubleClick={handelIncrement}>
        {title}
        <p>Count {count}</p>
      </Button>
    </div>
  );
}

export default Counter;
