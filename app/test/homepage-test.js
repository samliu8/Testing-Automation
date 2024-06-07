import { expect, assert } from "chai";
// import axios, * as others from 'axios';
import https from 'https'
import request from 'supertest'

// # Right now, the login screen is only a UI form that doesn't check if the user is a legitimate user in the database
// let server = request.agent('https://cares-dev.dhs.nj.gov')
// this is unsecure, need to replace with new https.Agent({ ca: MY_CA_BUNDLE });
const httpsAgent = new https.Agent({ rejectUnauthorized: false })

const baseUrl = 'http://localhost:4200'
// describe('Home Page', function () {
//     describe("User - No Permissions", async () => {
//         it("All counties", async () => {
//             try {
//                 let res = await axios.post('https://cares-dev.dhs.nj.gov', { "username": "johndoe" })
//                 console.log(res)
//                 expect(res.username).equal('johndoee')
//             } catch (error) {
//                 throw new Error(error.message)
//             }
//         })
//     })
// })

// function loginUser() {
//     return async function (done) {
//         const res = await request('https://cares-dev.dhs.nj.gov', { httpsAgent })
//             .post('/')
//             .send({ Username: "name", Password: "" })
//             .expect(302)
//             console.log("Is res being sent?", res)
//         return res
//     }
// }