import User from '@/components/User'

import PrimaryLayout from '@/layout/Primary'

export default function Home ({ users }) {
  return (
    <>
      <pre>
        {JSON.stringify(users, true, 2)}
      </pre>
    </>
  )
}

Home.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  )
}

export async function getServerSideProps({ req, params, locale }) {
  const users = []

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    users.push(...data)
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      users
    }
  }
}