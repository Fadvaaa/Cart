const Item=require('../models/Item')

exports.AddingItem = async (req,res)=>{
    res.render('additem')
    
}

exports.CreateItem = async (req,res)=>{
    let{itm,img,dp,dc,sc,pp}=req.body
    
    await Item.create({
        name:itm,
        image:img,
        description:dp,
        discount:dc,
        shippingcharge:sc,
        mrp:pp
    })
    res.redirect('/')
}

exports.ViewItem = async (req,res)=>{
    const items=await Item.find()
    
    res.render('Viewshop',{items})
}

exports.UpdateItem = async (req,res)=>{
    let{itm,img,dp,dc,sc,pp}=req.body
    
    let item = await Item.findOne({name:itm})
    if(!item){
        return res.send('Item not found!')
    }
    item.image=img,
    item.description=dp,
    item.discount=dc,
    item.shippingcharge=sc,
    item.mrp=dc+sc

    await item.save()
    res.redirect('/')
}

exports.ViewUpdates = async (req,res)=>{
    let item = await Item.findOne({name:req.params.item}) 
    if(!item){
        res.send('sorry....!')
    }
    res.render('update',{item})
}

exports.DeleteItem = async (req,res)=>{
    let item = await Item.deleteOne({item:req.params.itm})
    console.log(item)
    res.redirect('/')
}



