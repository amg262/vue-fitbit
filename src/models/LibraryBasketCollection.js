import Collection from "@/models/Collection";

export default function LibraryBasketCollection() {
    const basket = new Collection(Basket)

    basket.addBasketItem = function (basketItem) {
        this.push(basketItem);
    }
    basket.removeBasketItem = function (basketItem) {
        basket.splice(basket.indexOf(basketItem), 1);

    }

    basket.checkoutBasket = function () {

        // this.forEach(function (basketItem) {
        //     basketItem.pop();
        // });

        this.forEach(function (basketItem) {
            basketItem.checkOut();
        });


        //
        // basket = [];
        do {
            basket.pop();
        } while (basket.length > 0);


        return basket;
    }

    console.log(basket);
    return basket;
}

function Basket() {

}