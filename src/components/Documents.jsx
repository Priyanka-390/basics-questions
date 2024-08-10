import React from 'react'

const Documents = () => {
  return (
    <div className="py-10 bg-black">
      <div className="container max-w-[1284px] px-3 mx-auto">
        <h1 className="text-center underline pb-9 font-bold font-serif text-2xl text-white">
          BASICS QUESTIONS{" "}
        </h1>
        <h2 className="common-heading">
          <span className="underline">Qus-1</span> :- What is HTML ?
        </h2>
        <p className="common-para">
          <span className="underline">Ans</span> :- HTML stands for Hyper Text
          Markup Language. HTML is the standard markup language for creating Web
          pages. HTML describes the structure of a Web page. HTML consists of a
          series of elements. HTML elements tell the browser how to display the
          content.
        </p>
        <h2 className="common-heading">
          <span className="underline">Qus-2</span> :- What is CSS ?
        </h2>
        <p className="common-para">
          <span className="underline">Ans</span> :- CSS is the acronym of
          “Cascading Style Sheets”. CSS is a computer language for laying out
          and structuring web pages (HTML or XML). This language contains coding
          elements and is composed of these “cascading style sheets” which are
          equally called CSS files (.css).
        </p>
        <h2 className="common-heading">
          <span className="underline">Qus-3</span> :- What is Functions ?
        </h2>
        <p className="common-para">
          <span className="underline">Ans</span> :- Functions are blocks of
          reusable and organised code that usually perform a single, related
          action. They are a crucial part of programming because they save you a
          lot of time and make your code cleaner.
        </p>
        <h2 className="common-heading">
          <span className="underline">Qus-4</span> :- How many types of
          components ?
        </h2>
        <p className="common-para">
          <span className="underline">Ans</span> :- Components come in two
          types, Class components and Function components
        </p>
        <h2 className="common-heading">
          <span className="underline">Qus-5</span> :- Diffrence between class
          components and function components ?
        </h2>
        <div className="common-para">
          <h3 className="text-lg font-medium text-white ">
            {" "}
            <span className="underline common para">Ans</span> :- Difreence
            betweeen class components and functions components are following :-
          </h3>
          <div className="flex">
            <ul className="px-4 ml-9">
              <li className="list-disc common-para">
                Functional components are a simple, fast, and easy way to design
                and develop a component in React. They are used to create
                components that return JSX and don’t have their state.{" "}
              </li>
              <li className="list-disc common-para">
                Functional components take props as input and return a React
                element that describes what should be rendered on the screen{" "}
              </li>
              <li className="list-disc common-para">
                function components were stateless and couldn't hold their own
                state. However, with the introduction of React Hooks (like
                useState){" "}
              </li>
              <li className="list-disc common-para">
                They are faster than class components as they do not have state
                and lifecycle methods{" "}
              </li>
            </ul>
            <ul className="px-4 ml-9">
              <li className="list-disc common-para">
                Class components also known as stateful components contain state
                and lifecycle methods and are written with JavaScript ES6
                classes.{" "}
              </li>
              <li className="list-disc common-para">
                A state is an object that contains data that can be updated and
                displayed in the component. Lifecycle methods are called at
                different stages of the component’s life cycle, such as when it
                is updated.{" "}
              </li>
              <li className="list-disc common-para">
                Class components are used for components that need to manage
                state or have lifecycle methods{" "}
              </li>
              <li className="list-disc common-para">
                Class components are complex in comparison to functional
                components.{" "}
              </li>
            </ul>
          </div>
        </div>
        <h2 className="common-heading">
          <span className="underline">Qus-6</span> :- what is react hook? and
          its type.
        </h2>
        <p className="common-para">
          <span className="underline">Ans</span> :- In React, Hooks are reusable
          functions that provide access to state in React Applications. Hooks
          were introduced in the 16.8 version of React. Hooks give access to
          states for functional components while creating a React application.
          Types:- useState, useContext, useRef, useEffect, useCallback, useMemo
        </p>
        <h2 className="common-heading">
          <span className="underline">Qus-6</span> :- what is lifecycle method ?
        </h2>
        <div>
          <p className="common-para">
            <span className="underline">Ans</span> :- In React, Hooks are reusable
            Lifecycle Methods of React Components are defined as a series of
            methods that are invoked in different stages of the component’s
            existence. React web apps are actually a collection of independent
            components which run according to the interactions made with them.
            Every React Component has a lifecycle of its own.
          </p>
          <h3 className="text-lg font-medium text-white">
            Lifecycle of React Components go through four stages
          </h3>
          <div className='pl-5'>
            <h4 className="mt-3 text-lg font-medium text-white">
              1. INITIALIZE:
            </h4>
            <p className="common-para mt-2">
              This is the stage where the component is constructed with the given
              Props and default state. This is done in the constructor of a
              Component Class.
            </p>
            <h4 className="mt-3 text-lg font-medium text-white">2. Mounting:</h4>
            <p className="common-para mt-2">
              Mounting is the stage of rendering the JSX returned by the render
              method itself.
            </p>
            <h4 className="mt-3 text-lg font-medium text-white">3. Updating:</h4>
            <p className="common-para mt-2">
              Updating is the stage when the state of a component is updated and
              the application is repainted.
            </p>
            <h4 className="mt-3 text-lg font-medium text-white">
              4. Unmounting:
            </h4>
            <p className="common-para mt-2">
              As the name suggests Unmounting is the final step of the component
              lifecycle where the component is removed from the page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documents