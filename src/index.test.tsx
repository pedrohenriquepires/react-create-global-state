import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import createGlobalState from './index'

describe('createGlobalState', () => {
  it('should create the state and the provider', () => {
    const [useGlobalState, Provider] = createGlobalState(0)

    expect(useGlobalState).toBeInstanceOf(Function)
    expect(Provider).toBeInstanceOf(Function)
  })

  it('should render the state with initial value', () => {
    const [useGlobalState, Provider] = createGlobalState(0)

    const Component = () => {
      const [value] = useGlobalState()
      return <>{value}</>
    }

    const element = render(<Component />, {
      wrapper: ({ children }) => <Provider children={children} />
    })

    expect(element.getByText(/0/)).toBeInTheDocument()
  })

  it('should render the state with property value on provider', () => {
    const [useGlobalState, Provider] = createGlobalState(0)

    const Component = () => {
      const [value] = useGlobalState()
      return <>{value}</>
    }

    const element = render(<Component />, {
      wrapper: ({ children }) => <Provider children={children} value={2} />
    })

    expect(element.getByText(/2/)).toBeInTheDocument()
  })

  it('should render the new state after change', () => {
    const [useGlobalState, Provider] = createGlobalState(0)

    const Component = () => {
      const [value, setValue] = useGlobalState()
      return <button onClick={() => setValue(1)}>{value}</button>
    }

    const element = render(<Component />, {
      wrapper: ({ children }) => <Provider children={children} />
    })

    const button = element.getByText(/0/)
    fireEvent.click(button)

    expect(button).toContainHTML('1')
  })
})
