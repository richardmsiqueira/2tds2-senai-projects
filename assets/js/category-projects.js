//categoria possui varios produtos => 1:N
class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.products = [];
    }
}

//produto pertence a uma categoria => 1:1
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name; 
        this.price = price;
        this.category = category;
    }
}

class CategoryService {
    constructor() {
        this.categories = [];
        this.nextCategoryId = 1;
    } 

    addCategory(name) {
        const id = this.nextCategoryId++;
        const category = new Category(id, name);
        this.categories.push(category)
    }
}

const categoryList = new CategoryService();

function createCategory() {
    const categoryName = "Doce";

    categoryList.addCategory(categoryName);
    
    console.log(categoryList.categories);
}
