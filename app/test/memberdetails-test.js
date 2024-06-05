import { expect, assert } from "chai";
import axios, * as others from 'axios';
import https from 'https'
// this is unsecure, need to replace with new https.Agent({ ca: MY_CA_BUNDLE });
const httpsAgent = new https.Agent({ rejectUnauthorized: false })

// describe('Member Details', function () {
//     const applicant = [
//         { firstName: "12346asdf" },
//     ];
//     describe("Search", async () => {
//         try {
//             it("Search by CaseId", async () => {
//                 const res = await axios.get('https://localhost:7203/api/Cares/v1/MemberDetails/1341318', { httpsAgent })
//                 expect(res.data.data.applicant.lastName).equal('WILLIAMS')
//             })
//         } catch (error) {
//             throw new Error(error)
//         }
//     })
//     describe("Form UI", async () => {
//         try {
//             it("Valid First Name", async () => {
//                 const res = await axios.get('https://localhost:7203/api/Cares/v1/MemberDetails/1341318', { httpsAgent })
//                 expect(res.data.data.applicant.lastName).equal('WILLIAMS')
//             })
//         } catch (error) {
//             throw new Error(error)
//         }
//     })
// })