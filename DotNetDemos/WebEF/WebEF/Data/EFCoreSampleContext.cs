using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebEF.Domain;

namespace WebEF.Data
{
    public class EFCoreSampleContext : DbContext
    {
        public EFCoreSampleContext(DbContextOptions<EFCoreSampleContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Address> Addresses { get; set; }
    }
}
