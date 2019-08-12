using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebEF.Data;
using WebEF.Domain;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebEF.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private EFCoreSampleContext _dbContext;

        public UsersController(EFCoreSampleContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {
            return _dbContext.Users.ToList();
        }
    }
}
