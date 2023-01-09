import './pages.css'
import { useEffect } from 'react'

function Classes({ navigation }) {
    useEffect(() => {
        navigation()
      }, [])
    return (
        <div id='main'>

        <h1>classes</h1>
        </div>
    )
}

export default Classes;

