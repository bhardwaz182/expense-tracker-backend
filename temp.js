const temp1 = {
    "num1":{
        "num1":0,
        "num2":0,
        "num3":0,
        "num4":0
    },
    "num2":{
        "num1":0,
        "num2":0,
        "num3":0,
        "num4":0
    },
    "num3":{
        "num1":0,
        "num2":0,
        "num3":0,
        "num4":0
    },
    "num4":{
        "num1":0,
        "num2":0,
        "num3":0,
        "num4":0
    }
};
// const total = 600;
const incl = [
    {
        name:"num1",
        cost:0
    },
    {
        name:"num2",
        cost:100
    },
    {
        name:"num3",
        cost:200
    },
    {
        name:"num4",
        cost:300
    }
];

const incl1 = [
    {
        name:"num1",
        cost:300
    },
    {
        name:"num2",
        cost:200
    },
    {
        name:"num3",
        cost:100
    },
    {
        name:"num4",
        cost:500
    }
];


function expense(total,included){
    const share = total/included.length;
    const afterShare = included.map((item)=>({...item,cost:item.cost-share}));
    // console.log(afterShare);
    afterShare.map((item) => {
        if(item.cost<0){
            afterShare.map((item1) => {
                if(item.name != item1.name && item1.cost>0){
                    if(item1.cost >= -item.cost){
                        item1.cost = item1.cost+item.cost;
                        temp1[item.name][item1.name] += item.cost;
                        temp1[item1.name][item.name] += -item.cost;
                        item.cost=0;
                    }else{
                        item.cost = item1.cost+item.cost;
                        temp1[item.name][item1.name] += -item1.cost;
                        temp1[item1.name][item.name] += item1.cost;
                        item1.cost = 0;
                    }
                }
            });
        }
        // console.log(temp1);
    });
}
expense(600,incl);
expense(1100,incl1);
console.log(temp1);