
"use client"
// import ClipLoader from 'react-spinners/ClipLoader';


import {Circles,  RotatingLines} from  'react-loader-spinner'






function Loading() {
  return (
    <div>
      
      <p>Loading the Todos ...</p>

      {/* <div style={{ width: '100px', margin: 'auto', display: 'flex' }}>
         <ClipLoader color="#52bfd9" size={100}/>
      </div> */}

      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />

      

    <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
     />
 
    </div>
  );
}

export default Loading;

