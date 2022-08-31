const api = require('../config/api.json')
const request = require('superagent')
const pet = require('../data/pet.json')

const base_url = api.base_url + api.v3
describe('Pet', () => {

    const updated_pet_name = 'updated_pet_name'

    const status = {
        available: 'available',
        spent: 'sold',
        pending: 'pending',
    }

    const filters = {
        byStatus: '?status=',
        byTags: '?tags='
    }

    it('should create a new pet', async () => {
        const res = await request
            .post(base_url + api.service.pet)
            .send(pet)        
        // Assertions
        expect(res.status).toBe(200)
    })

    it('should update an existent pet', async () => {
        const update_pet = { ...pet, ...{ name: updated_pet_name } }
        const res = await request
            .put(base_url + api.service.pet)
            .send(update_pet)

        // Assertions
        expect(res.status).toBe(200)
        expect(res.body.name).toBe(updated_pet_name)
    })

    it('should get pets filter by status', async () => {
        const filter = filters.byStatus + status.available
        const res = await request
            .get(base_url + api.service.findByStatus + filter)
        
            // Assertions
        expect(res.status).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        res.body.forEach((object) => {
            expect(object.status).toBe(status.available)
        })
    })


    it('should get pets filter by tag', async () => {
        const tag = 'tag1'
        const filter = filters.byTags + tag
        const res = await request
            .get(base_url + api.service.findByTags + filter)

        // Assertions
        expect(res.status).toBe(200)
        expect(Array.isArray(res.body)).toBe(true)
        let flag
        res.body.forEach((element) => {
            flag = element.tags.some(
                e => e.name === tag
            )
        })
        expect(flag).toBe(true)
    })

    it('should get a pets by ID', async () => {
        const id = '10'
        const res = await request
            .get(base_url + api.service.pet + '/' + id)
        
        // Asssertions
        expect(res.status).toBe(200)
        expect(res.body.id.toString()).toBe(id)
    })

    it('should update a pet with the form data (pet store request UI)', async () => {
        const update_pet = { ...pet, ...{ name: "new_updated_pet_name", status: "spent" } }
        const res = await request
            .put(base_url + api.service.pet)
            .send(update_pet)
        
        // Assertions
        expect(res.status).toBe(200)
        expect(res.body.name).toBe('new_updated_pet_name')
        expect(res.body.status).toBe('spent')
    })

})