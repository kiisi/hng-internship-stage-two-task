import request from "./request"

const productService = {
    all: (data) => request.get('/products', {
        params: {
            organization_id: "7dfe2342a36a452c80ba063c5b05b170",
            reverse_sort: false,
            page: data.page,
            size: 10,
            Appid: '0MOOJSZ4YT7ECYY',
            Apikey: 'b95a72ab59304bc3ba94ac6718db3c5220240713084416681950'
        }
    }),
    single: (id) => request.get(`/products/${id}`, {
        params: {
            organization_id: "7dfe2342a36a452c80ba063c5b05b170",
            Appid: '0MOOJSZ4YT7ECYY',
            Apikey: 'b95a72ab59304bc3ba94ac6718db3c5220240713084416681950'
        }
    }),
}

export default productService