const customers =
    [
        {
            id: 1,
            name: "Kristóf",
            favouriteProducts:
                [
                    {
                        category: "tv",
                        color: "black"
                    }
                ]
        },
        {
            id: 2,
            name: "Ferenc",
            favouriteProducts:
                [
                    {
                        category: "headphone",
                        color: "grey"
                    },
                    {
                        category: "headphone",
                        color: "white"
                    }
                ]
        }
    ];
const products =
    [
        {
            id: 1,
            category: "camera",
            color: "white"
        },
        {
            id: 2,
            category: "camera",
            color: "black"
        },
        {
            id: 3,
            category: "tv",
            color: "black"
        },
        {
            id: 4,
            category: "tv",
            color: "white"
        },
        {
            id: 5,
            category: "headphone",
            color: "grey"
        },
        {
            id: 6,
            category: "headphone",
            color: "white"
        }
    ];

const findFavouriteProductsID = (prods, custs) => {
    const result = [];
    for (const prod of prods) {
        for (const cust of custs) {
            for (const fav of cust.favouriteProducts) {
                if (fav.category === prod.category && fav.color === prod.color)
                    result.push(
                        {
                            customerName: cust.name,
                            productID: prod.id
                        }
                    )
            }
        }

    }
    return result;
}
console.log(findFavouriteProductsID(products, customers));