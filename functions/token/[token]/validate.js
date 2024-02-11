export const onRequestGet = async ({ request, env, params }) => {
    return await fetch(
        `https://id.twitch.tv/oauth2/validate`,
        {
            headers: {
                "Authorization": `Bearer ${params.token}`,
            }
        }
    )
}
