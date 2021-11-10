import React, { ChangeEventHandler } from 'react'
import { Input } from 'src/components'
import { IoMdSearch } from 'react-icons/io'
import styles from './SearchBar.module.scss'

interface Props {
  searchBarValue: string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const SearchBar = ({ searchBarValue, handleChange }: Props) => {
  return (
    <Input
      classes={{ root: styles.SearchBar, input: styles.Input, icon: styles.Icon }}
      icon={<IoMdSearch />}
      placeholder="saisissez un nom ou un prénom"
      value={searchBarValue}
      onChange={handleChange}
    />
  )
}

export default SearchBar
