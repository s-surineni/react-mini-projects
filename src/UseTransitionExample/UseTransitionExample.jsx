import { useState, useTransition } from 'react';

// Generate a large list of items for demonstration
const generateItems = () => {
  return Array.from({ length: 10000 }, (_, index) => ({
    id: index,
    name: `Item ${index}`,
    description: `This is a description for item ${index}`
  }));
};

export default function UseTransitionExample() {
  const [items] = useState(generateItems());
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e) => {
    // This is an urgent update - update the input immediately
    setSearchTerm(e.target.value);

    // This is a non-urgent update - mark it as a transition
    startTransition(() => {
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.description.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">useTransition Example</h1>
      
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search items..."
          className="p-2 border rounded w-full"
        />
      </div>

      {isPending ? (
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