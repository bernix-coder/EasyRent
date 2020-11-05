import React,{useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search'

function Banner() {

  const [showSearch, setShowSearch] = useState(false)

  function handleSearch(){
      setShowSearch(!showSearch)
  }

    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search/>}
                <Button onClick={handleSearch} className='banner_searchButton' variant='outlined'>Search Date</Button>
            </div>


            <div className='banner_info'>
                    <h2>Get out and stretch your imagination</h2>
                    <h5>Discover wonderful building all around you at an affordable price</h5>
          <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
