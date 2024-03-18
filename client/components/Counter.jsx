import Button from "react-bootstrap/Button";

function Counter({ counter, handelIncrement }) {
  const { title, count, _id } = counter;

  return (
    <div>
      <Button onDoubleClick={() => handelIncrement(_id)}>
        {title}
        <p>Count {count}</p>
      </Button>
    </div>
  );
}

export default Counter;
