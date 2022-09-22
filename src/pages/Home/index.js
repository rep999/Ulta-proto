import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const res = await fetch(`https://hp-api.herokuapp.com/api/characters`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

function Home({data}) {
  console.log(`data`)
  console.log(data)
    const { asPath } = useRouter()
    return <p>Hello, I'm the {asPath} page {data.length}</p>
  }
  
  export default Home