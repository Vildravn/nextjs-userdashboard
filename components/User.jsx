import Link from 'next/link'
import React from 'react'

import styles from './User.module.css'

const User = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      {user.name} - {user.email}
      <Link href={`/edit/${user.id}`}>Edit</Link>
    </div>
  )
}

export default User
