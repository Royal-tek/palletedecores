const Category = require("../models/categoryModel")

exports.createCategory = async(req, res)=>{
    const {name} = req.body
    try {
        const checkName = await Category.findOne({name})
        if(checkName) return res.status(400).json({error: "Category name already taken"})
        const addCat = new Category({
            name: name
        })
        await addCat.save()
        res.status(200).json(addCat)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.getCategories = async(req, res)=>{
    try {
        const allCats = await Category.find()
        res.status(200).json(allCats)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteCategory = async(req, res)=>{
    const {catId} = req.params
    try {
        const deleteCat = await Category.findByIdAndDelete(catId)
        if(!deleteCat) return res.status(400).json({error: "Invalid Product Id"})
        res.status(200).json({message: "Category deleted successfully"})
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.editCategory = async (req, res) => {
    const { catId } = req.params;
    const updateFields = req.body;
  
    try {
      const updatedCat = await Category.findByIdAndUpdate(catId, updateFields, {
        new: true,
      });
  
      if (!updatedCat) {
        return res.status(400).json({ error: "Invalid Category Id" });
      }
  
      res.status(200).json(updatedCat);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  