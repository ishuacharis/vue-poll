export default function() {
  const KEY = process.env.VUE_APP_PIXABAY_KEY
  const PREFIXURL =  "https://pixabay.com/api/?key="
  const SUFFIXURL =  "&per_page=6"

  const getPhotos = async (queryString='roses') => {
    let query = encodeURIComponent(queryString)
    let APIURL =  `${PREFIXURL}${KEY}&q=${query}${SUFFIXURL}`
    const response  = await fetch(APIURL)
    if(!response.ok) {
      const message = `The response came back with status code of ${response.status}`
      throw new Error(message)
    }
    const data = await response.json()
    const photos  = data.hits
    return photos
  }




  return  {
    getPhotos
  }
}
