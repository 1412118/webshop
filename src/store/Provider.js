import { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
    const [productOverview, setProductOverview] = useState(false);

    return <Context.Provider value={{ productOverview, setProductOverview }}>{children}</Context.Provider>;
}

export default Provider;
