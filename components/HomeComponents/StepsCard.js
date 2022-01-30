export const StepsCard = (props) => {
  console.log(props.direction);
  return (
    {
      /*[TR,BR,BL,TL]*/
    },
    (
      <div
        className={`${props.direction[0] ? "bg-gradient-to-tr" : ""} 
                         ${props.direction[1] ? "bg-gradient-to-br" : ""}
                         ${props.direction[2] ? "bg-gradient-to-bl" : ""} 
                         ${props.direction[3] ? "bg-gradient-to-tl" : ""}
                         from-primary to-secondary p-1`}
      >
        <div className="bg-light-navy h-full p-3 lg:p-6">
          <p className="mb-4 text-md lg:text-lg xl:text-2xl 2xl:text-3xl text-light-blue font-medium text-shadow">
            {props.number}
          </p>
          <h2 className="my-4 text-md lg:text-lg xl:text-xl 2xl:text-2xl text-white font-medium">
            {props.title}
            {/*Web Design*/}
          </h2>
          <p className="mt-4 text-sm lg:text-md xl:text-lg text-white font-light ">
            {props.description}
            {/*We know it can be difficult to manage your business while also
            creating a website that effectively shows off your brand. We will
            build you a website from the ground up, following your design and
            your style.*/}
          </p>
        </div>
      </div>
    )
  );
};
