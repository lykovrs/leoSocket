const utils = require("./utils")
// @ponicode
describe("utils.makeid", () => {
    test("0", () => {
        let callFunction = () => {
            utils.makeid(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.makeid(10.23)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.makeid(-1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.makeid(-0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.makeid(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.makeid(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
