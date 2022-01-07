import axios from 'axios'

const config ={
    userId:'facebook|110393281513736',
    videoId:'1069160193655322',
    Authorization:"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlpXSFdYQlVybHhKeFA2aDROZzJYYiJ9.eyJpc3MiOiJodHRwczovL2Rldi13LXhwNmJwaS51cy5hdXRoMC5jb20vIiwic3ViIjoicVRuQUxYM0V3WUVxMEM5dlJWaDdzS1BINU1RRlpoN3ZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vZGV2LXcteHA2YnBpLnVzLmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjQxNDgxMzY0LCJleHAiOjE2NDQwNzMzNjQsImF6cCI6InFUbkFMWDNFd1lFcTBDOXZSVmg3c0tQSDVNUUZaaDd2Iiwic2NvcGUiOiJyZWFkOmNsaWVudF9ncmFudHMgY3JlYXRlOmNsaWVudF9ncmFudHMgZGVsZXRlOmNsaWVudF9ncmFudHMgdXBkYXRlOmNsaWVudF9ncmFudHMgcmVhZDp1c2VycyB1cGRhdGU6dXNlcnMgZGVsZXRlOnVzZXJzIGNyZWF0ZTp1c2VycyByZWFkOnVzZXJzX2FwcF9tZXRhZGF0YSB1cGRhdGU6dXNlcnNfYXBwX21ldGFkYXRhIGRlbGV0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgY3JlYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSByZWFkOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl9jdXN0b21fYmxvY2tzIGRlbGV0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfdGlja2V0cyByZWFkOmNsaWVudHMgdXBkYXRlOmNsaWVudHMgZGVsZXRlOmNsaWVudHMgY3JlYXRlOmNsaWVudHMgcmVhZDpjbGllbnRfa2V5cyB1cGRhdGU6Y2xpZW50X2tleXMgZGVsZXRlOmNsaWVudF9rZXlzIGNyZWF0ZTpjbGllbnRfa2V5cyByZWFkOmNvbm5lY3Rpb25zIHVwZGF0ZTpjb25uZWN0aW9ucyBkZWxldGU6Y29ubmVjdGlvbnMgY3JlYXRlOmNvbm5lY3Rpb25zIHJlYWQ6cmVzb3VyY2Vfc2VydmVycyB1cGRhdGU6cmVzb3VyY2Vfc2VydmVycyBkZWxldGU6cmVzb3VyY2Vfc2VydmVycyBjcmVhdGU6cmVzb3VyY2Vfc2VydmVycyByZWFkOmRldmljZV9jcmVkZW50aWFscyB1cGRhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGRlbGV0ZTpkZXZpY2VfY3JlZGVudGlhbHMgY3JlYXRlOmRldmljZV9jcmVkZW50aWFscyByZWFkOnJ1bGVzIHVwZGF0ZTpydWxlcyBkZWxldGU6cnVsZXMgY3JlYXRlOnJ1bGVzIHJlYWQ6cnVsZXNfY29uZmlncyB1cGRhdGU6cnVsZXNfY29uZmlncyBkZWxldGU6cnVsZXNfY29uZmlncyByZWFkOmhvb2tzIHVwZGF0ZTpob29rcyBkZWxldGU6aG9va3MgY3JlYXRlOmhvb2tzIHJlYWQ6YWN0aW9ucyB1cGRhdGU6YWN0aW9ucyBkZWxldGU6YWN0aW9ucyBjcmVhdGU6YWN0aW9ucyByZWFkOmVtYWlsX3Byb3ZpZGVyIHVwZGF0ZTplbWFpbF9wcm92aWRlciBkZWxldGU6ZW1haWxfcHJvdmlkZXIgY3JlYXRlOmVtYWlsX3Byb3ZpZGVyIGJsYWNrbGlzdDp0b2tlbnMgcmVhZDpzdGF0cyByZWFkOmluc2lnaHRzIHJlYWQ6dGVuYW50X3NldHRpbmdzIHVwZGF0ZTp0ZW5hbnRfc2V0dGluZ3MgcmVhZDpsb2dzIHJlYWQ6bG9nc191c2VycyByZWFkOnNoaWVsZHMgY3JlYXRlOnNoaWVsZHMgdXBkYXRlOnNoaWVsZHMgZGVsZXRlOnNoaWVsZHMgcmVhZDphbm9tYWx5X2Jsb2NrcyBkZWxldGU6YW5vbWFseV9ibG9ja3MgdXBkYXRlOnRyaWdnZXJzIHJlYWQ6dHJpZ2dlcnMgcmVhZDpncmFudHMgZGVsZXRlOmdyYW50cyByZWFkOmd1YXJkaWFuX2ZhY3RvcnMgdXBkYXRlOmd1YXJkaWFuX2ZhY3RvcnMgcmVhZDpndWFyZGlhbl9lbnJvbGxtZW50cyBkZWxldGU6Z3VhcmRpYW5fZW5yb2xsbWVudHMgY3JlYXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRfdGlja2V0cyByZWFkOnVzZXJfaWRwX3Rva2VucyBjcmVhdGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiBkZWxldGU6cGFzc3dvcmRzX2NoZWNraW5nX2pvYiByZWFkOmN1c3RvbV9kb21haW5zIGRlbGV0ZTpjdXN0b21fZG9tYWlucyBjcmVhdGU6Y3VzdG9tX2RvbWFpbnMgdXBkYXRlOmN1c3RvbV9kb21haW5zIHJlYWQ6ZW1haWxfdGVtcGxhdGVzIGNyZWF0ZTplbWFpbF90ZW1wbGF0ZXMgdXBkYXRlOmVtYWlsX3RlbXBsYXRlcyByZWFkOm1mYV9wb2xpY2llcyB1cGRhdGU6bWZhX3BvbGljaWVzIHJlYWQ6cm9sZXMgY3JlYXRlOnJvbGVzIGRlbGV0ZTpyb2xlcyB1cGRhdGU6cm9sZXMgcmVhZDpwcm9tcHRzIHVwZGF0ZTpwcm9tcHRzIHJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyByZWFkOmxvZ19zdHJlYW1zIGNyZWF0ZTpsb2dfc3RyZWFtcyBkZWxldGU6bG9nX3N0cmVhbXMgdXBkYXRlOmxvZ19zdHJlYW1zIGNyZWF0ZTpzaWduaW5nX2tleXMgcmVhZDpzaWduaW5nX2tleXMgdXBkYXRlOnNpZ25pbmdfa2V5cyByZWFkOmxpbWl0cyB1cGRhdGU6bGltaXRzIGNyZWF0ZTpyb2xlX21lbWJlcnMgcmVhZDpyb2xlX21lbWJlcnMgZGVsZXRlOnJvbGVfbWVtYmVycyByZWFkOmVudGl0bGVtZW50cyByZWFkOmF0dGFja19wcm90ZWN0aW9uIHVwZGF0ZTphdHRhY2tfcHJvdGVjdGlvbiByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.kpiOi8tEmAQWAm0qvtaP8B2gIMhy2ZH1EfGS_chi_gQ2UhlJ-A7VUF-MyWWSJxRgmjZNAGpAFG7n85J1W82sgL94Pz8iW4W5_80RTcZ96T-f0yPKr5esRcoT5i1Db5XYqi9L30s2PTaLS9ejAJ7OgjW3GGrWsiYR5m7JELht7leO7OWeXD5_drbNf7vMa3A8Xgl5aAehgqNu04PscCAw57AqY1aIGgvlyCSWHiFlRZCMraarmTr_zKInkpBaDEEGA3E6Nh30hp-LgoIxNk3dEU00jF1NwHuK1-ynP0mBYBgvEwuvA26sbFr6gMYvcFkbvrgYkCYH-naBTnIC6TM0Kg",
    message:'This is a text comment',
}

const displayViewerCount = (accesstoken) => {
    axios.get(`https://graph.facebook.com/v12.0/${config.videoId}?fields=views&access_token=EAAOIz8OXxckBAMZC1OqkJb9Wc1qmZA39L1KjG5hQKcWWwDQKGdBoOkyA40gU7GIds2MpmQxeN10hSUuilmkQkP6m5f6YvbJZCjLrUX2Kg9xTLv61ne3yecb7Atq0ZBoUrjPLSlN44lCC0n2O6VQFS39EU3iCLUItUHigSDI8XtwMaYce3BbqfiMjyFlNuW8ZD`)
        .then(viewerCount => {
            
        console.log(viewerCount.data)
        return setTimeout(displayViewerCount, 2100)
        
        })
        .catch(err=>console.log(err))
}

function filterIt(arr, searchKey) {
    return arr.filter(obj)
    return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
}
const getAccessToken = async () => {
    const {userId,Authorization } =config;

    
    axios.get(`https://dev-w-xp6bpi.us.auth0.com/api/v2/users/${userId}`,
        {
            headers: {
                "Authorization": Authorization
            }
        })
        .then(async (response) => {
            console.log(response.data)
                                    //Finds the token from facebook
            const { accesstoken } = await filterIt(response.data.identities, 'facebook')
            console.log(accesstoken)
            return accesstoken

        })
        .catch(err=>console.log(err))

}


const createComment =async()=>{

const { videoId,userId,Authorization, message} =config;
//const accessToken = await getAccessToken(); 

const response = await axios.post(`https://graph.facebook.com/v12.0/904637270215758/comments?message=${message}&access_token=EAAOIz8OXxckBAMZC1OqkJb9Wc1qmZA39L1KjG5hQKcWWwDQKGdBoOkyA40gU7GIds2MpmQxeN10hSUuilmkQkP6m5f6YvbJZCjLrUX2Kg9xTLv61ne3yecb7Atq0ZBoUrjPLSlN44lCC0n2O6VQFS39EU3iCLUItUHigSDI8XtwMaYce3BbqfiMjyFlNuW8ZD`)
console.log(response.data)

}

const viewerCountTask =async()=>{

    //const accessToken = await getAccessToken();

    console.log('yay')
    
    
}
//displayViewerCount()
createComment()