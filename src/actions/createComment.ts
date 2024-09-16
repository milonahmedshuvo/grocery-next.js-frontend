'use server'

type TComment = {
    title: string,
    comment: string
}


export const createComment =async (data:TComment) => {
    const res = await fetch('', {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    })
    const comment = await res.json()
    return comment;
}