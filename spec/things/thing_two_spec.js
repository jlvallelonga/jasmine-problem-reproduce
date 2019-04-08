const util = require('util')

describe('thing two', () => {
  it('test 1', async () => {
    let asyncSetTimeout = util.promisify(setTimeout)
    // let asyncNextTick = util.promisify(process.nextTick)
    await asyncSetTimeout(1000)
    // await asyncNextTick()
    expect(true)
  })
})
