using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using API_2.Models;
using System.Web.Http.Cors;


namespace API_2.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]

    public class SummaryController : ApiController
    {
        private ModelDBEntities db = new ModelDBEntities();

        // GET: api/Summary
        public IQueryable<Summary_table_users_tools> GetSummary_table_users_tools()
        {
            return db.Summary_table_users_tools;
        }

        // GET: api/Summary/5
        [ResponseType(typeof(Summary_table_users_tools))]
        public IHttpActionResult GetSummary_table_users_tools(int id)
        {
            Summary_table_users_tools summary_table_users_tools = db.Summary_table_users_tools.Find(id);
            if (summary_table_users_tools == null)
            {
                return NotFound();
            }

            return Ok(summary_table_users_tools);
        }

        // PUT: api/Summary/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSummary_table_users_tools(int id, Summary_table_users_tools summary_table_users_tools)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != summary_table_users_tools.sid)
            {
                return BadRequest();
            }

            db.Entry(summary_table_users_tools).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Summary_table_users_toolsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Summary
        [ResponseType(typeof(Summary_table_users_tools))]
        public IHttpActionResult PostSummary_table_users_tools(Summary_table_users_tools summary_table_users_tools)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                db.Summary_table_users_tools.Add(summary_table_users_tools);
                db.SaveChanges();

                return CreatedAtRoute("DefaultApi", new { id = summary_table_users_tools.sid }, summary_table_users_tools);
            }
            catch (Exception)
            {

                return StatusCode(HttpStatusCode.InternalServerError);
            }   
        }

        // DELETE: api/Summary/5
        [ResponseType(typeof(Summary_table_users_tools))]
        public IHttpActionResult DeleteSummary_table_users_tools(int id)
        {
            Summary_table_users_tools summary_table_users_tools = db.Summary_table_users_tools.Find(id);
            if (summary_table_users_tools == null)
            {
                return NotFound();
            }

            db.Summary_table_users_tools.Remove(summary_table_users_tools);
            db.SaveChanges();

            return Ok(summary_table_users_tools);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Summary_table_users_toolsExists(int id)
        {
            return db.Summary_table_users_tools.Count(e => e.sid == id) > 0;
        }
    }
}