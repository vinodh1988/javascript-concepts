class Benefit{
    constructor(item){
        this.item=item
    }

    show(){
        console.log("item",this.item)
    }

    change(){
       /* valueProvider(function(data){
                this.item=data
        }.bind(this))*/

        valueProvider(data=>this.item=data)


    }
}

function valueProvider(callback){
    callback("L  O N D O N")
}

obj=new Benefit("India")
obj.show()
obj.change()
obj.show()