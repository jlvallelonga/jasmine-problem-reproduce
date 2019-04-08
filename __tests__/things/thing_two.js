const util = require('util')

describe('thing two', () => {
  test('test 1', async () => {
    let asyncSetTimeout = util.promisify(setTimeout)
    // let asyncNextTick = util.promisify(process.nextTick)
    await asyncSetTimeout(1)
    // await asyncNextTick()
    expect(true)
  })
})
