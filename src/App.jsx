import { useState,useEffect } from 'react'

const h2Styles = {
  textAlign: 'right',
  fontWeight: '200'
}

function App() {

  const [iterator, setiterator] = useState('1')
  const [iteFrase, setiteFrase] = useState(0)
  const [data, setdata] = useState([{ text: 'click on the quote button', author: 'CJPD' }])

  const click = () => {

    setiterator((Math.floor(Math.random() * 5) + 1).toString())
    setiteFrase(Math.floor(Math.random() * 15) + 1)

  }

  const getData = async () => {

    try {

      const response = await fetch('https://type.fit/api/quotes')
      const data = await response.json()
      setdata(data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {
    
    getData()
  
    
  }, [])
  

  return (

    <div className={`body b-color${iterator} trans-b`}>
      <div className='container'>

        <div id='quote-box'>

          <h1 id='text' className={`color${iterator} trans animation`}><i className="fa-solid fa-quote-right fa-bounce"></i>{data[iteFrase].text}</h1>
          <h5 style={h2Styles} id='author' className={`color${iterator} trans animation`}>{data[iteFrase].author}</h5>

          <div className='divButton'>
            <a href="twitter.com/intent/tweet" id='tweet-quote' target={'_blank'}><i className={`fa-brands fa-square-twitter fa-beat-fade fa-2xl color${iterator} trans`}></i></a>
            <button id='new-quote' className={`b-color${iterator} trans-b`} onClick={click}>Quote</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
