import React from 'react'

const PracticeQues = () => {
                
    const individuals = [{ name: "Ram", age: "21", docId: "1234", docType: "passport" }, 
    
    { name: "Shyam", age: "22", docId: "5678", docType: "aadhar" },
  { name: "Mohan", age: "23", docId: "9101", docType: "voterId" },
  { name: "Sohan", age: "24", docId: "1121", docType: "drivingLicense" },
   { name: "Rohan", age: "25", docId: "3141", docType: "panCard" }, 
  { name: "Gohan", age: "26", docId: "5161", docType: "passport" }, 
  { name: "Kohan", age: "27", docId: "7181", docType: "aadhar" },
   { name: "Lohan", age: "28", docId: "9202", docType: "voterId" },
    { name: "Mohan", age: "29", docId: "1222", docType: "drivingLicense" },

     { name: "Nohan", age: "30", docId: "3242", docType: "panCard" }]


     const newIndividuals = [ 
       { name: "Rohan", age: "25", docId: "3141", docType: "panCard" }, 
       { name: "Rohan", age: "25", docId: "3141", docType: "panCard" }, 
  { name: "Gohan", age: "26", docId: "51611", docType: "passport" }, 
  { name: "Kohan", age: "27", docId: "7181", docType: "driver licence" },
   { name: "Lohan", age: "28", docId: "9202", docType: "voterId" },]

    const duplicates = individuals.filter((x)=> newIndividuals.filter(y=>y.docType===x.docType && x.docId===y.docId)

    )
     let isMatched = false;
    const uniqueNewIndividuals = newIndividuals.filter((x)=>{
           

     const found= newIndividuals.filter((y)=>{
      
     if(x.docId==y.docId && x.docType==y.docType && !isMatched){
  isMatched=true;
      return true
     } else return false;
    
    })

     return found
    })
    console.log("uniqueneIndividuals", uniqueNewIndividuals);
    const duplicates2 = individuals.filter((x)=> newIndividuals.filter(y=>x.docId===y.docId && x.docType===y.docType).length===1)




    console.log(duplicates2);


  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
  
}

export default PracticeQues