export const createCartSlice=(set,get)=>({
    // state variables
    products:[],
    cart:[],
    loading:false,
    error:null,

// Async Action : Fetch products from a public API

fetchProducts:async () => {
    set({loading:true,error:null})
    try {
        const response=await fetch("https://fakestoreapi.com/products?limit=4");
        const data=await response.json()
        set({products:data,loading:false})
    } catch (err) {
        set({error:'Failed to fetch products',loading:false});
        console.log(err)
    }
},

// // Action: Add product to cart or increment quantity if it already exists
addToCart:(product) => {
    const currentCart=get().cart;
    const existingItem=currentCart.find((item)=> item.id === product);

    if(existingItem){
        // If item exists, map through and increase quantity
        set({
            cart:currentCart.map((item)=>
            item.id === product.id ? {...item,quantity:item.quantity+1}: item),
        });
    }else{
        // it is new item them add to array with quantity 1
        set(({cart:[...currentCart,{...product,quantity:1}]}));
    }
},

// Action: Remove item entirely from cart
removeFromCart:(productId)=>{
    set((state)=>({
        cart:state.cart.filter((item)=> item.id !== productId)
    }));
},
})