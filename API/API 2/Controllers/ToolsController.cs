using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using API_2.Models;
using System.Web.Http.Cors;

namespace API_2.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

    public class ToolsController : ApiController
    {

        public IHttpActionResult getTools()
        {
            ModelDBEntities entities = new ModelDBEntities();
            IList<ToolsClass> tools = entities.ToolsQuery().Select(x => new ToolsClass()
            {
                id = x.id,
                name = x.name
            }).ToList();
            return Ok(tools);
        }
    }
}
