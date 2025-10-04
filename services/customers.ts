
import { Customer } from '../types';

const MOCK_CUSTOMERS: Customer[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', phone: '555-0101', joinDate: '2023-01-15', stamps: 8, rewardsRedeemed: 1 },
  { id: '2', name: 'Bob Williams', email: 'bob@example.com', phone: '555-0102', joinDate: '2023-02-20', stamps: 3, rewardsRedeemed: 0 },
  { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', phone: '555-0103', joinDate: '2023-03-10', stamps: 10, rewardsRedeemed: 2 },
  { id: '4', name: 'Diana Miller', email: 'diana@example.com', phone: '555-0104', joinDate: '2023-04-05', stamps: 5, rewardsRedeemed: 0 },
  { id: '5', name: 'Ethan Davis', email: 'ethan@example.com', phone: '555-0105', joinDate: '2023-05-22', stamps: 1, rewardsRedeemed: 0 },
  { id: '6', name: 'Fiona Garcia', email: 'fiona@example.com', phone: '555-0106', joinDate: '2023-06-18', stamps: 9, rewardsRedeemed: 1 },
  { id: '7', name: 'George Rodriguez', email: 'george@example.com', phone: '555-0107', joinDate: '2023-07-30', stamps: 2, rewardsRedeemed: 0 },
  { id: '8', name: 'Hannah Martinez', email: 'hannah@example.com', phone: '555-0108', joinDate: '2023-08-11', stamps: 7, rewardsRedeemed: 1 },
];

export const customerService = {
  // Placeholder for getting customers from Firestore
  getCustomers: async (): Promise<Customer[]> => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(MOCK_CUSTOMERS);
      }, 1000); // Simulate network delay
    });
  }
};
