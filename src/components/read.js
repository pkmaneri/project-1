
// JSX Rule No 1.
// 		->if in a component(.js file) only one element is required then No need of any parent element 
// 		Example :
// 			<h1> About Us </h1>
// JSX Rule No 2.
// -> if in a component more then jsx element(tag) then follow the parent jsx element
// Example :
//         <div>
// 			<h1> About Us </h1>
//             <p> praveen praveen praveen</p>
//             <div> praveen praveen praveen</div>
//         </div>
// JSX Rule No 3.
//     -> if in a components more than one jsx element is required then the parent element can be user defind also.
//     Example :
//         <hello>
// 			<h1> About Us </h1>
//             <p> praveen praveen praveen</p>
//             <div> praveen praveen praveen</div>
//         </hello>

// JSX Rule No 4.
//     -> if in a components more than one jsx element is required then the parent element can be empty<></> also.
//     Example :
//         <>
// 			<h1> About Us </h1>
//             <p> praveen praveen praveen</p>
//             <div> praveen praveen praveen</div>
//         </>

// JSX Rule No 5.
//     -> if in a components more than one jsx element is required then the parent element can be [] also.
//     Example :
//          [
// 			<h1> About Us </h1>
//             <p> praveen praveen praveen</p>
//             <div> praveen praveen praveen</div>
//         ]

// HashRouter basically it uses the hash in the URL to render the component. Since I was building a static one-page website, I needed to use this.

// BrowserRouter, it uses HTML5 history API to render the component. The history can be modified via pushState and replaceState. More information can be found here

// Now, I don't get the significance and use cases for both, Like what does he mean when he says history can be modified via pushState and replaceState and it uses the hash in the URL to render the component


// hashRouter is static web page application-hashrouter in render in components.
// HashRouter: When we have small client side applications which doesn't need backend we can use HashRouter because when we use hashes in the URL/location bar browser doesn't make a server request.
//  BrowserRouter: When we have big production-ready applications which serve backend, it is recommended to use <BrowserRouter>

//browserRouter-history can be modified  pushState and replaceState .

// BrowserRouter is used for doing client side routing with URL segments.
//  You can load a top level component for each route.
//  This helps separate concerns in your app and makes the logic/data flow more clear.

// default is used in multiple function.
