import invokePlugin from '../util/invokePlugin'
import plugin from '../../src/plugins/space'

test('generating space utilities', () => {
  const config = {
    theme: {
      space: {
        '1': '1px',
        '2': '2px',
        '4': '4px',
      },
    },
    variants: {
      space: ['responsive'],
    },
  }

  const { utilities } = invokePlugin(plugin(), config)

  expect(utilities).toEqual([
    [
      {
        '.space-y-1 > :not(template) ~ :not(template)': {
          '--space-y-reverse': '0',
          'margin-top': 'calc(1px * calc(1 - var(--space-y-reverse)))',
          'margin-bottom': 'calc(1px * var(--space-y-reverse))',
        },
        '.space-x-1 > :not(template) ~ :not(template)': {
          '--space-x-reverse': '0',
          'margin-right': 'calc(1px * var(--space-y-reverse))',
          'margin-left': 'calc(1px * calc(1 - var(--space-y-reverse)))',
        },
        '.space-y-2 > :not(template) ~ :not(template)': {
          '--space-y-reverse': '0',
          'margin-top': 'calc(2px * calc(1 - var(--space-y-reverse)))',
          'margin-bottom': 'calc(2px * var(--space-y-reverse))',
        },
        '.space-x-2 > :not(template) ~ :not(template)': {
          '--space-x-reverse': '0',
          'margin-right': 'calc(2px * var(--space-y-reverse))',
          'margin-left': 'calc(2px * calc(1 - var(--space-y-reverse)))',
        },
        '.space-y-4 > :not(template) ~ :not(template)': {
          '--space-y-reverse': '0',
          'margin-top': 'calc(4px * calc(1 - var(--space-y-reverse)))',
          'margin-bottom': 'calc(4px * var(--space-y-reverse))',
        },
        '.space-x-4 > :not(template) ~ :not(template)': {
          '--space-x-reverse': '0',
          'margin-right': 'calc(4px * var(--space-y-reverse))',
          'margin-left': 'calc(4px * calc(1 - var(--space-y-reverse)))',
        },
        '.space-y-reverse > :not(template) ~ :not(template)': {
          '--space-y-reverse': '1',
        },
        '.space-x-reverse > :not(template) ~ :not(template)': {
          '--space-x-reverse': '1',
        },
      },
      ['responsive'],
    ],
  ])
})