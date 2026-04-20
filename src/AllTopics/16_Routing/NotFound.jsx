import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen grid place-items-center text-5xl'>
      <span>🤗 Oopss....</span>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default NotFound;