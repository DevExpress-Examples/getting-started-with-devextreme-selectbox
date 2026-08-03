using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ASP_NET_Core.Models;
static class SelectBoxData {
    public static List<SelectBoxItem> SelectBoxItems = [
        new SelectBoxItem {
            ID = 1,
            Name = "Banana",
            Category = "Fruits",
        },
        new SelectBoxItem {
            ID = 2,
            Name = "Cucumber",
            Category = "Vegetables",
        },
        new SelectBoxItem {
            ID = 3,
            Name = "Apple",
            Category = "Fruits",
        },
        new SelectBoxItem {
            ID = 4,
            Name = "Tomato",
            Category = "Vegetables",
        },
        new SelectBoxItem {
            ID = 5,
            Name = "Apricot",
            Category = "Fruits",
        },
    ];

}
