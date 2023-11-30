using Microsoft.AspNetCore.Mvc;
using ProdutosApiAula.Models;
using ProdutosApiAula.Repositories;

namespace ProdutosApiAula.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProdutoController : Controller
    {
        private List<Produto> produtos = MockDB.GetProdutos();

        [HttpGet(Name = "GetProduto")]
        public IEnumerable<Produto> Get()
        {
            return produtos;
        }

        [HttpGet("{id}")]
        public Produto? GetProduto(int id) => produtos.FirstOrDefault(p => p.Id == id);

        [HttpPost]
        public IActionResult Post([FromBody] Produto produto)
        {
            produtos.Add(produto);
            return CreatedAtRoute("GetProduto", new { id = produto.Id }, produto);
        }


        [HttpPut("{id}")]
        public Produto Put([FromBody] Produto produto, int id)
        {
            Produto produtoAtualizado = produtos.FirstOrDefault(p => p.Id == id);
            produtoAtualizado.Name = produto.Name;
            produtoAtualizado.Price = produto.Price;
            produtoAtualizado.Quantity = produto.Price;
            produtoAtualizado.Id = produto.Id;
            produtoAtualizado.Description = produto.Description;

            return produtoAtualizado;
        }

        [HttpDelete("{id}")]
        public List<Produto> Delete(int id) {
            produtos.Remove(produtos.FirstOrDefault(p => p.Id == id));
            return produtos;
        }
    }
}
