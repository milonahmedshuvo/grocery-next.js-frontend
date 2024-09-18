'use server'

type TComment = {
    comment: string,
    productName: string,
    productId: string
}


export const createComment =async (data:TComment, token:string) => {
   
     

    //  console.log( "token", token)
    // console.log(data)
    const res = await fetch('https://grocery-store-backend-eight.vercel.app/api/v1/review/create', {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token ? token : ''  
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    })
    const comment = await res.json()
    return comment;


}