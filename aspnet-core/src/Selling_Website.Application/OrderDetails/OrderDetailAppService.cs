using Selling_Website.Entities;
using Selling_Website.OrderDetails.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;

namespace Selling_Website.OrderDetailDetails
{
    public class OrderDetailAppService : BaseAppService<
        OrderDetail, Guid, CreateUpdateOrderDetailDto, GetOrderDetailDto, GetOrderDetailForEditDto, GetOrderDetailForInputDto>
    {
        public OrderDetailAppService(IRepository<OrderDetail, Guid> repository) : base(repository)
        {
        }
        public async Task<List<GetOrderDetailDto>> GetOrderDetailbyOrdername(Guid orderid)
        {
            var list = await GetAll();
            var list1 = list.Where(x => x.OrderId == orderid).ToList();
            return list1;
        }

        public async Task DeleteAll(Guid orderid)
        {
            var list = await GetAll();
            var list1 = list.Where(x => x.OrderId == orderid).Select(x => x.Id).ToList();
            await Repository.DeleteAsync(x => list1.Contains(x.Id));
        }

        public async Task<int> CountProduct(Guid orderId)
        {
            var list = await GetAll();
            if (!list.Any())
            {
                return 0;
            }
            return list.Where(x => x.OrderId == orderId).Count();
        }
    }
}
