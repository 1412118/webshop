import Header from '~/components/Layout/common/Header';

function DefaultLayout({ children }) {
    console.log(children);
    //let headerClassName = children.type.name === 'Product' ? 'header-v4' : '';
    return (
        <>
            <Header />
            {children}
            {/* <div>{children}</div> */}
        </>
    );
}

export default DefaultLayout;
