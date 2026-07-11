async function getGitHubUser(username) {
    if(!username){
        console.log("Usage: node github-profile-viewer.js <github-username>");
        return;
    }
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!response.ok) {
            throw new Error("GitHub user not found");
        }

        const user = await response.json();

        console.log("==========================");
        console.log("GitHub Profile");
        console.log("==========================");
        console.log("Name:", user.name);
        console.log("Followers:", user.followers);
        console.log("Following:", user.following);
        console.log("Public Repositories:", user.public_repos);
        console.log("Profile URL:", user.html_url);
        console.log("==========================");
    } catch (err) {
        console.log("Encountered an error:", err.message);
    }
}
async function main() {
    const profiles = process.argv.slice(2);

    for (const profile of profiles) {
        await getGitHubUser(profile);
    }
}
main();