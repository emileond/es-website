import { Flex, Text, AccessibleIcon } from '@radix-ui/themes'
import { BiSolidCheckCircle, BiCircle } from 'react-icons/bi'

const DreamListItem = ({ children, label, completed }) => {
  return (
    <Flex gap="1" align="center">
      <Text
        color={completed ? 'green' : 'gray'}
        style={{
          display: 'contents',
        }}
      >
        <AccessibleIcon label={label}>
          {completed ? <BiSolidCheckCircle /> : <BiCircle />}
        </AccessibleIcon>
      </Text>
      <Text>{label}</Text>
      {children}
    </Flex>
  )
}

export default DreamListItem
