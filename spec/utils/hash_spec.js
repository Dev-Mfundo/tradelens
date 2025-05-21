const {hashPassword, comparePasswords} = require('../../src/utils/hash.js');

describe("Password Hashing utility",()=>{
	const plainPassword = 'Zingelumkhovu#01';
	let hashedPassword;

	beforeAll(async()=>{
		hashedPassword = await hashPassword(plainPassword)
	})
	it("should hash the 'plain password' and return string", ()=>{
		expect(typeof hashedPassword).toBe('string')
		expect(hashedPassword.length).toBeGreaterThan(50)
	})
	it("should return true when comparing correct password", async()=>{
		const matched = await comparePasswords(plainPassword, hashedPassword)
		expect(matched).toBe(true)
	})
	it("should return false when comparing incorrent password",async()=>{
		const plainPassword1 = 'mkhovetjeni'
		const matched = await comparePasswords(plainPassword1, hashedPassword)
		expect(matched).toBe(false)
	})
})
