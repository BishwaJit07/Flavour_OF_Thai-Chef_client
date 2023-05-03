import React from 'react';
import { Document, Page } from 'react-pdf';

const Blogs = () => {
    
    return (
        <div>
        <div className='text-center mt-10 text-white text-2xl font-semibold h-20 bg-gradient-to-r from-sky-500 to-indigo-500 p-4'>
      <p >  Question & Answer <br /><button className="badge badge-success badge-outline">Download Pdf</button></p>
    </div>
        <div className='m-4 bg-slate-500 text-white p-2 rounded-xl'> 
            <h2 className='font-bold text-2xl'>a. Tell us the differences between uncontrolled and controlled components.
</h2>
             <p className='text-xl py-2'>Uncontrolled and Controlled Components:
In React, components that manage their own state are called "controlled components." In contrast, when a component state is handled by the parent component or some other external component, it is referred to as an "uncontrolled component." The main difference between these two types of components is how they manage their data. Controlled components are more flexible and allow for more granular control over the data, while uncontrolled components are simpler to use but may have less functionality.</p>
       </div>

       <div className='m-4 bg-slate-500 text-white p-2 rounded-xl'>
        <h2 className='font-bold text-2xl'>b. How to validate React props using PropTypes?</h2>
        <p className='text-xl py-2'>PropTypes:
PropTypes is a type-checking library that is included in React. It is used to check the types of props passed to components, ensuring that the correct type of data is being passed through the components. PropTypes can help prevent bugs by providing an additional layer of validation, making it easier to catch errors before they occur. </p>
       </div>

       <div className='m-4 bg-slate-500 text-white p-2 rounded-xl'>
        <h2 className='font-bold text-2xl'>Tell us the difference between nodejs and express js?</h2>
        <p className='text-xl py-2'> Node.js vs Express.js:
Node.js is a JavaScript runtime environment built on Chrome's V8 engine, used to execute JavaScript on the server-side. It provides a set of libraries and modules for building server-side applications. Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of middleware and routing features that make it easier to develop web applications in Node.js.</p>
       </div>

       <div className='m-4 bg-slate-500 text-white p-2 rounded-xl'>
        <h2 className='font-bold text-2xl'>d. What is a custom hook, and why will you create a custom hook?</h2>
        <p className='text-xl py-2'>Custom Hooks:
Custom hooks are a way to extract reusable logic from components. A custom hook is a function that uses one or more of the React hooks to encapsulate some logic and can be reused across different components. Custom hooks can be used to manage complex state logic, share code between components, and reduce code duplication. The use of custom hooks makes it easier to write modular, maintainable code.
                           </p>
       </div>

    </div>
    );
};

export default Blogs;