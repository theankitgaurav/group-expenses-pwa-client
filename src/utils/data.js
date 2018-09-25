const expenses = [
        {"id":1,"category":"Cumin - Whole","amount":"4.86","details":"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","paidBy":"Fergus","paidOn":"9/3/2017","paidInGroup":"Skinix"},
        {"id":2,"category":"Flour - Fast / Rapid","amount":"4.15","details":"Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.","paidBy":"Anatol","paidOn":"9/9/2017","paidInGroup":"Realcube"},
        {"id":3,"category":"Oil - Truffle, White","amount":"1.23","details":"Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.","paidBy":"Alessandro","paidOn":"5/21/2018","paidInGroup":"Aivee"},
        {"id":4,"category":"Cake - Dulce De Leche","amount":"6.05","details":"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","paidBy":"Eben","paidOn":"6/8/2018","paidInGroup":"Voonder"},
    ]; //shape: [{id, amount, category, details, paidBy, paidOn, paidInGroup}]
const GROUPS_STORAGE_KEY = `GE_Groups_Store`;
const EXPENSES_STORAGE_KEY = `GE_Expense_Store`;
const GLOBAL_STORAGE_KEY = `GE_Global_store`;

module.exports = {
    expenses,
    GROUPS_STORAGE_KEY,
    EXPENSES_STORAGE_KEY,
    GLOBAL_STORAGE_KEY
}