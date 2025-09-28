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
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/10 border border-slate-300/30 shadow-2xl rounded-2xl p-8 w-full max-w-sm flex flex-col items-center animate-fadein"
        style={{boxShadow:'0 8px 32px 0 rgba(192,192,192,0.25), 0 0 0 2px #bfc1c2'}}
      >
        <h1 className="text-3xl font-extrabold text-center mb-6 text-slate-100 drop-shadow">Login</h1>
        <div className="mb-4 relative w-full">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full border border-slate-400/40 bg-black/40 text-slate-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300/60 placeholder-slate-400"
            required
          />
          <span className="absolute right-3 top-2.5 text-slate-400"><i className="bx bxs-user"></i></span>
        </div>
        <div className="mb-4 relative w-full">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border border-slate-400/40 bg-black/40 text-slate-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300/60 placeholder-slate-400"
            required
          />
          <span className="absolute right-3 top-2.5 text-slate-400"><i className="bx bxs-lock-alt"></i></span>
        </div>
        <div className="flex items-center justify-between mb-4 text-xs w-full">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2 accent-slate-400" /> Remember me
          </label>
          <a href="#" className="text-slate-300 hover:underline">Forgot password?</a>
        </div>
        {error && <div className="text-red-400 text-xs mb-2 w-full text-center">{error}</div>}
        <button
          type="submit"
          className="btn w-full bg-gradient-to-r from-slate-700 to-gray-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:from-gray-400 hover:to-slate-500 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-300/60 mt-2"
        >
          Login
        </button>
        <div className="register-link text-center mt-4 text-slate-400">
          Don't have an account? <a href="#" className="text-slate-200 hover:underline">Register</a>
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
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Bubble background effect */}
      <div className="bubble-bg">
        {[...Array(18)].map((_,i) => (
          <span
            key={i}
            className="bubble"
            style={{
              width: `${40 + Math.random()*80}px`,
              height: `${40 + Math.random()*80}px`,
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              animationDelay: `${Math.random()*6}s`,
              animationDuration: `${8+Math.random()*8}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      {/* Glassy Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur-lg bg-white/10 border-b border-slate-300/20 shadow-lg flex flex-col md:flex-row items-center justify-between px-6 py-3 animate-fadein gap-2 md:gap-0">
        <h1 className="text-2xl font-extrabold text-slate-100 tracking-wide drop-shadow mb-2 md:mb-0">ShopEase</h1>
        <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
          <button onClick={() => { setSelectedCategory('All'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='All'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>All</button>
          <button onClick={() => { setSelectedCategory('Men'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Men'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Men</button>
          <button onClick={() => { setSelectedCategory('Women'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Women'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Women</button>
          <button onClick={() => { setSelectedCategory('Kids'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Kids'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Kids</button>
          <button onClick={() => { setSelectedCategory('Electronics'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Electronics'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Electronics</button>
          <button onClick={() => { setSelectedCategory('Fashion'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Fashion'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Fashion</button>
          <button onClick={() => { setSelectedCategory('Home & Kitchen'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Home & Kitchen'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Home & Kitchen</button>
          <button onClick={() => { setSelectedCategory('Footwear'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Footwear'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Footwear</button>
          <button onClick={() => { setSelectedCategory('Accessories'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Accessories'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Accessories</button>
        </div>
        <div className="flex gap-2 items-center mt-2 md:mt-0">
          <button onClick={() => setView('list')} className={`px-4 py-1 rounded-lg font-semibold transition-all ${view==='list'?'bg-slate-700/60 text-slate-100 border border-slate-300/40 shadow':'hover:bg-slate-700/30 text-slate-200'}`}>Home</button>
          <button onClick={() => setIsCartOpen(true)} className="px-4 py-1 rounded-lg font-semibold bg-gradient-to-r from-slate-600 to-gray-400 text-white border border-slate-300/40 shadow hover:from-gray-400 hover:to-slate-500 transition-all active:scale-95">Cart ({cartItems.length})</button>
        </div>
      </nav>
      <div className="pt-20"></div>
      <header className="bg-black/60 backdrop-blur-lg shadow p-4 flex flex-col md:flex-row justify-between items-center rounded-b-2xl mb-4 border-b border-slate-300/20">
        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="border border-gray-700 bg-gray-900 text-gray-100 px-3 py-1 rounded-md focus:ring-2 focus:ring-slate-400 w-full md:w-auto"
          />
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            className="border border-gray-700 bg-gray-900 text-gray-100 px-2 py-1 rounded-md focus:ring-2 focus:ring-slate-400"
          >
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <button onClick={() => setIsCartOpen(true)} className="bg-gradient-to-r from-slate-500 to-gray-400 text-white px-3 py-1 rounded-md font-semibold shadow hover:from-gray-400 hover:to-slate-500 transition-all">
            Cart ({cartItems.length})
          </button>
        </div>
      </header>

      {/* Main */}
  <main className="p-4 md:p-8 transition-all duration-500">
        {view === 'list' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredProducts.map(p => (
              <div
                key={p.id}
                className="relative glass p-4 rounded-xl cursor-pointer hover:scale-105 transition-transform group overflow-hidden flex flex-col items-center min-h-[340px] min-w-[240px] max-w-[320px] mx-auto"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(192,192,192,0.25), 0 0 0 2px #bfc1c2',
                  border: '2px solid #bfc1c2',
                  aspectRatio: '1/1',
                }}
                onClick={() => viewDetails(p)}
              >
                <div className="absolute inset-0 rounded-xl pointer-events-none z-0 group-hover:shadow-[0_0_32px_8px_rgba(192,192,192,0.9)] group-hover:border-2 group-hover:border-slate-100 transition-all duration-300" style={{boxShadow: '0 0 0 0 rgba(0,0,0,0)'}}></div>
                <img src={p.image} alt={p.name} className="relative z-10 w-full h-40 object-cover mb-3 rounded-lg shadow-lg border border-slate-200/40" style={{aspectRatio:'1/1', objectFit:'cover'}}/>
                <h2 className="relative z-10 font-bold text-base text-slate-100 mb-1 truncate text-center w-full">{p.name}</h2>
                <p className="relative z-10 text-slate-300 font-bold text-lg mb-2 text-center w-full">₹{p.price}</p>
                <button
                  onClick={e => { e.stopPropagation(); addToCart(p); }}
                  className="relative z-10 mt-auto w-full bg-gradient-to-r from-slate-700 to-gray-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:from-gray-400 hover:to-slate-500 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-300/60"
                  style={{backdropFilter:'blur(8px)', WebkitBackdropFilter:'blur(8px)', background:'rgba(255,255,255,0.08)'}}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}

        {view === 'detail' && selectedProduct && (
          <div>
            <button onClick={goBack} className="mb-4 text-slate-300 font-semibold">← Back</button>
            <div className="glass shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row gap-8">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow-lg border border-slate-200/40"/>
              <div>
                <h2 className="text-3xl font-extrabold mb-2 text-slate-100">{selectedProduct.name}</h2>
                <p className="text-slate-300 text-2xl font-bold mb-2">₹{selectedProduct.price}</p>
                <p className="text-slate-400 mb-4">Category: {selectedProduct.category}</p>
                <button onClick={() => addToCart(selectedProduct)} className="bg-gradient-to-r from-slate-700 to-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:from-gray-400 hover:to-slate-500 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-300/60">
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
          <div className="fixed inset-0 bg-black/60 z-10" onClick={() => setIsCartOpen(false)}></div>
          <div className="fixed right-0 top-0 h-full w-80 glass shadow-2xl p-6 z-20 rounded-l-2xl">
            <h2 className="text-2xl font-bold mb-4 text-slate-100">Your Cart</h2>
            {cartItems.length === 0 ? <p className="text-slate-400">Cart is empty</p> :
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="font-semibold text-slate-200">{item.name} x{item.quantity}</span>
                    <div className="flex gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity-1)} className="bg-black/60 px-2 rounded text-slate-200 border border-slate-200/30 active:scale-95">-</button>
                      <button onClick={() => updateQuantity(item.id, item.quantity+1)} className="bg-black/60 px-2 rounded text-slate-200 border border-slate-200/30 active:scale-95">+</button>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 font-bold active:scale-95">x</button>
                    </div>
                  </div>
                ))}
                <div className="font-bold text-lg text-slate-100">Total: ₹{getTotal()}</div>
              </div>
            }
          </div>
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ShoppingApp />);
