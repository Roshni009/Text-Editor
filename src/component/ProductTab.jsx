import Product from "./Product.jsx";

function ProductTab() {
   let styles = {
       display: "flex",
       flexWrap: "wrap",
       justifyContent: "center",
       alignItems: "center",
   };


   return (
    <div style={styles}>
   
       <Product title="Logitech MX Master" idx={0}/>
       <Product title="Portronics Mv cool" idx={1}/>
       <Product title="Samsung Galaxy" idx={2}/>
       <Product title="Poco G6 Altra Pro" idx={3}/>
    </div>
 );
}

export default ProductTab;