import {createSlice} from '@reduxjs/toolkit'


export const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        // main actions
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        failure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //Get All products
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        // Add product
        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload)
        },
        // Delete product
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.find(item => item._id === action.payload)
            );
        },
        
    }
})


export const { start, getProductSuccess, failure, deleteProductSuccess, addProductSuccess } = productsSlice.actions;
export default productsSlice.reducer;