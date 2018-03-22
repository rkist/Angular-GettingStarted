using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ProductsAPI.Controllers
{
  [Route("api/[controller]")]
  public class ProductsController : Controller
  {
    private string _filePath = @"./products/products.json";

    public JArray LoadProducts()
    {
      string json;
      using (StreamReader r = new StreamReader(_filePath))
      {
        json = r.ReadToEnd();          
      }

      var jArray = JArray.Parse(json);

      return jArray;
    }

    // GET api/products
    [HttpGet]
    [EnableCors("AllowAllOrigins")]
    public string Get()
    {
      var products = LoadProducts();
      return products.ToString();
    }


    [HttpGet("{id}")]
    [EnableCors("AllowAllOrigins")]
    public string Get(int id)
    {
      var products = LoadProducts();
      foreach (var product in products)
      {
        if (product["productId"].ToString() == id.ToString())
        {
          return product.ToString();
        }
      }
      return "";
    }
  }
}
