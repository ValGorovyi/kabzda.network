import { create } from 'react-test-renderer';
import StatusHook from './statusHook';

describe('starus hook component', () => {
  test('span child length', () => {
    const component = create(<StatusHook status='it-kam...'/>)
    const root = component.root;
    const span = root.findByType('span');
    expect(span).not.toBeNull()
  })
  test('expected error', () => {
    const component = create(<StatusHook status='it-kam...'/>)
    const root = component.root;
    expect( () => {
      const input = root.findByType('input');
    }
    ).toThrow()
  })
  test('0 children', () => {
    const component = create(<StatusHook status='it-kam...'/>)
    const root = component.root;
    const span = root.findByType('span');

    expect(span.children[0]).toBe('it-kam...')
  })
})

