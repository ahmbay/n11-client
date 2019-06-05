"use strict";
let N11_Client = require("./n11-client");

module.exports = class extends N11_Client {

    constructor(appKey, appSecret) {
        super(appKey, appSecret)
        this.wsdl = "https://api.n11.com/ws/ProductService.wsdl";
    }

    getProductList(currentPage, pageSize) {
        return super.call(this.wsdl, "GetProductList", {
            pagingData: {
                currentPage: 0,
                pageSize: 50,
            }
        });
    }

    getProductByProductId(productId) {
        return super.call(this.wsdl, "GetProductByProductId", {
            productId: productId
        });
    }

    getProductBySellerCode(sellerCode) {
        return super.call(this.wsdl, "GetProductBySellerCode", {
            sellerCode: sellerCode
        });
    }


    deleteProductById(productId) {
        return super.call(this.wsdl, "DeleteProductById", {
            productId: productId
        });
    }

    deleteProductBySellerCode(productSellerCode) {
        return super.call(this.wsdl, "DeleteProductBySellerCode", {
            productSellerCode: productSellerCode
        });
    }

    saveProduct(product) {
        product = {
            product: product
        };
        return super.call(this.wsdl, "SaveProduct", product);
    }

    updateProductPriceById(productId, price, currencyType) {
        return super.call(this.wsdl, "UpdateProductPriceById", {
            productId: productId,
            price: price,
            currencyType: currencyType
        });
    }

    updateProductPriceBySellerCode(productSellerCode, price, currencyType) {
        return super.call(this.wsdl, "UpdateProductPriceBySellerCode", {
            productSellerCode: productSellerCode,
            price: price,
            currencyType: currencyType
        });
    }

    updateDiscountValueByProductId(productId, discountType, discountValue) {
        return super.call(this.wsdl, "UpdateDiscountValueByProductId", {
            productId: productId,
            productDiscount: {
                discountType: discountType,
                discountValue: discountValue
            }
        });
    }
    updateDiscountValueBySellerCode(productId, discountType, discountValue) {
        return super.call(this.wsdl, "UpdateDiscountValueBySellerCode", {
            productSellerCode: productSellerCode,
            productDiscount: {
                discountType: discountType,
                discountValue: discountValue
            }
        });
    }
}