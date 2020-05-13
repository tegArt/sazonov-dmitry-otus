import { writable } from "svelte/store";

export const costs = writable([
  {
    id: 1,
    date: '10.05.2020',
    category: 'Healthcare',
    value: 423
  },
  {
    id: 2,
    date: '12.05.2020',
    category: 'Housing',
    value: 98
  },
  {
    id: 3,
    date: '13.05.2020',
    category: 'Transport',
    value: 123
  },
  {
    id: 4,
    date: '13.05.2020',
    category: 'Clothing',
    value: 53
  },
  {
    id: 5,
    date: '14.05.2020',
    category: 'Transport',
    value: 231
  },
  {
    id: 6,
    date: '14.05.2020',
    category: 'Clothing',
    value: 53
  },
  {
    id: 7,
    date: '14.05.2020',
    category: 'Transport',
    value: 231
  },
  {
    id: 8,
    date: '14.05.2020',
    category: 'Food',
    value: 234
  },
  {
    id: 9,
    date: '14.05.2020',
    category: 'Beer',
    value: 50
  },
]);

export const categories = writable([
  {
    id: 1,
    name: 'Food'
  },
  {
    id: 2,
    name: 'Housing'
  },
  {
    id: 3,
    name: 'Transport'
  },
  {
    id: 4,
    name: 'Clothing'
  },
  {
    id: 5,
    name: 'Healthcare'
  },
  {
    id: 6,
    name: 'Beer'
  }
]);

export const categoryColors = writable({
  'Food': '#ff6384',
  'Housing': '#36a2eb',
  'Transport': '#ffee56',
  'Clothing': '#4bc057',
  'Healthcare': '#9966ff',
  'Beer': '#ff9f40'
});
