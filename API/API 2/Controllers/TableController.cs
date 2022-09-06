using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using API_2.Models;

namespace API_2.Controllers
{
    [EnableCors(origins: "http://localhost:3000",headers:"*",methods:"*")]
    public class TableController : ApiController
    {
        public IHttpActionResult getjointables()
        {
            ModelDBEntities entities = new ModelDBEntities();
            IList<JoinTables> tables = entities.JoinTables().Select(x => new JoinTables()
            {
                FIO = x.FIO,
                name = x.name,
                countTols = x.countTols,
                id = x.id,
                sid = x.sid
            }).ToList();
            return Ok(tables);
        }

    }
}
