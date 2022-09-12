import calc from '../src'

test('相加结果为996', () => {
  expect(calc(1024, 28)).toBe(996)
})
