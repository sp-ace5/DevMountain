 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

//test is a function that is available globally through Jest, it takes two arguments a desc followed by a callback function
test('should always run',() => {
  //a test is not a test if there isn't an expect in it.
  //we use expect and a matcher to verify if our output is correct.
  expect(2).toBe(2)
  // expect(5).toEqual(6)
})

it('first name should be Patten', () => {
  expect(testData.firstName).toBe('Patten')
})

//describe-block will let us run individual tests but as a suite which provides better reporting
describe('formatTitle tests',() => {
  //testing to see if the function returns a string, testing for type.
  test('formatTitle should return a string', () => {
    let formattedTitle = formatTitle(testData.title)
    expect(typeof formattedTitle).toBe('string')
  })

  test('formatTitle should format the title correctly', () => {
    // let formattedTitle = formatTitle(testData.title)
    // expect(formattedTitle).toBe('Nulla Ac')
    expect(formatTitle(testData.title)).toBe('Nulla Ac')
  })

})

describe('shortenBio tests', () => {
  //testing using length
  test('shortenBio should shorten the bio string',() => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio.length).toBeLessThan(testData.bio.length)
  })
  //testing using content
  test('shortenBio should add periods to the end of string', () => {
    let shortBio = shortenBio(testData.bio)
    expect(shortBio).toContain('...')
  })

})

describe('convertLength tests',() => {
  //test lengths
  test('convertLength should return an array with array with length 2',() => {
    let result = convertLength(testData.length)
    expect(result).toHaveLength(2)
  })

  test('convertLength can handle numbers below 60', () => {
    let result = convertLength(30)
    expect(result[1]).toEqual(30)
  })
})

 //difference between toEqual and toBe

 describe('difference between toEqual and toBe', () => {
  //only value check not strict at all
   test('toBe vs toEqual', () => {
     const myObj = {myNum:5}
     const myObjTwo = {myNum:5}
     expect(myObj).toEqual(myObjTwo)
   })
   //toBe is strict equality:for primitive values its fine, but for non-primitive types, to be will also check the reference/location
   test('toBe vs toEqual',() => {
     const myObj = {myNum:5}
     // const myObjTwo = myObj
     const myObjTwo = {myNum:5}
     // console.log(myObjTwo)
     // myObj.myNum = 6
     // console.log(myObjTwo)
     expect(myObj).toBe(myObjTwo)
   })
 })






