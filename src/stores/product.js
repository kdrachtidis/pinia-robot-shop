import { defineStore } from "pinia"
import { ref } from "vue"

export const useProductStore = defineStore("products", () => {
    const products = ref([])
    
    async function getProducts() {
        const response = await fetch('api/products')
        products.value = await response.json()
    }
    return { products, getProducts }
})