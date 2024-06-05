import { expect, assert } from "chai";
import axios, * as others from 'axios';
import https from 'https'
import { schoolDistricts } from "./Data/school-districts.js";
import { counties } from "./Data/counties.js";
// this is unsecure, need to replace with new https.Agent({ ca: MY_CA_BUNDLE });
const httpsAgent = new https.Agent({ rejectUnauthorized: false })

describe('Dummy Tests', function () {
    let res = null
    describe("Main Page", async () => {
        it("Status", async () => {
            const res = await axios.get('https://cares-dev.dhs.nj.gov/')
            expect(res.status).equal(200)
        })
    })
    it("Insert pending test")
    it("This always fails", async () => {
        try {
            expect(true).to.equal(false)
        } catch (error) {
            throw new Error(error.message)
        }
    })
    describe("Search Cases", async () => {
        it("Status", async () => {
            try {
                res = await axios.get('https://cares-dev.dhs.nj.gov/')
                expect(res.status).equal(200)
            } catch (error) {
                throw new Error(error.message)
            }
        })
        it("Case Number", async () => {
            try {
                res = await axios.get('https://cares-dev.dhs.nj.gov/search')
            } catch (error) {
                throw new Error(error.message)
            }
        })
    })
    describe("County List", async () => {
        context("Basic test cases", () => {
            it("All counties", async () => {
                try {
                    res = await axios.get('https://localhost:5000/api/Cares/v1/Common/counties', { httpsAgent })

                    expect(res.data.data).to.eql(counties)
                } catch (error) {
                    throw new Error(error.message)
                }
            })
            it("Insert pending test")
        })
    })
    describe("School District List", async () => {

        it("All school districts", async () => {
            try {
                res = await axios.get('https://localhost:5000/api/Cares/v1/Common/schoolDistricts', { httpsAgent })

                expect(res.data.data).to.eql(schoolDistricts)
            } catch (error) {
                throw new Error(error.message)
            }
        })

    })
});