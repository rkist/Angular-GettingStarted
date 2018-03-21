using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace ProductsAPI.Controllers
{
  [Route("api/[controller]")]
  public class ProductsController : Controller
  {
    private string _filePath = @"./products/products.json";

    public string LoadProducts()
    {
      string json;
      using (StreamReader r = new StreamReader(_filePath))
      {
        json = r.ReadToEnd();          
      }

      return json;
    }

    // GET api/products
    [HttpGet]
    public string Get()
    {
      var products = LoadProducts();
      return products;
    }
  }
}
