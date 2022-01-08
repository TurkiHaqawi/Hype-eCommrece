import { publicRequest, userRequest } from "../requestMethods"
import { addProductSuccess, deleteProductSuccess, failure, getProductSuccess, start } from "./productsRedux"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, userInfo) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", userInfo)
        dispatch(loginSuccess(res.data))
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(start())
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(failure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(start())
    try {
        await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch (err) {
        dispatch(failure())
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(start())
    try {
        const res = await userRequest.post(`/products`, {product})
        dispatch(addProductSuccess(res.data))
    } catch (err) {
        dispatch(failure())
    }
}