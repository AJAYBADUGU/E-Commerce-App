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
    <div className="min-h-screen flex items-center justify-center" style={{position:'relative', zIndex:1}}>
      <form onSubmit={handleSubmit} className="login-glass p-6 md:p-8 w-full max-w-xs md:max-w-sm flex flex-col items-center animate-fadein shadow-xl">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center mb-4 md:mb-6 text-slate-100 drop-shadow">Login</h1>
        <div className="mb-3 md:mb-4 relative w-full">
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
        <div className="mb-3 md:mb-4 relative w-full">
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
        <div className="flex items-center justify-between mb-3 md:mb-4 text-xs w-full">
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
  // Home and About content
  const HomeSection = () => (
    <section className="glass max-w-3xl mx-auto my-8 p-6 md:p-10 rounded-2xl text-center shadow-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-fuchsia-400 drop-shadow">Welcome to ShopEase</h2>
      <p className="text-lg md:text-xl text-slate-200 mb-4">Your one-stop destination for the latest in fashion, electronics, accessories, and more. Enjoy a seamless, modern shopping experience with a beautiful glassy UI, smooth transitions, and interactive features.</p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <div className="glass shining-edge p-4 w-64 text-left">
          <h3 className="font-bold text-blue-300 mb-2">Glassy Modern UI</h3>
          <p className="text-slate-300 text-sm">Experience a professional, dark, glassmorphic design with shining edges and smooth animations.</p>
        </div>
        <div className="glass shining-edge p-4 w-64 text-left">
          <h3 className="font-bold text-fuchsia-300 mb-2">Easy Navigation</h3>
          <p className="text-slate-300 text-sm">Quickly browse by category, search for products, and manage your cart with ease.</p>
        </div>
        <div className="glass shining-edge p-4 w-64 text-left">
          <h3 className="font-bold text-yellow-300 mb-2">Responsive & Interactive</h3>
          <p className="text-slate-300 text-sm">Enjoy responsive layouts, pointer effects, and engaging transitions on every page.</p>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section className="glass max-w-2xl mx-auto my-8 p-6 md:p-10 rounded-2xl text-center shadow-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-400 drop-shadow">About This Project</h2>
      <p className="text-lg md:text-base text-slate-200 mb-4">ShopEase is a modern e-commerce demo app built to showcase advanced front-end techniques, including glassmorphism, animated transitions, and a professional dark theme. The project demonstrates category-based navigation, a dynamic cart, and a beautiful login experience—all with a focus on user experience and visual appeal.</p>
      <p className="text-slate-400 text-sm">Created by an experienced front-end developer for demonstration and learning purposes.</p>
    </section>
  );
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
    <div className="min-h-screen bg-gradient-to-br from-[#181c24] via-[#232a34] to-[#181c24] relative" style={{zIndex:1}}>
      {/* Navigation Bar */}
      <nav className="navbar-glass flex flex-col md:flex-row items-center justify-between px-6 py-3 gap-2 md:gap-0 sticky top-0 z-30">
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-fuchsia-500 to-yellow-400 tracking-wide drop-shadow mb-2 md:mb-0 cursor-pointer" onClick={()=>setView('home')}>ShopEase</h1>
        <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center w-full md:w-auto">
          <button onClick={() => setView('about')} className={`px-3 py-1 rounded-lg font-semibold transition-all ${view==='about'?'bg-blue-700/70 text-white border border-blue-300/40 shadow':'hover:bg-blue-700/30 text-blue-200'}`}>About</button>
          <button onClick={() => { setSelectedCategory('All'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='All'&&view==='list'?'bg-fuchsia-700/70 text-white border border-fuchsia-300/40 shadow':'hover:bg-fuchsia-700/30 text-fuchsia-200'}`}>All</button>
          <button onClick={() => { setSelectedCategory('Men'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Men'&&view==='list'?'bg-blue-700/70 text-white border border-blue-300/40 shadow':'hover:bg-blue-700/30 text-blue-200'}`}>Men</button>
          <button onClick={() => { setSelectedCategory('Women'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Women'&&view==='list'?'bg-pink-700/70 text-white border border-pink-300/40 shadow':'hover:bg-pink-700/30 text-pink-200'}`}>Women</button>
          <button onClick={() => { setSelectedCategory('Kids'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Kids'&&view==='list'?'bg-yellow-700/70 text-white border border-yellow-300/40 shadow':'hover:bg-yellow-700/30 text-yellow-200'}`}>Kids</button>
          <button onClick={() => { setSelectedCategory('Electronics'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Electronics'&&view==='list'?'bg-cyan-700/70 text-white border border-cyan-300/40 shadow':'hover:bg-cyan-700/30 text-cyan-200'}`}>Electronics</button>
          <button onClick={() => { setSelectedCategory('Fashion'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Fashion'&&view==='list'?'bg-purple-700/70 text-white border border-purple-300/40 shadow':'hover:bg-purple-700/30 text-purple-200'}`}>Fashion</button>
          <button onClick={() => { setSelectedCategory('Home & Kitchen'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Home & Kitchen'&&view==='list'?'bg-green-700/70 text-white border border-green-300/40 shadow':'hover:bg-green-700/30 text-green-200'}`}>Home & Kitchen</button>
          <button onClick={() => { setSelectedCategory('Footwear'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Footwear'&&view==='list'?'bg-orange-700/70 text-white border border-orange-300/40 shadow':'hover:bg-orange-700/30 text-orange-200'}`}>Footwear</button>
          <button onClick={() => { setSelectedCategory('Accessories'); setView('list'); }} className={`px-3 py-1 rounded-lg font-semibold transition-all ${selectedCategory==='Accessories'&&view==='list'?'bg-teal-700/70 text-white border border-teal-300/40 shadow':'hover:bg-teal-700/30 text-teal-200'}`}>Accessories</button>
        </div>
        <div className="flex gap-2 items-center mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="border border-slate-700 bg-black/60 text-slate-100 px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-400 w-full md:w-auto"
          />
          <button onClick={() => setIsCartOpen(true)} className="bg-gradient-to-r from-fuchsia-600 to-yellow-400 text-white px-3 py-1 rounded-md font-semibold shadow hover:from-yellow-400 hover:to-fuchsia-600 transition-all">
            Cart ({cartItems.length})
          </button>
        </div>
      </nav>

      {/* Main */}
      <main className="p-4 md:p-8 transition-all duration-500">
    {view === 'about' && <AboutSection />}
    {view === 'list' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map(p => (
              <div key={p.id} className="glass shining-edge card-pointer relative p-3 md:p-4 rounded-2xl shadow-xl cursor-pointer group overflow-hidden flex flex-col items-center min-h-[220px] min-w-[160px] max-w-[220px] md:min-h-[260px] md:min-w-[180px] md:max-w-[240px] mx-auto transition-all duration-200" onClick={() => viewDetails(p)}>
                <img src={p.image} alt={p.name} className="relative z-10 w-full h-24 md:h-32 object-cover mb-2 md:mb-3 rounded-xl shadow-lg border border-slate-200/40" style={{aspectRatio:'1/1', objectFit:'cover'}}/>
                <h2 className="relative z-10 font-bold text-sm md:text-base text-slate-100 mb-1 truncate text-center w-full">{p.name}</h2>
                <p className="relative z-10 text-fuchsia-400 font-bold text-base md:text-lg mb-1 md:mb-2 text-center w-full">₹{p.price}</p>
                <button onClick={e => { e.stopPropagation(); addToCart(p); }} className="relative z-10 mt-auto w-full bg-gradient-to-r from-blue-700 to-fuchsia-500 text-white py-1 rounded-lg font-semibold shadow hover:from-yellow-400 hover:to-fuchsia-600 hover:text-black transition-all">
                  Add to Cart
                </button>
                <div className="card-detail">Click for more details</div>
              </div>
            ))}
          </div>
        )}

        {view === 'detail' && selectedProduct && (
          <div>
            <button onClick={goBack} className="mb-4 text-fuchsia-400 font-semibold">← Back</button>
            <div className="glass shining-edge shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row gap-8">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow-lg border border-slate-200/40"/>
              <div>
                <h2 className="text-3xl font-extrabold mb-2 text-blue-300">{selectedProduct.name}</h2>
                <p className="text-fuchsia-400 text-2xl font-bold mb-2">₹{selectedProduct.price}</p>
                <p className="text-slate-400 mb-4">Category: {selectedProduct.category}</p>
                <button onClick={() => addToCart(selectedProduct)} className="bg-gradient-to-r from-blue-700 to-fuchsia-500 text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-fuchsia-400 hover:to-yellow-300 transition-all">
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
          <div className="glass fixed right-0 top-0 h-full w-80 shadow-2xl p-6 z-20 rounded-l-2xl border-l-4 border-fuchsia-400">
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Your Cart</h2>
            {cartItems.length === 0 ? <p className="text-slate-400">Cart is empty</p> :
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span className="font-semibold text-fuchsia-300">{item.name} x{item.quantity}</span>
                    <div className="flex gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity-1)} className="bg-black/60 px-2 rounded text-slate-200 border border-slate-200/30 active:scale-95">-</button>
                      <button onClick={() => updateQuantity(item.id, item.quantity+1)} className="bg-black/60 px-2 rounded text-slate-200 border border-slate-200/30 active:scale-95">+</button>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-400 font-bold active:scale-95">x</button>
                    </div>
                  </div>
                ))}
                <div className="font-bold text-lg text-yellow-300">Total: ₹{getTotal()}</div>
              </div>
            }
          </div>
        </>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<ShoppingApp />);
