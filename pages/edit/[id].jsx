import React from 'react'

import PrimaryLayout from '@/layout/Primary'

const EditUser = ({ user }) => {
  return (
    <pre>
      {JSON.stringify(user, true, 2)}
    </pre>
  )
}

EditUser.getLayout = (page) => {
  return (
    <PrimaryLayout>
      {page}
    </PrimaryLayout>
  )
}

export default EditUser

export async function getServerSideProps({ req, params, locale }) {
  let user = null

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    user = data
  } catch (error) {
    console.error(error)
  }

  return {
    props: {
      user
    }
  }
}