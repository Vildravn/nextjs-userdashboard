import React from 'react'

import PrimaryLayout from '@/layout/Primary'

const EditUser = ({ user }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const data = {
      name: event.target.name.value,
      username: event.target.username.value,
      email: event.target.email.value,
    }

    console.log(JSON.stringify(data))
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label><br />
      <input type="text" id="name" name="name" defaultValue={`${user.name}`} /><br />
      <label htmlFor="username">Username</label><br />
      <input type="text" id="username" name="username" defaultValue={`${user.username}`} /><br />
      <label htmlFor="email">E-Mail</label><br />
      <input type="text" id="email" name="email" defaultValue={`${user.email}`} /><br />

      <button type="submit">Submit</button>
    </form>
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