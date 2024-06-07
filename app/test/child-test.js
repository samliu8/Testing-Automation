import { expect, assert } from "chai";
// import axios, * as others from 'axios';
import https from 'https'
import request from 'supertest'
// this is unsecure, need to replace with new https.Agent({ ca: MY_CA_BUNDLE });
const httpsAgent = new https.Agent({ rejectUnauthorized: false })

// describe('Child Screen', function () {
    // const children = [
    //     { caseId: 1341318 },
    // ];
    // describe("GET by caseid /", async () => {
    //     try {
    //         it("Search by CaseId", async () => {
    //             const res = await axios.get('https://localhost:7203/api/Cares/v1/Child/1341318', { httpsAgent })
    //             expect(res.data.data.children[0].lastName).equal('WILLIAMS')
    //         })
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // })
    // describe("PUT /child", async () => {
    //     try {
    //         it("Add Child", async () => {
    //             await axios.get('https://localhost:7203/api/Cares/v1/Child/1341318', { httpsAgent }).then((res) => {
    //                 let user = res.data
    //             })
    //             axios.put('https://localhost:7203/api/Cares/v1/Child/1341318', {
    //                 user.data.children[0].lastname: 'Willams'
    //                 })
    //         })
    //     } catch (error) {
    //         throw new Error(error)
    //     }
    // })
// })