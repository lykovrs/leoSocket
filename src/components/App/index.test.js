const rewire = require("rewire")
const index = rewire("./index")
const App = index.__get__("App")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new App()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
