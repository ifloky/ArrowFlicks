import { Select } from '@mantine/core'

export const Sort = () => {
  return (
    <Select
      style={{ paddingLeft: 'calc(100% - 340px)', marginBottom: '20px', }}
      label="Sort by:"
      placeholder="Pick value"
      data={['Most popular', 'Newest', 'Oldest']} />
  )
}
