//const url = 'http://114.116.50.8:3100/app/'
const purl = 'http://localhost:3100/app/'

const http = {
	get : ({url,data,successFn,failFn})=>{
		uni_request(url,'GET',data,successFn,failFn)
	},
	post : ({url,data,successFn,failFn})=>{
		uni_request(url,'POST',data,successFn,failFn)
	}
}

const uni_request = (url,method,data ,successFn,failFn)=>{
	uni.request({
		url : purl + url,
		method:method,
		data : data,
		success:(res)=>{
			if (res.data.success){
				successFn && successFn(res.data.payLoad)
			}else{
				failFn && failFn(res.data.errMsg)
			}
			
		},
		fail:()=>{
			failFn && failFn()
		}
	})
}

export default http