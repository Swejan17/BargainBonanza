'use client'
import { TIMEOUT } from 'dns';
import { FormEvent, useState } from 'react'

const isValidAmazonUrl=(url:string)=>{
  try{
    const parsedurl = new URL(url)
    const hostname = parsedurl.hostname;
    
    if (hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')){
      return true
    }
  }
  catch(e){
    return false
  }
  return false
}

const Searchbar = () => {
  const [searchPrompt,setsearchPrompt]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  const handleSubmit=async(event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    const isValidLink = isValidAmazonUrl(searchPrompt)

    if(!isValidLink){
     alert('Please enter a valid Amazon link')
    }

    try{
      setIsLoading(true)
      await setTimeout(()=>{},2000)
    }catch(e){
      console.log(e)
    }finally{
      setIsLoading(false)
    }

  }
  return (
    <form  className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Enter Product link'
        className='searchbar-input '
        value={searchPrompt}
        onChange={(e)=>setsearchPrompt(e.target.value)}
      />
      <button className='searchbar-btn' type='submit' disabled={searchPrompt===''}>{isLoading ? 'Searching...':'Search'}</button>

    </form>
  )
}

export default Searchbar
