export const StepsCard = (props) => {

  
    return (
        {/*[TR,BR,BL,TL]*/},
        <div className={`${props.direction[0] ? 'bg-gradient-to-tr' : ""} 
                         ${props.direction[1] ? 'bg-gradient-to-br' : ""}
                         ${props.direction[2] ? 'bg-gradient-to-bl' : ""} 
                         ${props.direction[3] ? 'bg-gradient-to-tl' : ""}
                         from-primary to-secondary p-1`}>
        <div className="bg-light-navy h-full p-4 lg:p-8 ">
          <p className="mb-4 text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-light-blue font-medium text-shadow">
            {props.number}
          </p>
          <h2 className="my-4 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white font-medium">
            {props.title}
            {/*Web Design*/}
          </h2>
          <p className="mt-4 text-md lg:text-xl xl:text-2xl text-white font-light ">
            {props.description}
            {/*We know it can be difficult to manage your business while also
            creating a website that effectively shows off your brand. We will
            build you a website from the ground up, following your design and
            your style.*/}
          </p>
        </div>
      </div>
    );
};