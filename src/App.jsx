import { useState } from 'react'
import './App.css'
import {Card, Flex} from "antd";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flex style={{height: "100%"}} justify="center" align="center">
      <Card style={{maxWidth: "450px"}}>
        <h3 style={{textAlign: "center"}}>Отсканируйте QR в приложении для получения доступа</h3>
      </Card>
    </Flex>
  )
}

export default App
