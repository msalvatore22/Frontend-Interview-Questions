// Promises are a javascript object that represent the eventual future value of an asynchonous operation

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const p = new Promise((resolve) => {
  resolve('hi')
})

p
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.log("promise additional actions")
  })

async function main(){
 try {
  const result = await p
  console.log(result)
 } catch (err) {
  console.log(err)
 } finally {
  // 
 }
}

main()