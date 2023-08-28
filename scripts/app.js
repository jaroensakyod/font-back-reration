const fetchProducts = async () => {
          try{
                    const {data} = await axios.get('https://aapciproducy-a9b38f3e6749.herokuapp.com/product')
                    addProductToTable(data.data)
                    
          } catch(error) {
                    console.error(`[Error Fetching Product]: ${error.message}`)

          }

          

}

const main = async () => {
          await fetchProducts()
}

const addProductToTable = (products) => {
          const productsTable = document.getElementById(`products-table`)

          let bodyHtml = `
          <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
          </tr>
          `

          products.forEach((product) => {
                    bodyHtml += `
                    <tr>
                              <td>${product._id}</td>
                              <td>${product.name}</td>
                              <td>${product.price}</td>
                    </tr>
                    `
          })

          productsTable.innerHTML = bodyHtml
}

const createButton = document.getElementById(`create-button`)

createButton.addEventListener(`click`, async() =>{
          const nameElement = document.getElementById(`create-title`)
          const priceElement = document.getElementById(`create-price`)
          
          const name =nameElement.value
          const price = +priceElement.value

          if (!name || !price) {
                    return
          }

          try{
                    const {data} = await axios.post('https://aapciproducy-a9b38f3e6749.herokuapp.com/product', {name, price})
                    if (data.success){
                              await fetchProducts()
                    }
          } catch(error){
                    console.error(`[Error Fetching Product]: ${error.message}`)
          }

          
})
main()