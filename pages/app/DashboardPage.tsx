
import React, { useState, useEffect, useMemo } from 'react';
import { Customer } from '../../types';
import { customerService } from '../../services/customers';

type SortKey = keyof Customer;
type SortOrder = 'asc' | 'desc';

const DashboardPage: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      const data = await customerService.getCustomers();
      setCustomers(data);
      setLoading(false);
    };
    fetchCustomers();
  }, []);

  const filteredAndSortedCustomers = useMemo(() => {
    let result = customers.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase()) ||
      c.email.toLowerCase().includes(filter.toLowerCase())
    );

    result.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [customers, filter, sortKey, sortOrder]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  
  const SortableHeader: React.FC<{ sortKeyName: SortKey; children: React.ReactNode; }> = ({ sortKeyName, children }) => {
      const isSorted = sortKey === sortKeyName;
      const icon = sortOrder === 'asc' ? '▲' : '▼';
      return (
          <th className="p-3 text-left font-semibold cursor-pointer" onClick={() => handleSort(sortKeyName)}>
              {children} {isSorted && <span className="text-xs">{icon}</span>}
          </th>
      );
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Active Customers</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by name or email..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full max-w-sm p-2 border border-gray-300 rounded-md"
        />
      </div>
      
      {loading ? (
        <p>Loading customers...</p>
      ) : (
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg">
          <table className="w-full min-w-[600px]">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <SortableHeader sortKeyName="name">Name</SortableHeader>
                <SortableHeader sortKeyName="email">Email</SortableHeader>
                <SortableHeader sortKeyName="joinDate">Join Date</SortableHeader>
                <SortableHeader sortKeyName="stamps">Stamps</SortableHeader>
                <SortableHeader sortKeyName="rewardsRedeemed">Rewards</SortableHeader>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedCustomers.map((customer, index) => (
                <tr key={customer.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="p-3">{customer.name}</td>
                  <td className="p-3 text-gray-600">{customer.email}</td>
                  <td className="p-3 text-gray-600">{customer.joinDate}</td>
                  <td className="p-3 text-center">{customer.stamps}</td>
                  <td className="p-3 text-center">{customer.rewardsRedeemed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
       <div className="mt-6 text-right">
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
          Export to CSV
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
