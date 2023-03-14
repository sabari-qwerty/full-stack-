import { useState, useEffect } from 'react'
import axios from 'axios'
import { Layout } from './commponent/Layout'

interface data {
  id: string
  text: string
  done: boolean
  createdAt: string
  updatedAt: string

}


function App() {
  const [ susccess, setSusccess ] = useState('')

  const [ data, setData ] = useState<data[]>([])


  const getData: any = () => axios.get('http://localhost:3000/')
    .then(function (response) {
      setData((response.data))
    })
    .catch(function (error) {
      console.log(error);
    });


  useEffect(
    () => {
      getData()
      console.log(susccess)
      return () => undefined

    }, [ susccess ]
  )



  return (
    <div>
      <Layout setSusccess={setSusccess} data={data}>
        <div>
        </div>
      </Layout>
    </div>
  )
}

export default App
