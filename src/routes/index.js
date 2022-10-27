import Home from '~/pages/Home';
import Product from '~/pages/Product';
import ProductDetailPage from '~/pages/Product/productDetailPage';

//public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/product/:productId', component: ProductDetailPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
