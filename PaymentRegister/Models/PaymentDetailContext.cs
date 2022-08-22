using Microsoft.EntityFrameworkCore;

namespace PaymentRegister.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions<PaymentDetailContext> options):base(options)
        {

        }

        public DbSet<PaymentDetail> PaymentDetail { get; set; }
    }
}
