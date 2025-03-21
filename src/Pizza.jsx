// const Pizza = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("p", {}, props.description),
//   ]);
// };

const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1> {props.name} </h1>
      <p> {props.description} </p>
      <img src={props.image}></img>
    </div>
  );
};

export default Pizza;
