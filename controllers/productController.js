import data from "./../data.js";

export async function product(req, res) {
  try {
    res.send(data.products);
    return;
  } catch (error) {
    console.log("Error sending data.");
    console.log(error);
    return res.sendStatus(500);
  }
}

export function productid(req, res) {
    let product = data.products.find(product => product._id === parseInt(req.params.id))
    try {
      if(product){
        res.send(product)
        return;
      } else {
        res.sendStatus(404).send({message: "Product not found"})
      }
    } catch (error) {
    console.log("Error sending product data.");
    console.log(error);
    return res.sendStatus(500);
    }
}