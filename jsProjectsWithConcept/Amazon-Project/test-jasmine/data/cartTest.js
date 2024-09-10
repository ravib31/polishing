import { addToCart,cart,loadFromStorage } from "../../data/cart.js";

describe("test suite:addToCart", () => {
  it("should add a product to the cart", () => {
    spyOn(localStorage,'setItem');
    spyOn(localStorage, "getItem").and.callFake(()=>{
        return JSON.stringify([{
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 1,
            deliveryOptionId: "1"
        }]);
    });
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2);
  });

  // it("should increment the quantity of an existing product in the cart", () => {
  //     const productId = 1;
  //     const cart = [{id: productId, quantity: 1}];

  //     const updatedCart = addToCart(cart, productId);

  //     expect(updatedCart).toEqual([{id: productId, quantity: 2}]);
  // });

  it("should add a new product to the cart if it doesn't exist", () => {
    // const productId = 1;
    // const cart = [];
    spyOn(localStorage,'setItem');
    spyOn(localStorage, "getItem").and.callFake(()=>{
        return JSON.stringify([]);
    });
    // console.log(localStorage.getItem("cart"));
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(2);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(3);

    // expect(updatedCart).toEqual([{id: productId, quantity: 1}]);
  });
});
