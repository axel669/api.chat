export const onRequestOptions = async () => {
    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS, POST",
        },
    })
}

export const onRequest = async (context) => {
    const response = await context.next()
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Headers", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS, POST")
    return response
}
