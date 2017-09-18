import lannister from '../src/index';

const firstBill = {
  owner: 'ddetoni',
  group: ['ddetoni', 'piperfe', 'machuca'],
  amount: 29710
}

const secondBill = {
  owner: 'piperfe',
  group: ['ddetoni', 'piperfe', 'machuca'],
  amount: 15632
}

test('splits just one bill', () => {
  const expectedResponse = [
    {
      from: 'piperfe',
      to: 'ddetoni',
      amount: 9903.3
    },
    {
      from: 'machuca',
      to: 'ddetoni',
      amount: 9903.3
    }
  ]

  expect(lannister.splitUpBill(firstBill)).toEqual(expectedResponse);
});

test('splits multiple bills', () => {
  const expectedResponse = [
    {
      from: 'piperfe',
      to: 'ddetoni',
      amount: 9903.3
    },
    {
      from: 'machuca',
      to: 'ddetoni',
      amount: 9903.3
    },
    {
      from: 'ddetoni',
      to: 'piperfe',
      amount: 5210.7
    },
    {
      from: 'machuca',
      to: 'piperfe',
      amount: 5210.7
    }
  ]

  expect(lannister.splits([firstBill, secondBill])).toEqual(expectedResponse);
});