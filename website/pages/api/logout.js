async function handleLogout(req, res) {

    // Uncomment for FusionAuth
    // res.redirect(`http://${process.env.FUSIONAUTH_DOMAIN}/oauth2/logout?client_id=${process.env.FUSIONAUTH_CLIENT_ID}`);

    // Uncomment for Cognito
    res.redirect(`https://auth.dev.sr-stats.app/logout?client_id=${process.env.COGNITO_CLIENT_ID}&response_type=code&redirect_uri=${process.env.COGNITO_REDIRECT_URL}`);
}

export default async function logout(req, res) {
    try {
        await handleLogout(req, res);
    } catch (error) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
}