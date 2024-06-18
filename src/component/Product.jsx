import "./Product.css";
import Price from "./Price";

function Product({ title,idx }) {
    let oldPrice = ["12,975", "1,856", "23,764", "15,654"];
    let newPrice = ["5,000", "499", "15,765", "12,689"];
    let description = [
        ["8,000 DPI" , "5 Programmable buttion"],
        ["intuitive surface" , "designed for ipad pro"],
        ["designed for next generation", "intutit suiert"],
        ["wireless", "optical orientaion"],
    ];

  return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <p>{description[idx][2]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}

export default Product;