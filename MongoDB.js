db.products.find({
  category: "Electronics",
  price: { $gt: 500 } 
})
.sort({ price: -1 }) 
