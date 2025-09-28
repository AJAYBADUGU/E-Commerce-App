function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim()) {
      onLogin();
    } else {
      setError("Please enter username and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">Login</h1>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <span className="absolute right-3 top-2.5 text-gray-400"><i className="bx bxs-user"></i></span>
        </div>
        <div className="mb-4 relative">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <span className="absolute right-3 top-2.5 text-gray-400"><i className="bx bxs-lock-alt"></i></span>
        </div>
        <div className="flex items-center justify-between mb-4 text-sm">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Remember me
          </label>
          <a href="#" className="text-purple-500 hover:underline">Forgot password?</a>
        </div>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <button type="submit" className="btn w-full bg-gradient-to-r from-purple-500 to-pink-400 text-white py-2 rounded-lg font-semibold shadow hover:from-pink-400 hover:to-yellow-300 transition-all">Login</button>
        <div className="register-link text-center mt-4 text-gray-600">
          Don't have an account? <a href="#" className="text-purple-500 hover:underline">Register</a>
        </div>
      </form>
    </div>
  );
}
const { useState } = React;

// Products
const PRODUCTS = [
  { id: 1, name: 'Wireless Bluetooth Headphones', price: 2499, category: 'Electronics', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Smart Watch Fitness Tracker', price: 1999, category: 'Electronics', image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80' },
  { id: 3, name: "Men's Casual T-Shirt", price: 499, category: 'Fashion', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Running Shoes', price: 3499, category: 'Footwear', image: 'https://images.unsplash.com/photo-1528701800484-905dffb7c6b4?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Kitchen Mixer Grinder', price: 2899, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Laptop Backpack', price: 899, category: 'Accessories', image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80' },
  { id: 7, name: '4K Ultra HD Smart TV', price: 34999, category: 'Electronics', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
  { id: 8, name: 'Women’s Designer Handbag', price: 2599, category: 'Fashion', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 9, name: 'Espresso Coffee Maker', price: 4999, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80' },
  { id: 10, name: 'Bluetooth Portable Speaker', price: 1599, category: 'Electronics', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
  { id: 11, name: 'Men’s Leather Wallet', price: 699, category: 'Accessories', image: 'https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=400&q=80' },
  { id: 12, name: 'Women’s Running Shoes', price: 2999, category: 'Footwear', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80' },
  { id: 13, name: 'Stainless Steel Cookware Set', price: 3499, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
  { id: 14, name: 'Noise Cancelling Earbuds', price: 2999, category: 'Electronics', image: 'https://images.unsplash.com/photo-1516707892064-6d1b8e6bc6a2?auto=format&fit=crop&w=400&q=80' },
  { id: 15, name: 'Classic Analog Watch', price: 1799, category: 'Accessories', image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80' },
  { id: 16, name: 'Kids’ School Backpack', price: 799, category: 'Kids', image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' },
  { id: 17, name: 'Baby Stroller', price: 4999, category: 'Kids', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
  { id: 18, name: 'Women’s Summer Dress', price: 1299, category: 'Fashion', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 19, name: 'Men’s Formal Shoes', price: 2499, category: 'Footwear', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80' },
  { id: 20, name: 'Ceramic Dinner Set', price: 1899, category: 'Home & Kitchen', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' }
];

const CATEGORIES = ['All','Electronics','Fashion','Home & Kitchen','Footwear','Accessories','Kids'];

function ShoppingApp() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState('list');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || p.category === selectedCategory)
  );

  const addToCart = (product) => {
    setCartItems(prev => {
      const exist = prev.find(i => i.id === product.id);
      if (exist) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => setCartItems(prev => prev.filter(i => i.id !== id));
  const updateQuantity = (id, qty) => {
    if (qty < 1) return;
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };
  const getTotal = () => cartItems.reduce((t,i) => t + i.price * (i.quantity || 1), 0);

  const viewDetails = (p) => { setSelectedProduct(p); setView('detail'); };
  const goBack = () => setView('list');

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center rounded-b-2xl">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 tracking-wide drop-shadow">ShopEase</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="border px-3 py-1 rounded-md focus:ring-2 focus:ring-pink-300"
          />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border px-2 py-1 rounded-md focus:ring-2 focus:ring-pink-300"
          >
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button onClick={() => setIsCartOpen(true)} className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-3 py-1 rounded-md font-semibold shadow hover:from-yellow-400 hover:to-pink-500 transition-all">
            Cart ({cartItems.length})
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="p-6">
        {view === 'list' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map(p => (
              <div key={p.id} className="bg-white p-4 rounded-2xl shadow-xl cursor-pointer hover:scale-105 transition-transform border-2 border-transparent hover:border-pink-200" onClick={() => viewDetails(p)}>
                <img src={p.image} alt={p.name} className="w-full h-44 object-cover mb-3 rounded-xl shadow"/>
                <h2 className="font-bold text-lg text-purple-700 mb-1">{p.name}</h2>
                <p className="text-pink-500 font-bold text-xl mb-2">₹{p.price}</p>
                <button onClick={e => { e.stopPropagation(); addToCart(p); }} className="mt-2 w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-1 rounded-lg font-semibold shadow hover:from-pink-400 hover:to-yellow-300 transition-all">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {view === 'detail' && selectedProduct && (
          <div>
            <button onClick={goBack} className="mb-4 text-pink-600 font-semibold">← Back</button>
            <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row gap-8 border-2 border-pink-100">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow"/>
              <div>
                <h2 className="text-3xl font-extrabold mb-2 text-purple-700">{selectedProduct.name}</h2>
                <p className="text-pink-500 text-2xl font-bold mb-2">₹{selectedProduct.price}</p>
                <p className="text-gray-600 mb-4">Category: {selectedProduct.category}</p>
                <button onClick={() => addToCart(selectedProduct)} className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-pink-400 hover:to-yellow-300 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-10" onClick={() => setIsCartOpen(false)}></div>
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-6 z-20 rounded-l-2xl border-l-4 border-pink-200">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Your Cart</h2>
            {cartItems.length === 0 ? <p className="text-gray-600">Cart is empty</p> :
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="font-semibold text-purple-600">{item.name} x{item.quantity}</span>
                    <div className="flex gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity-1)} className="bg-gray-200 px-2 rounded">-</button>
                      <button onClick={() => updateQuantity(item.id, item.quantity+1)} className="bg-gray-200 px-2 rounded">+</button>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold">x</button>
                    </div>
                  </div>
                ))}
                <div className="font-bold text-lg text-pink-600">Total: ₹{getTotal()}</div>
              </div>
            }
          </div>
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ShoppingApp />);
