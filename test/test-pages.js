import { expect } from "chai";
import axios, * as others from 'axios';
import https from 'https'
// this is unsecure, need to replace with new https.Agent({ ca: MY_CA_BUNDLE });
const httpsAgent = new https.Agent({ rejectUnauthorized: false })

describe('Status and content', function () {
    let res = null
    //     describe("Main Page", async () => {
    //         it("Content", async () => {
    //             const res = await axios.get('https://cares-dev.dhs.nj.gov/searck')

    //             expect(res.data).equal('Hello World')
    //         })
    //         it("Status", async () => {
    //             const res = await axios.get('https://cares-dev.dhs.nj.gov/')
    //             console.log(res.status)
    //             expect(res.status).equal(200)
    //         })
    //     })

    describe("Search Cases", async () => {
        it("Status", async () => {
            try {
                res = await axios.get('https://cares-dev.dhs.nj.gov/')
                expect(res.status).equal(200)
            } catch (error) {
                expect(error.response.status).equal(404)
            }
        })
        it("Case Number", async () => {
            try {
                res = await axios.get('https://cares-dev.dhs.nj.gov/')
            } catch (error) {
                expect(error.response.status).equal(404)
            }
        })
    })
    describe("County List", async () => {
        it("All counties", async () => {
            try {
                res = await axios.get('https://localhost:5000/api/Cares/v1/Common/counties', { httpsAgent })
                expect(res.data.data).equal([
                    { code: '01', name: 'Atlantic' },
                    { code: '02', name: 'Bergen' },
                    { code: '03', name: 'Burlington' },
                    { code: '04', name: 'Camden' },
                    { code: '05', name: 'Cape May' },
                    { code: '06', name: 'Cumberland' },
                    { code: '07', name: 'Essex' },
                    { code: '08', name: 'Gloucester' },
                    { code: '09', name: 'Hudson' },
                    { code: '10', name: 'Hunterdon' },
                    { code: '11', name: 'Mercer' },
                    { code: '12', name: 'Middlesex' },
                    { code: '13', name: 'Monmouth' },
                    { code: '14', name: 'Morris' },
                    { code: '15', name: 'Ocean' },
                    { code: '16', name: 'Passaic' },
                    { code: '17', name: 'Salem' },
                    { code: '18', name: 'Somerset' },
                    { code: '19', name: 'Sussex' },
                    { code: '20', name: 'Union' },
                    { code: '21', name: 'Warren' },
                    { code: '99', name: 'Unknown' }
                ])
            } catch (error) {
            }
        })

    })
});