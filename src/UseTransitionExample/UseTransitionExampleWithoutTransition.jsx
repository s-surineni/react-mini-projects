import { useState } from 'react';

// Generate a large list of items for demonstration
const generateItems = () => {
  return Array.from({ length: 10000 }, (_, index) => ({
    id: index,
    name: `Item ${index}`,
    description: `This is a description for item ${index}`
  }));
};

// Artificial delay function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function UseTransitionExampleWithoutTransition() {
  const [items] = useState(generateItems());
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsLoading(true);

    // Add artificial delay to simulate heavy computation
    await delay(500); // 500ms delay

    // Simulate a heavy computation without useTransition
    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.description.toLowerCase().includes(value.toLowerCase())
    );
    
    // Add another delay after filtering
    await delay(300); // 300ms delay
    
    setFilteredItems(filtered);
    setIsLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Without useTransition Example</h1>
      <p className="text-red-500 mb-4">Notice the lag when typing - this version has artificial delays added</p>
      
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search items..."
          className="p-2 border rounded w-full"
        />
      </div>

      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="border p-4 rounded shadow">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 