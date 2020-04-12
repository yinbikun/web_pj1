/*实现二级联动效果*/
data = {"China":["shanghai","beijing","chengdu","tianjin"],
    "Japan":["Tokyo","Osaka","Kamakura"],
    "America":["New York","San Francisco","Washington"],
    "Italian":["Roma","Milan","Florence"]};
var pro  = document.getElementById("");
var city = document.getElementById("city");


for (var i in data){
    var option_pro = document.createElement("option");
    option_pro.innerHTML=i;
    pro.appendChild(option_pro);
}



function func1(self){
    //console.log((self.options[self.selectedIndex]).innerHTML);
    var choice = (self.options[self.selectedIndex]).innerHTML;

    city.options.length=0;

    for (var i in data[choice]){
        var option_city = document.createElement("option");
        option_city.innerHTML = data[choice][i];
        city.appendChild(option_city);
    }
}