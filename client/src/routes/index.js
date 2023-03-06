import Login from '~/pages/Auth/components/Login';
import Register from '~/pages/Auth/components/Register';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import ProductDetailPage from '~/pages/Product/productDetailPage';
//public routes
const publicRoutes = [
    { path: '/', page: Home },
    { path: '/product', page: Product },
    { path: '/product/:productId', page: ProductDetailPage },
    { path: '/register', page: Register },
    { path: '/login', page: Login },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
