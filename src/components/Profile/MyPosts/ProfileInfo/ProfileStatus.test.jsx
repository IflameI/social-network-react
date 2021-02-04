import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="it-kams" />)
    const instance = component.getInstance()
    expect(instance.state.status).toBe('it-kams')
  })
  test('after creation <span> with status should be displayed with correct stastus', () => {
    const component = create(<ProfileStatus status="it-kams" />)
    const root = component.root
    let span = root.findByType('span')
    expect(span).not.toBeNull()
  })
})
