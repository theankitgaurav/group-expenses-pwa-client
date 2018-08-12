const expenses = [
        {"id":1,"category":"Cumin - Whole","amount":"4.86","details":"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.","paidBy":"Fergus","paidOn":"9/3/2017","paidInGroup":"Skinix"},
        {"id":2,"category":"Flour - Fast / Rapid","amount":"4.15","details":"Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.","paidBy":"Anatol","paidOn":"9/9/2017","paidInGroup":"Realcube"},
        {"id":3,"category":"Oil - Truffle, White","amount":"1.23","details":"Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.","paidBy":"Alessandro","paidOn":"5/21/2018","paidInGroup":"Aivee"},
        {"id":4,"category":"Cake - Dulce De Leche","amount":"6.05","details":"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.","paidBy":"Eben","paidOn":"6/8/2018","paidInGroup":"Voonder"},
        {"id":5,"category":"Marjoram - Fresh","amount":"1.97","details":"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","paidBy":"Edward","paidOn":"8/18/2017","paidInGroup":"Browsetype"},
        {"id":6,"category":"Cabbage Roll","amount":"8.43","details":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","paidBy":"Falito","paidOn":"7/4/2018","paidInGroup":"Zoomdog"},
        {"id":7,"category":"Wooden Mop Handle","amount":"7.85","details":"Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.","paidBy":"Wylie","paidOn":"10/21/2017","paidInGroup":"Tagcat"},
        {"id":8,"category":"Cumin - Whole","amount":"7.39","details":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.","paidBy":"Dev","paidOn":"8/18/2017","paidInGroup":"Blogspan"},
        {"id":9,"category":"Juice - Ocean Spray Cranberry","amount":"0.86","details":"In eleifend quam a odio. In hac habitasse platea dictumst.","paidBy":"Ky","paidOn":"4/23/2018","paidInGroup":"Brainverse"},
        {"id":10,"category":"Beer - Tetleys","amount":"8.36","details":"Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.","paidBy":"Gray","paidOn":"1/7/2018","paidInGroup":"Zoomlounge"}
    ];
const GROUPS_STORAGE_KEY = `GE_Groups_Store`;
const EXPENSES_STORAGE_KEY = `GE_Expense_Store`;
const GLOBAL_STORAGE_KEY = `GE_Global_store`;

module.exports = {
    expenses,
    GROUPS_STORAGE_KEY,
    EXPENSES_STORAGE_KEY,
    GLOBAL_STORAGE_KEY
}

//shape: [{id, amount, category, details, paidBy, paidOn, paidInGroupName}]