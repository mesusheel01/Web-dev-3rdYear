
const Greeting = ()=>{
    const d = new Date(2012,1,23,19);
    const hr = d.getHours();

  // Define an object for custom styles
  const customStyle = {
    color: "",
  };

  let greeting;
  if (hr < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hr >= 12 && hr < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <>
      <div>
        <h1 style={customStyle}>{greeting}</h1>
      </div>
    </>
  );
}

export default Greeting;